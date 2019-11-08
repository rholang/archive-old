"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var adf_schema_1 = require("@atlaskit/adf-schema");
var prosemirror_tables_1 = require("prosemirror-tables");
var prosemirror_utils_1 = require("prosemirror-utils");
var React = tslib_1.__importStar(require("react"));
var keymaps_1 = require("../../keymaps");
var WithPluginState_1 = tslib_1.__importDefault(require("../../ui/WithPluginState"));
var analytics_1 = require("../analytics");
var ToolbarInsertBlock_1 = require("../insert-block/ui/ToolbarInsertBlock");
var assets_1 = require("../quick-insert/assets");
var keymap_1 = require("./pm-plugins/keymap");
var main_1 = require("./pm-plugins/main");
var table_resizing_1 = require("./pm-plugins/table-resizing");
var toolbar_1 = require("./toolbar");
var FloatingContextualButton_1 = tslib_1.__importDefault(require("./ui/FloatingContextualButton"));
var FloatingContextualMenu_1 = tslib_1.__importDefault(require("./ui/FloatingContextualMenu"));
var FloatingDeleteButton_1 = tslib_1.__importDefault(require("./ui/FloatingDeleteButton"));
var FloatingInsertButton_1 = tslib_1.__importDefault(require("./ui/FloatingInsertButton"));
var LayoutButton_1 = tslib_1.__importDefault(require("./ui/LayoutButton"));
var utils_1 = require("./utils");
exports.pluginConfig = function (config) {
    if (config === void 0) { config = {}; }
    return config.advanced
        ? tslib_1.__assign({ allowBackgroundColor: true, allowColumnResizing: true, allowHeaderColumn: true, allowHeaderRow: true, allowMergeCells: true, allowNumberColumn: true, stickToolbarToBottom: true, permittedLayouts: 'all', allowControls: true }, config) : config;
};
var tablesPlugin = function (options) { return ({
    name: 'table',
    nodes: function () {
        return [
            { name: 'table', node: adf_schema_1.table },
            { name: 'tableHeader', node: adf_schema_1.tableHeader },
            { name: 'tableRow', node: adf_schema_1.tableRow },
            { name: 'tableCell', node: adf_schema_1.tableCell },
        ];
    },
    pmPlugins: function () {
        return [
            {
                name: 'table',
                plugin: function (_a) {
                    var dispatch = _a.dispatch, portalProviderAPI = _a.portalProviderAPI;
                    var _b = options || {}, dynamicSizingEnabled = _b.dynamicSizingEnabled, fullWidthEnabled = _b.fullWidthEnabled, wasFullWidthEnabled = _b.wasFullWidthEnabled, breakoutEnabled = _b.breakoutEnabled, tableOptions = _b.tableOptions;
                    return main_1.createPlugin(dispatch, portalProviderAPI, exports.pluginConfig(tableOptions), breakoutEnabled && dynamicSizingEnabled, breakoutEnabled, fullWidthEnabled, wasFullWidthEnabled);
                },
            },
            {
                name: 'tablePMColResizing',
                plugin: function (_a) {
                    var dispatch = _a.dispatch;
                    var _b = options || {}, dynamicSizingEnabled = _b.dynamicSizingEnabled, fullWidthEnabled = _b.fullWidthEnabled, tableOptions = _b.tableOptions;
                    var allowColumnResizing = exports.pluginConfig(tableOptions).allowColumnResizing;
                    return allowColumnResizing
                        ? table_resizing_1.createPlugin(dispatch, {
                            dynamicTextSizing: dynamicSizingEnabled && !fullWidthEnabled,
                            lastColumnResizable: !fullWidthEnabled,
                        })
                        : undefined;
                },
            },
            // Needs to be lower priority than prosemirror-tables.tableEditing
            // plugin as it is currently swallowing backspace events inside tables
            { name: 'tableKeymap', plugin: function () { return keymap_1.keymapPlugin(); } },
            { name: 'tableEditing', plugin: function () { return prosemirror_tables_1.tableEditing(); } },
        ];
    },
    contentComponent: function (_a) {
        var editorView = _a.editorView, popupsMountPoint = _a.popupsMountPoint, popupsBoundariesElement = _a.popupsBoundariesElement, popupsScrollableElement = _a.popupsScrollableElement;
        return (React.createElement(WithPluginState_1.default, { plugins: {
                pluginState: main_1.pluginKey,
                tableResizingPluginState: table_resizing_1.pluginKey,
            }, render: function (_) {
                var state = editorView.state;
                var pluginState = main_1.getPluginState(state);
                var tableResizingPluginState = table_resizing_1.pluginKey.getState(state);
                var isDragging = tableResizingPluginState && tableResizingPluginState.dragging;
                var allowControls = pluginState &&
                    pluginState.pluginConfig &&
                    pluginState.pluginConfig.allowControls;
                return (React.createElement(React.Fragment, null,
                    pluginState.targetCellPosition &&
                        !isDragging &&
                        options &&
                        options.allowContextualMenu && (React.createElement(FloatingContextualButton_1.default, { editorView: editorView, mountPoint: popupsMountPoint, targetCellPosition: pluginState.targetCellPosition, scrollableElement: popupsScrollableElement, isContextualMenuOpen: pluginState.isContextualMenuOpen, layout: pluginState.layout })),
                    allowControls && (React.createElement(FloatingInsertButton_1.default, { tableNode: pluginState.tableNode, tableRef: pluginState.tableRef, insertColumnButtonIndex: pluginState.insertColumnButtonIndex, insertRowButtonIndex: pluginState.insertRowButtonIndex, isHeaderColumnEnabled: pluginState.isHeaderColumnEnabled, isHeaderRowEnabled: pluginState.isHeaderRowEnabled, editorView: editorView, mountPoint: popupsMountPoint, boundariesElement: popupsBoundariesElement, scrollableElement: popupsScrollableElement })),
                    React.createElement(FloatingContextualMenu_1.default, { editorView: editorView, mountPoint: popupsMountPoint, boundariesElement: popupsBoundariesElement, targetCellPosition: pluginState.targetCellPosition, isOpen: Boolean(pluginState.isContextualMenuOpen), pluginConfig: pluginState.pluginConfig }),
                    allowControls && (React.createElement(FloatingDeleteButton_1.default, { editorView: editorView, selection: editorView.state.selection, tableRef: pluginState.tableRef, mountPoint: popupsMountPoint, boundariesElement: popupsBoundariesElement, scrollableElement: popupsScrollableElement })),
                    utils_1.isLayoutSupported(state) &&
                        options &&
                        options.breakoutEnabled && (React.createElement(LayoutButton_1.default, { editorView: editorView, mountPoint: popupsMountPoint, boundariesElement: popupsBoundariesElement, scrollableElement: popupsScrollableElement, targetRef: pluginState.tableWrapperTarget, layout: pluginState.layout, isResizing: !!tableResizingPluginState &&
                            !!tableResizingPluginState.dragging }))));
            } }));
    },
    pluginsOptions: {
        quickInsert: function (_a) {
            var formatMessage = _a.formatMessage;
            return [
                {
                    title: formatMessage(ToolbarInsertBlock_1.messages.table),
                    description: formatMessage(ToolbarInsertBlock_1.messages.tableDescription),
                    priority: 600,
                    keyshortcut: keymaps_1.tooltip(keymaps_1.toggleTable),
                    icon: function () { return React.createElement(assets_1.IconTable, { label: formatMessage(ToolbarInsertBlock_1.messages.table) }); },
                    action: function (insert, state) {
                        var tr = insert(prosemirror_utils_1.createTable(state.schema));
                        return analytics_1.addAnalytics(state, tr, {
                            action: analytics_1.ACTION.INSERTED,
                            actionSubject: analytics_1.ACTION_SUBJECT.DOCUMENT,
                            actionSubjectId: analytics_1.ACTION_SUBJECT_ID.TABLE,
                            attributes: { inputMethod: analytics_1.INPUT_METHOD.QUICK_INSERT },
                            eventType: analytics_1.EVENT_TYPE.TRACK,
                        });
                    },
                },
            ];
        },
        floatingToolbar: toolbar_1.getToolbarConfig,
    },
}); };
exports.default = tablesPlugin;
//# sourceMappingURL=index.js.map