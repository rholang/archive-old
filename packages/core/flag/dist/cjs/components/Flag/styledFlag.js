"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var constants_1 = require("@atlaskit/theme/constants");
var math_1 = require("@atlaskit/theme/math");
var theme_1 = require("../../theme");
var getBoxShadow = function (props) {
    var borderColor = theme_1.flagBorderColor(props);
    var shadowColor = theme_1.flagShadowColor(props);
    var border = borderColor && "0 0 1px " + borderColor;
    var shadow = "0 20px 32px -8px " + shadowColor;
    return [border, shadow].filter(function (p) { return p; }).join(',');
};
exports.default = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  background-color: ", ";\n  border-radius: ", "px;\n  box-sizing: border-box;\n  box-shadow: ", ";\n  color: ", ";\n  padding: ", "px;\n  transition: background-color 200ms;\n  width: 100%;\n  z-index: 600;\n\n  &:focus {\n    outline: none;\n    box-shadow: 0 0 0 2px ", ";\n  }\n"], ["\n  background-color: ", ";\n  border-radius: ", "px;\n  box-sizing: border-box;\n  box-shadow: ", ";\n  color: ", ";\n  padding: ", "px;\n  transition: background-color 200ms;\n  width: 100%;\n  z-index: 600;\n\n  &:focus {\n    outline: none;\n    box-shadow: 0 0 0 2px ", ";\n  }\n"])), theme_1.flagBackgroundColor, constants_1.borderRadius, getBoxShadow, theme_1.flagTextColor, math_1.multiply(constants_1.gridSize, 2), theme_1.flagFocusRingColor);
// Header
exports.Header = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  height: ", "px;\n"], ["\n  display: flex;\n  align-items: center;\n  height: ", "px;\n"])), math_1.multiply(constants_1.gridSize, 4));
exports.Icon = styled_components_1.default.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  flex: 0 0 auto;\n  width: ", "px;\n"], ["\n  flex: 0 0 auto;\n  width: ", "px;\n"])), math_1.multiply(constants_1.gridSize, 5));
exports.Title = styled_components_1.default.span(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  color: ", ";\n  font-weight: 600;\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"], ["\n  color: ", ";\n  font-weight: 600;\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"])), theme_1.flagTextColor);
exports.DismissButton = styled_components_1.default.button(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n  appearance: none;\n  background: none;\n  border: none;\n  border-radius: ", "px;\n  color: ", ";\n  cursor: pointer;\n  flex: 0 0 auto;\n  line-height: 1;\n  margin-left: ", "px;\n  padding: 0;\n  white-space: nowrap;\n  &:focus {\n    outline: none;\n    box-shadow: 0 0 0 2px ", ";\n  }\n"], ["\n  appearance: none;\n  background: none;\n  border: none;\n  border-radius: ", "px;\n  color: ", ";\n  cursor: pointer;\n  flex: 0 0 auto;\n  line-height: 1;\n  margin-left: ", "px;\n  padding: 0;\n  white-space: nowrap;\n  &:focus {\n    outline: none;\n    box-shadow: 0 0 0 2px ", ";\n  }\n"])), constants_1.borderRadius, theme_1.flagTextColor, constants_1.gridSize, theme_1.flagFocusRingColor);
// Content
exports.Content = styled_components_1.default.div(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  flex: 1 1 100%;\n  flex-direction: column;\n  justify-content: center;\n  min-width: 0;\n  padding: 0 0 0 ", "px;\n"], ["\n  display: flex;\n  flex: 1 1 100%;\n  flex-direction: column;\n  justify-content: center;\n  min-width: 0;\n  padding: 0 0 0 ", "px;\n"])), math_1.multiply(constants_1.gridSize, 5));
exports.Expander = styled_components_1.default.div(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["\n  max-height: ", "px;\n  opacity: ", ";\n  overflow: ", ";\n  transition: max-height 0.3s, opacity 0.3s;\n"], ["\n  max-height: ", "px;\n  opacity: ", ";\n  overflow: ",
    ";\n  transition: max-height 0.3s, opacity 0.3s;\n"])), function (_a) {
    var isExpanded = _a.isExpanded;
    return (isExpanded ? 150 : 0);
}, function (_a) {
    var isExpanded = _a.isExpanded;
    return (isExpanded ? 1 : 0);
}, function (_a) {
    var isExpanded = _a.isExpanded;
    return isExpanded ? 'visible' : 'hidden';
});
exports.Description = styled_components_1.default.div(templateObject_8 || (templateObject_8 = tslib_1.__makeTemplateObject(["\n  color: ", ";\n  word-wrap: break-word;\n"], ["\n  color: ", ";\n  word-wrap: break-word;\n"])), theme_1.flagTextColor);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=styledFlag.js.map