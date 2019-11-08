"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var constants_1 = require("@atlaskit/theme/constants");
var math_1 = require("@atlaskit/theme/math");
exports.EmptyViewWithFixedHeight = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  height: ", "px;\n"], ["\n  height: ", "px;\n"])), math_1.multiply(constants_1.gridSize, 18));
exports.EmptyViewContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  margin: auto;\n  padding: 10px;\n  text-align: center;\n  width: 50%;\n"], ["\n  margin: auto;\n  padding: 10px;\n  text-align: center;\n  width: 50%;\n"])));
var templateObject_1, templateObject_2;
//# sourceMappingURL=EmptyBody.js.map