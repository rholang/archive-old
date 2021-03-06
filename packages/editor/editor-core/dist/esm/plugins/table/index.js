import { __assign } from "tslib";
import { table, tableCell, tableHeader, tableRow } from '@atlaskit/adf-schema';
import { tableEditing } from 'prosemirror-tables';
import { createTable } from 'prosemirror-utils';
import * as React from 'react';
import { toggleTable, tooltip } from '../../keymaps';
import WithPluginState from '../../ui/WithPluginState';
import { ACTION, ACTION_SUBJECT, ACTION_SUBJECT_ID, addAnalytics, EVENT_TYPE, INPUT_METHOD, } from '../analytics';
import { messages } from '../insert-block/ui/ToolbarInsertBlock';
import { IconTable } from '../quick-insert/assets';
import { keymapPlugin } from './pm-plugins/keymap';
import { createPlugin, getPluginState, pluginKey } from './pm-plugins/main';
import { createPlugin as createFlexiResizingPlugin, pluginKey as tableResizingPluginKey, } from './pm-plugins/table-resizing';
import { getToolbarConfig } from './toolbar';
import FloatingContextualButton from './ui/FloatingContextualButton';
import FloatingContextualMenu from './ui/FloatingContextualMenu';
import FloatingDeleteButton from './ui/FloatingDeleteButton';
import FloatingInsertButton from './ui/FloatingInsertButton';
import LayoutButton from './ui/LayoutButton';
import { isLayoutSupported } from './utils';
export var pluginConfig = function (config) {
    if (config === void 0) { config = {}; }
    return config.advanced
        ? __assign({ allowBackgroundColor: true, allowColumnResizing: true, allowHeaderColumn: true, allowHeaderRow: true, allowMergeCells: true, allowNumberColumn: true, stickToolbarToBottom: true, permittedLayouts: 'all', allowControls: true }, config) : config;
};
var tablesPlugin = function (options) { return ({
    name: 'table',
    nodes: function () {
        return [
            { name: 'table', node: table },
            { name: 'tableHeader', node: tableHeader },
            { name: 'tableRow', node: tableRow },
            { name: 'tableCell', node: tableCell },
        ];
    },
    pmPlugins: function () {
        return [
            {
                name: 'table',
                plugin: function (_a) {
                    var dispatch = _a.dispatch, portalProviderAPI = _a.portalProviderAPI;
                    var _b = options || {}, dynamicSizingEnabled = _b.dynamicSizingEnabled, fullWidthEnabled = _b.fullWidthEnabled, wasFullWidthEnabled = _b.wasFullWidthEnabled, breakoutEnabled = _b.breakoutEnabled, tableOptions = _b.tableOptions;
                    return createPlugin(dispatch, portalProviderAPI, pluginConfig(tableOptions), breakoutEnabled && dynamicSizingEnabled, breakoutEnabled, fullWidthEnabled, wasFullWidthEnabled);
                },
            },
            {
                name: 'tablePMColResizing',
                plugin: function (_a) {
                    var dispatch = _a.dispatch;
                    var _b = options || {}, dynamicSizingEnabled = _b.dynamicSizingEnabled, fullWidthEnabled = _b.fullWidthEnabled, tableOptions = _b.tableOptions;
                    var allowColumnResizing = pluginConfig(tableOptions).allowColumnResizing;
                    return allowColumnResizing
                        ? createFlexiResizingPlugin(dispatch, {
                            dynamicTextSizing: dynamicSizingEnabled && !fullWidthEnabled,
                            lastColumnResizable: !fullWidthEnabled,
                        })
                        : undefined;
                },
            },
            // Needs to be lower priority than prosemirror-tables.tableEditing
            // plugin as it is currently swallowing backspace events inside tables
            { name: 'tableKeymap', plugin: function () { return keymapPlugin(); } },
            { name: 'tableEditing', plugin: function () { return tableEditing(); } },
        ];
    },
    contentComponent: function (_a) {
        var editorView = _a.editorView, popupsMountPoint = _a.popupsMountPoint, popupsBoundariesElement = _a.popupsBoundariesElement, popupsScrollableElement = _a.popupsScrollableElement;
        return (React.createElement(WithPluginState, { plugins: {
                pluginState: pluginKey,
                tableResizingPluginState: tableResizingPluginKey,
            }, render: function (_) {
                var state = editorView.state;
                var pluginState = getPluginState(state);
                var tableResizingPluginState = tableResizingPluginKey.getState(state);
                var isDragging = tableResizingPluginState && tableResizingPluginState.dragging;
                var allowControls = pluginState &&
                    pluginState.pluginConfig &&
                    pluginState.pluginConfig.allowControls;
                return (React.createElement(React.Fragment, null,
                    pluginState.targetCellPosition &&
                        !isDragging &&
                        options &&
                        options.allowContextualMenu && (React.createElement(FloatingContextualButton, { editorView: editorView, mountPoint: popupsMountPoint, targetCellPosition: pluginState.targetCellPosition, scrollableElement: popupsScrollableElement, isContextualMenuOpen: pluginState.isContextualMenuOpen, layout: pluginState.layout })),
                    allowControls && (React.createElement(FloatingInsertButton, { tableNode: pluginState.tableNode, tableRef: pluginState.tableRef, insertColumnButtonIndex: pluginState.insertColumnButtonIndex, insertRowButtonIndex: pluginState.insertRowButtonIndex, isHeaderColumnEnabled: pluginState.isHeaderColumnEnabled, isHeaderRowEnabled: pluginState.isHeaderRowEnabled, editorView: editorView, mountPoint: popupsMountPoint, boundariesElement: popupsBoundariesElement, scrollableElement: popupsScrollableElement })),
                    React.createElement(FloatingContextualMenu, { editorView: editorView, mountPoint: popupsMountPoint, boundariesElement: popupsBoundariesElement, targetCellPosition: pluginState.targetCellPosition, isOpen: Boolean(pluginState.isContextualMenuOpen), pluginConfig: pluginState.pluginConfig }),
                    allowControls && (React.createElement(FloatingDeleteButton, { editorView: editorView, selection: editorView.state.selection, tableRef: pluginState.tableRef, mountPoint: popupsMountPoint, boundariesElement: popupsBoundariesElement, scrollableElement: popupsScrollableElement })),
                    isLayoutSupported(state) &&
                        options &&
                        options.breakoutEnabled && (React.createElement(LayoutButton, { editorView: editorView, mountPoint: popupsMountPoint, boundariesElement: popupsBoundariesElement, scrollableElement: popupsScrollableElement, targetRef: pluginState.tableWrapperTarget, layout: pluginState.layout, isResizing: !!tableResizingPluginState &&
                            !!tableResizingPluginState.dragging }))));
            } }));
    },
    pluginsOptions: {
        quickInsert: function (_a) {
            var formatMessage = _a.formatMessage;
            return [
                {
                    title: formatMessage(messages.table),
                    description: formatMessage(messages.tableDescription),
                    priority: 600,
                    keyshortcut: tooltip(toggleTable),
                    icon: function () { return React.createElement(IconTable, { label: formatMessage(messages.table) }); },
                    action: function (insert, state) {
                        var tr = insert(createTable(state.schema));
                        return addAnalytics(state, tr, {
                            action: ACTION.INSERTED,
                            actionSubject: ACTION_SUBJECT.DOCUMENT,
                            actionSubjectId: ACTION_SUBJECT_ID.TABLE,
                            attributes: { inputMethod: INPUT_METHOD.QUICK_INSERT },
                            eventType: EVENT_TYPE.TRACK,
                        });
                    },
                },
            ];
        },
        floatingToolbar: getToolbarConfig,
    },
}); };
export default tablesPlugin;
//# sourceMappingURL=index.js.map