import * as React from 'react';
import { panel } from '@atlaskit/adf-schema';
import { messages } from '../block-type/types';
import { createPlugin } from './pm-plugins/main';
import { getToolbarConfig } from './toolbar';
import keymap from './pm-plugins/keymaps';
import { addAnalytics, ACTION, ACTION_SUBJECT, ACTION_SUBJECT_ID, INPUT_METHOD, EVENT_TYPE, PANEL_TYPE, } from '../analytics';
import { IconPanel, IconPanelNote, IconPanelSuccess, IconPanelWarning, IconPanelError, } from '../quick-insert/assets';
var insertPanelTypeWithAnalytics = function (panelType, state, insert) {
    var tr = insert(insertPanelType(panelType, state));
    if (tr) {
        addAnalytics(state, tr, {
            action: ACTION.INSERTED,
            actionSubject: ACTION_SUBJECT.DOCUMENT,
            actionSubjectId: ACTION_SUBJECT_ID.PANEL,
            attributes: {
                inputMethod: INPUT_METHOD.QUICK_INSERT,
                panelType: panelType,
            },
            eventType: EVENT_TYPE.TRACK,
        });
    }
    return tr;
};
var insertPanelType = function (panelType, state) {
    return state.schema.nodes.panel.createChecked({ panelType: panelType }, state.schema.nodes.paragraph.createChecked());
};
var panelPlugin = function () { return ({
    name: 'panel',
    nodes: function () {
        return [{ name: 'panel', node: panel }];
    },
    pmPlugins: function () {
        return [
            { name: 'panel', plugin: createPlugin },
            {
                name: 'panelKeyMap',
                plugin: function () { return keymap(); },
            },
        ];
    },
    pluginsOptions: {
        quickInsert: function (_a) {
            var formatMessage = _a.formatMessage;
            return [
                {
                    title: formatMessage(messages.infoPanel),
                    description: formatMessage(messages.infoPanelDescription),
                    keywords: ['info', 'panel'],
                    priority: 900,
                    icon: function () { return React.createElement(IconPanel, { label: formatMessage(messages.infoPanel) }); },
                    action: function (insert, state) {
                        return insertPanelTypeWithAnalytics(PANEL_TYPE.INFO, state, insert);
                    },
                },
                {
                    title: formatMessage(messages.notePanel),
                    description: formatMessage(messages.notePanelDescription),
                    keywords: ['note'],
                    priority: 1000,
                    icon: function () { return React.createElement(IconPanelNote, { label: formatMessage(messages.notePanel) }); },
                    action: function (insert, state) {
                        return insertPanelTypeWithAnalytics(PANEL_TYPE.NOTE, state, insert);
                    },
                },
                {
                    title: formatMessage(messages.successPanel),
                    description: formatMessage(messages.successPanelDescription),
                    keywords: ['success', 'tip'],
                    priority: 1000,
                    icon: function () { return (React.createElement(IconPanelSuccess, { label: formatMessage(messages.successPanel) })); },
                    action: function (insert, state) {
                        return insertPanelTypeWithAnalytics(PANEL_TYPE.SUCCESS, state, insert);
                    },
                },
                {
                    title: formatMessage(messages.warningPanel),
                    description: formatMessage(messages.warningPanelDescription),
                    keywords: ['warning'],
                    priority: 1000,
                    icon: function () { return (React.createElement(IconPanelWarning, { label: formatMessage(messages.warningPanel) })); },
                    action: function (insert, state) {
                        return insertPanelTypeWithAnalytics(PANEL_TYPE.WARNING, state, insert);
                    },
                },
                {
                    title: formatMessage(messages.errorPanel),
                    description: formatMessage(messages.errorPanelDescription),
                    keywords: ['error'],
                    priority: 1000,
                    icon: function () { return (React.createElement(IconPanelError, { label: formatMessage(messages.errorPanel) })); },
                    action: function (insert, state) {
                        return insertPanelTypeWithAnalytics(PANEL_TYPE.ERROR, state, insert);
                    },
                },
            ];
        },
        floatingToolbar: getToolbarConfig,
    },
}); };
export default panelPlugin;
//# sourceMappingURL=index.js.map