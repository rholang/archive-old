"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var constants_1 = require("@atlaskit/theme/constants");
var defaultTheme_1 = require("./defaultTheme");
var codeContainerStyle = {
    fontFamily: constants_1.codeFontFamily,
    fontSize: '12px',
    lineHeight: 20 / 12,
    padding: constants_1.gridSize(),
};
var lineNumberContainerStyle = function (theme) { return ({
    fontSize: constants_1.fontSize() + "px",
    lineHeight: 20 / 14,
    color: theme.lineNumberColor,
    backgroundColor: theme.lineNumberBgColor,
    flexShrink: 0,
    padding: constants_1.gridSize(),
    textAlign: 'right',
    userSelect: 'none',
}); };
var sharedCodeStyle = function (theme) { return ({
    key: {
        color: theme.keywordColor,
        fontWeight: 'bolder',
    },
    keyword: {
        color: theme.keywordColor,
        fontWeight: 'bolder',
    },
    'attr-name': {
        color: theme.attributeColor,
    },
    selector: {
        color: theme.selectorTagColor,
    },
    comment: {
        color: theme.commentColor,
        fontFamily: "SFMono-MediumItalic, " + constants_1.codeFontFamily(),
        fontStyle: 'italic',
    },
    'block-comment': {
        color: theme.commentColor,
        fontFamily: "SFMono-MediumItalic, " + constants_1.codeFontFamily(),
        fontStyle: 'italic',
    },
    'function-name': {
        color: theme.sectionColor,
    },
    'class-name': {
        color: theme.sectionColor,
    },
    doctype: {
        color: theme.docTagColor,
    },
    substr: {
        color: theme.substringColor,
    },
    namespace: {
        color: theme.nameColor,
    },
    builtin: {
        color: theme.builtInColor,
    },
    entity: {
        color: theme.literalColor,
    },
    bullet: {
        color: theme.bulletColor,
    },
    code: {
        color: theme.codeColor,
    },
    addition: {
        color: theme.additionColor,
    },
    regex: {
        color: theme.regexpColor,
    },
    symbol: {
        color: theme.symbolColor,
    },
    variable: {
        color: theme.variableColor,
    },
    url: {
        color: theme.linkColor,
    },
    'selector-attr': {
        color: theme.selectorAttributeColor,
    },
    'selector-pseudo': {
        color: theme.selectorPseudoColor,
    },
    type: {
        color: theme.typeColor,
    },
    string: {
        color: theme.stringColor,
    },
    quote: {
        color: theme.quoteColor,
    },
    tag: {
        color: theme.templateTagColor,
    },
    deletion: {
        color: theme.deletionColor,
    },
    title: {
        color: theme.titleColor,
    },
    section: {
        color: theme.sectionColor,
    },
    'meta-keyword': {
        color: theme.metaKeywordColor,
    },
    meta: {
        color: theme.metaColor,
    },
    italic: {
        fontStyle: 'italic',
    },
    bold: {
        fontWeight: 'bolder',
    },
    function: {
        color: theme.functionColor,
    },
    number: {
        color: theme.numberColor,
    },
}); };
var codeStyle = function (theme) { return ({
    fontFamily: constants_1.codeFontFamily,
    fontSize: '12px',
    background: theme.backgroundColor,
    color: theme.textColor,
    borderRadius: constants_1.borderRadius(),
    display: 'flex',
    lineHeight: 20 / 12,
    overflowX: 'auto',
    whiteSpace: 'pre',
}); };
var codeBlockStyle = function (theme) { return (tslib_1.__assign({ 'pre[class*="language-"]': codeStyle(theme) }, sharedCodeStyle(theme))); };
var inlineCodeStyle = function (theme) { return (tslib_1.__assign({ 'pre[class*="language-"]': tslib_1.__assign(tslib_1.__assign({}, codeStyle(theme)), { padding: '2px 4px', display: 'inline', whiteSpace: 'pre-wrap' }) }, sharedCodeStyle(theme))); };
function applyTheme(theme) {
    if (theme === void 0) { theme = {}; }
    var newTheme = tslib_1.__assign(tslib_1.__assign({}, defaultTheme_1.defaultColors(theme)), theme);
    return {
        lineNumberContainerStyle: lineNumberContainerStyle(newTheme),
        codeBlockStyle: codeBlockStyle(newTheme),
        inlineCodeStyle: inlineCodeStyle(newTheme),
        codeContainerStyle: codeContainerStyle,
    };
}
exports.applyTheme = applyTheme;
//# sourceMappingURL=themeBuilder.js.map