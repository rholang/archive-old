"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isValidPercentageUnit_1 = require("./isValidPercentageUnit");
var containsPixelUnit_1 = require("./containsPixelUnit");
exports.canCompareDimension = function (current, next) {
    if (!current || !next) {
        return false;
    }
    if (isValidPercentageUnit_1.isValidPercentageUnit(current) && isValidPercentageUnit_1.isValidPercentageUnit(next)) {
        return true;
    }
    if (containsPixelUnit_1.containsPixelUnit("" + current) && containsPixelUnit_1.containsPixelUnit("" + next)) {
        return true;
    }
    if (typeof current === 'number' && typeof next === 'number') {
        return true;
    }
    return false;
};
exports.isBigger = function (current, next) {
    if (exports.canCompareDimension(current.width, next.width) &&
        exports.canCompareDimension(current.height, next.height)) {
        var nextIsHigher = parseInt("" + current.width, 10) < parseInt("" + next.width, 10);
        var nextIsWider = parseInt("" + current.height, 10) < parseInt("" + next.height, 10);
        return nextIsHigher || nextIsWider;
    }
    else {
        return false;
    }
};
//# sourceMappingURL=dimensionComparer.js.map