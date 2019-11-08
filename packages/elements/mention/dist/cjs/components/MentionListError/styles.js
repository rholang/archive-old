"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var theme_1 = require("@atlaskit/theme");
exports.MentionListErrorStyle = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  background-color: white;\n  color: ", ";\n  border: 1px solid #fff;\n  border-radius: ", "px;\n"], ["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  background-color: white;\n  color: ", ";\n  border: 1px solid #fff;\n  border-radius: ", "px;\n"])), theme_1.colors.N500, theme_1.borderRadius());
exports.GenericErrorVisualStyle = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  height: 108px;\n  margin-bottom: 8px;\n  margin-top: 36px;\n  width: 83px;\n"], ["\n  height: 108px;\n  margin-bottom: 8px;\n  margin-top: 36px;\n  width: 83px;\n"])));
// TODO: Figure out why the themed css function is causing type errors when passed prop children
exports.MentionListErrorHeadlineStyle = styled_components_1.default.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  ", ";\n  margin-bottom: 8px;\n"], ["\n  ", ";\n  margin-bottom: 8px;\n"])), theme_1.typography.h400());
exports.MentionListAdviceStyle = styled_components_1.default.div(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  margin-bottom: 48px;\n"], ["\n  margin-bottom: 48px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=styles.js.map