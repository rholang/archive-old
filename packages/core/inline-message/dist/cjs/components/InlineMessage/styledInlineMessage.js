"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importStar(require("styled-components"));
var components_1 = require("@atlaskit/theme/components");
var colors = tslib_1.__importStar(require("@atlaskit/theme/colors"));
var constants_1 = require("../../constants");
var getFocusColor = components_1.themed('appearance', {
    connectivity: { light: colors.B500, dark: colors.B200 },
    confirmation: { light: colors.G400, dark: colors.G400 },
    info: { light: colors.P500, dark: colors.P300 },
    warning: { light: colors.Y500, dark: colors.Y500 },
    error: { light: colors.R500, dark: colors.R500 },
});
exports.Root = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: inline-block;\n  max-width: 100%;\n  &:focus {\n    outline: 1px solid ", ";\n  }\n"], ["\n  display: inline-block;\n  max-width: 100%;\n  &:focus {\n    outline: 1px solid ", ";\n  }\n"])), getFocusColor);
exports.ButtonContents = styled_components_1.default.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  align-items: center;\n  display: flex;\n  text-decoration: none;\n  ", ";\n"], ["\n  align-items: center;\n  display: flex;\n  text-decoration: none;\n  ",
    ";\n"])), function (_a) {
    var isHovered = _a.isHovered;
    return isHovered && styled_components_1.css(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n      color: ", ";\n      text-decoration: underline;\n    "], ["\n      color: ", ";\n      text-decoration: underline;\n    "])), colors.N600);
});
var getTitleColor = components_1.themed({ light: colors.N600, dark: colors.DN600 });
var getTextColor = components_1.themed({ light: colors.N300, dark: colors.DN100 });
exports.Title = styled_components_1.default.span(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  color: ", ";\n  font-weight: 500;\n  padding: 0 ", "px;\n"], ["\n  color: ", ";\n  font-weight: 500;\n  padding: 0 ", "px;\n"])), getTitleColor, constants_1.itemSpacing);
exports.Text = styled_components_1.default.span(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n  color: ", ";\n  padding: 0 ", "px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"], ["\n  color: ", ";\n  padding: 0 ", "px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"])), getTextColor, constants_1.itemSpacing);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=styledInlineMessage.js.map