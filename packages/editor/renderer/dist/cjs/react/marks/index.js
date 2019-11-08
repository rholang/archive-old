"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var code_1 = tslib_1.__importDefault(require("./code"));
exports.Code = code_1.default;
var em_1 = tslib_1.__importDefault(require("./em"));
exports.Em = em_1.default;
var link_1 = tslib_1.__importDefault(require("./link"));
exports.Link = link_1.default;
var strike_1 = tslib_1.__importDefault(require("./strike"));
exports.Strike = strike_1.default;
var strong_1 = tslib_1.__importDefault(require("./strong"));
exports.Strong = strong_1.default;
var subsup_1 = tslib_1.__importDefault(require("./subsup"));
exports.Subsup = subsup_1.default;
var textColor_1 = tslib_1.__importDefault(require("./textColor"));
exports.TextColor = textColor_1.default;
var underline_1 = tslib_1.__importDefault(require("./underline"));
exports.Underline = underline_1.default;
var breakout_1 = tslib_1.__importDefault(require("./breakout"));
exports.Breakout = breakout_1.default;
var alignment_1 = tslib_1.__importDefault(require("./alignment"));
var indentation_1 = tslib_1.__importDefault(require("./indentation"));
var annotation_1 = tslib_1.__importDefault(require("./annotation"));
exports.Annotation = annotation_1.default;
// Stage0
var confluence_inline_comment_1 = tslib_1.__importDefault(require("./confluence-inline-comment"));
exports.markToReact = {
    code: code_1.default,
    em: em_1.default,
    link: link_1.default,
    strike: strike_1.default,
    strong: strong_1.default,
    subsup: subsup_1.default,
    textColor: textColor_1.default,
    underline: underline_1.default,
    annotation: annotation_1.default,
    // Stage0
    confluenceInlineComment: confluence_inline_comment_1.default,
    breakout: breakout_1.default,
    alignment: alignment_1.default,
    indentation: indentation_1.default,
};
exports.toReact = function (mark) {
    return exports.markToReact[mark.type.name];
};
//# sourceMappingURL=index.js.map