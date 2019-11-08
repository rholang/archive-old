"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var components_1 = require("@atlaskit/theme/components");
var constants_1 = require("@atlaskit/theme/constants");
var colors_1 = require("@atlaskit/theme/colors");
exports.focusRingColor = components_1.themed({ light: colors_1.B100, dark: colors_1.B75 });
exports.tagHeightUnitless = 2.5 * constants_1.gridSize();
exports.tagHeight = exports.tagHeightUnitless + "px";
exports.buttonWidthUnitless = exports.tagHeightUnitless; // button should be square
exports.buttonWidth = exports.tagHeight; // button should be square
exports.maxWidthUnitless = 25 * constants_1.gridSize();
exports.maxWidth = exports.maxWidthUnitless + "px";
exports.maxTextWidthUnitless = exports.maxWidthUnitless - exports.tagHeightUnitless;
exports.maxTextWidth = exports.maxTextWidthUnitless + "px";
//# sourceMappingURL=constants.js.map