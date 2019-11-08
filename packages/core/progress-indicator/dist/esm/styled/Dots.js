import { __makeTemplateObject } from "tslib";
import styled, { css } from 'styled-components';
import { themed } from '@atlaskit/theme/components';
import * as colors from '@atlaskit/theme/colors';
var colorMap = {
    default: themed({ light: colors.N50, dark: colors.DN70 }),
    help: themed({ light: colors.P75, dark: colors.DN70 }),
    inverted: themed({ light: 'rgba(255, 255, 255, 0.4)', dark: colors.DN300A }),
    primary: themed({ light: colors.B75, dark: colors.DN70 }),
};
var selectedColorMap = {
    default: themed({ light: colors.N900, dark: colors.DN600 }),
    help: themed({ light: colors.P400, dark: colors.P300 }),
    inverted: themed({ light: colors.N0, dark: colors.DN30 }),
    primary: themed({ light: colors.B400, dark: colors.B100 }),
};
var outlineColorMap = {
    default: themed({ light: colors.B75, dark: colors.B200 }),
    help: themed({ light: colors.P75, dark: colors.P75 }),
    inverted: themed({ light: colors.B200, dark: colors.B75 }),
    primary: themed({ light: colors.B75, dark: colors.B75 }),
};
var sizes = {
    small: 4,
    default: 8,
    large: 12,
};
var spacingDivision = {
    comfortable: 2,
    cozy: 4,
    compact: 8,
};
var getDimensions = function (_a) {
    var gutter = _a.gutter, size = _a.size;
    var val = sizes[size];
    var margin = val / spacingDivision[gutter];
    var hitslop = val + margin * 2;
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    height: ", "px;\n    margin-left: ", "px;\n    margin-right: ", "px;\n    position: relative;\n    width: ", "px;\n\n    &::before {\n      content: '';\n      display: block;\n      height: ", "px;\n      left: -", "px;\n      position: absolute;\n      top: -", "px;\n      width: ", "px;\n    }\n  "], ["\n    height: ", "px;\n    margin-left: ", "px;\n    margin-right: ", "px;\n    position: relative;\n    width: ", "px;\n\n    &::before {\n      content: '';\n      display: block;\n      height: ", "px;\n      left: -", "px;\n      position: absolute;\n      top: -", "px;\n      width: ", "px;\n    }\n  "])), val, margin, margin, val, hitslop, margin, margin, hitslop);
};
var getColor = function (_a) {
    var appearance = _a.appearance, selected = _a.selected;
    return selected ? selectedColorMap[appearance] : colorMap[appearance];
};
var commonRules = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", " background-color: ", ";\n  border-radius: 50%;\n"], ["\n  ", " background-color: ", ";\n  border-radius: 50%;\n"])), getDimensions, getColor);
export var Container = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n"], ["\n  display: flex;\n  justify-content: center;\n"])));
export var IndicatorButton = styled.button(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", " border: 0;\n  cursor: pointer;\n  outline: 0;\n  padding: 0;\n\n  ", ";\n"], ["\n  ", " border: 0;\n  cursor: pointer;\n  outline: 0;\n  padding: 0;\n\n  ",
    ";\n"])), commonRules, function (p) {
    return p.selected
        ? css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n          &:focus {\n            box-shadow: 0 0 0 2px ", ";\n          }\n        "], ["\n          &:focus {\n            box-shadow: 0 0 0 2px ", ";\n          }\n        "])), outlineColorMap[p.appearance]) : null;
});
export var IndicatorDiv = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), commonRules);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=Dots.js.map