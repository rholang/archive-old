"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prosemirror_inputrules_1 = require("prosemirror-inputrules");
var analytics_1 = require("../../../analytics");
var input_rules_1 = require("../../../utils/input-rules");
var analytics_2 = require("../../analytics");
function createInputRule(regexp, nodeType) {
    return prosemirror_inputrules_1.wrappingInputRule(regexp, nodeType, {}, function (_, node) { return node.type === nodeType; });
}
exports.createInputRule = createInputRule;
exports.insertList = function (state, listType, listTypeName, start, end) {
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
    analytics_1.analyticsService.trackEvent("atlassian.editor.format.list." + listTypeName + ".autoformatting");
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
    var ruleWithBulletListAnalytics = analytics_2.ruleWithAnalytics(function () { return ({
        action: analytics_2.ACTION.FORMATTED,
        actionSubject: analytics_2.ACTION_SUBJECT.TEXT,
        actionSubjectId: analytics_2.ACTION_SUBJECT_ID.FORMAT_LIST_BULLET,
        eventType: analytics_2.EVENT_TYPE.TRACK,
        attributes: {
            inputMethod: analytics_2.INPUT_METHOD.FORMATTING,
        },
    }); });
    // NOTE: we decided to restrict the creation of bullet lists to only "*"x
    var asteriskRule = input_rules_1.defaultInputRuleHandler(createInputRule(/^\s*([\*\-]) $/, schema.nodes.bulletList), true);
    asteriskRule.handler = analytics_1.trackAndInvoke('atlassian.editor.format.list.bullet.autoformatting', asteriskRule.handler);
    var leafNodeAsteriskRule = input_rules_1.createInputRule(new RegExp(input_rules_1.leafNodeReplacementCharacter + "\\s*([\\*\\-]) $"), function (state, _match, start, end) {
        return exports.insertList(state, schema.nodes.bulletList, 'bullet', start, end);
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
    var ruleWithOrderedListAnalytics = analytics_2.ruleWithAnalytics(function () { return ({
        action: analytics_2.ACTION.FORMATTED,
        actionSubject: analytics_2.ACTION_SUBJECT.TEXT,
        actionSubjectId: analytics_2.ACTION_SUBJECT_ID.FORMAT_LIST_NUMBER,
        eventType: analytics_2.EVENT_TYPE.TRACK,
        attributes: {
            inputMethod: analytics_2.INPUT_METHOD.FORMATTING,
        },
    }); });
    // NOTE: There is a built in input rule for ordered lists in ProseMirror. However, that
    // input rule will allow for a list to start at any given number, which isn't allowed in
    // markdown (where a ordered list will always start on 1). This is a slightly modified
    // version of that input rule.
    var numberOneRule = input_rules_1.defaultInputRuleHandler(createInputRule(/^(1)[\.\)] $/, schema.nodes.orderedList), true);
    numberOneRule.handler = analytics_1.trackAndInvoke('atlassian.editor.format.list.numbered.autoformatting', numberOneRule.handler);
    var leafNodeNumberOneRule = input_rules_1.createInputRule(new RegExp(input_rules_1.leafNodeReplacementCharacter + "(1)[\\.\\)] $"), function (state, _match, start, end) {
        return exports.insertList(state, schema.nodes.orderedList, 'numbered', start, end);
    }, true);
    return [
        ruleWithOrderedListAnalytics(numberOneRule),
        ruleWithOrderedListAnalytics(leafNodeNumberOneRule),
    ];
}
function inputRulePlugin(schema) {
    var rules = [];
    if (schema.nodes.bulletList) {
        rules.push.apply(rules, tslib_1.__spread(getBulletListInputRules(schema)));
    }
    if (schema.nodes.orderedList) {
        rules.push.apply(rules, tslib_1.__spread(getOrderedListInputRules(schema)));
    }
    if (rules.length !== 0) {
        return prosemirror_inputrules_1.inputRules({ rules: rules });
    }
    return;
}
exports.default = inputRulePlugin;
//# sourceMappingURL=input-rule.js.map