"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var constants_1 = require("@atlaskit/theme/constants");
var colors_1 = require("@atlaskit/theme/colors");
var math_1 = require("@atlaskit/theme/math");
var typography_1 = require("@atlaskit/theme/typography");
exports.Container = styled_components_1.default.section(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  border-radius: ", "px;\n  background-color: ", ";\n  padding: ", "px;\n"], ["\n  display: flex;\n  border-radius: ", "px;\n  background-color: ", ";\n  padding: ", "px;\n"])), constants_1.borderRadius, function (_a) {
    var backgroundColor = _a.backgroundColor;
    return backgroundColor;
}, math_1.multiply(constants_1.gridSize, 2));
exports.ContentContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  flex-grow: 1;\n"], ["\n  flex-grow: 1;\n"])));
exports.Title = styled_components_1.default.h1(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  margin: 0;\n  ", ";\n"], ["\n  margin: 0;\n  ", ";\n"])), typography_1.h500);
exports.Description = styled_components_1.default.div(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  * + & {\n    margin-top: 8px;\n  }\n"], ["\n  * + & {\n    margin-top: 8px;\n  }\n"])));
exports.Actions = styled_components_1.default.ul(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  list-style: none;\n  padding-left: 0;\n  * + & {\n    margin-top: 8px;\n  }\n"], ["\n  display: flex;\n  list-style: none;\n  padding-left: 0;\n  * + & {\n    margin-top: 8px;\n  }\n"])));
exports.Action = styled_components_1.default.li(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n  align-items: center;\n  display: flex;\n  margin: 0;\n  & + &::before {\n    color: ", ";\n    content: '\u00B7';\n    display: inline-block;\n    text-align: center;\n    vertical-align: middle;\n    width: ", "px;\n  }\n"], ["\n  align-items: center;\n  display: flex;\n  margin: 0;\n  & + &::before {\n    color: ", ";\n    content: '\u00B7';\n    display: inline-block;\n    text-align: center;\n    vertical-align: middle;\n    width: ", "px;\n  }\n"])), colors_1.N500, math_1.multiply(constants_1.gridSize, 2));
// If the icon is not wrapped in a div with a width, and we instead use margin or
// padding, the icon is shrunk by the padding.
// Since the icons will have a consistent size, we can treat them as pre-calculated
// space.
exports.IconWrapper = styled_components_1.default.div(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["\n  flex: 0 0 auto;\n  width: ", "px;\n  > span {\n    margin: -2px 0;\n    vertical-align: top;\n  }\n"], ["\n  flex: 0 0 auto;\n  width: ", "px;\n  > span {\n    margin: -2px 0;\n    vertical-align: top;\n  }\n"])), math_1.multiply(constants_1.gridSize, 5));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=styled.js.map