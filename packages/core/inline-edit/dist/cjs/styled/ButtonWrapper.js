"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var constants_1 = require("@atlaskit/theme/constants");
var colors_1 = require("@atlaskit/theme/colors");
var gridSizeUnitless = constants_1.gridSize();
var ButtonWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  background-color: ", ";\n  border-radius: ", "px;\n  box-shadow: 0 ", "px ", "px -", "px ", ",\n    0 0 1px ", ";\n  box-sizing: border-box;\n  font-size: ", "px;\n  width: ", "px;\n  z-index: 200;\n\n  &:last-child {\n    margin-left: ", "px;\n  }\n"], ["\n  background-color: ", ";\n  border-radius: ", "px;\n  box-shadow: 0 ", "px ", "px -",
    "px ", ",\n    0 0 1px ", ";\n  box-sizing: border-box;\n  font-size: ", "px;\n  width: ", "px;\n  z-index: 200;\n\n  &:last-child {\n    margin-left: ", "px;\n  }\n"])), colors_1.N0, gridSizeUnitless / 2 - 1, gridSizeUnitless / 2, gridSizeUnitless, gridSizeUnitless /
    4, colors_1.N50A, colors_1.N60A, constants_1.fontSize(), gridSizeUnitless * 4, gridSizeUnitless / 2);
ButtonWrapper.displayName = 'ButtonWrapper';
exports.default = ButtonWrapper;
var templateObject_1;
//# sourceMappingURL=ButtonWrapper.js.map