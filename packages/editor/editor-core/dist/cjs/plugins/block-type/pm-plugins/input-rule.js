"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prosemirror_inputrules_1 = require("prosemirror-inputrules");
var analytics_1 = require("../../../analytics");
var input_rules_1 = require("../../../utils/input-rules");
var transform_to_code_block_1 = require("../commands/transform-to-code-block");
var insert_block_1 = require("../commands/insert-block");
var prosemirror_utils_1 = require("prosemirror-utils");
var analytics_2 = require("../../analytics");
var MAX_HEADING_LEVEL = 6;
function getHeadingLevel(match) {
    return {
        level: match[1].length,
    };
}
function headingRule(nodeType, maxLevel) {
    return prosemirror_inputrules_1.textblockTypeInputRule(new RegExp('^(#{1,' + maxLevel + '})\\s$'), nodeType, getHeadingLevel);
}
exports.headingRule = headingRule;
function blockQuoteRule(nodeType) {
    return prosemirror_inputrules_1.wrappingInputRule(/^\s*>\s$/, nodeType);
}
exports.blockQuoteRule = blockQuoteRule;
function codeBlockRule(nodeType) {
    return prosemirror_inputrules_1.textblockTypeInputRule(/^```$/, nodeType);
}
exports.codeBlockRule = codeBlockRule;
/**
 * Get heading rules
 *
 * @param {Schema} schema
 * @returns {InputRuleWithHandler[]}
 */
function getHeadingRules(schema) {
    // '# ' for h1, '## ' for h2 and etc
    var hashRule = input_rules_1.defaultInputRuleHandler(headingRule(schema.nodes.heading, MAX_HEADING_LEVEL), true);
    var leftNodeReplacementHashRule = input_rules_1.createInputRule(new RegExp(input_rules_1.leafNodeReplacementCharacter + "(#{1,6})\\s$"), function (state, match, start, end) {
        var level = match[1].length;
        return insert_block_1.insertBlock(state, schema.nodes.heading, "heading" + level, start, end, { level: level });
    }, true);
    // Old analytics stuff
    var currentHandler = hashRule.handler;
    hashRule.handler = function (state, match, start, end) {
        analytics_1.analyticsService.trackEvent("atlassian.editor.format.heading" + match[1].length + ".autoformatting");
        return currentHandler(state, match, start, end);
    };
    // New analytics handler
    var ruleWithHeadingAnalytics = analytics_2.ruleWithAnalytics(function (_state, match) { return ({
        action: analytics_2.ACTION.FORMATTED,
        actionSubject: analytics_2.ACTION_SUBJECT.TEXT,
        eventType: analytics_2.EVENT_TYPE.TRACK,
        actionSubjectId: analytics_2.ACTION_SUBJECT_ID.FORMAT_HEADING,
        attributes: {
            inputMethod: analytics_2.INPUT_METHOD.FORMATTING,
            newHeadingLevel: getHeadingLevel(match).level,
        },
    }); });
    return [
        ruleWithHeadingAnalytics(hashRule),
        ruleWithHeadingAnalytics(leftNodeReplacementHashRule),
    ];
}
/**
 * Get all block quote input rules
 *
 * @param {Schema} schema
 * @returns {InputRuleWithHandler[]}
 */
function getBlockQuoteRules(schema) {
    // '> ' for blockquote
    var greatherThanRule = input_rules_1.defaultInputRuleHandler(blockQuoteRule(schema.nodes.blockquote), true);
    greatherThanRule.handler = analytics_1.trackAndInvoke('atlassian.editor.format.blockquote.autoformatting', greatherThanRule.handler);
    var leftNodeReplacementGreatherRule = input_rules_1.createInputRule(new RegExp(input_rules_1.leafNodeReplacementCharacter + "\\s*>\\s$"), function (state, _match, start, end) {
        return insert_block_1.insertBlock(state, schema.nodes.blockquote, 'blockquote', start, end);
    }, true);
    // Analytics V3 handler
    var ruleWithBlockQuoteAnalytics = analytics_2.ruleWithAnalytics(function () { return ({
        action: analytics_2.ACTION.FORMATTED,
        actionSubject: analytics_2.ACTION_SUBJECT.TEXT,
        eventType: analytics_2.EVENT_TYPE.TRACK,
        actionSubjectId: analytics_2.ACTION_SUBJECT_ID.FORMAT_BLOCK_QUOTE,
        attributes: {
            inputMethod: analytics_2.INPUT_METHOD.FORMATTING,
        },
    }); });
    return [
        ruleWithBlockQuoteAnalytics(greatherThanRule),
        ruleWithBlockQuoteAnalytics(leftNodeReplacementGreatherRule),
    ];
}
/**
 * Get all code block input rules
 *
 * @param {Schema} schema
 * @returns {InputRuleWithHandler[]}
 */
function getCodeBlockRules(schema) {
    var analyticsPayload = {
        action: analytics_2.ACTION.INSERTED,
        actionSubject: analytics_2.ACTION_SUBJECT.DOCUMENT,
        actionSubjectId: analytics_2.ACTION_SUBJECT_ID.CODE_BLOCK,
        attributes: { inputMethod: analytics_2.INPUT_METHOD.FORMATTING },
        eventType: analytics_2.EVENT_TYPE.TRACK,
    };
    var threeTildeRule = input_rules_1.createInputRule(/((^`{3,})|(\s`{3,}))(\S*)$/, function (state, match, start, end) {
        var attributes = {};
        if (match[4]) {
            attributes.language = match[4];
        }
        var newStart = match[0][0] === ' ' ? start + 1 : start;
        if (transform_to_code_block_1.isConvertableToCodeBlock(state)) {
            analytics_1.analyticsService.trackEvent("atlassian.editor.format.codeblock.autoformatting");
            var tr_1 = transform_to_code_block_1.transformToCodeBlockAction(state, attributes)
                // remove markdown decorator ```
                .delete(newStart, end)
                .scrollIntoView();
            return analytics_2.addAnalytics(state, tr_1, analyticsPayload);
        }
        var tr = state.tr;
        tr = tr.delete(newStart, end);
        var codeBlock = state.schema.nodes.codeBlock.createChecked();
        return prosemirror_utils_1.safeInsert(codeBlock)(tr);
    }, true);
    var leftNodeReplacementThreeTildeRule = input_rules_1.createInputRule(new RegExp("((" + input_rules_1.leafNodeReplacementCharacter + "`{3,})|(\\s`{3,}))(\\S*)$"), function (state, match, start, end) {
        var attributes = {};
        if (match[4]) {
            attributes.language = match[4];
        }
        var tr = insert_block_1.insertBlock(state, schema.nodes.codeBlock, 'codeblock', start, end, attributes);
        if (tr) {
            tr = analytics_2.addAnalytics(state, tr, analyticsPayload);
        }
        return tr;
    }, true);
    return [threeTildeRule, leftNodeReplacementThreeTildeRule];
}
function inputRulePlugin(schema) {
    var rules = [];
    if (schema.nodes.heading) {
        rules.push.apply(rules, tslib_1.__spread(getHeadingRules(schema)));
    }
    if (schema.nodes.blockquote) {
        rules.push.apply(rules, tslib_1.__spread(getBlockQuoteRules(schema)));
    }
    if (schema.nodes.codeBlock) {
        rules.push.apply(rules, tslib_1.__spread(getCodeBlockRules(schema)));
    }
    if (rules.length !== 0) {
        return prosemirror_inputrules_1.inputRules({ rules: rules });
    }
    return;
}
exports.inputRulePlugin = inputRulePlugin;
exports.default = inputRulePlugin;
//# sourceMappingURL=input-rule.js.map