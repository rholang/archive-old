"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var colors_1 = require("@atlaskit/theme/colors");
exports.TOTAL_CIRCLE_SIZE = 18;
exports.MainArea = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  box-sizing: border-box;\n  width: ", "px;\n  height: ", "px;\n  border-radius: 15px;\n  background-color: ", ";\n"], ["\n  box-sizing: border-box;\n  width: ", "px;\n  height: ", "px;\n  border-radius: 15px;\n  background-color: ", ";\n"])), exports.TOTAL_CIRCLE_SIZE, exports.TOTAL_CIRCLE_SIZE, function (props) { return (props.isActive ? colors_1.N500 : colors_1.N30); });
exports.FrontArea = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  box-sizing: border-box;\n  background-color: ", ";\n"], ["\n  box-sizing: border-box;\n  background-color: ", ";\n"])), function (props) { return (props.isActive ? colors_1.N0 : colors_1.N500); });
var templateObject_1, templateObject_2;
//# sourceMappingURL=lineWidthButtonStyles.js.map