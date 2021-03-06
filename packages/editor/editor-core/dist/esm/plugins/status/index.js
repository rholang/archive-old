import * as React from 'react';
import { status } from '@atlaskit/adf-schema';
import { findDomRefAtPos } from 'prosemirror-utils';
import createStatusPlugin, { pluginKey, } from './plugin';
import WithPluginState from '../../ui/WithPluginState';
import StatusPicker from './ui/statusPicker';
import { commitStatusPicker, updateStatus, createStatus } from './actions';
import { keymapPlugin } from './keymap';
import { messages } from '../insert-block/ui/ToolbarInsertBlock';
import { IconStatus } from '../quick-insert/assets';
import { addAnalytics, ACTION, ACTION_SUBJECT, ACTION_SUBJECT_ID, INPUT_METHOD, EVENT_TYPE, } from '../analytics';
var baseStatusPlugin = function (options) { return ({
    name: 'status',
    nodes: function () {
        return [{ name: 'status', node: status }];
    },
    pmPlugins: function () {
        return [
            {
                name: 'status',
                plugin: function (_a) {
                    var dispatch = _a.dispatch, portalProviderAPI = _a.portalProviderAPI;
                    return createStatusPlugin(dispatch, portalProviderAPI, options);
                },
            },
            { name: 'statusKeymap', plugin: keymapPlugin },
        ];
    },
    contentComponent: function (_a) {
        var editorView = _a.editorView;
        var domAtPos = editorView.domAtPos.bind(editorView);
        return (React.createElement(WithPluginState, { plugins: {
                statusState: pluginKey,
            }, render: function (_a) {
                var _b = _a.statusState, statusState = _b === void 0 ? {} : _b;
                var showStatusPickerAt = statusState.showStatusPickerAt;
                if (typeof showStatusPickerAt !== 'number') {
                    return null;
                }
                var target = findDomRefAtPos(showStatusPickerAt, domAtPos);
                var statusNode = editorView.state.doc.nodeAt(showStatusPickerAt);
                if (!statusNode || statusNode.type.name !== 'status') {
                    return null;
                }
                var _c = statusNode.attrs, text = _c.text, color = _c.color, localId = _c.localId;
                return (React.createElement(StatusPicker, { isNew: statusState.isNew, target: target, defaultText: text, defaultColor: color, defaultLocalId: localId, onSelect: function (status) {
                        updateStatus(status)(editorView.state, editorView.dispatch);
                    }, onTextChanged: function (status) {
                        updateStatus(status)(editorView.state, editorView.dispatch);
                    }, closeStatusPicker: function () {
                        commitStatusPicker()(editorView);
                    }, onEnter: function () {
                        commitStatusPicker()(editorView);
                    } }));
            } }));
    },
}); };
var decorateWithPluginOptions = function (plugin, options) {
    if (options.menuDisabled === true) {
        return plugin;
    }
    plugin.pluginsOptions = {
        quickInsert: function (_a) {
            var formatMessage = _a.formatMessage;
            return [
                {
                    title: formatMessage(messages.status),
                    description: formatMessage(messages.statusDescription),
                    priority: 700,
                    keywords: ['lozenge'],
                    icon: function () { return React.createElement(IconStatus, { label: formatMessage(messages.status) }); },
                    action: function (insert, state) {
                        return addAnalytics(state, createStatus()(insert, state), {
                            action: ACTION.INSERTED,
                            actionSubject: ACTION_SUBJECT.DOCUMENT,
                            actionSubjectId: ACTION_SUBJECT_ID.STATUS,
                            attributes: {
                                inputMethod: INPUT_METHOD.QUICK_INSERT,
                            },
                            eventType: EVENT_TYPE.TRACK,
                        });
                    },
                },
            ];
        },
    };
    return plugin;
};
var statusPlugin = function (options) {
    return decorateWithPluginOptions(baseStatusPlugin(options), options);
};
export default statusPlugin;
//# sourceMappingURL=index.js.map