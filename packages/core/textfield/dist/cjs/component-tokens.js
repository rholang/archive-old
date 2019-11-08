"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var colors = tslib_1.__importStar(require("@atlaskit/theme/colors"));
// The following are the name for color mappings in @atlaskit/themes
// The exports are the functions, not the objects, so could not be used here
exports.disabledBackgroundColor = { light: colors.N20, dark: colors.DN20 };
// For validation red is the new 'yellow' which was { light: colors.Y300, dark: colors.Y300 }
exports.invalidBorderColor = { light: colors.R400, dark: colors.R400 };
// The following do not yet have a darkmode 'map': N20A, N10
exports.defaultBackgroundColor = { light: colors.N10, dark: colors.DN10 };
exports.defaultBackgroundColorFocus = {
    light: colors.N0,
    dark: colors.DN10,
};
exports.defaultBackgroundColorHover = {
    light: colors.N30,
    dark: colors.DN30,
};
exports.defaultBorderColor = { light: colors.N40, dark: colors.DN40 };
exports.defaultBorderColorFocus = { light: colors.B100, dark: colors.B75 };
exports.transparent = { light: 'transparent', dark: 'transparent' };
exports.textColor = { light: colors.N900, dark: colors.DN600 };
exports.disabledTextColor = { light: colors.N70, dark: colors.DN90 };
exports.placeholderTextColor = { light: colors.N100, dark: colors.DN90 };
//# sourceMappingURL=component-tokens.js.map