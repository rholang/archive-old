"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_intl_1 = require("react-intl");
var remove_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/remove"));
var messages_1 = tslib_1.__importDefault(require("../../messages"));
var main_1 = require("./pm-plugins/main");
var index_1 = require("./pm-plugins/table-resizing/index");
var commands_1 = require("./commands");
var utils_1 = require("./utils");
var commands_with_analytics_1 = require("./commands-with-analytics");
exports.messages = react_intl_1.defineMessages({
    tableOptions: {
        id: 'fabric.editor.tableOptions',
        defaultMessage: 'Table options',
        description: 'Opens a menu with additional table options',
    },
    headerRow: {
        id: 'fabric.editor.headerRow',
        defaultMessage: 'Header row',
        description: 'Marks the first table row as a header row',
    },
    headerColumn: {
        id: 'fabric.editor.headerColumn',
        defaultMessage: 'Header column',
        description: 'Marks the first table column as a header row',
    },
    numberedColumn: {
        id: 'fabric.editor.numberedColumn',
        defaultMessage: 'Numbered column',
        description: 'Adds an auto-numbering column to your table',
    },
});
exports.getToolbarConfig = function (state, _a) {
    var formatMessage = _a.formatMessage;
    var tableState = main_1.pluginKey.getState(state);
    var resizeState = index_1.pluginKey.getState(state);
    if (tableState && tableState.tableRef && tableState.pluginConfig) {
        var pluginConfig = tableState.pluginConfig;
        return {
            title: 'Table floating controls',
            getDomRef: function () { return tableState.tableWrapperTarget; },
            nodeType: state.schema.nodes.table,
            offset: [0, 3],
            items: [
                {
                    type: 'dropdown',
                    title: formatMessage(exports.messages.tableOptions),
                    hidden: !(pluginConfig.allowHeaderRow && pluginConfig.allowHeaderColumn),
                    options: [
                        {
                            title: formatMessage(exports.messages.headerRow),
                            onClick: commands_with_analytics_1.toggleHeaderRowWithAnalytics(),
                            selected: tableState.isHeaderRowEnabled,
                            hidden: !pluginConfig.allowHeaderRow,
                        },
                        {
                            title: formatMessage(exports.messages.headerColumn),
                            onClick: commands_with_analytics_1.toggleHeaderColumnWithAnalytics(),
                            selected: tableState.isHeaderColumnEnabled,
                            hidden: !pluginConfig.allowHeaderColumn,
                        },
                        {
                            title: formatMessage(exports.messages.numberedColumn),
                            onClick: commands_with_analytics_1.toggleNumberColumnWithAnalytics(),
                            selected: utils_1.checkIfNumberColumnEnabled(state),
                            hidden: !pluginConfig.allowNumberColumn,
                        },
                    ],
                },
                {
                    type: 'separator',
                    hidden: !(pluginConfig.allowBackgroundColor &&
                        pluginConfig.allowHeaderRow &&
                        pluginConfig.allowHeaderColumn &&
                        pluginConfig.allowMergeCells),
                },
                {
                    type: 'button',
                    appearance: 'danger',
                    icon: remove_1.default,
                    onClick: commands_with_analytics_1.deleteTableWithAnalytics(),
                    disabled: !!resizeState && !!resizeState.dragging,
                    onMouseEnter: commands_1.hoverTable(true),
                    onMouseLeave: commands_1.clearHoverSelection(),
                    title: formatMessage(messages_1.default.remove),
                },
            ],
        };
    }
    return;
};
//# sourceMappingURL=toolbar.js.map