"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var item_1 = require("@atlaskit/item");
var components_1 = require("@atlaskit/theme/components");
var colors = tslib_1.__importStar(require("@atlaskit/theme/colors"));
var chromatism_1 = tslib_1.__importDefault(require("chromatism"));
var constants_1 = require("../constants");
// These themes are copied over from @atlaskit/global-navigation to preserve the theming
// of search and starred drawers.
var focus = {
    outline: components_1.themed({ light: colors.B100, dark: colors.B75 }),
};
function lightenColor(color, alpha) {
    var _a = chromatism_1.default.convert(color).rgb, red = _a.r, green = _a.g, blue = _a.b;
    return "rgba(" + red + ", " + green + ", " + blue + ", 0." + alpha + ")";
}
var navigationTheme = (function () {
    var primaryBackground = colors.codeBlock;
    var item = {
        default: {
            background: 'transparent',
        },
        hover: {
            background: components_1.themed({
                light: colors.N20A,
                dark: constants_1.darkDrawerItemHoverBackground,
            }),
        },
        active: {
            background: components_1.themed({
                light: colors.B50,
                dark: constants_1.darkDrawerItemActiveBackground,
            }),
        },
        selected: {
            background: colors.N20A,
            text: colors.B400,
        },
        focus: focus,
        dragging: {
            // similar to hover - but without opacity
            background: components_1.themed({ light: colors.N30, dark: colors.DN30 }),
        },
    };
    var scrollBar = {
        default: {
            background: components_1.themed({
                light: lightenColor(colors.N500, 36),
                dark: lightenColor(colors.DN600, 36),
            }),
        },
        hover: {
            background: components_1.themed({
                light: lightenColor(colors.N500, 56),
                dark: lightenColor(colors.DN600, 56),
            }),
        },
    };
    var dropdown = {
        default: {
            background: item.hover.background,
        },
        hover: {
            background: components_1.themed({ light: colors.N30A, dark: colors.DN30A }),
        },
        active: item.active,
        selected: item.selected,
        focus: item.focus,
        dragging: item.dragging,
    };
    var theme = {
        background: {
            primary: primaryBackground,
            secondary: primaryBackground,
            tertiary: components_1.themed({ light: colors.N0, dark: colors.DN30 }),
        },
        text: components_1.themed({ light: colors.N500, dark: colors.DN600 }),
        subText: colors.subtleText,
        keyline: components_1.themed({ light: colors.N30A, dark: colors.DN30A }),
        item: item,
        dropdown: dropdown,
        scrollBar: scrollBar,
    };
    return theme;
})();
exports.default = (_a = {},
    _a[item_1.itemThemeNamespace] = {
        padding: {
            compact: {
                bottom: constants_1.gridSize,
                left: constants_1.gridSize,
                right: constants_1.gridSize,
                top: constants_1.gridSize,
            },
            default: {
                bottom: constants_1.gridSize,
                left: constants_1.gridSize * 1.5,
                right: constants_1.gridSize * 1.5,
                top: constants_1.gridSize,
            },
        },
        borderRadius: 3,
        height: {
            compact: constants_1.gridSize * 4.5,
            default: constants_1.gridSize * 5,
        },
        beforeItemSpacing: {
            compact: constants_1.gridSize,
            default: constants_1.gridSize * 2,
        },
        default: {
            background: navigationTheme.item.default.background,
            text: navigationTheme.text,
            secondaryText: navigationTheme.subText,
        },
        hover: {
            background: navigationTheme.item.hover.background,
            text: navigationTheme.text,
            secondaryText: navigationTheme.subText,
        },
        active: {
            background: navigationTheme.item.active.background,
            text: navigationTheme.item.active.text || navigationTheme.text,
            secondaryText: navigationTheme.subText,
        },
        selected: {
            background: navigationTheme.item.selected.background,
            text: navigationTheme.item.selected.text || '',
            secondaryText: navigationTheme.subText,
        },
        focus: {
            outline: navigationTheme.item.focus.outline,
        },
        dragging: {
            background: navigationTheme.item.dragging.background,
        },
    },
    _a);
//# sourceMappingURL=drawer-item-theme.js.map