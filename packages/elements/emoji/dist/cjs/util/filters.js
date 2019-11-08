"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var toneEmojiShortName = ':raised_hand:';
var byShortName = function (emojis, shortName) { return emojis.filter(function (emoji) { return emoji.shortName === shortName; })[0]; };
var toneEmoji = function (emojis) {
    return byShortName(emojis, toneEmojiShortName);
};
exports.getToneEmoji = function (provider) {
    return provider.findByShortName(toneEmojiShortName);
};
exports.default = {
    byShortName: byShortName,
    toneEmoji: toneEmoji,
};
//# sourceMappingURL=filters.js.map