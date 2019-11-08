"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var theme_1 = require("@atlaskit/theme");
var IconBase = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: ", "px;\n  height: ", "px;\n  border-radius: ", "px;\n  ", ";\n  background-color: ", "\n  overflow: hidden;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: ", "px;\n  height: ", "px;\n  border-radius: ", "px;\n  ", ";\n  background-color: ", "\n  overflow: hidden;\n"])), 4 * theme_1.gridSize(), 4 * theme_1.gridSize(), theme_1.gridSize(), function (_a) {
    var iconElevation = _a.iconElevation;
    return (iconElevation ? iconElevation : '');
}, function (_a) {
    var bgColor = _a.bgColor;
    return bgColor;
});
var ImageIconBase = styled_components_1.default.img(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  width: ", "px;\n  height: ", "px;\n"], ["\n  width: ", "px;\n  height: ", "px;\n"])), theme_1.gridSize() * 4, theme_1.gridSize() * 4);
exports.themes = {
    default: {
        backgroundColor: '#fff',
        primaryColor: '#000',
        iconElevation: theme_1.elevation.e100,
    },
    product: {
        iconColor: theme_1.colors.N0,
        backgroundColor: theme_1.colors.B400,
        primaryColor: theme_1.colors.N0,
        iconElevation: theme_1.elevation.e100,
    },
    admin: {
        backgroundColor: theme_1.colors.DN70,
        primaryColor: theme_1.colors.N0,
        iconElevation: theme_1.elevation.e100,
    },
    custom: {
        backgroundColor: theme_1.colors.N0,
        primaryColor: theme_1.colors.DN70,
        iconElevation: theme_1.elevation.e100,
    },
    subtle: {
        backgroundColor: 'transparent',
        primaryColor: theme_1.colors.text,
    },
    recommendedProduct: {
        backgroundColor: theme_1.colors.N30,
        iconColor: theme_1.colors.B200,
        iconGradientStart: theme_1.colors.B400,
        iconGradientStop: theme_1.colors.B200,
        iconElevation: theme_1.elevation.e100,
    },
    discover: {
        backgroundColor: theme_1.colors.N30,
        primaryColor: theme_1.colors.DN90,
        iconElevation: theme_1.elevation.e100,
    },
};
exports.createIcon = function (InnerIcon, defaultProps) { return function (props) {
    var _a = exports.themes[props.theme] || exports.themes.default, backgroundColor = _a.backgroundColor, iconElevation = _a.iconElevation, iconProps = tslib_1.__rest(_a, ["backgroundColor", "iconElevation"]);
    return (React.createElement(IconBase, { bgColor: backgroundColor, iconElevation: iconElevation },
        React.createElement(InnerIcon, tslib_1.__assign({}, defaultProps, iconProps))));
}; };
exports.createImageIcon = function (url) { return function (props) {
    var backgroundColor = (exports.themes[props.theme] || exports.themes.default).backgroundColor;
    return (React.createElement(IconBase, { bgColor: backgroundColor },
        React.createElement(ImageIconBase, { src: url })));
}; };
var templateObject_1, templateObject_2;
//# sourceMappingURL=icon-themes.js.map