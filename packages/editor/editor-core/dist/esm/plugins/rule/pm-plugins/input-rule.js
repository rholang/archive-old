import { inputRules } from 'prosemirror-inputrules';
import { Fragment } from 'prosemirror-model';
import { analyticsService } from '../../../analytics';
import { createInputRule, leafNodeReplacementCharacter, } from '../../../utils/input-rules';
import { addAnalytics, ACTION, ACTION_SUBJECT, ACTION_SUBJECT_ID, INPUT_METHOD, EVENT_TYPE, } from '../../analytics';
import { safeInsert } from '../../../utils/insert';
import { getEditorProps } from '../../shared-context';
export var createHorizontalRule = function (state, start, end, inputMethod) {
    if (!state.selection.empty) {
        return null;
    }
    var tr = null;
    var allowNewInsertionBehaviour = getEditorProps(state).allowNewInsertionBehaviour;
    if (allowNewInsertionBehaviour) {
        /**
         * This is a workaround to get rid of the typeahead text when using quick insert
         * Once we insert *nothing*, we get a new transaction, so we can use the new selection
         * without considering the extra text after the `/` command.
         **/
        tr = state.tr.replaceWith(start, end, Fragment.empty);
        tr = safeInsert(state.schema.nodes.rule.createChecked(), tr.selection.from)(tr);
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
        tr = state.tr.replaceWith(start, end, Fragment.from(state.schema.nodes.rule.createChecked()));
    }
    return addAnalytics(state, tr, {
        action: ACTION.INSERTED,
        actionSubject: ACTION_SUBJECT.DOCUMENT,
        actionSubjectId: ACTION_SUBJECT_ID.DIVIDER,
        attributes: { inputMethod: inputMethod },
        eventType: EVENT_TYPE.TRACK,
    });
};
var createHorizontalRuleAutoformat = function (state, start, end) {
    analyticsService.trackEvent("atlassian.editor.format.horizontalrule.autoformatting");
    return createHorizontalRule(state, start, end, INPUT_METHOD.FORMATTING);
};
export function inputRulePlugin(schema) {
    var rules = [];
    if (schema.nodes.rule) {
        // '---' and '***' for hr
        rules.push(
        // -1, so that it also replaces the container paragraph
        createInputRule(/^(\-\-\-|\*\*\*)$/, function (state, _match, start, end) {
            return createHorizontalRuleAutoformat(state, start - 1, end);
        }, true));
        // '---' and '***' after shift+enter for hr
        rules.push(createInputRule(new RegExp(leafNodeReplacementCharacter + "(\\-\\-\\-|\\*\\*\\*)"), function (state, _match, start, end) {
            var hardBreak = state.schema.nodes.hardBreak;
            if (state.doc.resolve(start).nodeAfter.type !== hardBreak) {
                return null;
            }
            return createHorizontalRuleAutoformat(state, start, end);
        }, true));
    }
    if (rules.length !== 0) {
        return inputRules({ rules: rules });
    }
    return;
}
export default inputRulePlugin;
//# sourceMappingURL=input-rule.js.map