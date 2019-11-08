"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var components_1 = require("@atlaskit/theme/components");
var constants_1 = require("@atlaskit/theme/constants");
var colors_1 = require("@atlaskit/theme/colors");
var constants_2 = require("../constants");
var theme_1 = require("../theme");
var gridSizeUnitless = constants_1.gridSize();
var colorRemoval = components_1.themed({ light: colors_1.R500, dark: colors_1.DN30 });
var colorRemovalHover = components_1.themed({ light: colors_1.N700, dark: colors_1.DN30 });
var backgroundColorRemoval = components_1.themed({ light: colors_1.R50, dark: colors_1.R100 });
exports.Span = styled_components_1.default.span(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &:focus {\n    box-shadow: 0 0 0 2px ", ";\n    outline: none;\n  }\n\n  background-color: ", ";\n  color: ", ";\n  border-radius: ", ";\n  cursor: default;\n  display: flex;\n  height: ", ";\n  line-height: 1;\n  margin: ", "px;\n  padding: 0;\n  overflow: ", ";\n\n  &:hover {\n    box-shadow: none;\n    background-color: ", ";\n    color: ", ";\n  }\n"], ["\n  &:focus {\n    box-shadow: 0 0 0 2px ", ";\n    outline: none;\n  }\n\n  background-color: ",
    ";\n  color: ", ";\n  border-radius: ",
    ";\n  cursor: default;\n  display: flex;\n  height: ", ";\n  line-height: 1;\n  margin: ", "px;\n  padding: 0;\n  overflow: ",
    ";\n\n  &:hover {\n    box-shadow: none;\n    background-color: ",
    ";\n    color: ",
    ";\n  }\n"])), constants_2.focusRingColor, function (p) {
    return p.markedForRemoval ? backgroundColorRemoval(p) : theme_1.backgroundColor(p);
}, function (p) { return (p.markedForRemoval ? colorRemoval(p) : theme_1.textColor(p)); }, function (_a) {
    var isRounded = _a.isRounded;
    return isRounded ? constants_2.buttonWidthUnitless / 2 + "px" : constants_1.borderRadius() + "px";
}, constants_2.tagHeight, gridSizeUnitless / 2, function (_a) {
    var isRemoved = _a.isRemoved, isRemoving = _a.isRemoving;
    return isRemoved || isRemoving ? 'hidden' : 'initial';
}, function (p) {
    return p.markedForRemoval ? backgroundColorRemoval(p) : theme_1.backgroundColorHover(p);
}, function (p) {
    return p.markedForRemoval ? colorRemovalHover(p) : theme_1.textColorHover(p);
});
var templateObject_1;
//# sourceMappingURL=styled.js.map