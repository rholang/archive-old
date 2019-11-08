"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prosemirror_inputrules_1 = require("prosemirror-inputrules");
var analytics_1 = require("../../../analytics");
var input_rules_1 = require("../../../utils/input-rules");
var prosemirror_state_1 = require("prosemirror-state");
var analytics_2 = require("../../analytics");
/**
 * Creates an InputRuleHandler that will match on a regular expression of the
 * form `(prefix, content, suffix?)`, and replace it with some given text,
 * maintaining prefix and suffix around the replacement.
 *
 * @param text text to replace with
 */
function replaceTextUsingCaptureGroup(text, trackingEventName) {
    return function (state, match, start, end) {
        var _a = tslib_1.__read(match, 4), prefix = _a[1], suffix = _a[3];
        var replacement = (prefix || '') + text + (suffix || '');
        if (trackingEventName) {
            analytics_1.analyticsService.trackEvent("atlassian.editor.format." + trackingEventName + ".autoformatting");
        }
        var tr = state.tr, $to = state.selection.$to;
        tr.replaceWith(start, end, state.schema.text(replacement, $to.marks()));
        tr.setSelection(prosemirror_state_1.Selection.near(tr.doc.resolve(tr.selection.to)));
        return tr;
    };
}
function createReplacementRule(to, from, trackingEventName) {
    return input_rules_1.createInputRule(from, replaceTextUsingCaptureGroup(to, trackingEventName));
}
/**
 * Create replacement rules fiven a replacement map
 * @param replMap - Replacement map
 * @param trackingEventName - Analytics V2 tracking event name
 * @param replacementRuleWithAnalytics - Analytics GAS V3 middleware for replacement and rules.
 */
function createReplacementRules(replMap, trackingEventName, replacementRuleWithAnalytics) {
    return Object.keys(replMap).map(function (replacement) {
        var regex = replMap[replacement];
        var rule = createReplacementRule(replacement, regex, trackingEventName);
        if (replacementRuleWithAnalytics) {
            return replacementRuleWithAnalytics(replacement)(rule);
        }
        return rule;
    });
}
// We don't agressively upgrade single quotes to smart quotes because
// they may clash with an emoji. Only do that when we have a matching
// single quote, or a contraction.
function createSingleQuotesRules(trackingEventName) {
    return [
        // wrapped text
        input_rules_1.createInputRule(/(\s+|^)'(\S+.*\S+)'$/, function (state, match, start, end) {
            var _a = tslib_1.__read(match, 3), spacing = _a[1], innerContent = _a[2];
            var replacement = spacing + '‘' + innerContent + '’';
            analytics_1.analyticsService.trackEvent("atlassian.editor.format." + trackingEventName + ".autoformatting");
            return state.tr.insertText(replacement, start, end);
        }),
        // apostrophe
        createReplacementRule('’', /(\w+)(')(\w+)$/, trackingEventName),
    ];
}
/**
 * Get replacement rules related to product
 */
function getProductRules() {
    var productRuleWithAnalytics = function (product) {
        return analytics_2.ruleWithAnalytics(function (_state, match) { return ({
            action: analytics_2.ACTION.SUBSTITUTED,
            actionSubject: analytics_2.ACTION_SUBJECT.TEXT,
            actionSubjectId: analytics_2.ACTION_SUBJECT_ID.PRODUCT_NAME,
            eventType: analytics_2.EVENT_TYPE.TRACK,
            attributes: {
                product: product,
                originalSpelling: match[2],
            },
        }); });
    };
    return createReplacementRules({
        Atlassian: /(\s+|^)(atlassian)(\s)$/,
        Jira: /(\s+|^)(jira|JIRA)(\s)$/,
        Bitbucket: /(\s+|^)(bitbucket|BitBucket)(\s)$/,
        Hipchat: /(\s+|^)(hipchat|HipChat)(\s)$/,
        Trello: /(\s+|^)(trello)(\s)$/,
    }, 'product', productRuleWithAnalytics);
}
/**
 * Get replacement rules related to symbol
 */
function getSymbolRules() {
    var symbolToString = {
        '→': analytics_2.SYMBOL.ARROW_RIGHT,
        '←': analytics_2.SYMBOL.ARROW_LEFT,
        '↔︎': analytics_2.SYMBOL.ARROW_DOUBLE,
    };
    var symbolRuleWithAnalytics = function (symbol) {
        return analytics_2.ruleWithAnalytics(function () { return ({
            action: analytics_2.ACTION.SUBSTITUTED,
            actionSubject: analytics_2.ACTION_SUBJECT.TEXT,
            actionSubjectId: analytics_2.ACTION_SUBJECT_ID.SYMBOL,
            eventType: analytics_2.EVENT_TYPE.TRACK,
            attributes: {
                symbol: symbolToString[symbol],
            },
        }); });
    };
    return createReplacementRules({
        '→': /(\s+|^)(--?>)(\s)$/,
        '←': /(\s+|^)(<--?)(\s)$/,
        '↔︎': /(\s+|^)(<->?)(\s)$/,
    }, 'arrow', symbolRuleWithAnalytics);
}
/**
 * Get replacement rules related to punctuation
 */
function getPunctuationRules() {
    var _a;
    var punctuationToString = (_a = {
            '–': analytics_2.PUNC.DASH,
            '…': analytics_2.PUNC.ELLIPSIS,
            '“': analytics_2.PUNC.QUOTE_DOUBLE,
            '”': analytics_2.PUNC.QUOTE_DOUBLE
        },
        _a[analytics_2.PUNC.QUOTE_SINGLE] = analytics_2.PUNC.QUOTE_SINGLE,
        _a);
    var punctuationRuleWithAnalytics = function (punctuation) {
        return analytics_2.ruleWithAnalytics(function () { return ({
            action: analytics_2.ACTION.SUBSTITUTED,
            actionSubject: analytics_2.ACTION_SUBJECT.TEXT,
            actionSubjectId: analytics_2.ACTION_SUBJECT_ID.PUNC,
            eventType: analytics_2.EVENT_TYPE.TRACK,
            attributes: {
                punctuation: punctuationToString[punctuation],
            },
        }); });
    };
    var dashEllipsisRules = createReplacementRules({
        '–': /(\s+|^)(--)(\s)$/,
        '…': /()(\.\.\.)$/,
    }, 'typography', punctuationRuleWithAnalytics);
    var doubleQuoteRules = createReplacementRules({
        '“': /((?:^|[\s\{\[\(\<'"\u2018\u201C]))(")$/,
        '”': /"$/,
    }, 'quote', punctuationRuleWithAnalytics);
    var singleQuoteRules = createSingleQuotesRules('quote');
    return tslib_1.__spread(dashEllipsisRules, doubleQuoteRules, singleQuoteRules.map(function (rule) {
        return punctuationRuleWithAnalytics(analytics_2.PUNC.QUOTE_SINGLE)(rule);
    }));
}
exports.default = prosemirror_inputrules_1.inputRules({
    rules: tslib_1.__spread(getProductRules(), getSymbolRules(), getPunctuationRules()),
});
//# sourceMappingURL=smart-input-rule.js.map