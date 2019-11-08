"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var memoize_one_1 = tslib_1.__importDefault(require("memoize-one"));
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
exports.createCustomTheme = memoize_one_1.default(function (customThemeProps) {
    if (customThemeProps === void 0) { customThemeProps = {}; }
    var topLevelItemWrapperTheme = function (theme, props) { return (tslib_1.__assign(tslib_1.__assign({}, theme(props)), { hover: tslib_1.__assign(tslib_1.__assign({}, theme(props).hover), maybeGetToken('background', customThemeProps, 'secondaryHoverBackgroundColor')) })); };
    var itemTheme = function (theme, props) { return (tslib_1.__assign(tslib_1.__assign({}, theme(props)), { hover: tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, theme(props).hover), maybeGetToken('background', customThemeProps, 'primaryHoverBackgroundColor')), maybeGetToken('text', customThemeProps, 'primaryTextColor')), maybeGetToken('secondaryText', customThemeProps, 'secondaryTextColor')), default: tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, theme(props).default), maybeGetToken('text', customThemeProps, 'primaryTextColor')), maybeGetToken('secondaryText', customThemeProps, 'secondaryTextColor')) })); };
    var childItemTheme = function (theme, props) { return (tslib_1.__assign(tslib_1.__assign({}, theme(props)), { hover: tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, theme(props).hover), maybeGetToken('background', customThemeProps, 'primaryHoverBackgroundColor')), maybeGetToken('text', customThemeProps, 'primaryTextColor')), maybeGetToken('secondaryText', customThemeProps, 'secondaryTextColor')), default: tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, theme(props).default), maybeGetToken('background', customThemeProps, 'secondaryHoverBackgroundColor')), maybeGetToken('text', customThemeProps, 'primaryTextColor')), maybeGetToken('secondaryText', customThemeProps, 'secondaryTextColor')) })); };
    return {
        topLevelItemWrapperTheme: topLevelItemWrapperTheme,
        itemTheme: itemTheme,
        childItemTheme: childItemTheme,
    };
});
//# sourceMappingURL=theme-builder.js.map