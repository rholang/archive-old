"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isRetina_1 = require("./isRetina");
var getElementDimension_1 = require("./getElementDimension");
var cardDimensions_1 = require("./cardDimensions");
var isValidPercentageUnit_1 = require("./isValidPercentageUnit");
var containsPixelUnit_1 = require("./containsPixelUnit");
exports.getDataURIDimension = function (dimension, options) {
    var retinaFactor = isRetina_1.isRetina() ? 2 : 1;
    var dimensionValue = (options.dimensions && options.dimensions[dimension]) || '';
    if (isValidPercentageUnit_1.isValidPercentageUnit(dimensionValue)) {
        return getElementDimension_1.getElementDimension(options.component, dimension) * retinaFactor;
    }
    if (typeof dimensionValue === 'number') {
        return dimensionValue * retinaFactor;
    }
    if (containsPixelUnit_1.containsPixelUnit("" + dimensionValue)) {
        return parseInt("" + dimensionValue, 10) * retinaFactor;
    }
    return cardDimensions_1.defaultImageCardDimensions[dimension] * retinaFactor;
};
//# sourceMappingURL=getDataURIDimension.js.map