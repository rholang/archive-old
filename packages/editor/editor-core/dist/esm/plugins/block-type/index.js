import { __read, __spread } from "tslib";
import * as React from 'react';
import { heading, blockquote, hardBreak } from '@atlaskit/adf-schema';
import { ToolbarSize } from '../../ui/Toolbar';
import { createPlugin, pluginKey } from './pm-plugins/main';
import keymapPlugin from './pm-plugins/keymap';
import inputRulePlugin from './pm-plugins/input-rule';
import ToolbarBlockType from './ui/ToolbarBlockType';
import WithPluginState from '../../ui/WithPluginState';
import { setBlockTypeWithAnalytics } from './commands';
import { messages } from './types';
import { addAnalytics, INPUT_METHOD, ACTION_SUBJECT_ID, EVENT_TYPE, ACTION_SUBJECT, ACTION, } from '../analytics';
import * as keymaps from '../../keymaps';
import { IconQuote, IconHeading } from '../quick-insert/assets';
var headingPluginOptions = function (_a) {
    var formatMessage = _a.formatMessage;
    return Array.from({ length: 6 }, function (_v, idx) {
        var level = (idx + 1);
        var descriptionDescriptor = messages["heading" + level + "Description"];
        var keyshortcut = keymaps.tooltip(keymaps["toggleHeading" + level]);
        return {
            title: formatMessage(messages["heading" + level]),
            description: formatMessage(descriptionDescriptor),
            priority: 1300,
            keywords: ["h" + level],
            keyshortcut: keyshortcut,
            icon: function () { return (React.createElement(IconHeading, { level: level, label: formatMessage(descriptionDescriptor) })); },
            action: function (insert, state) {
                var tr = insert(state.schema.nodes.heading.createChecked({ level: level }));
                return addAnalytics(state, tr, {
                    action: ACTION.FORMATTED,
                    actionSubject: ACTION_SUBJECT.TEXT,
                    eventType: EVENT_TYPE.TRACK,
                    actionSubjectId: ACTION_SUBJECT_ID.FORMAT_HEADING,
                    attributes: {
                        inputMethod: INPUT_METHOD.QUICK_INSERT,
                        newHeadingLevel: level,
                    },
                });
            },
        };
    });
};
var blockTypePlugin = function (options) { return ({
    name: 'blockType',
    nodes: function (_a) {
        var allowBlockType = _a.allowBlockType;
        var nodes = [
            { name: 'heading', node: heading },
            { name: 'blockquote', node: blockquote },
            { name: 'hardBreak', node: hardBreak },
        ];
        if (allowBlockType) {
            var exclude_1 = allowBlockType.exclude ? allowBlockType.exclude : [];
            return nodes.filter(function (node) { return exclude_1.indexOf(node.name) === -1; });
        }
        return nodes;
    },
    pmPlugins: function () {
        return [
            {
                name: 'blockType',
                plugin: function (_a) {
                    var dispatch = _a.dispatch;
                    return createPlugin(dispatch, options && options.lastNodeMustBeParagraph);
                },
            },
            {
                name: 'blockTypeInputRule',
                plugin: function (_a) {
                    var schema = _a.schema;
                    return inputRulePlugin(schema);
                },
            },
            // Needs to be lower priority than prosemirror-tables.tableEditing
            // plugin as it is currently swallowing right/down arrow events inside tables
            {
                name: 'blockTypeKeyMap',
                plugin: function (_a) {
                    var schema = _a.schema;
                    return keymapPlugin(schema);
                },
            },
        ];
    },
    primaryToolbarComponent: function (_a) {
        var editorView = _a.editorView, popupsMountPoint = _a.popupsMountPoint, popupsBoundariesElement = _a.popupsBoundariesElement, popupsScrollableElement = _a.popupsScrollableElement, toolbarSize = _a.toolbarSize, disabled = _a.disabled, isToolbarReducedSpacing = _a.isToolbarReducedSpacing, eventDispatcher = _a.eventDispatcher;
        var isSmall = toolbarSize < ToolbarSize.XL;
        var boundSetBlockType = function (name) {
            return setBlockTypeWithAnalytics(name, INPUT_METHOD.TOOLBAR)(editorView.state, editorView.dispatch);
        };
        return (React.createElement(WithPluginState, { editorView: editorView, eventDispatcher: eventDispatcher, plugins: {
                pluginState: pluginKey,
            }, render: function (_a) {
                var pluginState = _a.pluginState;
                return (React.createElement(ToolbarBlockType, { isSmall: isSmall, isDisabled: disabled, isReducedSpacing: isToolbarReducedSpacing, setBlockType: boundSetBlockType, pluginState: pluginState, popupsMountPoint: popupsMountPoint, popupsBoundariesElement: popupsBoundariesElement, popupsScrollableElement: popupsScrollableElement }));
            } }));
    },
    pluginsOptions: {
        quickInsert: function (intl) {
            var formatMessage = intl.formatMessage;
            return __spread([
                {
                    title: formatMessage(messages.blockquote),
                    description: formatMessage(messages.blockquoteDescription),
                    priority: 1300,
                    keyshortcut: keymaps.tooltip(keymaps.toggleBlockQuote),
                    icon: function () { return React.createElement(IconQuote, { label: formatMessage(messages.blockquote) }); },
                    action: function (insert, state) {
                        var tr = insert(state.schema.nodes.blockquote.createChecked({}, state.schema.nodes.paragraph.createChecked()));
                        return addAnalytics(state, tr, {
                            action: ACTION.FORMATTED,
                            actionSubject: ACTION_SUBJECT.TEXT,
                            eventType: EVENT_TYPE.TRACK,
                            actionSubjectId: ACTION_SUBJECT_ID.FORMAT_BLOCK_QUOTE,
                            attributes: {
                                inputMethod: INPUT_METHOD.QUICK_INSERT,
                            },
                        });
                    },
                }
            ], headingPluginOptions(intl));
        },
    },
}); };
export default blockTypePlugin;
export { pluginKey } from './pm-plugins/main';
//# sourceMappingURL=index.js.map