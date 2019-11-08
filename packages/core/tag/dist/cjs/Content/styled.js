"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importStar(require("styled-components"));
var constants_1 = require("@atlaskit/theme/constants");
var colors_1 = require("@atlaskit/theme/colors");
var math_1 = require("@atlaskit/theme/math");
var constants_2 = require("../constants");
// Common styles for Text & Link
var COMMON_STYLES = styled_components_1.css(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  font-size: ", "px;\n  font-weight: normal;\n  line-height: 1;\n  margin-left: ", "px;\n  margin-right: ", "px;\n  padding: 2px 0;\n  max-width: ", ";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"], ["\n  font-size: ", "px;\n  font-weight: normal;\n  line-height: 1;\n  margin-left: ", "px;\n  margin-right: ", "px;\n  padding: 2px 0;\n  max-width: ",
    ";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"])), constants_1.fontSize, math_1.divide(constants_1.gridSize, 2), math_1.divide(constants_1.gridSize, 2), function (_a) {
    var isRemovable = _a.isRemovable;
    return isRemovable
        ? constants_2.maxTextWidthUnitless - constants_2.buttonWidthUnitless + "px"
        : constants_2.maxTextWidth;
});
exports.Text = styled_components_1.default.span(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), COMMON_STYLES);
// Styles exclusive to Link
var getFocusedStyles = function (_a) {
    var isFocused = _a.isFocused, color = _a.color, rest = tslib_1.__rest(_a, ["isFocused", "color"]);
    if (color !== 'standard')
        return styled_components_1.css(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n      color: inherit;\n    "], ["\n      color: inherit;\n    "])));
    if (isFocused)
        return styled_components_1.css(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n      color: ", ";\n    "], ["\n      color: ", ";\n    "])), colors_1.link(rest));
    return null;
};
exports.linkStyles = styled_components_1.css(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n  ", " ", " text-decoration: ", ";\n\n  &:hover {\n    color: ", ";\n    ", ";\n  }\n"], ["\n  ", " ", " text-decoration: ",
    ";\n\n  &:hover {\n    color: ", ";\n    ",
    ";\n  }\n"])), COMMON_STYLES, getFocusedStyles, function (_a) {
    var color = _a.color;
    return (color === 'standard' ? 'none' : 'underline');
}, colors_1.linkHover, function (_a) {
    var color = _a.color;
    return color === 'standard'
        ? ''
        : styled_components_1.css(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n            color: inherit;\n          "], ["\n            color: inherit;\n          "])));
});
exports.Link = styled_components_1.default.a(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), exports.linkStyles);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=styled.js.map