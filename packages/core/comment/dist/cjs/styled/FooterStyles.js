"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var constants_1 = require("@atlaskit/theme/constants");
var colors_1 = require("@atlaskit/theme/colors");
var constants_2 = require("./constants");
var ThemeColor = {
    text: {
        default: colors_1.N500,
        error: colors_1.Y500,
    },
};
exports.ActionsItem = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: flex;\n\n  & + &::before {\n    color: ", ";\n    content: '\u00B7';\n    display: inline-block;\n    text-align: center;\n    vertical-align: middle;\n    width: ", "px;\n  }\n"], ["\n  display: flex;\n\n  & + &::before {\n    color: ", ";\n    content: '\u00B7';\n    display: inline-block;\n    text-align: center;\n    vertical-align: middle;\n    width: ", "px;\n  }\n"])), ThemeColor.text.default, constants_2.actionsPadding);
exports.ErrorIcon = styled_components_1.default.span(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  color: ", ";\n  padding-right: ", "px;\n"], ["\n  color: ", ";\n  padding-right: ", "px;\n"])), ThemeColor.text.error, constants_1.gridSize());
exports.ActionsContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: ", "px;\n"], ["\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: ", "px;\n"])), constants_1.gridSize() * 0.75);
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=FooterStyles.js.map