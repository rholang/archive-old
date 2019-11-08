"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var constants_1 = require("@atlaskit/theme/constants");
var math_1 = require("@atlaskit/theme/math");
exports.Body = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  padding: 40px 20px;\n  text-align: center;\n"], ["\n  padding: 40px 20px;\n  text-align: center;\n"])));
exports.Heading = styled_components_1.default.h4(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  color: inherit;\n  font-size: 20px;\n  font-style: inherit;\n  font-weight: 500;\n  letter-spacing: -0.008em;\n  line-height: 1.2;\n  margin-bottom: ", "px;\n"], ["\n  color: inherit;\n  font-size: 20px;\n  font-style: inherit;\n  font-weight: 500;\n  letter-spacing: -0.008em;\n  line-height: 1.2;\n  margin-bottom: ", "px;\n"])), constants_1.gridSize);
exports.Image = styled_components_1.default.img(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  border-top-left-radius: ", "px;\n  border-top-right-radius: ", "px;\n  height: auto;\n  width: 100%;\n\n  @media (min-width: 320px) and (max-width: 480px) {\n    border-radius: 0;\n  }\n"], ["\n  border-top-left-radius: ", "px;\n  border-top-right-radius: ", "px;\n  height: auto;\n  width: 100%;\n\n  @media (min-width: 320px) and (max-width: 480px) {\n    border-radius: 0;\n  }\n"])), constants_1.borderRadius, constants_1.borderRadius);
exports.Actions = styled_components_1.default.div(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  padding: 0 40px 40px;\n"], ["\n  display: flex;\n  justify-content: center;\n  padding: 0 40px 40px;\n"])));
exports.ActionItem = styled_components_1.default.div(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n  margin: 0 ", "px;\n"], ["\n  margin: 0 ", "px;\n"])), math_1.divide(constants_1.gridSize, 2));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=Modal.js.map