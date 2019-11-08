"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var adf_schema_1 = require("@atlaskit/adf-schema");
var main_1 = require("./pm-plugins/main");
var toolbar_1 = require("./toolbar");
var keymaps_1 = tslib_1.__importDefault(require("./pm-plugins/keymaps"));
var ide_ux_1 = tslib_1.__importDefault(require("./pm-plugins/ide-ux"));
var types_1 = require("../block-type/types");
var analytics_1 = require("../analytics");
var assets_1 = require("../quick-insert/assets");
var codeBlockPlugin = function (options) {
    if (options === void 0) { options = {}; }
    return ({
        name: 'codeBlock',
        nodes: function () {
            return [{ name: 'codeBlock', node: adf_schema_1.codeBlock }];
        },
        pmPlugins: function () {
            return [
                { name: 'codeBlock', plugin: main_1.createPlugin },
                {
                    name: 'codeBlockIDEKeyBindings',
                    plugin: function () { return (options.enableKeybindingsForIDE ? ide_ux_1.default : undefined); },
                },
                {
                    name: 'codeBlockKeyMap',
                    plugin: function (_a) {
                        var schema = _a.schema;
                        return keymaps_1.default(schema);
                    },
                },
            ];
        },
        pluginsOptions: {
            quickInsert: function (_a) {
                var formatMessage = _a.formatMessage;
                return [
                    {
                        title: formatMessage(types_1.messages.codeblock),
                        description: formatMessage(types_1.messages.codeblockDescription),
                        priority: 700,
                        keyshortcut: '```',
                        icon: function () { return React.createElement(assets_1.IconCode, { label: formatMessage(types_1.messages.codeblock) }); },
                        action: function (insert, state) {
                            var schema = state.schema;
                            var tr = insert(schema.nodes.codeBlock.createChecked());
                            return analytics_1.addAnalytics(state, tr, {
                                action: analytics_1.ACTION.INSERTED,
                                actionSubject: analytics_1.ACTION_SUBJECT.DOCUMENT,
                                actionSubjectId: analytics_1.ACTION_SUBJECT_ID.CODE_BLOCK,
                                attributes: { inputMethod: analytics_1.INPUT_METHOD.QUICK_INSERT },
                                eventType: analytics_1.EVENT_TYPE.TRACK,
                            });
                        },
                    },
                ];
            },
            floatingToolbar: toolbar_1.getToolbarConfig,
        },
    });
};
exports.default = codeBlockPlugin;
//# sourceMappingURL=index.js.map