import * as React from 'react';
import { link } from '@atlaskit/adf-schema';
import { createInputRulePlugin } from './pm-plugins/input-rule';
import { createKeymapPlugin } from './pm-plugins/keymap';
import { plugin, stateKey, LinkAction } from './pm-plugins/main';
import fakeCursorToolbarPlugin from './pm-plugins/fake-cursor-for-toolbar';
import { messages } from '../insert-block/ui/ToolbarInsertBlock';
import { addAnalytics, ACTION, ACTION_SUBJECT, INPUT_METHOD, EVENT_TYPE, ACTION_SUBJECT_ID, } from '../analytics';
import { getToolbarConfig } from './Toolbar';
import { tooltip, addLink } from '../../keymaps';
import { IconLink } from '../quick-insert/assets';
var hyperlinkPlugin = function () { return ({
    name: 'hyperlink',
    marks: function () {
        return [{ name: 'link', mark: link }];
    },
    pmPlugins: function () {
        return [
            { name: 'hyperlink', plugin: function (_a) {
                    var dispatch = _a.dispatch;
                    return plugin(dispatch);
                } },
            {
                name: 'fakeCursorToolbarPlugin',
                plugin: function () { return fakeCursorToolbarPlugin; },
            },
            {
                name: 'hyperlinkInputRule',
                plugin: function (_a) {
                    var schema = _a.schema;
                    return createInputRulePlugin(schema);
                },
            },
            {
                name: 'hyperlinkKeymap',
                plugin: function () { return createKeymapPlugin(); },
            },
        ];
    },
    pluginsOptions: {
        quickInsert: function (_a) {
            var formatMessage = _a.formatMessage;
            return [
                {
                    title: formatMessage(messages.link),
                    description: formatMessage(messages.linkDescription),
                    keywords: ['url', 'link', 'hyperlink'],
                    priority: 1200,
                    keyshortcut: tooltip(addLink),
                    icon: function () { return React.createElement(IconLink, { label: formatMessage(messages.link) }); },
                    action: function (_insert, state) {
                        var pos = state.selection.from;
                        var nodeBefore = state.selection.$from.nodeBefore;
                        if (!nodeBefore) {
                            return false;
                        }
                        var tr = state.tr
                            .setMeta(stateKey, { type: LinkAction.SHOW_INSERT_TOOLBAR })
                            .delete(pos - nodeBefore.nodeSize, pos);
                        return addAnalytics(state, tr, {
                            action: ACTION.INVOKED,
                            actionSubject: ACTION_SUBJECT.TYPEAHEAD,
                            actionSubjectId: ACTION_SUBJECT_ID.TYPEAHEAD_LINK,
                            attributes: { inputMethod: INPUT_METHOD.QUICK_INSERT },
                            eventType: EVENT_TYPE.UI,
                        });
                    },
                },
            ];
        },
        floatingToolbar: getToolbarConfig,
    },
}); };
export default hyperlinkPlugin;
//# sourceMappingURL=index.js.map