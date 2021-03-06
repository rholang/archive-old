import { __makeTemplateObject } from "tslib";
import * as React from 'react';
import styled from 'styled-components';
import { decisionItem, decisionList, taskItem, taskList, nestableTaskList, } from '@atlaskit/adf-schema';
import { messages as insertBlockMessages } from '../insert-block/ui/ToolbarInsertBlock';
import { createPlugin } from './pm-plugins/main';
import inputRulePlugin from './pm-plugins/input-rules';
import keymap from './pm-plugins/keymaps';
import ToolbarDecision from './ui/ToolbarDecision';
import ToolbarTask from './ui/ToolbarTask';
import { INPUT_METHOD } from '../analytics';
import { insertTaskDecisionWithAnalytics, getListTypes } from './commands';
import { IconAction, IconDecision } from '../quick-insert/assets';
var TaskDecisionToolbarGroup = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n"], ["\n  display: flex;\n"])));
var quickInsertItem = function (insert, state, listType) {
    var _a = getListTypes(listType, state.schema), list = _a.list, item = _a.item;
    var addItem = function (_a) {
        var listLocalId = _a.listLocalId, itemLocalId = _a.itemLocalId;
        return insert(list.createChecked({ localId: listLocalId }, item.createChecked({
            localId: itemLocalId,
        })));
    };
    return insertTaskDecisionWithAnalytics(state, listType, INPUT_METHOD.QUICK_INSERT, addItem);
};
var tasksAndDecisionsPlugin = function () { return ({
    name: 'taskDecision',
    nodes: function (editorProps) {
        return [
            { name: 'decisionList', node: decisionList },
            { name: 'decisionItem', node: decisionItem },
            {
                name: 'taskList',
                node: editorProps.allowNestedTasks ? nestableTaskList : taskList,
            },
            { name: 'taskItem', node: taskItem },
        ];
    },
    pmPlugins: function () {
        return [
            {
                name: 'tasksAndDecisions',
                plugin: function (_a) {
                    var portalProviderAPI = _a.portalProviderAPI, providerFactory = _a.providerFactory, dispatch = _a.dispatch;
                    return createPlugin(portalProviderAPI, providerFactory, dispatch);
                },
            },
            {
                name: 'tasksAndDecisionsInputRule',
                plugin: function (_a) {
                    var schema = _a.schema;
                    return inputRulePlugin(schema);
                },
            },
            {
                name: 'tasksAndDecisionsKeyMap',
                plugin: function (_a) {
                    var schema = _a.schema;
                    return keymap(schema);
                },
            },
        ];
    },
    secondaryToolbarComponent: function (_a) {
        var editorView = _a.editorView, disabled = _a.disabled;
        return (React.createElement(TaskDecisionToolbarGroup, null,
            React.createElement(ToolbarDecision, { editorView: editorView, isDisabled: disabled, isReducedSpacing: true }),
            React.createElement(ToolbarTask, { editorView: editorView, isDisabled: disabled, isReducedSpacing: true })));
    },
    pluginsOptions: {
        quickInsert: function (_a) {
            var formatMessage = _a.formatMessage;
            return [
                {
                    title: formatMessage(insertBlockMessages.action),
                    description: formatMessage(insertBlockMessages.actionDescription),
                    priority: 100,
                    keywords: ['checkbox', 'task', 'todo'],
                    keyshortcut: '[]',
                    icon: function () { return (React.createElement(IconAction, { label: formatMessage(insertBlockMessages.action) })); },
                    action: function (insert, state) {
                        return quickInsertItem(insert, state, 'taskList');
                    },
                },
                {
                    title: formatMessage(insertBlockMessages.decision),
                    description: formatMessage(insertBlockMessages.decisionDescription),
                    priority: 900,
                    keyshortcut: '<>',
                    icon: function () { return (React.createElement(IconDecision, { label: formatMessage(insertBlockMessages.decision) })); },
                    action: function (insert, state) {
                        return quickInsertItem(insert, state, 'decisionList');
                    },
                },
            ];
        },
    },
}); };
export default tasksAndDecisionsPlugin;
var templateObject_1;
//# sourceMappingURL=index.js.map