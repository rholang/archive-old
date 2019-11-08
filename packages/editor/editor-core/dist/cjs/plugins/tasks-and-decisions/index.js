"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var adf_schema_1 = require("@atlaskit/adf-schema");
var ToolbarInsertBlock_1 = require("../insert-block/ui/ToolbarInsertBlock");
var main_1 = require("./pm-plugins/main");
var input_rules_1 = tslib_1.__importDefault(require("./pm-plugins/input-rules"));
var keymaps_1 = tslib_1.__importDefault(require("./pm-plugins/keymaps"));
var ToolbarDecision_1 = tslib_1.__importDefault(require("./ui/ToolbarDecision"));
var ToolbarTask_1 = tslib_1.__importDefault(require("./ui/ToolbarTask"));
var analytics_1 = require("../analytics");
var commands_1 = require("./commands");
var assets_1 = require("../quick-insert/assets");
var TaskDecisionToolbarGroup = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: flex;\n"], ["\n  display: flex;\n"])));
var quickInsertItem = function (insert, state, listType) {
    var _a = commands_1.getListTypes(listType, state.schema), list = _a.list, item = _a.item;
    var addItem = function (_a) {
        var listLocalId = _a.listLocalId, itemLocalId = _a.itemLocalId;
        return insert(list.createChecked({ localId: listLocalId }, item.createChecked({
            localId: itemLocalId,
        })));
    };
    return commands_1.insertTaskDecisionWithAnalytics(state, listType, analytics_1.INPUT_METHOD.QUICK_INSERT, addItem);
};
var tasksAndDecisionsPlugin = function () { return ({
    name: 'taskDecision',
    nodes: function (editorProps) {
        return [
            { name: 'decisionList', node: adf_schema_1.decisionList },
            { name: 'decisionItem', node: adf_schema_1.decisionItem },
            {
                name: 'taskList',
                node: editorProps.allowNestedTasks ? adf_schema_1.nestableTaskList : adf_schema_1.taskList,
            },
            { name: 'taskItem', node: adf_schema_1.taskItem },
        ];
    },
    pmPlugins: function () {
        return [
            {
                name: 'tasksAndDecisions',
                plugin: function (_a) {
                    var portalProviderAPI = _a.portalProviderAPI, providerFactory = _a.providerFactory, dispatch = _a.dispatch;
                    return main_1.createPlugin(portalProviderAPI, providerFactory, dispatch);
                },
            },
            {
                name: 'tasksAndDecisionsInputRule',
                plugin: function (_a) {
                    var schema = _a.schema;
                    return input_rules_1.default(schema);
                },
            },
            {
                name: 'tasksAndDecisionsKeyMap',
                plugin: function (_a) {
                    var schema = _a.schema;
                    return keymaps_1.default(schema);
                },
            },
        ];
    },
    secondaryToolbarComponent: function (_a) {
        var editorView = _a.editorView, disabled = _a.disabled;
        return (React.createElement(TaskDecisionToolbarGroup, null,
            React.createElement(ToolbarDecision_1.default, { editorView: editorView, isDisabled: disabled, isReducedSpacing: true }),
            React.createElement(ToolbarTask_1.default, { editorView: editorView, isDisabled: disabled, isReducedSpacing: true })));
    },
    pluginsOptions: {
        quickInsert: function (_a) {
            var formatMessage = _a.formatMessage;
            return [
                {
                    title: formatMessage(ToolbarInsertBlock_1.messages.action),
                    description: formatMessage(ToolbarInsertBlock_1.messages.actionDescription),
                    priority: 100,
                    keywords: ['checkbox', 'task', 'todo'],
                    keyshortcut: '[]',
                    icon: function () { return (React.createElement(assets_1.IconAction, { label: formatMessage(ToolbarInsertBlock_1.messages.action) })); },
                    action: function (insert, state) {
                        return quickInsertItem(insert, state, 'taskList');
                    },
                },
                {
                    title: formatMessage(ToolbarInsertBlock_1.messages.decision),
                    description: formatMessage(ToolbarInsertBlock_1.messages.decisionDescription),
                    priority: 900,
                    keyshortcut: '<>',
                    icon: function () { return (React.createElement(assets_1.IconDecision, { label: formatMessage(ToolbarInsertBlock_1.messages.decision) })); },
                    action: function (insert, state) {
                        return quickInsertItem(insert, state, 'decisionList');
                    },
                },
            ];
        },
    },
}); };
exports.default = tasksAndDecisionsPlugin;
var templateObject_1;
//# sourceMappingURL=index.js.map