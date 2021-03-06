import * as React from 'react';
import { codeBlock } from '@atlaskit/adf-schema';
import { createPlugin } from './pm-plugins/main';
import { getToolbarConfig } from './toolbar';
import keymap from './pm-plugins/keymaps';
import ideUX from './pm-plugins/ide-ux';
import { messages } from '../block-type/types';
import { addAnalytics, ACTION, ACTION_SUBJECT, ACTION_SUBJECT_ID, INPUT_METHOD, EVENT_TYPE, } from '../analytics';
import { IconCode } from '../quick-insert/assets';
var codeBlockPlugin = function (options) {
    if (options === void 0) { options = {}; }
    return ({
        name: 'codeBlock',
        nodes: function () {
            return [{ name: 'codeBlock', node: codeBlock }];
        },
        pmPlugins: function () {
            return [
                { name: 'codeBlock', plugin: createPlugin },
                {
                    name: 'codeBlockIDEKeyBindings',
                    plugin: function () { return (options.enableKeybindingsForIDE ? ideUX : undefined); },
                },
                {
                    name: 'codeBlockKeyMap',
                    plugin: function (_a) {
                        var schema = _a.schema;
                        return keymap(schema);
                    },
                },
            ];
        },
        pluginsOptions: {
            quickInsert: function (_a) {
                var formatMessage = _a.formatMessage;
                return [
                    {
                        title: formatMessage(messages.codeblock),
                        description: formatMessage(messages.codeblockDescription),
                        priority: 700,
                        keyshortcut: '```',
                        icon: function () { return React.createElement(IconCode, { label: formatMessage(messages.codeblock) }); },
                        action: function (insert, state) {
                            var schema = state.schema;
                            var tr = insert(schema.nodes.codeBlock.createChecked());
                            return addAnalytics(state, tr, {
                                action: ACTION.INSERTED,
                                actionSubject: ACTION_SUBJECT.DOCUMENT,
                                actionSubjectId: ACTION_SUBJECT_ID.CODE_BLOCK,
                                attributes: { inputMethod: INPUT_METHOD.QUICK_INSERT },
                                eventType: EVENT_TYPE.TRACK,
                            });
                        },
                    },
                ];
            },
            floatingToolbar: getToolbarConfig,
        },
    });
};
export default codeBlockPlugin;
//# sourceMappingURL=index.js.map