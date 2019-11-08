"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Default dimensions
exports.defaultSmallCardDimensions = {
    width: '100%',
    height: 42,
};
exports.defaultImageCardDimensions = {
    width: 156,
    height: 125,
};
exports.defaultHorizontalCardDimensions = {
    width: 435,
    height: 125,
};
exports.defaultSquareCardDimensions = {
    width: 300,
    height: 300,
};
// Small dimensions
exports.minSmallCardDimensions = {
    width: 200,
    height: 32,
};
exports.minImageCardDimensions = {
    width: 144,
    height: 96,
};
exports.minSquareCardDimensions = {
    width: 272,
    height: 275,
};
exports.minHorizontalCardDimensions = {
    width: 400,
    height: 125,
};
// Max dimensions
exports.maxImageCardDimensions = {
    width: 480,
    height: 360,
};
exports.maxHorizontalCardDimensions = {
    width: 400,
    height: 116,
};
exports.maxSquareCardDimensions = {
    width: 400,
    height: 348,
};
exports.getCardMaxHeight = function (appearance) {
    if (appearance === 'image') {
        return exports.maxImageCardDimensions.height;
    }
    if (appearance === 'horizontal') {
        return exports.maxHorizontalCardDimensions.height;
    }
    if (appearance === 'square') {
        return exports.maxSquareCardDimensions.height;
    }
    return exports.maxSquareCardDimensions.width;
};
exports.getCardMinWidth = function (appearance) {
    if (appearance === 'image') {
        return exports.minImageCardDimensions.width;
    }
    if (appearance === 'horizontal') {
        return exports.minHorizontalCardDimensions.width;
    }
    if (appearance === 'square') {
        return exports.minSquareCardDimensions.width;
    }
    return exports.minSmallCardDimensions.width;
};
exports.getCardMaxWidth = function (appearance) {
    if (appearance === 'image') {
        return exports.maxImageCardDimensions.width;
    }
    if (appearance === 'horizontal') {
        return exports.maxHorizontalCardDimensions.width;
    }
    if (appearance === 'square') {
        return exports.maxSquareCardDimensions.width;
    }
    return exports.maxSquareCardDimensions.width;
};
exports.getDefaultCardDimensions = function (appearance) {
    if (appearance === 'image') {
        return exports.defaultImageCardDimensions;
    }
    if (appearance === 'square') {
        return exports.defaultSquareCardDimensions;
    }
    if (appearance === 'horizontal') {
        return exports.defaultHorizontalCardDimensions;
    }
    return exports.defaultImageCardDimensions;
};
//# sourceMappingURL=cardDimensions.js.map