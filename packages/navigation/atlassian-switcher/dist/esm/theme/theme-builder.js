import { __assign } from "tslib";
import memoizeOne from 'memoize-one';
var maybeGetToken = function (propertyName, customThemeProps, colorName) {
    var _a;
    var value = customThemeProps[colorName];
    if (!value) {
        return {};
    }
    return _a = {},
        _a[propertyName] = value,
        _a;
};
export var createCustomTheme = memoizeOne(function (customThemeProps) {
    if (customThemeProps === void 0) { customThemeProps = {}; }
    var topLevelItemWrapperTheme = function (theme, props) { return (__assign(__assign({}, theme(props)), { hover: __assign(__assign({}, theme(props).hover), maybeGetToken('background', customThemeProps, 'secondaryHoverBackgroundColor')) })); };
    var itemTheme = function (theme, props) { return (__assign(__assign({}, theme(props)), { hover: __assign(__assign(__assign(__assign({}, theme(props).hover), maybeGetToken('background', customThemeProps, 'primaryHoverBackgroundColor')), maybeGetToken('text', customThemeProps, 'primaryTextColor')), maybeGetToken('secondaryText', customThemeProps, 'secondaryTextColor')), default: __assign(__assign(__assign({}, theme(props).default), maybeGetToken('text', customThemeProps, 'primaryTextColor')), maybeGetToken('secondaryText', customThemeProps, 'secondaryTextColor')) })); };
    var childItemTheme = function (theme, props) { return (__assign(__assign({}, theme(props)), { hover: __assign(__assign(__assign(__assign({}, theme(props).hover), maybeGetToken('background', customThemeProps, 'primaryHoverBackgroundColor')), maybeGetToken('text', customThemeProps, 'primaryTextColor')), maybeGetToken('secondaryText', customThemeProps, 'secondaryTextColor')), default: __assign(__assign(__assign(__assign({}, theme(props).default), maybeGetToken('background', customThemeProps, 'secondaryHoverBackgroundColor')), maybeGetToken('text', customThemeProps, 'primaryTextColor')), maybeGetToken('secondaryText', customThemeProps, 'secondaryTextColor')) })); };
    return {
        topLevelItemWrapperTheme: topLevelItemWrapperTheme,
        itemTheme: itemTheme,
        childItemTheme: childItemTheme,
    };
});
//# sourceMappingURL=theme-builder.js.map