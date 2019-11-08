"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var components_1 = require("@atlaskit/theme/components");
var constants_1 = require("@atlaskit/theme/constants");
var colors_1 = require("@atlaskit/theme/colors");
var constants_2 = require("../constants");
var focusColor = components_1.themed({ light: colors_1.R300, dark: colors_1.R200 });
// NOTE:
// "-moz-focus-inner" removes some inbuilt padding that Firefox adds (taken from reduced-ui-pack)
// the focus ring is red unless combined with hover, then uses default blue
exports.Button = styled_components_1.default.button(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  align-items: center;\n  align-self: center;\n  appearance: none;\n  background: none;\n  border: none;\n  border-radius: ", ";\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  height: 16px;\n  margin: 0;\n  padding: 0;\n\n  &::-moz-focus-inner {\n    border: 0;\n    margin: 0;\n    padding: 0;\n  }\n\n  &:focus {\n    box-shadow: 0 0 0 2px ", ";\n    outline: none;\n  }\n\n  &:hover {\n    color: ", ";\n\n    &:focus {\n      box-shadow: 0 0 0 2px ", ";\n      outline: none;\n    }\n  }\n"], ["\n  align-items: center;\n  align-self: center;\n  appearance: none;\n  background: none;\n  border: none;\n  border-radius: ",
    ";\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  height: 16px;\n  margin: 0;\n  padding: 0;\n\n  &::-moz-focus-inner {\n    border: 0;\n    margin: 0;\n    padding: 0;\n  }\n\n  &:focus {\n    box-shadow: 0 0 0 2px ", ";\n    outline: none;\n  }\n\n  &:hover {\n    color: ", ";\n\n    &:focus {\n      box-shadow: 0 0 0 2px ", ";\n      outline: none;\n    }\n  }\n"])), function (_a) {
    var isRounded = _a.isRounded;
    return isRounded ? constants_2.buttonWidthUnitless / 2 + "px" : constants_1.borderRadius() + "px";
}, colors_1.N500, focusColor, colors_1.R500, constants_2.focusRingColor);
var templateObject_1;
//# sourceMappingURL=styled.js.map