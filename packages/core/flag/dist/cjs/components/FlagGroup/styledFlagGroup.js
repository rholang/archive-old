"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var TransitionGroup_1 = tslib_1.__importDefault(require("react-transition-group/TransitionGroup"));
var constants_1 = require("@atlaskit/theme/constants");
var math_1 = require("@atlaskit/theme/math");
exports.default = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  bottom: ", "px;\n  left: ", "px;\n  position: fixed;\n  z-index: ", ";\n\n  @media (max-width: 560px) {\n    bottom: 0;\n    left: 0;\n  }\n"], ["\n  bottom: ", "px;\n  left: ", "px;\n  position: fixed;\n  z-index: ", ";\n\n  @media (max-width: 560px) {\n    bottom: 0;\n    left: 0;\n  }\n"])), math_1.multiply(constants_1.gridSize, 6), math_1.multiply(constants_1.gridSize, 10), constants_1.layers.flag);
exports.SROnly = styled_components_1.default.h1(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  border: 0;\n  clip: rect(1px, 1px, 1px, 1px);\n  height: 1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n"], ["\n  border: 0;\n  clip: rect(1px, 1px, 1px, 1px);\n  height: 1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n"])));
exports.Inner = styled_components_1.default(TransitionGroup_1.default)(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=styledFlagGroup.js.map