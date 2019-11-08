"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var code_1 = tslib_1.__importDefault(require("./marks/code"));
var em_1 = tslib_1.__importDefault(require("./marks/em"));
var link_1 = tslib_1.__importDefault(require("./marks/link"));
var strike_1 = tslib_1.__importDefault(require("./marks/strike"));
var strong_1 = tslib_1.__importDefault(require("./marks/strong"));
var subsup_1 = tslib_1.__importDefault(require("./marks/subsup"));
var text_color_1 = tslib_1.__importDefault(require("./marks/text-color"));
var underline_1 = tslib_1.__importDefault(require("./marks/underline"));
var indentation_1 = tslib_1.__importDefault(require("./marks/indentation"));
var alignment_1 = tslib_1.__importDefault(require("./marks/alignment"));
var doNotMark = function (_a) {
    var text = _a.text;
    return text;
};
exports.markSerializers = {
    action: doNotMark,
    alignment: alignment_1.default,
    annotation: doNotMark,
    breakout: doNotMark,
    code: code_1.default,
    em: em_1.default,
    indentation: indentation_1.default,
    link: link_1.default,
    strike: strike_1.default,
    strong: strong_1.default,
    subsup: subsup_1.default,
    textColor: text_color_1.default,
    underline: underline_1.default,
};
//# sourceMappingURL=mark-serializers.js.map