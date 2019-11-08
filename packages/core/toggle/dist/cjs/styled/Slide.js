"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importStar(require("styled-components"));
var components_1 = require("@atlaskit/theme/components");
var colors = tslib_1.__importStar(require("@atlaskit/theme/colors"));
var constants_1 = require("./constants");
var colorOptions = {
    bgChecked: components_1.themed({ light: colors.G400, dark: colors.G300 }),
    bgCheckedHover: components_1.themed({ light: colors.G300, dark: colors.G200 }),
    bgCheckedDisabled: components_1.themed({ light: colors.N20, dark: colors.DN70 }),
    bgUnchecked: components_1.themed({ light: colors.N200, dark: colors.DN70 }),
    bgUncheckedHover: components_1.themed({ light: colors.N70, dark: colors.DN60 }),
    bgUncheckedDisabled: components_1.themed({ light: colors.N20, dark: colors.DN70 }),
};
var getBgColor = function (_a) {
    var isChecked = _a.isChecked, isDisabled = _a.isDisabled, rest = tslib_1.__rest(_a, ["isChecked", "isDisabled"]);
    var color = colorOptions.bgUnchecked;
    if (isChecked)
        color = colorOptions.bgChecked;
    if (isDisabled && !isChecked)
        color = colorOptions.bgUncheckedDisabled;
    if (isDisabled && isChecked)
        color = colorOptions.bgCheckedDisabled;
    return color(rest);
};
var getHoverStyles = function (_a) {
    var isChecked = _a.isChecked, isDisabled = _a.isDisabled, rest = tslib_1.__rest(_a, ["isChecked", "isDisabled"]);
    var bgcolor;
    if (!isDisabled) {
        bgcolor = isChecked
            ? colorOptions.bgCheckedHover
            : colorOptions.bgUncheckedHover;
    }
    return styled_components_1.css(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n    &:hover {\n      ", ";\n      cursor: ", ";\n    }\n  "], ["\n    &:hover {\n      ",
        ";\n      cursor: ", ";\n    }\n  "])), bgcolor
        ? styled_components_1.css(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n            background-color: ", ";\n          "], ["\n            background-color: ", ";\n          "])), bgcolor(rest)) : '', isDisabled ? 'not-allowed' : 'pointer');
};
var getBorderColor = function (_a) {
    var isFocused = _a.isFocused, rest = tslib_1.__rest(_a, ["isFocused"]);
    return isFocused
        ? components_1.themed({ light: colors.B100, dark: colors.B75 })(rest)
        : 'transparent';
};
exports.default = styled_components_1.default.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  background-clip: content-box;\n  background-color: ", ";\n  border-radius: ", "px;\n  border: ", " solid ", ";\n  display: block;\n  height: ", "px;\n  padding: ", ";\n  position: relative;\n  transition: ", ";\n  width: ", "px;\n\n  ", ";\n"], ["\n  background-clip: content-box;\n  background-color: ", ";\n  border-radius: ", "px;\n  border: ", " solid ", ";\n  display: block;\n  height: ", "px;\n  padding: ", ";\n  position: relative;\n  transition: ", ";\n  width: ", "px;\n\n  ", ";\n"])), getBgColor, constants_1.getHeight, constants_1.borderWidth, getBorderColor, constants_1.getHeight, constants_1.borderWidth, constants_1.transition, constants_1.getWidth, getHoverStyles);
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=Slide.js.map