"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prosemirror_state_1 = require("prosemirror-state");
var prosemirror_utils_1 = require("prosemirror-utils");
var prosemirror_view_1 = require("prosemirror-view");
var editor_common_1 = require("@atlaskit/editor-common");
var plugin_state_factory_1 = require("../../../utils/plugin-state-factory");
var table_1 = require("../nodeviews/table");
var commands_1 = require("../commands");
var handlers_1 = require("../handlers");
var event_handlers_1 = require("../event-handlers");
var utils_1 = require("../utils");
var transforms_1 = require("../transforms");
var types_1 = require("../types");
var reducer_1 = tslib_1.__importDefault(require("../reducer"));
exports.pluginKey = new prosemirror_state_1.PluginKey('tablePlugin');
exports.defaultTableSelection = {
    hoveredColumns: [],
    hoveredRows: [],
    isInDanger: false,
};
var isBreakoutEnabled;
var isDynamicTextSizingEnabled;
var isFullWidthModeEnabled;
var wasFullWidthModeEnabled;
var _a = plugin_state_factory_1.pluginFactory(exports.pluginKey, reducer_1.default, {
    mapping: function (tr, pluginState) {
        if (tr.docChanged && pluginState.targetCellPosition) {
            var _a = tr.mapping.mapResult(pluginState.targetCellPosition), pos = _a.pos, deleted = _a.deleted;
            return tslib_1.__assign(tslib_1.__assign({}, pluginState), { targetCellPosition: deleted ? undefined : pos });
        }
        return pluginState;
    },
    onDocChanged: handlers_1.handleDocOrSelectionChanged,
    onSelectionChanged: handlers_1.handleDocOrSelectionChanged,
}), createPluginState = _a.createPluginState, createCommand = _a.createCommand, getPluginState = _a.getPluginState;
exports.createCommand = createCommand;
exports.getPluginState = getPluginState;
exports.createPlugin = function (dispatch, portalProviderAPI, pluginConfig, dynamicTextSizing, breakoutEnabled, fullWidthModeEnabled, previousFullWidthModeEnabled) {
    isBreakoutEnabled = breakoutEnabled;
    isDynamicTextSizingEnabled = dynamicTextSizing;
    isFullWidthModeEnabled = fullWidthModeEnabled;
    wasFullWidthModeEnabled = previousFullWidthModeEnabled;
    var state = createPluginState(dispatch, tslib_1.__assign({ pluginConfig: pluginConfig, insertColumnButtonIndex: undefined, insertRowButtonIndex: undefined, decorationSet: prosemirror_view_1.DecorationSet.empty, isFullWidthModeEnabled: isFullWidthModeEnabled, isHeaderRowEnabled: !!pluginConfig.allowHeaderRow, isHeaderColumnEnabled: false }, exports.defaultTableSelection));
    return new prosemirror_state_1.Plugin({
        state: state,
        key: exports.pluginKey,
        appendTransaction: function (transactions, oldState, newState) {
            var tr = transactions.find(function (tr) { return tr.getMeta('uiEvent') === 'cut'; });
            if (tr) {
                // "fixTables" removes empty rows as we don't allow that in schema
                var updatedTr = event_handlers_1.handleCut(tr, oldState, newState);
                return transforms_1.fixTables(updatedTr) || updatedTr;
            }
            if (transactions.find(function (tr) { return tr.docChanged; })) {
                return transforms_1.fixTables(newState.tr);
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
                        var parent_1 = prosemirror_utils_1.findParentDomRefOfType(state.schema.nodes.table, domAtPos)(selection);
                        if (parent_1) {
                            tableRef = parent_1.querySelector('table');
                        }
                        tableNode = prosemirror_utils_1.findTable(state.selection);
                    }
                    if (pluginState.tableRef !== tableRef) {
                        commands_1.setTableRef(tableRef)(state, dispatch);
                    }
                    if (pluginState.tableNode !== tableNode) {
                        utils_1.updateResizeHandles(tableRef);
                    }
                    if (pluginState.editorHasFocus && pluginState.tableRef) {
                        var tableCellHeader = prosemirror_utils_1.findParentNodeOfType(state.schema.nodes.tableHeader)(state.selection);
                        if (tableCellHeader) {
                            commands_1.addBoldInEmptyHeaderCells(tableCellHeader)(state, dispatch);
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
                if (utils_1.findControlsHoverDecoration(decorationSet).length) {
                    commands_1.clearHoverSelection()(state, dispatch);
                }
                // ED-6069: workaround for Chrome given a regression introduced in prosemirror-view@1.6.8
                // Returning true prevents that updateSelection() is getting called in the commit below:
                // @see https://github.com/ProseMirror/prosemirror-view/commit/33fe4a8b01584f6b4103c279033dcd33e8047b95
                if (editor_common_1.browser.chrome && event.target) {
                    var targetClassList = event.target.classList;
                    if (targetClassList.contains(types_1.TableCssClassName.CONTROLS_BUTTON) ||
                        targetClassList.contains(types_1.TableCssClassName.CONTEXTUAL_MENU_BUTTON)) {
                        return true;
                    }
                }
                return false;
            },
            nodeViews: {
                table: function (node, view, getPos) {
                    return table_1.createTableView(node, view, getPos, portalProviderAPI, {
                        isBreakoutEnabled: isBreakoutEnabled,
                        dynamicTextSizing: isDynamicTextSizingEnabled,
                        isFullWidthModeEnabled: isFullWidthModeEnabled,
                        wasFullWidthModeEnabled: wasFullWidthModeEnabled,
                    });
                },
            },
            handleDOMEvents: {
                focus: event_handlers_1.handleFocus,
                blur: event_handlers_1.whenTableInFocus(event_handlers_1.handleBlur),
                mousedown: event_handlers_1.handleMouseDown,
                mouseover: event_handlers_1.whenTableInFocus(event_handlers_1.handleMouseOver),
                mouseleave: event_handlers_1.whenTableInFocus(event_handlers_1.handleMouseLeave),
                mouseout: event_handlers_1.whenTableInFocus(event_handlers_1.handleMouseOut),
                mousemove: event_handlers_1.whenTableInFocus(event_handlers_1.handleMouseMove),
                click: event_handlers_1.whenTableInFocus(event_handlers_1.handleClick),
            },
            handleTripleClick: event_handlers_1.handleTripleClick,
        },
    });
};
//# sourceMappingURL=main.js.map