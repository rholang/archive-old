import { __assign } from "tslib";
import { createTheme } from '@atlaskit/theme/components';
import * as colors from '@atlaskit/theme/colors';
/** Note:
 * Lozenge does not support dark mode at the moment.
 * Hence, color values are the same.
 */
export var defaultBackgroundColor = {
    default: { light: colors.N40, dark: colors.N40 },
    inprogress: { light: colors.B50, dark: colors.B50 },
    moved: { light: colors.Y75, dark: colors.Y75 },
    new: { light: colors.P50, dark: colors.P50 },
    removed: { light: colors.R50, dark: colors.R50 },
    success: { light: colors.G50, dark: colors.G50 },
};
export var defaultTextColor = {
    default: { light: colors.N500, dark: colors.N500 },
    inprogress: { light: colors.B500, dark: colors.B500 },
    moved: { light: colors.N800, dark: colors.N800 },
    new: { light: colors.P500, dark: colors.P500 },
    removed: { light: colors.R500, dark: colors.R500 },
    success: { light: colors.G500, dark: colors.G500 },
};
export var boldBackgroundColor = {
    default: { light: colors.N500, dark: colors.N500 },
    inprogress: { light: colors.B400, dark: colors.B400 },
    moved: { light: colors.Y500, dark: colors.Y500 },
    new: { light: colors.P400, dark: colors.P400 },
    removed: { light: colors.R400, dark: colors.R400 },
    success: { light: colors.G400, dark: colors.G400 },
};
export var boldTextColor = {
    default: { light: colors.N0, dark: colors.N0 },
    inprogress: { light: colors.N0, dark: colors.N0 },
    moved: { light: colors.N800, dark: colors.N800 },
    new: { light: colors.N0, dark: colors.N0 },
    removed: { light: colors.N0, dark: colors.N0 },
    success: { light: colors.N0, dark: colors.N0 },
};
export var Theme = createTheme(function (_a) {
    var appearance = _a.appearance, isBold = _a.isBold, maxWidth = _a.maxWidth;
    return (__assign(__assign({}, (typeof appearance === 'object'
        ? __assign({ backgroundColor: (isBold
                ? boldBackgroundColor
                : defaultBackgroundColor).default.light, textColor: (isBold ? boldTextColor : defaultTextColor).default.light }, appearance) : {
        backgroundColor: (isBold
            ? boldBackgroundColor[appearance]
            : defaultBackgroundColor[appearance]).light,
        textColor: (isBold
            ? boldTextColor[appearance]
            : defaultTextColor[appearance]).light,
    })), { maxWidth: maxWidth }));
});
//# sourceMappingURL=theme.js.map