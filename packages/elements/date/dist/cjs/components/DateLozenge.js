"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var theme_1 = require("@atlaskit/theme");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
exports.resolveColors = function (color) {
    if (!color || color === 'grey') {
        return {
            light: [theme_1.colors.N30A, theme_1.colors.N800, theme_1.colors.N40],
            dark: [theme_1.colors.DN70, theme_1.colors.DN800, theme_1.colors.DN60],
        };
    }
    var letter = color.toUpperCase().charAt(0);
    var resolvedColors = [
        theme_1.colors[letter + "50"],
        theme_1.colors[letter + "500"],
        theme_1.colors[letter + "75"],
    ];
    return {
        light: resolvedColors,
        dark: resolvedColors,
    };
};
/**
 * TODO when update typescript to 2.9+
 * add custom props as Generic Parameter to span instead of casting
 */
exports.DateLozenge = styled_components_1.default.span(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  border-radius: ", "px;\n  padding: 2px 4px;\n  margin: 0 1px;\n  position: relative;\n  transition: background 0.3s;\n  white-space: nowrap;\n  cursor: ", ";\n\n  ", ";\n"], ["\n  border-radius: ", "px;\n  padding: 2px 4px;\n  margin: 0 1px;\n  position: relative;\n  transition: background 0.3s;\n  white-space: nowrap;\n  cursor: ", ";\n\n  ",
    ";\n"])), theme_1.borderRadius(), function (props) { return (props.onClick ? 'pointer' : 'unset'); }, function (props) {
    var _a = tslib_1.__read(theme_1.themed(exports.resolveColors(props.color))(props), 3), background = _a[0], color = _a[1], hoverBackground = _a[2];
    return "\n      background: " + background + ";\n      color: " + color + ";\n      &:hover {\n        background: " + hoverBackground + ";\n      }\n    ";
});
var templateObject_1;
//# sourceMappingURL=DateLozenge.js.map