"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var constants_1 = require("@atlaskit/theme/constants");
var math_1 = require("@atlaskit/theme/math");
exports.FillScreen = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  height: 100%;\n  left: 0;\n  overflow-y: auto;\n  position: absolute;\n  top: ", "px;\n  width: 100%;\n"], ["\n  height: 100%;\n  left: 0;\n  overflow-y: auto;\n  position: absolute;\n  top: ", "px;\n  width: 100%;\n"])), function (p) { return p.scrollDistance; });
exports.DialogBody = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  flex: 1 1 auto;\n  padding: ", "px ", "px ", "px;\n\n  p:last-child,\n  ul:last-child,\n  ol:last-child {\n    margin-bottom: 0;\n  }\n"], ["\n  flex: 1 1 auto;\n  padding: ", "px ", "px ", "px;\n\n  p:last-child,\n  ul:last-child,\n  ol:last-child {\n    margin-bottom: 0;\n  }\n"])), math_1.multiply(constants_1.gridSize, 2), math_1.multiply(constants_1.gridSize, 3), constants_1.gridSize);
// internal elements
exports.Heading = styled_components_1.default.h4(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  color: inherit;\n  font-size: 20px;\n  font-style: inherit;\n  font-weight: 500;\n  letter-spacing: -0.008em;\n  line-height: 1.2;\n  margin-bottom: ", "px;\n"], ["\n  color: inherit;\n  font-size: 20px;\n  font-style: inherit;\n  font-weight: 500;\n  letter-spacing: -0.008em;\n  line-height: 1.2;\n  margin-bottom: ", "px;\n"])), constants_1.gridSize);
exports.Image = styled_components_1.default.img(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  height: auto;\n  max-width: 100%;\n"], ["\n  height: auto;\n  max-width: 100%;\n"])));
// actions
exports.Actions = styled_components_1.default.div(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  padding: 0 ", "px ", "px;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  padding: 0 ", "px ", "px;\n"])), math_1.multiply(constants_1.gridSize, 3), math_1.multiply(constants_1.gridSize, 2));
exports.ActionItems = styled_components_1.default.div(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  margin: 0 -", "px;\n"], ["\n  display: flex;\n  margin: 0 -", "px;\n"])), math_1.divide(constants_1.gridSize, 2));
exports.ActionItem = styled_components_1.default.div(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["\n  margin: 0 ", "px;\n"], ["\n  margin: 0 ", "px;\n"])), math_1.divide(constants_1.gridSize, 2));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=Dialog.js.map