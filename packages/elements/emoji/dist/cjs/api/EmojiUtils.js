"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var util_service_support_1 = require("@atlaskit/util-service-support");
var type_helpers_1 = require("../util/type-helpers");
var logger_1 = tslib_1.__importDefault(require("../util/logger"));
exports.emojiRequest = function (provider, options) {
    var _a = provider.getRatio, getRatio = _a === void 0 ? exports.getPixelRatio : _a, serviceConfig = tslib_1.__rest(provider, ["getRatio"]);
    var scaleQueryParams = calculateScale(getRatio);
    var _b = options || {}, _c = _b.queryParams, queryParams = _c === void 0 ? {} : _c, otherOptions = tslib_1.__rest(_b, ["queryParams"]);
    var requestOptions = tslib_1.__assign(tslib_1.__assign({}, otherOptions), { queryParams: tslib_1.__assign(tslib_1.__assign({}, scaleQueryParams), queryParams) });
    return util_service_support_1.utils.requestService(serviceConfig, requestOptions);
};
var calculateScale = function (getRatio) {
    // Retina display
    if (getRatio() > 1) {
        return { scale: 'XHDPI', altScale: 'XXXHDPI' };
    }
    // Default set used for desktop
    return { altScale: 'XHDPI' };
};
exports.getPixelRatio = function () {
    return window.devicePixelRatio;
};
exports.getAltRepresentation = function (reps) {
    // Invalid reps handled outside function - logic may change depending what the service returns
    return reps[calculateScale(exports.getPixelRatio).altScale];
};
exports.isMediaApiUrl = function (url, meta) {
    return !!(meta && meta.mediaApiToken && url.indexOf(meta.mediaApiToken.url) === 0);
};
exports.denormaliseServiceRepresentation = function (representation, meta) {
    if (type_helpers_1.isSpriteServiceRepresentation(representation) &&
        meta &&
        meta.spriteSheets) {
        var _a = representation, height = _a.height, width = _a.width, x = _a.x, y = _a.y, xIndex = _a.xIndex, yIndex = _a.yIndex, spriteRef = _a.spriteRef;
        var spriteSheet = meta.spriteSheets[spriteRef];
        if (spriteSheet) {
            return {
                sprite: spriteSheet,
                height: height,
                width: width,
                x: x,
                y: y,
                xIndex: xIndex,
                yIndex: yIndex,
            };
        }
    }
    else if (type_helpers_1.isImageRepresentation(representation)) {
        var height = representation.height, width = representation.width, imagePath = representation.imagePath;
        if (exports.isMediaApiUrl(imagePath, meta)) {
            return type_helpers_1.convertImageToMediaRepresentation(representation);
        }
        return {
            height: height,
            width: width,
            imagePath: imagePath,
        };
    }
    logger_1.default('failed conversion for representation', representation, meta);
    return undefined;
};
exports.denormaliseServiceAltRepresentation = function (altReps, meta) {
    return !altReps || altReps === {}
        ? undefined
        : exports.denormaliseServiceRepresentation(exports.getAltRepresentation(altReps), meta);
};
exports.denormaliseSkinEmoji = function (emoji, meta) {
    if (!emoji.skinVariations) {
        return [];
    }
    var skinEmoji = emoji.skinVariations;
    var baseId = emoji.id;
    return skinEmoji.map(function (skin) {
        var representation = skin.representation, altRepresentations = skin.altRepresentations, other = tslib_1.__rest(skin, ["representation", "altRepresentations"]);
        return tslib_1.__assign({ baseId: baseId, representation: exports.denormaliseServiceRepresentation(representation, meta), altRepresentation: exports.denormaliseServiceAltRepresentation(altRepresentations, meta) }, other);
    });
};
/**
 * Denormalised an emoji response (emojis + sprite references) into an array of
 * emoji with local sprite definitions.
 */
exports.denormaliseEmojiServiceResponse = function (emojiData) {
    var emojis = emojiData.emojis.map(function (emoji) {
        var newRepresentation = exports.denormaliseServiceRepresentation(emoji.representation, emojiData.meta);
        var altRepresentation = exports.denormaliseServiceAltRepresentation(emoji.altRepresentations, emojiData.meta);
        var newSkinVariations = exports.denormaliseSkinEmoji(emoji, emojiData.meta);
        // create trimmedServiceDesc which is emoji with no representations or skinVariations
        var representation = emoji.representation, skinVariations = emoji.skinVariations, altRepresentations = emoji.altRepresentations, trimmedServiceDesc = tslib_1.__rest(emoji, ["representation", "skinVariations", "altRepresentations"]);
        var response = tslib_1.__assign(tslib_1.__assign({}, trimmedServiceDesc), { representation: newRepresentation, skinVariations: newSkinVariations });
        return type_helpers_1.buildEmojiDescriptionWithAltRepresentation(response, altRepresentation);
    });
    var mediaApiToken = emojiData.meta && emojiData.meta.mediaApiToken;
    return {
        emojis: emojis,
        mediaApiToken: mediaApiToken,
    };
};
var getHeight = function (fitToHeight) {
    return exports.getPixelRatio() > 1 ? fitToHeight * 2 : fitToHeight;
};
exports.shouldUseAltRepresentation = function (emoji, fitToHeight) {
    return !!(fitToHeight &&
        emoji.altRepresentation &&
        getHeight(fitToHeight) > emoji.representation.height);
};
//# sourceMappingURL=EmojiUtils.js.map