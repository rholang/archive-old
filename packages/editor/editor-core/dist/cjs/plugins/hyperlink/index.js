"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var adf_schema_1 = require("@atlaskit/adf-schema");
var input_rule_1 = require("./pm-plugins/input-rule");
var keymap_1 = require("./pm-plugins/keymap");
var main_1 = require("./pm-plugins/main");
var fake_cursor_for_toolbar_1 = tslib_1.__importDefault(require("./pm-plugins/fake-cursor-for-toolbar"));
var ToolbarInsertBlock_1 = require("../insert-block/ui/ToolbarInsertBlock");
var analytics_1 = require("../analytics");
var Toolbar_1 = require("./Toolbar");
var keymaps_1 = require("../../keymaps");
var assets_1 = require("../quick-insert/assets");
var hyperlinkPlugin = function () { return ({
    name: 'hyperlink',
    marks: function () {
        return [{ name: 'link', mark: adf_schema_1.link }];
    },
    pmPlugins: function () {
        return [
            { name: 'hyperlink', plugin: function (_a) {
                    var dispatch = _a.dispatch;
                    return main_1.plugin(dispatch);
                } },
            {
                name: 'fakeCursorToolbarPlugin',
                plugin: function () { return fake_cursor_for_toolbar_1.default; },
            },
            {
                name: 'hyperlinkInputRule',
                plugin: function (_a) {
                    var schema = _a.schema;
                    return input_rule_1.createInputRulePlugin(schema);
                },
            },
            {
                name: 'hyperlinkKeymap',
                plugin: function () { return keymap_1.createKeymapPlugin(); },
            },
        ];
    },
    pluginsOptions: {
        quickInsert: function (_a) {
            var formatMessage = _a.formatMessage;
            return [
                {
                    title: formatMessage(ToolbarInsertBlock_1.messages.link),
                    description: formatMessage(ToolbarInsertBlock_1.messages.linkDescription),
                    keywords: ['url', 'link', 'hyperlink'],
                    priority: 1200,
                    keyshortcut: keymaps_1.tooltip(keymaps_1.addLink),
                    icon: function () { return React.createElement(assets_1.IconLink, { label: formatMessage(ToolbarInsertBlock_1.messages.link) }); },
                    action: function (_insert, state) {
                        var pos = state.selection.from;
                        var nodeBefore = state.selection.$from.nodeBefore;
                        if (!nodeBefore) {
                            return false;
                        }
                        var tr = state.tr
                            .setMeta(main_1.stateKey, { type: main_1.LinkAction.SHOW_INSERT_TOOLBAR })
                            .delete(pos - nodeBefore.nodeSize, pos);
                        return analytics_1.addAnalytics(state, tr, {
                            action: analytics_1.ACTION.INVOKED,
                            actionSubject: analytics_1.ACTION_SUBJECT.TYPEAHEAD,
                            actionSubjectId: analytics_1.ACTION_SUBJECT_ID.TYPEAHEAD_LINK,
                            attributes: { inputMethod: analytics_1.INPUT_METHOD.QUICK_INSERT },
                            eventType: analytics_1.EVENT_TYPE.UI,
                        });
                    },
                },
            ];
        },
        floatingToolbar: Toolbar_1.getToolbarConfig,
    },
}); };
exports.default = hyperlinkPlugin;
//# sourceMappingURL=index.js.map