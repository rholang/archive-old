"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importStar(require("styled-components"));
var constants_1 = require("@atlaskit/theme/constants");
var math_1 = require("@atlaskit/theme/math");
var Flag_1 = require("../Flag");
var theme_1 = require("../../theme");
// Outputs the styles for actions separator: mid-dot for non-bold flags, or space for bold flags.
var getDivider = function (_a) {
    var hasDivider = _a.hasDivider, useMidDot = _a.useMidDot;
    return styled_components_1.css(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: ", ";\n  content: \"", "\";\n  width: ", "px;\n"], ["\n  display: ", ";\n  content: \"", "\";\n  width: ", "px;\n"])), hasDivider ? 'inline-block' : 'none', useMidDot ? '\u00B7' : '', useMidDot ? math_1.multiply(constants_1.gridSize, 2) : constants_1.gridSize);
};
exports.default = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n  padding-top: ", "px;\n  transform: ", ";\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  padding-top: ", "px;\n  transform: ",
    ";\n"])), constants_1.gridSize, function (_a) {
    var appearance = _a.appearance;
    return appearance === Flag_1.DEFAULT_APPEARANCE ? "translateX(-" + constants_1.gridSize() / 2 + "px)" : 0;
});
exports.Action = styled_components_1.default.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  &::before {\n    color: ", ";\n    text-align: center;\n    vertical-align: middle;\n\n    ", ";\n  }\n"], ["\n  &::before {\n    color: ", ";\n    text-align: center;\n    vertical-align: middle;\n\n    ", ";\n  }\n"])), theme_1.flagTextColor, getDivider);
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=styledFlagActions.js.map