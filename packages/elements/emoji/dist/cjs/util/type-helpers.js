"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var i18n_1 = require("../components/i18n");
var constants_1 = require("./constants");
exports.isSpriteServiceRepresentation = function (rep) {
    return !!(rep && rep.spriteRef);
};
exports.isSpriteRepresentation = function (rep) { return !!(rep && rep.sprite); };
exports.isImageRepresentation = function (rep) {
    return !!(rep && rep.imagePath);
};
exports.isMediaRepresentation = function (rep) {
    return !!(rep && rep.mediaPath);
};
exports.isPromise = function (p) {
    return !!(p && p.then);
};
exports.isEmojiDescription = function (possibleEmojiDescription) {
    return possibleEmojiDescription &&
        possibleEmojiDescription.shortName &&
        possibleEmojiDescription.type;
};
exports.isMediaEmoji = function (emoji) {
    return exports.isMediaRepresentation(emoji.representation);
};
exports.hasDataURLImage = function (rep) {
    return exports.isImageRepresentation(rep) && rep.imagePath.indexOf(constants_1.dataURLPrefix) === 0;
};
exports.isLoadedMediaEmoji = function (emoji) {
    return emoji.category === constants_1.customCategory && exports.hasDataURLImage(emoji.representation);
};
exports.isEmojiDescriptionWithVariations = function (emoji) {
    return !!(emoji && emoji.skinVariations);
};
exports.isEmojiVariationDescription = function (object) {
    return 'baseId' in object;
};
exports.isMessagesKey = function (key) {
    return key in i18n_1.messages;
};
exports.toEmojiId = function (emoji) { return ({
    shortName: emoji.shortName,
    id: emoji.id,
    fallback: emoji.fallback,
}); };
exports.toOptionalEmojiId = function (emoji) {
    if (!emoji) {
        return undefined;
    }
    return exports.toEmojiId(emoji);
};
exports.isEmojiIdEqual = function (l, r) {
    return l === r || (l && r && l.id === r.id && l.shortName === r.shortName);
};
exports.containsEmojiId = function (emojis, emojiId) {
    if (!emojiId) {
        return false;
    }
    for (var i = 0; i < emojis.length; i++) {
        if (exports.isEmojiIdEqual(emojis[i], emojiId)) {
            return true;
        }
    }
    return false;
};
exports.convertImageToMediaRepresentation = function (rep) { return ({
    mediaPath: rep.imagePath,
    height: rep.height,
    width: rep.width,
}); };
exports.convertMediaToImageRepresentation = function (rep, newImagePath) { return ({
    imagePath: newImagePath || rep.mediaPath,
    height: rep.height,
    width: rep.width,
}); };
exports.convertMediaToImageEmoji = function (emoji, newImagePath, useAlt) {
    var mediaRepresentation = emoji.representation;
    var mediaAltRepresentation = emoji.altRepresentation;
    var imgPath = !useAlt ? newImagePath : undefined;
    var altImgPath = useAlt ? newImagePath : undefined;
    if (!exports.isMediaRepresentation(mediaRepresentation) &&
        !exports.isMediaRepresentation(mediaAltRepresentation)) {
        return emoji;
    }
    var representation = exports.isMediaRepresentation(mediaRepresentation)
        ? exports.convertMediaToImageRepresentation(mediaRepresentation, imgPath)
        : mediaRepresentation;
    var altRepresentation = exports.isMediaRepresentation(mediaAltRepresentation)
        ? exports.convertMediaToImageRepresentation(mediaAltRepresentation, altImgPath)
        : mediaAltRepresentation;
    var baseEmoji = tslib_1.__assign(tslib_1.__assign({}, emoji), { representation: representation });
    return exports.buildEmojiDescriptionWithAltRepresentation(baseEmoji, altRepresentation);
};
// Prevent altRepresentation: undefined from being returned in EmojiDescription
exports.buildEmojiDescriptionWithAltRepresentation = function (emoji, altRepresentation) {
    if (!altRepresentation) {
        return emoji;
    }
    return tslib_1.__assign(tslib_1.__assign({}, emoji), { altRepresentation: altRepresentation });
};
exports.getCategoryId = function (emoji) {
    return emoji.category;
};
//# sourceMappingURL=type-helpers.js.map