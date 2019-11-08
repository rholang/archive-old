"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var colors_1 = require("@atlaskit/theme/colors");
var constants_1 = require("@atlaskit/theme/constants");
var elevation_1 = require("@atlaskit/theme/elevation");
var selected = "\n  cursor: pointer;\n  box-shadow: 0 0 0 2px " + colors_1.B100 + ";\n  outline: none;\n  user-select: none;\n  &, :hover, :focus, :active {\n    text-decoration: none;\n  }\n";
var isInteractive = function (_a) {
    var isInteractive = _a.isInteractive;
    if (isInteractive) {
        return "\n      cursor: pointer;\n      :hover {\n        background-color: " + colors_1.N20 + ";\n        text-decoration: none;\n      }\n      :active {\n        background-color: " + colors_1.B50 + ";\n        text-decoration: none;\n      }\n      :focus {\n        " + selected + "\n        text-decoration: none;\n      }\n    ";
    }
    else {
        return '';
    }
};
var background = function (_a) {
    var withoutBackground = _a.withoutBackground;
    return withoutBackground
        ? ""
        : "\n    background-color: white; \n    " + elevation_1.e100() + "\n  ";
};
var isSelected = function (_a) {
    var isSelected = _a.isSelected;
    if (isSelected) {
        return selected;
    }
    else {
        return 'user-select: text';
    }
};
/*
  Inline smart cards should have the following layout:
  ------------------------------------
  | icon | title | action OR lozenge |
  ------------------------------------
  The aim is to ensure (1) all children are
  in line with each other, (2) are vertically
  centered.
*/
// NB: `padding` consistent with @mentions.
// NB: `display: inline` required for `box-decoration-break` to work.
// NB: `box-decoration-break` required for retaining properties (border-radius) on wrap.
exports.Wrapper = styled_components_1.default.a(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  line-height: ", ";\n  padding: 0px 0.24em 2px 0.24em;\n  display: inline;\n  box-decoration-break: clone;\n  border-radius: ", "px;\n  ", ";\n  ", "\n  ", ";\n  transition: 0.1s all ease-in-out;\n"], ["\n  line-height: ", ";\n  padding: 0px 0.24em 2px 0.24em;\n  display: inline;\n  box-decoration-break: clone;\n  border-radius: ", "px;\n  ", ";\n  ", "\n  ", ";\n  transition: 0.1s all ease-in-out;\n"])), 16 / 14, constants_1.borderRadius(), background, isInteractive, isSelected);
var templateObject_1;
//# sourceMappingURL=styled.js.map