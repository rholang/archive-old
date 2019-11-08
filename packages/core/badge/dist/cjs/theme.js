"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var components_1 = require("@atlaskit/theme/components");
var colors = tslib_1.__importStar(require("@atlaskit/theme/colors"));
exports.backgroundColors = {
    added: { light: colors.G50, dark: colors.G50 },
    default: { light: colors.N40, dark: colors.DN70 },
    important: { light: colors.R400, dark: colors.R400 },
    primary: { light: colors.B400, dark: colors.B100 },
    /* Note that primary inverted is a temporary implementation. Once navigation has
    context of the nav location to pass down, this will be moved to the primary when
    viewed in a global context. */
    primaryInverted: { light: colors.N0, dark: colors.DN400 },
    removed: { light: colors.R50, dark: colors.R50 },
};
exports.textColors = {
    added: { light: colors.G500, dark: colors.G500 },
    default: { light: colors.N800, dark: colors.DN900 },
    important: { light: colors.N0, dark: colors.N0 },
    primary: { light: colors.N0, dark: colors.DN0 },
    primaryInverted: { light: colors.B500, dark: colors.DN0 },
    removed: { light: colors.R500, dark: colors.R500 },
};
exports.Theme = components_1.createTheme(function (_a) {
    var appearance = _a.appearance, mode = _a.mode;
    if (typeof appearance === 'object') {
        return tslib_1.__assign({ backgroundColor: exports.backgroundColors.default.light, textColor: exports.textColors.default.light }, appearance);
    }
    return {
        backgroundColor: exports.backgroundColors[appearance][mode],
        textColor: exports.textColors[appearance][mode],
    };
});
//# sourceMappingURL=theme.js.map