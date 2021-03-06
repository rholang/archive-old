import { __assign } from "tslib";
import { Plugin, PluginKey } from 'prosemirror-state';
import { findParentDomRefOfType, findParentNodeOfType, findTable, } from 'prosemirror-utils';
import { DecorationSet } from 'prosemirror-view';
import { browser } from '@atlaskit/editor-common';
import { pluginFactory } from '../../../utils/plugin-state-factory';
import { createTableView } from '../nodeviews/table';
import { setTableRef, clearHoverSelection, addBoldInEmptyHeaderCells, } from '../commands';
import { handleDocOrSelectionChanged } from '../handlers';
import { handleMouseOver, handleMouseLeave, handleMouseMove, handleBlur, handleFocus, handleClick, handleTripleClick, handleCut, handleMouseOut, handleMouseDown, whenTableInFocus, } from '../event-handlers';
import { findControlsHoverDecoration, updateResizeHandles } from '../utils';
import { fixTables } from '../transforms';
import { TableCssClassName as ClassName } from '../types';
import reducer from '../reducer';
export var pluginKey = new PluginKey('tablePlugin');
export var defaultTableSelection = {
    hoveredColumns: [],
    hoveredRows: [],
    isInDanger: false,
};
var isBreakoutEnabled;
var isDynamicTextSizingEnabled;
var isFullWidthModeEnabled;
var wasFullWidthModeEnabled;
var _a = pluginFactory(pluginKey, reducer, {
    mapping: function (tr, pluginState) {
        if (tr.docChanged && pluginState.targetCellPosition) {
            var _a = tr.mapping.mapResult(pluginState.targetCellPosition), pos = _a.pos, deleted = _a.deleted;
            return __assign(__assign({}, pluginState), { targetCellPosition: deleted ? undefined : pos });
        }
        return pluginState;
    },
    onDocChanged: handleDocOrSelectionChanged,
    onSelectionChanged: handleDocOrSelectionChanged,
}), createPluginState = _a.createPluginState, createCommand = _a.createCommand, getPluginState = _a.getPluginState;
export var createPlugin = function (dispatch, portalProviderAPI, pluginConfig, dynamicTextSizing, breakoutEnabled, fullWidthModeEnabled, previousFullWidthModeEnabled) {
    isBreakoutEnabled = breakoutEnabled;
    isDynamicTextSizingEnabled = dynamicTextSizing;
    isFullWidthModeEnabled = fullWidthModeEnabled;
    wasFullWidthModeEnabled = previousFullWidthModeEnabled;
    var state = createPluginState(dispatch, __assign({ pluginConfig: pluginConfig, insertColumnButtonIndex: undefined, insertRowButtonIndex: undefined, decorationSet: DecorationSet.empty, isFullWidthModeEnabled: isFullWidthModeEnabled, isHeaderRowEnabled: !!pluginConfig.allowHeaderRow, isHeaderColumnEnabled: false }, defaultTableSelection));
    return new Plugin({
        state: state,
        key: pluginKey,
        appendTransaction: function (transactions, oldState, newState) {
            var tr = transactions.find(function (tr) { return tr.getMeta('uiEvent') === 'cut'; });
            if (tr) {
                // "fixTables" removes empty rows as we don't allow that in schema
                var updatedTr = handleCut(tr, oldState, newState);
                return fixTables(updatedTr) || updatedTr;
            }
            if (transactions.find(function (tr) { return tr.docChanged; })) {
                return fixTables(newState.tr);
            }
        },
        view: function (editorView) {
            var domAtPos = editorView.domAtPos.bind(editorView);
            return {
                update: function (view) {
                    var state = view.state, dispatch = view.dispatch;
                    var selection = state.selection;
                    var pluginState = getPluginState(state);
                    var tableRef;
                    var tableNode;
                    if (pluginState.editorHasFocus) {
                        var parent_1 = findParentDomRefOfType(state.schema.nodes.table, domAtPos)(selection);
                        if (parent_1) {
                            tableRef = parent_1.querySelector('table');
                        }
                        tableNode = findTable(state.selection);
                    }
                    if (pluginState.tableRef !== tableRef) {
                        setTableRef(tableRef)(state, dispatch);
                    }
                    if (pluginState.tableNode !== tableNode) {
                        updateResizeHandles(tableRef);
                    }
                    if (pluginState.editorHasFocus && pluginState.tableRef) {
                        var tableCellHeader = findParentNodeOfType(state.schema.nodes.tableHeader)(state.selection);
                        if (tableCellHeader) {
                            addBoldInEmptyHeaderCells(tableCellHeader)(state, dispatch);
                        }
                    }
                },
            };
        },
        props: {
            decorations: function (state) { return getPluginState(state).decorationSet; },
            handleClick: function (_a, _pos, event) {
                var state = _a.state, dispatch = _a.dispatch;
                var decorationSet = getPluginState(state).decorationSet;
                if (findControlsHoverDecoration(decorationSet).length) {
                    clearHoverSelection()(state, dispatch);
                }
                // ED-6069: workaround for Chrome given a regression introduced in prosemirror-view@1.6.8
                // Returning true prevents that updateSelection() is getting called in the commit below:
                // @see https://github.com/ProseMirror/prosemirror-view/commit/33fe4a8b01584f6b4103c279033dcd33e8047b95
                if (browser.chrome && event.target) {
                    var targetClassList = event.target.classList;
                    if (targetClassList.contains(ClassName.CONTROLS_BUTTON) ||
                        targetClassList.contains(ClassName.CONTEXTUAL_MENU_BUTTON)) {
                        return true;
                    }
                }
                return false;
            },
            nodeViews: {
                table: function (node, view, getPos) {
                    return createTableView(node, view, getPos, portalProviderAPI, {
                        isBreakoutEnabled: isBreakoutEnabled,
                        dynamicTextSizing: isDynamicTextSizingEnabled,
                        isFullWidthModeEnabled: isFullWidthModeEnabled,
                        wasFullWidthModeEnabled: wasFullWidthModeEnabled,
                    });
                },
            },
            handleDOMEvents: {
                focus: handleFocus,
                blur: whenTableInFocus(handleBlur),
                mousedown: handleMouseDown,
                mouseover: whenTableInFocus(handleMouseOver),
                mouseleave: whenTableInFocus(handleMouseLeave),
                mouseout: whenTableInFocus(handleMouseOut),
                mousemove: whenTableInFocus(handleMouseMove),
                click: whenTableInFocus(handleClick),
            },
            handleTripleClick: handleTripleClick,
        },
    });
};
export { createCommand, getPluginState };
//# sourceMappingURL=main.js.map