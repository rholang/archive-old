"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var colors = tslib_1.__importStar(require("@atlaskit/theme/colors"));
var theme_1 = require("@atlaskit/theme");
exports.defaultThemingColors = {
    primaryTextColor: colors.text,
    secondaryTextColor: colors.N200,
    primaryHoverBackgroundColor: colors.N30,
    secondaryHoverBackgroundColor: colors.N20,
};
var defaultTopLevelItemWrapperTheme = function () {
    return {
        hover: {
            background: exports.defaultThemingColors.secondaryHoverBackgroundColor,
        },
    };
};
var defaultItemTheme = function () {
    var gridSizeResult = theme_1.gridSize();
    return {
        display: 'block',
        padding: {
            default: {
                bottom: gridSizeResult,
                top: gridSizeResult,
                left: gridSizeResult,
                right: gridSizeResult,
            },
        },
        hover: {
            background: exports.defaultThemingColors.primaryHoverBackgroundColor,
        },
        default: {
            background: 'transparent',
            text: exports.defaultThemingColors.primaryTextColor,
            secondaryText: exports.defaultThemingColors.secondaryTextColor,
        },
        active: {
            background: 'transparent',
        },
        width: {
            default: '100%',
        },
    };
};
var defaultChildItemTheme = function () {
    var defaultItemThemeResult = defaultItemTheme();
    var gridSizeResult = theme_1.gridSize();
    return {
        padding: {
            default: {
                left: gridSizeResult,
                right: gridSizeResult,
                bottom: gridSizeResult / 2,
                top: gridSizeResult / 2,
            },
        },
        hover: tslib_1.__assign({}, defaultItemThemeResult.hover),
        active: {
            background: 'transparent',
        },
        default: tslib_1.__assign(tslib_1.__assign({}, defaultItemThemeResult.default), { background: exports.defaultThemingColors.secondaryHoverBackgroundColor }),
    };
};
exports.TopLevelItemWrapperTheme = theme_1.createTheme(defaultTopLevelItemWrapperTheme);
exports.ItemTheme = theme_1.createTheme(defaultItemTheme);
exports.ChildItemTheme = theme_1.createTheme(defaultChildItemTheme);
//# sourceMappingURL=default-theme.js.map