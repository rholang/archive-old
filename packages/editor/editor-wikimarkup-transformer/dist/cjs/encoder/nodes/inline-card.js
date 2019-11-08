"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var unknown_1 = require("./unknown");
var issue_key_1 = require("../../parser/tokenize/issue-key");
exports.inlineCard = function (node) {
    if (!node.attrs.url) {
        return unknown_1.unknown(node);
    }
    var match = node.attrs.url.match(issue_key_1.INLINE_CARD_FROM_TEXT_STAMP);
    if (!match) {
        return "[" + node.attrs.url + "|" + node.attrs.url + "|smart-link]";
    }
    return "[" + match[2] + "]";
};
//# sourceMappingURL=inline-card.js.map