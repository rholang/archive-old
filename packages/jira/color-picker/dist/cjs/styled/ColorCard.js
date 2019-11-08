"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importStar(require("styled-components"));
var theme_1 = require("@atlaskit/theme");
var constants_1 = require("../constants");
var buttonFocusedBorder = "border-color: " + theme_1.colors.B100 + ";";
var sharedColorContainerStyles = styled_components_1.css(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: inline-block;\n  position: relative;\n  width: ", "px;\n  height: ", "px;\n  border: 2px solid transparent;\n  box-sizing: border-box;\n  border-radius: ", "px;\n  transition: border-color 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38);\n  background-color: transparent;\n  border-color: transparent;\n  padding: 0;\n  cursor: pointer;\n  outline: none;\n"], ["\n  display: inline-block;\n  position: relative;\n  width: ", "px;\n  height: ", "px;\n  border: 2px solid transparent;\n  box-sizing: border-box;\n  border-radius: ", "px;\n  transition: border-color 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38);\n  background-color: transparent;\n  border-color: transparent;\n  padding: 0;\n  cursor: pointer;\n  outline: none;\n"])), constants_1.COLOR_CARD_SIZE, constants_1.COLOR_CARD_SIZE, theme_1.borderRadius() * 2);
exports.ColorCardOption = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  ", ";\n\n  ", ";\n"], ["\n  ", ";\n\n  ",
    ";\n"])), sharedColorContainerStyles, function (props) {
    if (props.focused) {
        return "border-color: " + theme_1.colors.B75;
    }
});
exports.ColorCardButton = styled_components_1.default.button(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  ", ";\n\n  &:focus {\n    ", ";\n  }\n\n  ", ";\n"], ["\n  ", ";\n\n  &:focus {\n    ", ";\n  }\n\n  ",
    ";\n"])), sharedColorContainerStyles, buttonFocusedBorder, function (props) {
    if (props.focused) {
        return buttonFocusedBorder;
    }
});
exports.ColorCardContent = styled_components_1.default.div(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  position: absolute;\n  top: 1px;\n  left: 1px;\n  width: 24px;\n  height: 24px;\n  border-radius: ", "px;\n  background: ", ";\n"], ["\n  position: absolute;\n  top: 1px;\n  left: 1px;\n  width: 24px;\n  height: 24px;\n  border-radius: ", "px;\n  background: ", ";\n"])), theme_1.borderRadius(), function (props) { return props.color; });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=ColorCard.js.map