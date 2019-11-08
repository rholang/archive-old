"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("@atlaskit/theme/constants");
var dimensions = {
    regular: {
        height: constants_1.gridSize() * 2,
        width: constants_1.gridSize() * 4,
    },
    large: {
        height: constants_1.gridSize() * 2 + constants_1.gridSize() / 2,
        width: constants_1.gridSize() * 5,
    },
};
exports.borderWidth = '2px';
exports.paddingUnitless = constants_1.gridSize() / 4;
exports.transition = '0.2s';
exports.getHeight = function (_a) {
    var size = _a.size;
    return dimensions[size].height;
};
exports.getWidth = function (_a) {
    var size = _a.size;
    return dimensions[size].width;
};
//# sourceMappingURL=constants.js.map