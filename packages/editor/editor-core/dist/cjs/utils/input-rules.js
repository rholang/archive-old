"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prosemirror_inputrules_1 = require("prosemirror-inputrules");
function defaultInputRuleHandler(inputRule, isBlockNodeRule) {
    if (isBlockNodeRule === void 0) { isBlockNodeRule = false; }
    var originalHandler = inputRule.handler;
    inputRule.handler = function (state, match, start, end) {
        // Skip any input rule inside code
        // https://product-fabric.atlassian.net/wiki/spaces/E/pages/37945345/Editor+content+feature+rules#Editorcontent/featurerules-Rawtextblocks
        var unsupportedMarks = isBlockNodeRule
            ? hasUnsupportedMarkForBlockInputRule(state, start, end)
            : hasUnsupportedMarkForInputRule(state, start, end);
        if (state.selection.$from.parent.type.spec.code || unsupportedMarks) {
            return;
        }
        return originalHandler(state, match, start, end);
    };
    return inputRule;
}
exports.defaultInputRuleHandler = defaultInputRuleHandler;
function createInputRule(match, handler, isBlockNodeRule) {
    if (isBlockNodeRule === void 0) { isBlockNodeRule = false; }
    return defaultInputRuleHandler(new prosemirror_inputrules_1.InputRule(match, handler), isBlockNodeRule);
}
exports.createInputRule = createInputRule;
// ProseMirror uses the Unicode Character 'OBJECT REPLACEMENT CHARACTER' (U+FFFC) as text representation for
// leaf nodes, i.e. nodes that don't have any content or text property (e.g. hardBreak, emoji, mention, rule)
// It was introduced because of https://github.com/ProseMirror/prosemirror/issues/262
// This can be used in an input rule regex to be able to include or exclude such nodes.
exports.leafNodeReplacementCharacter = '\ufffc';
var hasUnsupportedMarkForBlockInputRule = function (state, start, end) {
    var doc = state.doc, marks = state.schema.marks;
    var unsupportedMarksPresent = false;
    var isUnsupportedMark = function (node) {
        return node.type === marks.code ||
            node.type === marks.link ||
            node.type === marks.typeAheadQuery;
    };
    doc.nodesBetween(start, end, function (node) {
        unsupportedMarksPresent =
            unsupportedMarksPresent ||
                node.marks.filter(isUnsupportedMark).length > 0;
    });
    return unsupportedMarksPresent;
};
var hasUnsupportedMarkForInputRule = function (state, start, end) {
    var doc = state.doc, marks = state.schema.marks;
    var unsupportedMarksPresent = false;
    var isCodemark = function (mark) { return mark.type === marks.code; };
    doc.nodesBetween(start, end, function (node) {
        unsupportedMarksPresent =
            unsupportedMarksPresent || node.marks.filter(isCodemark).length > 0;
    });
    return unsupportedMarksPresent;
};
//# sourceMappingURL=input-rules.js.map