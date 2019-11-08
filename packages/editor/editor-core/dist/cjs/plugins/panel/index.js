"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var adf_schema_1 = require("@atlaskit/adf-schema");
var types_1 = require("../block-type/types");
var main_1 = require("./pm-plugins/main");
var toolbar_1 = require("./toolbar");
var keymaps_1 = tslib_1.__importDefault(require("./pm-plugins/keymaps"));
var analytics_1 = require("../analytics");
var assets_1 = require("../quick-insert/assets");
var insertPanelTypeWithAnalytics = function (panelType, state, insert) {
    var tr = insert(insertPanelType(panelType, state));
    if (tr) {
        analytics_1.addAnalytics(state, tr, {
            action: analytics_1.ACTION.INSERTED,
            actionSubject: analytics_1.ACTION_SUBJECT.DOCUMENT,
            actionSubjectId: analytics_1.ACTION_SUBJECT_ID.PANEL,
            attributes: {
                inputMethod: analytics_1.INPUT_METHOD.QUICK_INSERT,
                panelType: panelType,
            },
            eventType: analytics_1.EVENT_TYPE.TRACK,
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
        return [{ name: 'panel', node: adf_schema_1.panel }];
    },
    pmPlugins: function () {
        return [
            { name: 'panel', plugin: main_1.createPlugin },
            {
                name: 'panelKeyMap',
                plugin: function () { return keymaps_1.default(); },
            },
        ];
    },
    pluginsOptions: {
        quickInsert: function (_a) {
            var formatMessage = _a.formatMessage;
            return [
                {
                    title: formatMessage(types_1.messages.infoPanel),
                    description: formatMessage(types_1.messages.infoPanelDescription),
                    keywords: ['info', 'panel'],
                    priority: 900,
                    icon: function () { return React.createElement(assets_1.IconPanel, { label: formatMessage(types_1.messages.infoPanel) }); },
                    action: function (insert, state) {
                        return insertPanelTypeWithAnalytics(analytics_1.PANEL_TYPE.INFO, state, insert);
                    },
                },
                {
                    title: formatMessage(types_1.messages.notePanel),
                    description: formatMessage(types_1.messages.notePanelDescription),
                    keywords: ['note'],
                    priority: 1000,
                    icon: function () { return React.createElement(assets_1.IconPanelNote, { label: formatMessage(types_1.messages.notePanel) }); },
                    action: function (insert, state) {
                        return insertPanelTypeWithAnalytics(analytics_1.PANEL_TYPE.NOTE, state, insert);
                    },
                },
                {
                    title: formatMessage(types_1.messages.successPanel),
                    description: formatMessage(types_1.messages.successPanelDescription),
                    keywords: ['success', 'tip'],
                    priority: 1000,
                    icon: function () { return (React.createElement(assets_1.IconPanelSuccess, { label: formatMessage(types_1.messages.successPanel) })); },
                    action: function (insert, state) {
                        return insertPanelTypeWithAnalytics(analytics_1.PANEL_TYPE.SUCCESS, state, insert);
                    },
                },
                {
                    title: formatMessage(types_1.messages.warningPanel),
                    description: formatMessage(types_1.messages.warningPanelDescription),
                    keywords: ['warning'],
                    priority: 1000,
                    icon: function () { return (React.createElement(assets_1.IconPanelWarning, { label: formatMessage(types_1.messages.warningPanel) })); },
                    action: function (insert, state) {
                        return insertPanelTypeWithAnalytics(analytics_1.PANEL_TYPE.WARNING, state, insert);
                    },
                },
                {
                    title: formatMessage(types_1.messages.errorPanel),
                    description: formatMessage(types_1.messages.errorPanelDescription),
                    keywords: ['error'],
                    priority: 1000,
                    icon: function () { return (React.createElement(assets_1.IconPanelError, { label: formatMessage(types_1.messages.errorPanel) })); },
                    action: function (insert, state) {
                        return insertPanelTypeWithAnalytics(analytics_1.PANEL_TYPE.ERROR, state, insert);
                    },
                },
            ];
        },
        floatingToolbar: toolbar_1.getToolbarConfig,
    },
}); };
exports.default = panelPlugin;
//# sourceMappingURL=index.js.map