import * as React from 'react';
import { orderedList, bulletList, listItem } from '@atlaskit/adf-schema';
import { ToolbarSize } from '../../ui/Toolbar';
import ToolbarLists from './ui/ToolbarLists';
import { createPlugin, pluginKey } from './pm-plugins/main';
import inputRulePlugin from './pm-plugins/input-rule';
import keymapPlugin from './pm-plugins/keymap';
import WithPluginState from '../../ui/WithPluginState';
import { messages } from '../lists/messages';
import { addAnalytics, ACTION, EVENT_TYPE, INPUT_METHOD, ACTION_SUBJECT, ACTION_SUBJECT_ID, } from '../analytics';
import { tooltip, toggleBulletList, toggleOrderedList } from '../../keymaps';
import { IconList, IconListNumber } from '../quick-insert/assets';
var listPlugin = function () { return ({
    name: 'list',
    nodes: function () {
        return [
            { name: 'bulletList', node: bulletList },
            { name: 'orderedList', node: orderedList },
            { name: 'listItem', node: listItem },
        ];
    },
    pmPlugins: function () {
        return [
            { name: 'lists', plugin: function (_a) {
                    var dispatch = _a.dispatch;
                    return createPlugin(dispatch);
                } },
            {
                name: 'listsInputRule',
                plugin: function (_a) {
                    var schema = _a.schema;
                    return inputRulePlugin(schema);
                },
            },
            { name: 'listsKeymap', plugin: function () { return keymapPlugin(); } },
        ];
    },
    pluginsOptions: {
        quickInsert: function (_a) {
            var formatMessage = _a.formatMessage;
            return [
                {
                    title: formatMessage(messages.unorderedList),
                    description: formatMessage(messages.unorderedListDescription),
                    keywords: ['ul', 'unordered list'],
                    priority: 1100,
                    keyshortcut: tooltip(toggleBulletList),
                    icon: function () { return React.createElement(IconList, { label: formatMessage(messages.unorderedList) }); },
                    action: function (insert, state) {
                        var tr = insert(state.schema.nodes.bulletList.createChecked({}, state.schema.nodes.listItem.createChecked({}, state.schema.nodes.paragraph.createChecked())));
                        return addAnalytics(state, tr, {
                            action: ACTION.FORMATTED,
                            actionSubject: ACTION_SUBJECT.TEXT,
                            actionSubjectId: ACTION_SUBJECT_ID.FORMAT_LIST_BULLET,
                            eventType: EVENT_TYPE.TRACK,
                            attributes: {
                                inputMethod: INPUT_METHOD.QUICK_INSERT,
                            },
                        });
                    },
                },
                {
                    title: formatMessage(messages.orderedList),
                    description: formatMessage(messages.orderedListDescription),
                    keywords: ['ol', 'ordered list', 'numbered list'],
                    priority: 1200,
                    keyshortcut: tooltip(toggleOrderedList),
                    icon: function () { return (React.createElement(IconListNumber, { label: formatMessage(messages.orderedList) })); },
                    action: function (insert, state) {
                        var tr = insert(state.schema.nodes.orderedList.createChecked({}, state.schema.nodes.listItem.createChecked({}, state.schema.nodes.paragraph.createChecked())));
                        return addAnalytics(state, tr, {
                            action: ACTION.FORMATTED,
                            actionSubject: ACTION_SUBJECT.TEXT,
                            actionSubjectId: ACTION_SUBJECT_ID.FORMAT_LIST_NUMBER,
                            eventType: EVENT_TYPE.TRACK,
                            attributes: {
                                inputMethod: INPUT_METHOD.QUICK_INSERT,
                            },
                        });
                    },
                },
            ];
        },
    },
    primaryToolbarComponent: function (_a) {
        var editorView = _a.editorView, popupsMountPoint = _a.popupsMountPoint, popupsBoundariesElement = _a.popupsBoundariesElement, popupsScrollableElement = _a.popupsScrollableElement, toolbarSize = _a.toolbarSize, disabled = _a.disabled, isToolbarReducedSpacing = _a.isToolbarReducedSpacing;
        var isSmall = toolbarSize < ToolbarSize.L;
        var isSeparator = toolbarSize >= ToolbarSize.S;
        return (React.createElement(WithPluginState, { plugins: { listsState: pluginKey }, render: function (_a) {
                var listsState = _a.listsState;
                return (React.createElement(ToolbarLists, { isSmall: isSmall, isSeparator: isSeparator, isReducedSpacing: isToolbarReducedSpacing, disabled: disabled, editorView: editorView, popupsMountPoint: popupsMountPoint, popupsBoundariesElement: popupsBoundariesElement, popupsScrollableElement: popupsScrollableElement, bulletListActive: listsState.bulletListActive, bulletListDisabled: listsState.bulletListDisabled, orderedListActive: listsState.orderedListActive, orderedListDisabled: listsState.orderedListDisabled }));
            } }));
    },
}); };
export default listPlugin;
//# sourceMappingURL=index.js.map