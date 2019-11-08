"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emoji_1 = require("./emoji");
var hard_break_1 = require("./hard-break");
var mention_1 = require("./mention");
var text_1 = require("./text");
var inline_card_1 = require("./inline-card");
var unknown_1 = require("./unknown");
var inlinesEncoderMapping = {
    emoji: emoji_1.emoji,
    hardBreak: hard_break_1.hardBreak,
    mention: mention_1.mention,
    text: text_1.text,
    inlineCard: inline_card_1.inlineCard,
};
exports.inlines = function (node, parent) {
    var encoder = inlinesEncoderMapping[node.type.name];
    if (encoder) {
        return encoder(node, parent);
    }
    return unknown_1.unknown(node);
};
//# sourceMappingURL=inlines.js.map