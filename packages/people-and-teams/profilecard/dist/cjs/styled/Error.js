"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var theme_1 = require("@atlaskit/theme");
var constants_1 = require("../styled/constants");
exports.ErrorWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  text-align: center;\n  padding: ", "px;\n  color: ", ";\n"], ["\n  text-align: center;\n  padding: ", "px;\n  color: ", ";\n"])), theme_1.math.multiply(theme_1.gridSize, 3), constants_1.errorIconColor);
exports.ErrorTitle = styled_components_1.default.p(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  color: ", ";\n  line-height: ", "px;\n  margin: ", "px 0;\n"], ["\n  color: ", ";\n  line-height: ", "px;\n  margin: ", "px 0;\n"])), constants_1.errorTitleColor, theme_1.math.multiply(theme_1.gridSize, 3), theme_1.gridSize);
exports.ErrorText = styled_components_1.default.span(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), constants_1.errorTextColor);
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=Error.js.map