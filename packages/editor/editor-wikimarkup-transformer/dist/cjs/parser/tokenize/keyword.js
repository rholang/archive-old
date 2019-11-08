"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var _1 = require("./");
var macroKeywordTokenMap = [
    {
        type: _1.TokenType.ADF_MACRO,
        regex: /^{adf/i,
    },
    {
        type: _1.TokenType.ANCHOR_MACRO,
        regex: /^{anchor/i,
    },
    {
        type: _1.TokenType.CODE_MACRO,
        regex: /^{code/i,
    },
    {
        type: _1.TokenType.QUOTE_MACRO,
        regex: /^{quote/i,
    },
    {
        type: _1.TokenType.NOFORMAT_MACRO,
        regex: /^{noformat/i,
    },
    {
        type: _1.TokenType.PANEL_MACRO,
        regex: /^{panel/i,
    },
    {
        type: _1.TokenType.COLOR_MACRO,
        regex: /^{color/,
    },
    {
        type: _1.TokenType.LOREM_MACRO,
        regex: /^{loremipsum/i,
    },
];
/**
 * The order of this mapping determind which keyword
 * will be checked first, so it matters.
 */
var keywordTokenMap = {
    '[': _1.TokenType.LINK_FORMAT,
    http: _1.TokenType.LINK_TEXT,
    irc: _1.TokenType.LINK_TEXT,
    mailto: _1.TokenType.LINK_TEXT,
    '\\\\': _1.TokenType.FORCE_LINE_BREAK,
    '\r': _1.TokenType.HARD_BREAK,
    '\n': _1.TokenType.HARD_BREAK,
    '\r\n': _1.TokenType.HARD_BREAK,
    '!': _1.TokenType.MEDIA,
    '----': _1.TokenType.QUADRUPLE_DASH_SYMBOL,
    '---': _1.TokenType.TRIPLE_DASH_SYMBOL,
    '--': _1.TokenType.DOUBLE_DASH_SYMBOL,
    '-': _1.TokenType.DELETED,
    '+': _1.TokenType.INSERTED,
    '*': _1.TokenType.STRONG,
    '^': _1.TokenType.SUPERSCRIPT,
    '~': _1.TokenType.SUBSCRIPT,
    _: _1.TokenType.EMPHASIS,
    '{{': _1.TokenType.MONOSPACE,
    '??': _1.TokenType.CITATION,
};
function parseMacroKeyword(input) {
    var e_1, _a;
    try {
        for (var macroKeywordTokenMap_1 = tslib_1.__values(macroKeywordTokenMap), macroKeywordTokenMap_1_1 = macroKeywordTokenMap_1.next(); !macroKeywordTokenMap_1_1.done; macroKeywordTokenMap_1_1 = macroKeywordTokenMap_1.next()) {
            var keyword = macroKeywordTokenMap_1_1.value;
            if (keyword.regex.test(input)) {
                return {
                    type: keyword.type,
                };
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (macroKeywordTokenMap_1_1 && !macroKeywordTokenMap_1_1.done && (_a = macroKeywordTokenMap_1.return)) _a.call(macroKeywordTokenMap_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return null;
}
exports.parseMacroKeyword = parseMacroKeyword;
function parseOtherKeyword(input) {
    for (var name_1 in keywordTokenMap) {
        if (keywordTokenMap.hasOwnProperty(name_1) && input.startsWith(name_1)) {
            return {
                type: keywordTokenMap[name_1],
            };
        }
    }
    // Look for a emoji
    var char = input.charAt(0);
    if ([':', '(', ';'].indexOf(char) !== -1) {
        return {
            // This potentially can be a emoji. The emoji parser will fail out if it's not
            type: _1.TokenType.EMOJI,
        };
    }
    return null;
}
exports.parseOtherKeyword = parseOtherKeyword;
/**
 * These keywords only take effect when it's at the
 * beginning of the line
 * The order of the mapping matters. We should not put
 * LIST in front of RULER for example.
 */
var leadingKeywordTokenMap = [
    {
        type: _1.TokenType.QUOTE,
        regex: /^bq\./,
    },
    {
        type: _1.TokenType.HEADING,
        regex: /^h[1-6]\./,
    },
    {
        type: _1.TokenType.RULER,
        regex: /^-{4,5}(\s|$)/,
    },
    {
        type: _1.TokenType.TRIPLE_DASH_SYMBOL,
        regex: /^-{3}\s/,
    },
    {
        type: _1.TokenType.DOUBLE_DASH_SYMBOL,
        regex: /^-{2}\s/,
    },
    {
        type: _1.TokenType.LIST,
        regex: /^([*#]+|-) /,
    },
    {
        type: _1.TokenType.TABLE,
        regex: /^\|{1,2}/,
    },
];
function parseLeadingKeyword(input) {
    var e_2, _a;
    try {
        for (var leadingKeywordTokenMap_1 = tslib_1.__values(leadingKeywordTokenMap), leadingKeywordTokenMap_1_1 = leadingKeywordTokenMap_1.next(); !leadingKeywordTokenMap_1_1.done; leadingKeywordTokenMap_1_1 = leadingKeywordTokenMap_1.next()) {
            var keyword = leadingKeywordTokenMap_1_1.value;
            if (keyword.regex.test(input)) {
                return {
                    type: keyword.type,
                };
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (leadingKeywordTokenMap_1_1 && !leadingKeywordTokenMap_1_1.done && (_a = leadingKeywordTokenMap_1.return)) _a.call(leadingKeywordTokenMap_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return null;
}
exports.parseLeadingKeyword = parseLeadingKeyword;
function parseIssueKeyword(input, issueKeyRegex) {
    if (issueKeyRegex && issueKeyRegex.test(input)) {
        return {
            type: _1.TokenType.ISSUE_KEY,
        };
    }
    return null;
}
exports.parseIssueKeyword = parseIssueKeyword;
//# sourceMappingURL=keyword.js.map