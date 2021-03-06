import { __assign } from "tslib";
import { safeInsert } from 'prosemirror-utils';
import { Fragment, Slice } from 'prosemirror-model';
import { pluginKey } from './pm-plugins/main';
import { TextSelection } from 'prosemirror-state';
import { mapChildren, flatmap } from '../../utils/slice';
import { isEmptyDocument, getStepRange } from '../../utils';
import { addAnalytics, ACTION, ACTION_SUBJECT, EVENT_TYPE, withAnalytics, ACTION_SUBJECT_ID, } from '../analytics';
import { LAYOUT_TYPE } from '../analytics/types/node-events';
export var TWO_COL_LAYOUTS = [
    'two_equal',
    'two_left_sidebar',
    'two_right_sidebar',
];
export var THREE_COL_LAYOUTS = [
    'three_equal',
    'three_with_sidebars',
];
var getWidthsForPreset = function (presetLayout) {
    switch (presetLayout) {
        case 'two_equal':
            return [50, 50];
        case 'three_equal':
            return [33.33, 33.33, 33.33];
        case 'two_left_sidebar':
            return [33.33, 66.66];
        case 'two_right_sidebar':
            return [66.66, 33.33];
        case 'three_with_sidebars':
            return [25, 50, 25];
    }
};
/**
 * Finds layout preset based on the width attrs of all the layoutColumn nodes
 * inside the layoutSection node
 */
export var getPresetLayout = function (section) {
    var widths = mapChildren(section, function (column) { return column.attrs.width; }).join(',');
    switch (widths) {
        case '33.33,33.33,33.33':
            return 'three_equal';
        case '25,50,25':
            return 'three_with_sidebars';
        case '50,50':
            return 'two_equal';
        case '33.33,66.66':
            return 'two_left_sidebar';
        case '66.66,33.33':
            return 'two_right_sidebar';
    }
    return;
};
export var getSelectedLayout = function (maybeLayoutSection, current) {
    if (maybeLayoutSection && getPresetLayout(maybeLayoutSection)) {
        return getPresetLayout(maybeLayoutSection) || current;
    }
    return current;
};
export var createDefaultLayoutSection = function (state) {
    var _a = state.schema.nodes, layoutSection = _a.layoutSection, layoutColumn = _a.layoutColumn;
    // create a 50-50 layout by default
    var columns = Fragment.fromArray([
        layoutColumn.createAndFill({ width: 50 }),
        layoutColumn.createAndFill({ width: 50 }),
    ]);
    return layoutSection.createAndFill(undefined, columns);
};
export var insertLayoutColumns = function (state, dispatch) {
    if (dispatch) {
        dispatch(safeInsert(createDefaultLayoutSection(state))(state.tr));
    }
    return true;
};
export var insertLayoutColumnsWithAnalytics = function (inputMethod) {
    return withAnalytics({
        action: ACTION.INSERTED,
        actionSubject: ACTION_SUBJECT.DOCUMENT,
        actionSubjectId: ACTION_SUBJECT_ID.LAYOUT,
        attributes: {
            inputMethod: inputMethod,
        },
        eventType: EVENT_TYPE.TRACK,
    })(insertLayoutColumns);
};
/**
 * Handles switching from 2 -> 3 cols, or 3 -> 2 cols
 * Switching from 2 -> 3 just adds a new one at the end
 * Switching from 3 -> 2 moves all the content of the third col inside the second before
 * removing it
 */
function forceColumnStructure(state, node, pos, presetLayout) {
    var tr = state.tr;
    var insideRightEdgeOfLayoutSection = pos + node.nodeSize - 1;
    var numCols = node.childCount;
    if (TWO_COL_LAYOUTS.indexOf(presetLayout) >= 0 && numCols === 3) {
        var thirdColumn = node.content.child(2);
        var thirdColumnPos = insideRightEdgeOfLayoutSection - thirdColumn.nodeSize;
        if (isEmptyDocument(thirdColumn)) {
            tr.replaceRange(
            // end pos of second column
            tr.mapping.map(thirdColumnPos - 1), tr.mapping.map(insideRightEdgeOfLayoutSection), Slice.empty);
        }
        else {
            tr.replaceRange(
            // end pos of second column
            tr.mapping.map(thirdColumnPos - 1), 
            // start pos of third column
            tr.mapping.map(thirdColumnPos + 1), Slice.empty);
        }
    }
    else if (THREE_COL_LAYOUTS.indexOf(presetLayout) >= 0 && numCols === 2) {
        tr.replaceWith(tr.mapping.map(insideRightEdgeOfLayoutSection), tr.mapping.map(insideRightEdgeOfLayoutSection), state.schema.nodes.layoutColumn.createAndFill());
    }
    return tr;
}
function columnWidth(node, schema, widths) {
    var layoutColumn = schema.nodes.layoutColumn;
    var truncatedWidths = widths.map(function (w) { return Number(w.toFixed(2)); });
    return flatmap(node.content, function (column, idx) {
        return layoutColumn.create(__assign(__assign({}, column.attrs), { width: truncatedWidths[idx] }), column.content, column.marks);
    });
}
function forceColumnWidths(state, tr, pos, presetLayout) {
    var node = tr.doc.nodeAt(pos);
    if (!node) {
        return tr;
    }
    return tr.replaceWith(pos + 1, pos + node.nodeSize - 1, columnWidth(node, state.schema, getWidthsForPreset(presetLayout)));
}
export function forceSectionToPresetLayout(state, node, pos, presetLayout) {
    var tr = forceColumnStructure(state, node, pos, presetLayout);
    // save the selection here, since forcing column widths causes a change over the
    // entire layoutSection, which remaps selection to the end. not remapping here
    // is safe because the structure is no longer changing.
    var selection = tr.selection;
    tr = forceColumnWidths(state, tr, pos, presetLayout);
    return tr.setSelection(new TextSelection(tr.doc.resolve(selection.$from.pos)));
}
export var setPresetLayout = function (layout) { return function (state, dispatch) {
    var _a = pluginKey.getState(state), pos = _a.pos, selectedLayout = _a.selectedLayout;
    if (selectedLayout === layout || pos === null) {
        return false;
    }
    var node = state.doc.nodeAt(pos);
    if (!node) {
        return false;
    }
    var tr = forceSectionToPresetLayout(state, node, pos, layout);
    if (tr) {
        tr = addAnalytics(state, tr, {
            action: ACTION.CHANGED_LAYOUT,
            actionSubject: ACTION_SUBJECT.LAYOUT,
            attributes: {
                previousLayout: formatLayoutName(selectedLayout),
                newLayout: formatLayoutName(layout),
            },
            eventType: EVENT_TYPE.TRACK,
        });
        if (dispatch) {
            dispatch(tr.scrollIntoView());
        }
        return true;
    }
    return false;
}; };
export var fixColumnSizes = function (changedTr, state) {
    var layoutSection = state.schema.nodes.layoutSection;
    var change;
    var range = getStepRange(changedTr);
    if (!range) {
        return undefined;
    }
    changedTr.doc.nodesBetween(range.from, range.to, function (node, pos) {
        if (node.type === layoutSection) {
            if (getPresetLayout(node)) {
                return false;
            }
            var presetLayout = node.childCount === 2 ? 'two_equal' : 'three_equal';
            var fixedColumns = columnWidth(node, state.schema, getWidthsForPreset(presetLayout));
            change = {
                from: pos + 1,
                to: pos + node.nodeSize - 1,
                slice: new Slice(fixedColumns, 0, 0),
            };
            return false;
        }
        else {
            return true;
        }
    });
    return change;
};
export var fixColumnStructure = function (state) {
    var _a = pluginKey.getState(state), pos = _a.pos, selectedLayout = _a.selectedLayout;
    if (pos !== null && selectedLayout) {
        var node = state.doc.nodeAt(pos);
        if (node && node.childCount !== getWidthsForPreset(selectedLayout).length) {
            return forceSectionToPresetLayout(state, node, pos, selectedLayout);
        }
    }
    return;
};
export var deleteActiveLayoutNode = function (state, dispatch) {
    var _a = pluginKey.getState(state), pos = _a.pos, selectedLayout = _a.selectedLayout;
    if (pos !== null) {
        var node = state.doc.nodeAt(pos);
        if (dispatch) {
            var tr = state.tr.delete(pos, pos + node.nodeSize);
            tr = addAnalytics(state, tr, {
                action: ACTION.DELETED,
                actionSubject: ACTION_SUBJECT.LAYOUT,
                attributes: { layout: formatLayoutName(selectedLayout) },
                eventType: EVENT_TYPE.TRACK,
            });
            dispatch(tr);
        }
        return true;
    }
    return false;
};
var formatLayoutName = function (layout) {
    switch (layout) {
        case 'two_equal':
            return LAYOUT_TYPE.TWO_COLS_EQUAL;
        case 'three_equal':
            return LAYOUT_TYPE.THREE_COLS_EQUAL;
        case 'two_left_sidebar':
            return LAYOUT_TYPE.LEFT_SIDEBAR;
        case 'two_right_sidebar':
            return LAYOUT_TYPE.RIGHT_SIDEBAR;
        case 'three_with_sidebars':
            return LAYOUT_TYPE.THREE_WITH_SIDEBARS;
    }
};
//# sourceMappingURL=actions.js.map