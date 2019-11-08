"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var theme_1 = require("@atlaskit/theme");
var gridSizeTimes_1 = tslib_1.__importDefault(require("../../util/gridSizeTimes"));
var baseHeading = function (size, lineHeight) { return "\n  font-size: " + size / theme_1.fontSize() + "em;\n  font-style: inherit;\n  line-height: " + lineHeight / size + ";\n"; };
exports.UserInfoOuter = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  margin-bottom: ", "px;\n"], ["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  margin-bottom: ", "px;\n"])), gridSizeTimes_1.default(2));
exports.Avatar = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  margin-left: ", "px;\n  margin-right: ", "px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  margin-left: ", "px;\n  margin-right: ", "px;\n"])), gridSizeTimes_1.default(2.5), gridSizeTimes_1.default(1));
exports.UserDetails = styled_components_1.default.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  margin-left: ", "px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  margin-left: ", "px;\n"])), gridSizeTimes_1.default(0.5));
exports.UserName = styled_components_1.default.span(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  ", ";\n  margin-top: 0;\n"], ["\n  ", ";\n  margin-top: 0;\n"])), theme_1.typography.h500);
exports.UserEmail = styled_components_1.default.span(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n  ", " color: ", ";\n  font-weight: 300;\n  margin-top: ", "px;\n"], ["\n  ", " color: ", ";\n  font-weight: 300;\n  margin-top: ", "px;\n"])), baseHeading(11, 16), theme_1.colors.subtleHeading, gridSizeTimes_1.default(0.5));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=styles.js.map