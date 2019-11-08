import { __assign, __makeTemplateObject, __rest } from "tslib";
import * as React from 'react';
import styled from 'styled-components';
import { colors, elevation, gridSize } from '@atlaskit/theme';
var IconBase = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: ", "px;\n  height: ", "px;\n  border-radius: ", "px;\n  ", ";\n  background-color: ", "\n  overflow: hidden;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: ", "px;\n  height: ", "px;\n  border-radius: ", "px;\n  ", ";\n  background-color: ", "\n  overflow: hidden;\n"])), 4 * gridSize(), 4 * gridSize(), gridSize(), function (_a) {
    var iconElevation = _a.iconElevation;
    return (iconElevation ? iconElevation : '');
}, function (_a) {
    var bgColor = _a.bgColor;
    return bgColor;
});
var ImageIconBase = styled.img(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: ", "px;\n  height: ", "px;\n"], ["\n  width: ", "px;\n  height: ", "px;\n"])), gridSize() * 4, gridSize() * 4);
export var themes = {
    default: {
        backgroundColor: '#fff',
        primaryColor: '#000',
        iconElevation: elevation.e100,
    },
    product: {
        iconColor: colors.N0,
        backgroundColor: colors.B400,
        primaryColor: colors.N0,
        iconElevation: elevation.e100,
    },
    admin: {
        backgroundColor: colors.DN70,
        primaryColor: colors.N0,
        iconElevation: elevation.e100,
    },
    custom: {
        backgroundColor: colors.N0,
        primaryColor: colors.DN70,
        iconElevation: elevation.e100,
    },
    subtle: {
        backgroundColor: 'transparent',
        primaryColor: colors.text,
    },
    recommendedProduct: {
        backgroundColor: colors.N30,
        iconColor: colors.B200,
        iconGradientStart: colors.B400,
        iconGradientStop: colors.B200,
        iconElevation: elevation.e100,
    },
    discover: {
        backgroundColor: colors.N30,
        primaryColor: colors.DN90,
        iconElevation: elevation.e100,
    },
};
export var createIcon = function (InnerIcon, defaultProps) { return function (props) {
    var _a = themes[props.theme] || themes.default, backgroundColor = _a.backgroundColor, iconElevation = _a.iconElevation, iconProps = __rest(_a, ["backgroundColor", "iconElevation"]);
    return (React.createElement(IconBase, { bgColor: backgroundColor, iconElevation: iconElevation },
        React.createElement(InnerIcon, __assign({}, defaultProps, iconProps))));
}; };
export var createImageIcon = function (url) { return function (props) {
    var backgroundColor = (themes[props.theme] || themes.default).backgroundColor;
    return (React.createElement(IconBase, { bgColor: backgroundColor },
        React.createElement(ImageIconBase, { src: url })));
}; };
var templateObject_1, templateObject_2;
//# sourceMappingURL=icon-themes.js.map