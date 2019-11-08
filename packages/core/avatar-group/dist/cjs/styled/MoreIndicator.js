"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var components_1 = require("@atlaskit/theme/components");
var colors_1 = require("@atlaskit/theme/colors");
var avatar_1 = require("@atlaskit/avatar");
var EXCESS_INDICATOR_FONT_SIZE = {
    xsmall: 10,
    small: 10,
    medium: 11,
    large: 12,
    xlarge: 16,
    xxlarge: 16,
};
exports.Outer = components_1.withTheme(styled_components_1.default.button(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  ", " background: 0;\n"], ["\n  ", " background: 0;\n"])), avatar_1.getInnerStyles));
exports.Inner = components_1.withTheme(styled_components_1.default.span(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  background-color: ", ";\n  border-radius: ", ";\n  align-items: center;\n  box-shadow: 0 0 0\n    ", "\n    ", ";\n  color: ", ";\n  cursor: pointer;\n  display: flex;\n  flex-basis: 100%;\n  flex-grow: 1;\n  font-size: ", "px;\n  justify-content: center;\n  transition: box-shadow 200ms;\n"], ["\n  background-color: ", ";\n  border-radius: ", ";\n  align-items: center;\n  box-shadow: 0 0 0\n    ",
    "\n    ", ";\n  color: ", ";\n  cursor: pointer;\n  display: flex;\n  flex-basis: 100%;\n  flex-grow: 1;\n  font-size: ", "px;\n  justify-content: center;\n  transition: box-shadow 200ms;\n"])), components_1.themed({ light: colors_1.N40, dark: colors_1.DN70 }), avatar_1.getBorderRadius, function (props) {
    return props.isFocus && !props.isActive ? avatar_1.BORDER_WIDTH[props.size] + "px" : 0;
}, colors_1.B200, components_1.themed({ light: colors_1.N500, dark: colors_1.DN400 }), function (props) { return EXCESS_INDICATOR_FONT_SIZE[props.size || 'medium']; }));
var templateObject_1, templateObject_2;
//# sourceMappingURL=MoreIndicator.js.map