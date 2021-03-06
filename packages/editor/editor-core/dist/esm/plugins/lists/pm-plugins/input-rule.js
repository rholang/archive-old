import { __read, __spread } from "tslib";
import { inputRules, wrappingInputRule, } from 'prosemirror-inputrules';
import { analyticsService, trackAndInvoke } from '../../../analytics';
import { createInputRule as defaultCreateInputRule, defaultInputRuleHandler, leafNodeReplacementCharacter, } from '../../../utils/input-rules';
import { ruleWithAnalytics, ACTION, ACTION_SUBJECT, ACTION_SUBJECT_ID, EVENT_TYPE, INPUT_METHOD, } from '../../analytics';
export function createInputRule(regexp, nodeType) {
    return wrappingInputRule(regexp, nodeType, {}, function (_, node) { return node.type === nodeType; });
}
export var insertList = function (state, listType, listTypeName, start, end) {
    // To ensure that match is done after HardBreak.
    var hardBreak = state.schema.nodes.hardBreak;
    if (state.doc.resolve(start).nodeAfter.type !== hardBreak) {
        return null;
    }
    // To ensure no nesting is done.
    if (state.doc.resolve(start).depth > 1) {
        return null;
    }
    // Track event
    analyticsService.trackEvent("atlassian.editor.format.list." + listTypeName + ".autoformatting");
    // Split at the start of autoformatting and delete formatting characters.
    var tr = state.tr.delete(start, end).split(start);
    // If node has more content split at the end of autoformatting.
    var currentNode = tr.doc.nodeAt(start + 1);
    tr.doc.nodesBetween(start, start + currentNode.nodeSize, function (node, pos) {
        if (node.type === hardBreak) {
            tr = tr.split(pos + 1).delete(pos, pos + 1);
        }
    });
    // Wrap content in list node
    var listItem = state.schema.nodes.listItem;
    var position = tr.doc.resolve(start + 2);
    var range = position.blockRange(position);
    tr = tr.wrap(range, [{ type: listType }, { type: listItem }]);
    return tr;
};
/**
 * Create input rules for bullet list node
 *
 * @param {Schema} schema
 * @returns {InputRule[]}
 */
function getBulletListInputRules(schema) {
    var ruleWithBulletListAnalytics = ruleWithAnalytics(function () { return ({
        action: ACTION.FORMATTED,
        actionSubject: ACTION_SUBJECT.TEXT,
        actionSubjectId: ACTION_SUBJECT_ID.FORMAT_LIST_BULLET,
        eventType: EVENT_TYPE.TRACK,
        attributes: {
            inputMethod: INPUT_METHOD.FORMATTING,
        },
    }); });
    // NOTE: we decided to restrict the creation of bullet lists to only "*"x
    var asteriskRule = defaultInputRuleHandler(createInputRule(/^\s*([\*\-]) $/, schema.nodes.bulletList), true);
    asteriskRule.handler = trackAndInvoke('atlassian.editor.format.list.bullet.autoformatting', asteriskRule.handler);
    var leafNodeAsteriskRule = defaultCreateInputRule(new RegExp(leafNodeReplacementCharacter + "\\s*([\\*\\-]) $"), function (state, _match, start, end) {
        return insertList(state, schema.nodes.bulletList, 'bullet', start, end);
    }, true);
    return [
        ruleWithBulletListAnalytics(asteriskRule),
        ruleWithBulletListAnalytics(leafNodeAsteriskRule),
    ];
}
/**
 * Create input rules for strong mark
 *
 * @param {Schema} schema
 * @returns {InputRule[]}
 */
function getOrderedListInputRules(schema) {
    var ruleWithOrderedListAnalytics = ruleWithAnalytics(function () { return ({
        action: ACTION.FORMATTED,
        actionSubject: ACTION_SUBJECT.TEXT,
        actionSubjectId: ACTION_SUBJECT_ID.FORMAT_LIST_NUMBER,
        eventType: EVENT_TYPE.TRACK,
        attributes: {
            inputMethod: INPUT_METHOD.FORMATTING,
        },
    }); });
    // NOTE: There is a built in input rule for ordered lists in ProseMirror. However, that
    // input rule will allow for a list to start at any given number, which isn't allowed in
    // markdown (where a ordered list will always start on 1). This is a slightly modified
    // version of that input rule.
    var numberOneRule = defaultInputRuleHandler(createInputRule(/^(1)[\.\)] $/, schema.nodes.orderedList), true);
    numberOneRule.handler = trackAndInvoke('atlassian.editor.format.list.numbered.autoformatting', numberOneRule.handler);
    var leafNodeNumberOneRule = defaultCreateInputRule(new RegExp(leafNodeReplacementCharacter + "(1)[\\.\\)] $"), function (state, _match, start, end) {
        return insertList(state, schema.nodes.orderedList, 'numbered', start, end);
    }, true);
    return [
        ruleWithOrderedListAnalytics(numberOneRule),
        ruleWithOrderedListAnalytics(leafNodeNumberOneRule),
    ];
}
export default function inputRulePlugin(schema) {
    var rules = [];
    if (schema.nodes.bulletList) {
        rules.push.apply(rules, __spread(getBulletListInputRules(schema)));
    }
    if (schema.nodes.orderedList) {
        rules.push.apply(rules, __spread(getOrderedListInputRules(schema)));
    }
    if (rules.length !== 0) {
        return inputRules({ rules: rules });
    }
    return;
}
//# sourceMappingURL=input-rule.js.map