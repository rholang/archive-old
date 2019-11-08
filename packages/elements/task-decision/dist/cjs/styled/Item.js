"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var theme_1 = require("@atlaskit/theme");
var akGridSize = theme_1.gridSize();
exports.ContentWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  margin: 0;\n  word-wrap: break-word;\n  min-width: 0;\n  flex: 1 1 auto;\n"], ["\n  margin: 0;\n  word-wrap: break-word;\n  min-width: 0;\n  flex: 1 1 auto;\n"])));
exports.Wrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n\n  line-height: 20px;\n  border-radius: ", "px;\n  margin: ", "px 0;\n  padding: ", "px ", "px;\n  min-height: 36px;\n  box-sizing: border-box;\n  box-shadow: none;\n\n  &:hover {\n    box-shadow: none;\n    transition: box-shadow 0.2s ease-in-out;\n    background-color: ", ";\n  }\n\n  border: 1px solid: ", ";\n"], ["\n  display: flex;\n  flex-direction: row;\n\n  line-height: 20px;\n  border-radius: ", "px;\n  margin: ", "px 0;\n  padding: ", "px ", "px;\n  min-height: 36px;\n  box-sizing: border-box;\n  box-shadow: none;\n\n  &:hover {\n    box-shadow: none;\n    transition: box-shadow 0.2s ease-in-out;\n    background-color: ", ";\n  }\n\n  border: 1px solid: ", ";\n"])), theme_1.borderRadius(), akGridSize / 2, akGridSize, akGridSize, theme_1.themed({ light: theme_1.colors.N20, dark: theme_1.colors.DN50 }), theme_1.themed({ light: 'none', dark: theme_1.colors.DN60 }));
exports.ParticipantWrapper = styled_components_1.default.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  margin: -2px 8px;\n"], ["\n  margin: -2px 8px;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=Item.js.map