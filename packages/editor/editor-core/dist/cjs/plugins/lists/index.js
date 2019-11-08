"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var adf_schema_1 = require("@atlaskit/adf-schema");
var Toolbar_1 = require("../../ui/Toolbar");
var ToolbarLists_1 = tslib_1.__importDefault(require("./ui/ToolbarLists"));
var main_1 = require("./pm-plugins/main");
var input_rule_1 = tslib_1.__importDefault(require("./pm-plugins/input-rule"));
var keymap_1 = tslib_1.__importDefault(require("./pm-plugins/keymap"));
var WithPluginState_1 = tslib_1.__importDefault(require("../../ui/WithPluginState"));
var messages_1 = require("../lists/messages");
var analytics_1 = require("../analytics");
var keymaps_1 = require("../../keymaps");
var assets_1 = require("../quick-insert/assets");
var listPlugin = function () { return ({
    name: 'list',
    nodes: function () {
        return [
            { name: 'bulletList', node: adf_schema_1.bulletList },
            { name: 'orderedList', node: adf_schema_1.orderedList },
            { name: 'listItem', node: adf_schema_1.listItem },
        ];
    },
    pmPlugins: function () {
        return [
            { name: 'lists', plugin: function (_a) {
                    var dispatch = _a.dispatch;
                    return main_1.createPlugin(dispatch);
                } },
            {
                name: 'listsInputRule',
                plugin: function (_a) {
                    var schema = _a.schema;
                    return input_rule_1.default(schema);
                },
            },
            { name: 'listsKeymap', plugin: function () { return keymap_1.default(); } },
        ];
    },
    pluginsOptions: {
        quickInsert: function (_a) {
            var formatMessage = _a.formatMessage;
            return [
                {
                    title: formatMessage(messages_1.messages.unorderedList),
                    description: formatMessage(messages_1.messages.unorderedListDescription),
                    keywords: ['ul', 'unordered list'],
                    priority: 1100,
                    keyshortcut: keymaps_1.tooltip(keymaps_1.toggleBulletList),
                    icon: function () { return React.createElement(assets_1.IconList, { label: formatMessage(messages_1.messages.unorderedList) }); },
                    action: function (insert, state) {
                        var tr = insert(state.schema.nodes.bulletList.createChecked({}, state.schema.nodes.listItem.createChecked({}, state.schema.nodes.paragraph.createChecked())));
                        return analytics_1.addAnalytics(state, tr, {
                            action: analytics_1.ACTION.FORMATTED,
                            actionSubject: analytics_1.ACTION_SUBJECT.TEXT,
                            actionSubjectId: analytics_1.ACTION_SUBJECT_ID.FORMAT_LIST_BULLET,
                            eventType: analytics_1.EVENT_TYPE.TRACK,
                            attributes: {
                                inputMethod: analytics_1.INPUT_METHOD.QUICK_INSERT,
                            },
                        });
                    },
                },
                {
                    title: formatMessage(messages_1.messages.orderedList),
                    description: formatMessage(messages_1.messages.orderedListDescription),
                    keywords: ['ol', 'ordered list', 'numbered list'],
                    priority: 1200,
                    keyshortcut: keymaps_1.tooltip(keymaps_1.toggleOrderedList),
                    icon: function () { return (React.createElement(assets_1.IconListNumber, { label: formatMessage(messages_1.messages.orderedList) })); },
                    action: function (insert, state) {
                        var tr = insert(state.schema.nodes.orderedList.createChecked({}, state.schema.nodes.listItem.createChecked({}, state.schema.nodes.paragraph.createChecked())));
                        return analytics_1.addAnalytics(state, tr, {
                            action: analytics_1.ACTION.FORMATTED,
                            actionSubject: analytics_1.ACTION_SUBJECT.TEXT,
                            actionSubjectId: analytics_1.ACTION_SUBJECT_ID.FORMAT_LIST_NUMBER,
                            eventType: analytics_1.EVENT_TYPE.TRACK,
                            attributes: {
                                inputMethod: analytics_1.INPUT_METHOD.QUICK_INSERT,
                            },
                        });
                    },
                },
            ];
        },
    },
    primaryToolbarComponent: function (_a) {
        var editorView = _a.editorView, popupsMountPoint = _a.popupsMountPoint, popupsBoundariesElement = _a.popupsBoundariesElement, popupsScrollableElement = _a.popupsScrollableElement, toolbarSize = _a.toolbarSize, disabled = _a.disabled, isToolbarReducedSpacing = _a.isToolbarReducedSpacing;
        var isSmall = toolbarSize < Toolbar_1.ToolbarSize.L;
        var isSeparator = toolbarSize >= Toolbar_1.ToolbarSize.S;
        return (React.createElement(WithPluginState_1.default, { plugins: { listsState: main_1.pluginKey }, render: function (_a) {
                var listsState = _a.listsState;
                return (React.createElement(ToolbarLists_1.default, { isSmall: isSmall, isSeparator: isSeparator, isReducedSpacing: isToolbarReducedSpacing, disabled: disabled, editorView: editorView, popupsMountPoint: popupsMountPoint, popupsBoundariesElement: popupsBoundariesElement, popupsScrollableElement: popupsScrollableElement, bulletListActive: listsState.bulletListActive, bulletListDisabled: listsState.bulletListDisabled, orderedListActive: listsState.orderedListActive, orderedListDisabled: listsState.orderedListDisabled }));
            } }));
    },
}); };
exports.default = listPlugin;
//# sourceMappingURL=index.js.map