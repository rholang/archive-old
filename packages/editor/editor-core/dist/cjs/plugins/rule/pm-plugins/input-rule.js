"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prosemirror_inputrules_1 = require("prosemirror-inputrules");
var prosemirror_model_1 = require("prosemirror-model");
var analytics_1 = require("../../../analytics");
var input_rules_1 = require("../../../utils/input-rules");
var analytics_2 = require("../../analytics");
var insert_1 = require("../../../utils/insert");
var shared_context_1 = require("../../shared-context");
exports.createHorizontalRule = function (state, start, end, inputMethod) {
    if (!state.selection.empty) {
        return null;
    }
    var tr = null;
    var allowNewInsertionBehaviour = shared_context_1.getEditorProps(state).allowNewInsertionBehaviour;
    if (allowNewInsertionBehaviour) {
        /**
         * This is a workaround to get rid of the typeahead text when using quick insert
         * Once we insert *nothing*, we get a new transaction, so we can use the new selection
         * without considering the extra text after the `/` command.
         **/
        tr = state.tr.replaceWith(start, end, prosemirror_model_1.Fragment.empty);
        tr = insert_1.safeInsert(state.schema.nodes.rule.createChecked(), tr.selection.from)(tr);
    }
    if (!tr) {
        var $from = state.selection.$from;
        var $afterRule = state.doc.resolve($from.after());
        var paragraph = state.schema.nodes.paragraph;
        if ($afterRule.nodeAfter && $afterRule.nodeAfter.type === paragraph) {
            // if there's already a paragraph after, just insert the rule into
            // the current paragraph
            end = end + 1;
        }
        tr = state.tr.replaceWith(start, end, prosemirror_model_1.Fragment.from(state.schema.nodes.rule.createChecked()));
    }
    return analytics_2.addAnalytics(state, tr, {
        action: analytics_2.ACTION.INSERTED,
        actionSubject: analytics_2.ACTION_SUBJECT.DOCUMENT,
        actionSubjectId: analytics_2.ACTION_SUBJECT_ID.DIVIDER,
        attributes: { inputMethod: inputMethod },
        eventType: analytics_2.EVENT_TYPE.TRACK,
    });
};
var createHorizontalRuleAutoformat = function (state, start, end) {
    analytics_1.analyticsService.trackEvent("atlassian.editor.format.horizontalrule.autoformatting");
    return exports.createHorizontalRule(state, start, end, analytics_2.INPUT_METHOD.FORMATTING);
};
function inputRulePlugin(schema) {
    var rules = [];
    if (schema.nodes.rule) {
        // '---' and '***' for hr
        rules.push(
        // -1, so that it also replaces the container paragraph
        input_rules_1.createInputRule(/^(\-\-\-|\*\*\*)$/, function (state, _match, start, end) {
            return createHorizontalRuleAutoformat(state, start - 1, end);
        }, true));
        // '---' and '***' after shift+enter for hr
        rules.push(input_rules_1.createInputRule(new RegExp(input_rules_1.leafNodeReplacementCharacter + "(\\-\\-\\-|\\*\\*\\*)"), function (state, _match, start, end) {
            var hardBreak = state.schema.nodes.hardBreak;
            if (state.doc.resolve(start).nodeAfter.type !== hardBreak) {
                return null;
            }
            return createHorizontalRuleAutoformat(state, start, end);
        }, true));
    }
    if (rules.length !== 0) {
        return prosemirror_inputrules_1.inputRules({ rules: rules });
    }
    return;
}
exports.inputRulePlugin = inputRulePlugin;
exports.default = inputRulePlugin;
//# sourceMappingURL=input-rule.js.map