import { __assign } from "tslib";
import * as colors from '@atlaskit/theme/colors';
import { gridSize, createTheme } from '@atlaskit/theme';
export var defaultThemingColors = {
    primaryTextColor: colors.text,
    secondaryTextColor: colors.N200,
    primaryHoverBackgroundColor: colors.N30,
    secondaryHoverBackgroundColor: colors.N20,
};
var defaultTopLevelItemWrapperTheme = function () {
    return {
        hover: {
            background: defaultThemingColors.secondaryHoverBackgroundColor,
        },
    };
};
var defaultItemTheme = function () {
    var gridSizeResult = gridSize();
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
            background: defaultThemingColors.primaryHoverBackgroundColor,
        },
        default: {
            background: 'transparent',
            text: defaultThemingColors.primaryTextColor,
            secondaryText: defaultThemingColors.secondaryTextColor,
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
    var gridSizeResult = gridSize();
    return {
        padding: {
            default: {
                left: gridSizeResult,
                right: gridSizeResult,
                bottom: gridSizeResult / 2,
                top: gridSizeResult / 2,
            },
        },
        hover: __assign({}, defaultItemThemeResult.hover),
        active: {
            background: 'transparent',
        },
        default: __assign(__assign({}, defaultItemThemeResult.default), { background: defaultThemingColors.secondaryHoverBackgroundColor }),
    };
};
export var TopLevelItemWrapperTheme = createTheme(defaultTopLevelItemWrapperTheme);
export var ItemTheme = createTheme(defaultItemTheme);
export var ChildItemTheme = createTheme(defaultChildItemTheme);
//# sourceMappingURL=default-theme.js.map