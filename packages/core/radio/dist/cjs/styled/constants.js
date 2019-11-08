"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("@atlaskit/theme/constants");
// Border
exports.borderWidth = 1; // 1
exports.borderWidthFocus = 2; // 2
// Full size
exports.fullHeight = constants_1.gridSize() * 1.5; // 12
exports.fullWidth = constants_1.gridSize() * 1.5; // 12
// Minus border width
exports.height = exports.fullHeight - 2 * exports.borderWidth; // 10
exports.width = exports.fullWidth - 2 * exports.borderWidth; // 10
// Horizontal padding around icon
exports.maxIconWidth = exports.fullWidth + exports.borderWidthFocus * 2; // 16
exports.iconHorizontalPadding = (3 * exports.width - exports.maxIconWidth) / 2; // 7
// Size of inner circle
exports.innerWidth = constants_1.gridSize() / 2; // 4
exports.innerHeight = constants_1.gridSize() / 2; // 4
//# sourceMappingURL=constants.js.map