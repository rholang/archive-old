"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var code_1 = require("../marks/code");
var color_1 = require("../marks/color");
var em_1 = require("../marks/em");
var link_1 = require("../marks/link");
var strike_1 = require("../marks/strike");
var strong_1 = require("../marks/strong");
var subsup_1 = require("../marks/subsup");
var underline_1 = require("../marks/underline");
/**
 * The order of the mapping matters.
 * For example, textColor will be a macro {color} so
 * we want to process other marks before it.
 */
var markEncoderMapping = new Map([
    ['em', em_1.em],
    ['strike', strike_1.strike],
    ['strong', strong_1.strong],
    ['subsup', subsup_1.subsup],
    ['underline', underline_1.underline],
    ['textColor', color_1.textColor],
    ['link', link_1.link],
    ['code', code_1.code],
]);
exports.text = function (node, parent) {
    var result = parent && parent.type.name === 'codeBlock'
        ? node.text
        : escapingWikiFormatter(node.text);
    markEncoderMapping.forEach(function (encoder, markName) {
        var mark = node.marks.find(function (m) { return m.type.name === markName; });
        if (mark) {
            result = encoder(result, mark.attrs);
        }
    });
    return result;
};
function escapingWikiFormatter(text) {
    return text.replace(/[{\\![]/g, '\\$&');
}
//# sourceMappingURL=text.js.map