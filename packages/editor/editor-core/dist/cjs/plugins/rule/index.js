"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var adf_schema_1 = require("@atlaskit/adf-schema");
var ToolbarInsertBlock_1 = require("../insert-block/ui/ToolbarInsertBlock");
var keymap_1 = tslib_1.__importDefault(require("./pm-plugins/keymap"));
var input_rule_1 = tslib_1.__importDefault(require("./pm-plugins/input-rule"));
var analytics_1 = require("../analytics");
var assets_1 = require("../quick-insert/assets");
var insert_1 = require("../../utils/insert");
var prosemirror_model_1 = require("prosemirror-model");
var shared_context_1 = require("../shared-context");
var rulePlugin = function () { return ({
    name: 'rule',
    nodes: function () {
        return [{ name: 'rule', node: adf_schema_1.rule }];
    },
    pmPlugins: function () {
        return [
            {
                name: 'ruleInputRule',
                plugin: function (_a) {
                    var schema = _a.schema;
                    return input_rule_1.default(schema);
                },
            },
            {
                name: 'ruleKeymap',
                plugin: function () { return keymap_1.default(); },
            },
        ];
    },
    pluginsOptions: {
        quickInsert: function (_a) {
            var formatMessage = _a.formatMessage;
            return [
                {
                    title: formatMessage(ToolbarInsertBlock_1.messages.horizontalRule),
                    description: formatMessage(ToolbarInsertBlock_1.messages.horizontalRuleDescription),
                    keywords: ['horizontal rule', 'rule', 'line'],
                    priority: 1200,
                    keyshortcut: '---',
                    icon: function () { return (React.createElement(assets_1.IconDivider, { label: formatMessage(ToolbarInsertBlock_1.messages.horizontalRule) })); },
                    action: function (insert, state) {
                        var tr = null;
                        var allowNewInsertionBehaviour = shared_context_1.getEditorProps(state).allowNewInsertionBehaviour;
                        if (allowNewInsertionBehaviour) {
                            /**
                             * This is a workaround to get rid of the typeahead text when using quick insert
                             * Once we insert *nothing*, we get a new transaction, so we can use the new selection
                             * without considering the extra text after the `/` command.
                             **/
                            tr = insert(prosemirror_model_1.Fragment.empty);
                            tr = insert_1.safeInsert(state.schema.nodes.rule.createChecked(), tr.selection.from)(tr);
                        }
                        if (!tr) {
                            tr = insert(state.schema.nodes.rule.createChecked());
                        }
                        return analytics_1.addAnalytics(state, tr, {
                            action: analytics_1.ACTION.INSERTED,
                            actionSubject: analytics_1.ACTION_SUBJECT.DOCUMENT,
                            actionSubjectId: analytics_1.ACTION_SUBJECT_ID.DIVIDER,
                            attributes: { inputMethod: analytics_1.INPUT_METHOD.QUICK_INSERT },
                            eventType: analytics_1.EVENT_TYPE.TRACK,
                        });
                    },
                },
            ];
        },
    },
}); };
exports.default = rulePlugin;
//# sourceMappingURL=index.js.map