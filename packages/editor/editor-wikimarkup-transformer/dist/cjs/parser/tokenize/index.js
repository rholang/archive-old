"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var media_1 = require("./media");
var blockquote_1 = require("./blockquote");
var citation_1 = require("./citation");
var deleted_1 = require("./deleted");
var double_dash_symbol_1 = require("./double-dash-symbol");
var emoji_1 = require("./emoji");
var emphasis_1 = require("./emphasis");
var hardbreak_1 = require("./hardbreak");
var heading_1 = require("./heading");
var inserted_1 = require("./inserted");
var link_format_1 = require("./links/link-format");
var link_text_1 = require("./link-text");
var list_1 = require("./list");
var monospace_1 = require("./monospace");
var quadruple_dash_symbol_1 = require("./quadruple-dash-symbol");
var ruler_1 = require("./ruler");
var strong_1 = require("./strong");
var subscript_1 = require("./subscript");
var superscript_1 = require("./superscript");
var table_1 = require("./table");
var triple_dash_symbol_1 = require("./triple-dash-symbol");
var panel_macro_1 = require("./panel-macro");
var adf_macro_1 = require("./adf-macro");
var anchor_macro_1 = require("./anchor-macro");
var code_macro_1 = require("./code-macro");
var quote_macro_1 = require("./quote-macro");
var color_macro_1 = require("./color-macro");
var noformat_macro_1 = require("./noformat-macro");
var force_line_break_1 = require("./force-line-break");
var issue_key_1 = require("./issue-key");
var TokenType;
(function (TokenType) {
    TokenType["ADF_MACRO"] = "ADF_MACRO";
    TokenType["ANCHOR_MACRO"] = "ANCHOR_MACRO";
    TokenType["CODE_MACRO"] = "CODE_MACRO";
    TokenType["QUOTE_MACRO"] = "QUOTE_MACRO";
    TokenType["NOFORMAT_MACRO"] = "NOFORMAT_MACRO";
    TokenType["PANEL_MACRO"] = "PANEL_MACRO";
    TokenType["COLOR_MACRO"] = "COLOR_MACRO";
    TokenType["LOREM_MACRO"] = "LOREM_MACRO";
    TokenType["QUOTE"] = "QUOTE";
    TokenType["STRING"] = "STRING";
    TokenType["ISSUE_KEY"] = "ISSUE_KEY";
    TokenType["LINK_FORMAT"] = "LINK_FORMAT";
    TokenType["LINK_TEXT"] = "LINK_TEXT";
    TokenType["MEDIA"] = "MEDIA";
    TokenType["HEADING"] = "HEADING";
    TokenType["LIST"] = "LIST";
    TokenType["TABLE"] = "TABLE";
    TokenType["RULER"] = "RULER";
    TokenType["HARD_BREAK"] = "HARD_BREAK";
    TokenType["DOUBLE_DASH_SYMBOL"] = "DOUBLE_DASH_SYMBOL";
    TokenType["TRIPLE_DASH_SYMBOL"] = "TRIPLE_DASH_SYMBOL";
    TokenType["QUADRUPLE_DASH_SYMBOL"] = "QUADRUPLE_DASH_SYMBOL";
    TokenType["STRONG"] = "STRONG";
    TokenType["MONOSPACE"] = "MONOSPACE";
    TokenType["SUPERSCRIPT"] = "SUPERSCRIPT";
    TokenType["SUBSCRIPT"] = "SUBSCRIPT";
    TokenType["EMPHASIS"] = "EMPHASIS";
    TokenType["CITATION"] = "CITATION";
    TokenType["DELETED"] = "DELETED";
    TokenType["INSERTED"] = "INSERTED";
    TokenType["EMOJI"] = "EMOJI";
    TokenType["FORCE_LINE_BREAK"] = "FORCE_LINE_BREAK";
})(TokenType = exports.TokenType || (exports.TokenType = {}));
var tokenToTokenParserMapping = (_a = {},
    _a[TokenType.DOUBLE_DASH_SYMBOL] = double_dash_symbol_1.doubleDashSymbol,
    _a[TokenType.TRIPLE_DASH_SYMBOL] = triple_dash_symbol_1.tripleDashSymbol,
    _a[TokenType.QUADRUPLE_DASH_SYMBOL] = quadruple_dash_symbol_1.quadrupleDashSymbol,
    _a[TokenType.RULER] = ruler_1.ruler,
    _a[TokenType.STRONG] = strong_1.strong,
    _a[TokenType.MONOSPACE] = monospace_1.monospace,
    _a[TokenType.SUPERSCRIPT] = superscript_1.superscript,
    _a[TokenType.SUBSCRIPT] = subscript_1.subscript,
    _a[TokenType.EMPHASIS] = emphasis_1.emphasis,
    _a[TokenType.CITATION] = citation_1.citation,
    _a[TokenType.DELETED] = deleted_1.deleted,
    _a[TokenType.INSERTED] = inserted_1.inserted,
    _a[TokenType.HARD_BREAK] = hardbreak_1.hardbreak,
    _a[TokenType.LINK_FORMAT] = link_format_1.linkFormat,
    _a[TokenType.LINK_TEXT] = link_text_1.linkText,
    _a[TokenType.HEADING] = heading_1.heading,
    _a[TokenType.MEDIA] = media_1.media,
    _a[TokenType.LIST] = list_1.list,
    _a[TokenType.QUOTE] = blockquote_1.blockquote,
    _a[TokenType.TABLE] = table_1.table,
    _a[TokenType.EMOJI] = emoji_1.emoji,
    _a[TokenType.ADF_MACRO] = adf_macro_1.adfMacro,
    _a[TokenType.ANCHOR_MACRO] = anchor_macro_1.anchorMacro,
    _a[TokenType.CODE_MACRO] = code_macro_1.codeMacro,
    _a[TokenType.QUOTE_MACRO] = quote_macro_1.quoteMacro,
    _a[TokenType.NOFORMAT_MACRO] = noformat_macro_1.noformatMacro,
    _a[TokenType.PANEL_MACRO] = panel_macro_1.panelMacro,
    _a[TokenType.COLOR_MACRO] = color_macro_1.colorMacro,
    _a[TokenType.FORCE_LINE_BREAK] = force_line_break_1.forceLineBreak,
    _a[TokenType.ISSUE_KEY] = issue_key_1.issueKey,
    _a);
function parseToken(input, type, position, schema, context) {
    var tokenParser = tokenToTokenParserMapping[type];
    if (tokenParser) {
        try {
            return tokenParser({ input: input, position: position, schema: schema, context: context });
        }
        catch (err) {
            if (context.tokenErrCallback) {
                context.tokenErrCallback(err, type);
            }
            return fallback(input, position);
        }
    }
    return fallback(input, position);
}
exports.parseToken = parseToken;
function fallback(input, position) {
    return {
        type: 'text',
        text: input.substr(position, 1),
        length: 1,
    };
}
//# sourceMappingURL=index.js.map