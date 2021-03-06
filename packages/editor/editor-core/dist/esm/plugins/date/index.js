import * as React from 'react';
import { findDomRefAtPos } from 'prosemirror-utils';
import Loadable from 'react-loadable';
import { date } from '@atlaskit/adf-schema';
import { todayTimestampInUTC } from '@atlaskit/editor-common';
import WithPluginState from '../../ui/WithPluginState';
import { messages } from '../insert-block/ui/ToolbarInsertBlock';
import { insertDate, setDatePickerAt } from './actions';
import createDatePlugin, { pluginKey as datePluginKey, } from './plugin';
import keymap from './keymap';
import { pluginKey as editorDisabledPluginKey, } from '../editor-disabled';
import { IconDate } from '../quick-insert/assets';
import { addAnalytics, INPUT_METHOD, ACTION, ACTION_SUBJECT, ACTION_SUBJECT_ID, EVENT_TYPE, } from '../analytics';
var DatePicker = Loadable({
    loader: function () {
        return import(/* webpackChunkName:"@atlaskit-internal-editor-datepicker" */ './ui/DatePicker');
    },
    loading: function () { return null; },
});
var datePlugin = function () { return ({
    name: 'date',
    nodes: function () {
        return [{ name: 'date', node: date }];
    },
    pmPlugins: function () {
        return [
            {
                name: 'date',
                plugin: function (options) {
                    DatePicker.preload();
                    return createDatePlugin(options);
                },
            },
            {
                name: 'dateKeymap',
                plugin: function () {
                    DatePicker.preload();
                    return keymap();
                },
            },
        ];
    },
    contentComponent: function (_a) {
        var editorView = _a.editorView;
        var dispatch = editorView.dispatch;
        var domAtPos = editorView.domAtPos.bind(editorView);
        return (React.createElement(WithPluginState, { plugins: {
                datePlugin: datePluginKey,
                editorDisabledPlugin: editorDisabledPluginKey,
            }, render: function (_a) {
                var editorDisabledPlugin = _a.editorDisabledPlugin, datePlugin = _a.datePlugin;
                var showDatePickerAt = datePlugin && datePlugin.showDatePickerAt;
                if (!showDatePickerAt ||
                    (editorDisabledPlugin || {}).editorDisabled) {
                    return null;
                }
                var element = findDomRefAtPos(showDatePickerAt, domAtPos);
                return (React.createElement(DatePicker, { key: showDatePickerAt, element: element, onSelect: function (date) {
                        return insertDate(date)(editorView.state, dispatch);
                    }, closeDatePicker: function () {
                        return setDatePickerAt(null)(editorView.state, dispatch);
                    } }));
            } }));
    },
    pluginsOptions: {
        quickInsert: function (_a) {
            var formatMessage = _a.formatMessage;
            return [
                {
                    title: formatMessage(messages.date),
                    description: formatMessage(messages.dateDescription),
                    priority: 800,
                    keywords: ['time', 'today', '/'],
                    keyshortcut: '//',
                    icon: function () { return React.createElement(IconDate, { label: formatMessage(messages.date) }); },
                    action: function (insert, state) {
                        var dateNode = state.schema.nodes.date.createChecked({
                            timestamp: todayTimestampInUTC(),
                        });
                        var tr = insert(dateNode, { selectInlineNode: true });
                        addAnalytics(state, tr, {
                            action: ACTION.INSERTED,
                            actionSubject: ACTION_SUBJECT.DOCUMENT,
                            actionSubjectId: ACTION_SUBJECT_ID.DATE,
                            eventType: EVENT_TYPE.TRACK,
                            attributes: { inputMethod: INPUT_METHOD.QUICK_INSERT },
                        });
                        return tr.setMeta(datePluginKey, {
                            showDatePickerAt: tr.selection.from,
                        });
                    },
                },
            ];
        },
    },
}); };
export default datePlugin;
//# sourceMappingURL=index.js.map