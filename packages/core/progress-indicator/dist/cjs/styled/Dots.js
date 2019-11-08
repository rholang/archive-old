"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importStar(require("styled-components"));
var components_1 = require("@atlaskit/theme/components");
var colors = tslib_1.__importStar(require("@atlaskit/theme/colors"));
var colorMap = {
    default: components_1.themed({ light: colors.N50, dark: colors.DN70 }),
    help: components_1.themed({ light: colors.P75, dark: colors.DN70 }),
    inverted: components_1.themed({ light: 'rgba(255, 255, 255, 0.4)', dark: colors.DN300A }),
    primary: components_1.themed({ light: colors.B75, dark: colors.DN70 }),
};
var selectedColorMap = {
    default: components_1.themed({ light: colors.N900, dark: colors.DN600 }),
    help: components_1.themed({ light: colors.P400, dark: colors.P300 }),
    inverted: components_1.themed({ light: colors.N0, dark: colors.DN30 }),
    primary: components_1.themed({ light: colors.B400, dark: colors.B100 }),
};
var outlineColorMap = {
    default: components_1.themed({ light: colors.B75, dark: colors.B200 }),
    help: components_1.themed({ light: colors.P75, dark: colors.P75 }),
    inverted: components_1.themed({ light: colors.B200, dark: colors.B75 }),
    primary: components_1.themed({ light: colors.B75, dark: colors.B75 }),
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
    return styled_components_1.css(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n    height: ", "px;\n    margin-left: ", "px;\n    margin-right: ", "px;\n    position: relative;\n    width: ", "px;\n\n    &::before {\n      content: '';\n      display: block;\n      height: ", "px;\n      left: -", "px;\n      position: absolute;\n      top: -", "px;\n      width: ", "px;\n    }\n  "], ["\n    height: ", "px;\n    margin-left: ", "px;\n    margin-right: ", "px;\n    position: relative;\n    width: ", "px;\n\n    &::before {\n      content: '';\n      display: block;\n      height: ", "px;\n      left: -", "px;\n      position: absolute;\n      top: -", "px;\n      width: ", "px;\n    }\n  "])), val, margin, margin, val, hitslop, margin, margin, hitslop);
};
var getColor = function (_a) {
    var appearance = _a.appearance, selected = _a.selected;
    return selected ? selectedColorMap[appearance] : colorMap[appearance];
};
var commonRules = styled_components_1.css(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  ", " background-color: ", ";\n  border-radius: 50%;\n"], ["\n  ", " background-color: ", ";\n  border-radius: 50%;\n"])), getDimensions, getColor);
exports.Container = styled_components_1.default.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n"], ["\n  display: flex;\n  justify-content: center;\n"])));
exports.IndicatorButton = styled_components_1.default.button(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n  ", " border: 0;\n  cursor: pointer;\n  outline: 0;\n  padding: 0;\n\n  ", ";\n"], ["\n  ", " border: 0;\n  cursor: pointer;\n  outline: 0;\n  padding: 0;\n\n  ",
    ";\n"])), commonRules, function (p) {
    return p.selected
        ? styled_components_1.css(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n          &:focus {\n            box-shadow: 0 0 0 2px ", ";\n          }\n        "], ["\n          &:focus {\n            box-shadow: 0 0 0 2px ", ";\n          }\n        "])), outlineColorMap[p.appearance]) : null;
});
exports.IndicatorDiv = styled_components_1.default.div(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), commonRules);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=Dots.js.map