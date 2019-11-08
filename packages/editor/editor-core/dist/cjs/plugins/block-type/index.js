"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var adf_schema_1 = require("@atlaskit/adf-schema");
var Toolbar_1 = require("../../ui/Toolbar");
var main_1 = require("./pm-plugins/main");
var keymap_1 = tslib_1.__importDefault(require("./pm-plugins/keymap"));
var input_rule_1 = tslib_1.__importDefault(require("./pm-plugins/input-rule"));
var ToolbarBlockType_1 = tslib_1.__importDefault(require("./ui/ToolbarBlockType"));
var WithPluginState_1 = tslib_1.__importDefault(require("../../ui/WithPluginState"));
var commands_1 = require("./commands");
var types_1 = require("./types");
var analytics_1 = require("../analytics");
var keymaps = tslib_1.__importStar(require("../../keymaps"));
var assets_1 = require("../quick-insert/assets");
var headingPluginOptions = function (_a) {
    var formatMessage = _a.formatMessage;
    return Array.from({ length: 6 }, function (_v, idx) {
        var level = (idx + 1);
        var descriptionDescriptor = types_1.messages["heading" + level + "Description"];
        var keyshortcut = keymaps.tooltip(keymaps["toggleHeading" + level]);
        return {
            title: formatMessage(types_1.messages["heading" + level]),
            description: formatMessage(descriptionDescriptor),
            priority: 1300,
            keywords: ["h" + level],
            keyshortcut: keyshortcut,
            icon: function () { return (React.createElement(assets_1.IconHeading, { level: level, label: formatMessage(descriptionDescriptor) })); },
            action: function (insert, state) {
                var tr = insert(state.schema.nodes.heading.createChecked({ level: level }));
                return analytics_1.addAnalytics(state, tr, {
                    action: analytics_1.ACTION.FORMATTED,
                    actionSubject: analytics_1.ACTION_SUBJECT.TEXT,
                    eventType: analytics_1.EVENT_TYPE.TRACK,
                    actionSubjectId: analytics_1.ACTION_SUBJECT_ID.FORMAT_HEADING,
                    attributes: {
                        inputMethod: analytics_1.INPUT_METHOD.QUICK_INSERT,
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
            { name: 'heading', node: adf_schema_1.heading },
            { name: 'blockquote', node: adf_schema_1.blockquote },
            { name: 'hardBreak', node: adf_schema_1.hardBreak },
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
                    return main_1.createPlugin(dispatch, options && options.lastNodeMustBeParagraph);
                },
            },
            {
                name: 'blockTypeInputRule',
                plugin: function (_a) {
                    var schema = _a.schema;
                    return input_rule_1.default(schema);
                },
            },
            // Needs to be lower priority than prosemirror-tables.tableEditing
            // plugin as it is currently swallowing right/down arrow events inside tables
            {
                name: 'blockTypeKeyMap',
                plugin: function (_a) {
                    var schema = _a.schema;
                    return keymap_1.default(schema);
                },
            },
        ];
    },
    primaryToolbarComponent: function (_a) {
        var editorView = _a.editorView, popupsMountPoint = _a.popupsMountPoint, popupsBoundariesElement = _a.popupsBoundariesElement, popupsScrollableElement = _a.popupsScrollableElement, toolbarSize = _a.toolbarSize, disabled = _a.disabled, isToolbarReducedSpacing = _a.isToolbarReducedSpacing, eventDispatcher = _a.eventDispatcher;
        var isSmall = toolbarSize < Toolbar_1.ToolbarSize.XL;
        var boundSetBlockType = function (name) {
            return commands_1.setBlockTypeWithAnalytics(name, analytics_1.INPUT_METHOD.TOOLBAR)(editorView.state, editorView.dispatch);
        };
        return (React.createElement(WithPluginState_1.default, { editorView: editorView, eventDispatcher: eventDispatcher, plugins: {
                pluginState: main_1.pluginKey,
            }, render: function (_a) {
                var pluginState = _a.pluginState;
                return (React.createElement(ToolbarBlockType_1.default, { isSmall: isSmall, isDisabled: disabled, isReducedSpacing: isToolbarReducedSpacing, setBlockType: boundSetBlockType, pluginState: pluginState, popupsMountPoint: popupsMountPoint, popupsBoundariesElement: popupsBoundariesElement, popupsScrollableElement: popupsScrollableElement }));
            } }));
    },
    pluginsOptions: {
        quickInsert: function (intl) {
            var formatMessage = intl.formatMessage;
            return tslib_1.__spread([
                {
                    title: formatMessage(types_1.messages.blockquote),
                    description: formatMessage(types_1.messages.blockquoteDescription),
                    priority: 1300,
                    keyshortcut: keymaps.tooltip(keymaps.toggleBlockQuote),
                    icon: function () { return React.createElement(assets_1.IconQuote, { label: formatMessage(types_1.messages.blockquote) }); },
                    action: function (insert, state) {
                        var tr = insert(state.schema.nodes.blockquote.createChecked({}, state.schema.nodes.paragraph.createChecked()));
                        return analytics_1.addAnalytics(state, tr, {
                            action: analytics_1.ACTION.FORMATTED,
                            actionSubject: analytics_1.ACTION_SUBJECT.TEXT,
                            eventType: analytics_1.EVENT_TYPE.TRACK,
                            actionSubjectId: analytics_1.ACTION_SUBJECT_ID.FORMAT_BLOCK_QUOTE,
                            attributes: {
                                inputMethod: analytics_1.INPUT_METHOD.QUICK_INSERT,
                            },
                        });
                    },
                }
            ], headingPluginOptions(intl));
        },
    },
}); };
exports.default = blockTypePlugin;
var main_2 = require("./pm-plugins/main");
exports.pluginKey = main_2.pluginKey;
//# sourceMappingURL=index.js.map