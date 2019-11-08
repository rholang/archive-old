"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prosemirror_utils_1 = require("prosemirror-utils");
var prosemirror_model_1 = require("prosemirror-model");
var main_1 = require("./pm-plugins/main");
var prosemirror_state_1 = require("prosemirror-state");
var slice_1 = require("../../utils/slice");
var utils_1 = require("../../utils");
var analytics_1 = require("../analytics");
var node_events_1 = require("../analytics/types/node-events");
exports.TWO_COL_LAYOUTS = [
    'two_equal',
    'two_left_sidebar',
    'two_right_sidebar',
];
exports.THREE_COL_LAYOUTS = [
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
exports.getPresetLayout = function (section) {
    var widths = slice_1.mapChildren(section, function (column) { return column.attrs.width; }).join(',');
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
exports.getSelectedLayout = function (maybeLayoutSection, current) {
    if (maybeLayoutSection && exports.getPresetLayout(maybeLayoutSection)) {
        return exports.getPresetLayout(maybeLayoutSection) || current;
    }
    return current;
};
exports.createDefaultLayoutSection = function (state) {
    var _a = state.schema.nodes, layoutSection = _a.layoutSection, layoutColumn = _a.layoutColumn;
    // create a 50-50 layout by default
    var columns = prosemirror_model_1.Fragment.fromArray([
        layoutColumn.createAndFill({ width: 50 }),
        layoutColumn.createAndFill({ width: 50 }),
    ]);
    return layoutSection.createAndFill(undefined, columns);
};
exports.insertLayoutColumns = function (state, dispatch) {
    if (dispatch) {
        dispatch(prosemirror_utils_1.safeInsert(exports.createDefaultLayoutSection(state))(state.tr));
    }
    return true;
};
exports.insertLayoutColumnsWithAnalytics = function (inputMethod) {
    return analytics_1.withAnalytics({
        action: analytics_1.ACTION.INSERTED,
        actionSubject: analytics_1.ACTION_SUBJECT.DOCUMENT,
        actionSubjectId: analytics_1.ACTION_SUBJECT_ID.LAYOUT,
        attributes: {
            inputMethod: inputMethod,
        },
        eventType: analytics_1.EVENT_TYPE.TRACK,
    })(exports.insertLayoutColumns);
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
    if (exports.TWO_COL_LAYOUTS.indexOf(presetLayout) >= 0 && numCols === 3) {
        var thirdColumn = node.content.child(2);
        var thirdColumnPos = insideRightEdgeOfLayoutSection - thirdColumn.nodeSize;
        if (utils_1.isEmptyDocument(thirdColumn)) {
            tr.replaceRange(
            // end pos of second column
            tr.mapping.map(thirdColumnPos - 1), tr.mapping.map(insideRightEdgeOfLayoutSection), prosemirror_model_1.Slice.empty);
        }
        else {
            tr.replaceRange(
            // end pos of second column
            tr.mapping.map(thirdColumnPos - 1), 
            // start pos of third column
            tr.mapping.map(thirdColumnPos + 1), prosemirror_model_1.Slice.empty);
        }
    }
    else if (exports.THREE_COL_LAYOUTS.indexOf(presetLayout) >= 0 && numCols === 2) {
        tr.replaceWith(tr.mapping.map(insideRightEdgeOfLayoutSection), tr.mapping.map(insideRightEdgeOfLayoutSection), state.schema.nodes.layoutColumn.createAndFill());
    }
    return tr;
}
function columnWidth(node, schema, widths) {
    var layoutColumn = schema.nodes.layoutColumn;
    var truncatedWidths = widths.map(function (w) { return Number(w.toFixed(2)); });
    return slice_1.flatmap(node.content, function (column, idx) {
        return layoutColumn.create(tslib_1.__assign(tslib_1.__assign({}, column.attrs), { width: truncatedWidths[idx] }), column.content, column.marks);
    });
}
function forceColumnWidths(state, tr, pos, presetLayout) {
    var node = tr.doc.nodeAt(pos);
    if (!node) {
        return tr;
    }
    return tr.replaceWith(pos + 1, pos + node.nodeSize - 1, columnWidth(node, state.schema, getWidthsForPreset(presetLayout)));
}
function forceSectionToPresetLayout(state, node, pos, presetLayout) {
    var tr = forceColumnStructure(state, node, pos, presetLayout);
    // save the selection here, since forcing column widths causes a change over the
    // entire layoutSection, which remaps selection to the end. not remapping here
    // is safe because the structure is no longer changing.
    var selection = tr.selection;
    tr = forceColumnWidths(state, tr, pos, presetLayout);
    return tr.setSelection(new prosemirror_state_1.TextSelection(tr.doc.resolve(selection.$from.pos)));
}
exports.forceSectionToPresetLayout = forceSectionToPresetLayout;
exports.setPresetLayout = function (layout) { return function (state, dispatch) {
    var _a = main_1.pluginKey.getState(state), pos = _a.pos, selectedLayout = _a.selectedLayout;
    if (selectedLayout === layout || pos === null) {
        return false;
    }
    var node = state.doc.nodeAt(pos);
    if (!node) {
        return false;
    }
    var tr = forceSectionToPresetLayout(state, node, pos, layout);
    if (tr) {
        tr = analytics_1.addAnalytics(state, tr, {
            action: analytics_1.ACTION.CHANGED_LAYOUT,
            actionSubject: analytics_1.ACTION_SUBJECT.LAYOUT,
            attributes: {
                previousLayout: formatLayoutName(selectedLayout),
                newLayout: formatLayoutName(layout),
            },
            eventType: analytics_1.EVENT_TYPE.TRACK,
        });
        if (dispatch) {
            dispatch(tr.scrollIntoView());
        }
        return true;
    }
    return false;
}; };
exports.fixColumnSizes = function (changedTr, state) {
    var layoutSection = state.schema.nodes.layoutSection;
    var change;
    var range = utils_1.getStepRange(changedTr);
    if (!range) {
        return undefined;
    }
    changedTr.doc.nodesBetween(range.from, range.to, function (node, pos) {
        if (node.type === layoutSection) {
            if (exports.getPresetLayout(node)) {
                return false;
            }
            var presetLayout = node.childCount === 2 ? 'two_equal' : 'three_equal';
            var fixedColumns = columnWidth(node, state.schema, getWidthsForPreset(presetLayout));
            change = {
                from: pos + 1,
                to: pos + node.nodeSize - 1,
                slice: new prosemirror_model_1.Slice(fixedColumns, 0, 0),
            };
            return false;
        }
        else {
            return true;
        }
    });
    return change;
};
exports.fixColumnStructure = function (state) {
    var _a = main_1.pluginKey.getState(state), pos = _a.pos, selectedLayout = _a.selectedLayout;
    if (pos !== null && selectedLayout) {
        var node = state.doc.nodeAt(pos);
        if (node && node.childCount !== getWidthsForPreset(selectedLayout).length) {
            return forceSectionToPresetLayout(state, node, pos, selectedLayout);
        }
    }
    return;
};
exports.deleteActiveLayoutNode = function (state, dispatch) {
    var _a = main_1.pluginKey.getState(state), pos = _a.pos, selectedLayout = _a.selectedLayout;
    if (pos !== null) {
        var node = state.doc.nodeAt(pos);
        if (dispatch) {
            var tr = state.tr.delete(pos, pos + node.nodeSize);
            tr = analytics_1.addAnalytics(state, tr, {
                action: analytics_1.ACTION.DELETED,
                actionSubject: analytics_1.ACTION_SUBJECT.LAYOUT,
                attributes: { layout: formatLayoutName(selectedLayout) },
                eventType: analytics_1.EVENT_TYPE.TRACK,
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
            return node_events_1.LAYOUT_TYPE.TWO_COLS_EQUAL;
        case 'three_equal':
            return node_events_1.LAYOUT_TYPE.THREE_COLS_EQUAL;
        case 'two_left_sidebar':
            return node_events_1.LAYOUT_TYPE.LEFT_SIDEBAR;
        case 'two_right_sidebar':
            return node_events_1.LAYOUT_TYPE.RIGHT_SIDEBAR;
        case 'three_with_sidebars':
            return node_events_1.LAYOUT_TYPE.THREE_WITH_SIDEBARS;
    }
};
//# sourceMappingURL=actions.js.map