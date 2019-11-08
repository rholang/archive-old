"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var components_1 = require("@atlaskit/theme/components");
var colors = tslib_1.__importStar(require("@atlaskit/theme/colors"));
/** Note:
 * Lozenge does not support dark mode at the moment.
 * Hence, color values are the same.
 */
exports.defaultBackgroundColor = {
    default: { light: colors.N40, dark: colors.N40 },
    inprogress: { light: colors.B50, dark: colors.B50 },
    moved: { light: colors.Y75, dark: colors.Y75 },
    new: { light: colors.P50, dark: colors.P50 },
    removed: { light: colors.R50, dark: colors.R50 },
    success: { light: colors.G50, dark: colors.G50 },
};
exports.defaultTextColor = {
    default: { light: colors.N500, dark: colors.N500 },
    inprogress: { light: colors.B500, dark: colors.B500 },
    moved: { light: colors.N800, dark: colors.N800 },
    new: { light: colors.P500, dark: colors.P500 },
    removed: { light: colors.R500, dark: colors.R500 },
    success: { light: colors.G500, dark: colors.G500 },
};
exports.boldBackgroundColor = {
    default: { light: colors.N500, dark: colors.N500 },
    inprogress: { light: colors.B400, dark: colors.B400 },
    moved: { light: colors.Y500, dark: colors.Y500 },
    new: { light: colors.P400, dark: colors.P400 },
    removed: { light: colors.R400, dark: colors.R400 },
    success: { light: colors.G400, dark: colors.G400 },
};
exports.boldTextColor = {
    default: { light: colors.N0, dark: colors.N0 },
    inprogress: { light: colors.N0, dark: colors.N0 },
    moved: { light: colors.N800, dark: colors.N800 },
    new: { light: colors.N0, dark: colors.N0 },
    removed: { light: colors.N0, dark: colors.N0 },
    success: { light: colors.N0, dark: colors.N0 },
};
exports.Theme = components_1.createTheme(function (_a) {
    var appearance = _a.appearance, isBold = _a.isBold, maxWidth = _a.maxWidth;
    return (tslib_1.__assign(tslib_1.__assign({}, (typeof appearance === 'object'
        ? tslib_1.__assign({ backgroundColor: (isBold
                ? exports.boldBackgroundColor
                : exports.defaultBackgroundColor).default.light, textColor: (isBold ? exports.boldTextColor : exports.defaultTextColor).default.light }, appearance) : {
        backgroundColor: (isBold
            ? exports.boldBackgroundColor[appearance]
            : exports.defaultBackgroundColor[appearance]).light,
        textColor: (isBold
            ? exports.boldTextColor[appearance]
            : exports.defaultTextColor[appearance]).light,
    })), { maxWidth: maxWidth }));
});
//# sourceMappingURL=theme.js.map