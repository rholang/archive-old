"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var theme_1 = require("@atlaskit/theme");
var React = tslib_1.__importStar(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var color_1 = tslib_1.__importDefault(require("./color"));
// color value, label, background, borderColor
var palette = [
    ['neutral', theme_1.colors.N40, theme_1.colors.N400],
    ['purple', theme_1.colors.P50, theme_1.colors.P400],
    ['blue', theme_1.colors.B50, theme_1.colors.B400],
    ['red', theme_1.colors.R50, theme_1.colors.R400],
    ['yellow', theme_1.colors.Y75, theme_1.colors.Y400],
    ['green', theme_1.colors.G50, theme_1.colors.G400],
];
var ColorPaletteWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  margin: ", "px ", "px 0 ", "px;\n  /* Firefox bug fix: https://product-fabric.atlassian.net/browse/ED-1789 */\n  display: flex;\n  flex-wrap: wrap;\n"], ["\n  margin: ", "px ", "px 0 ", "px;\n  /* Firefox bug fix: https://product-fabric.atlassian.net/browse/ED-1789 */\n  display: flex;\n  flex-wrap: wrap;\n"])), theme_1.gridSize(), theme_1.gridSize(), theme_1.gridSize());
exports.default = (function (_a) {
    var _b = _a.cols, cols = _b === void 0 ? 7 : _b, onClick = _a.onClick, selectedColor = _a.selectedColor, className = _a.className, onHover = _a.onHover;
    return (React.createElement(ColorPaletteWrapper, { className: className, style: { maxWidth: cols * 32 } }, palette.map(function (_a) {
        var _b = tslib_1.__read(_a, 3), colorValue = _b[0], backgroundColor = _b[1], borderColor = _b[2];
        return (React.createElement(color_1.default, { key: colorValue, value: colorValue, backgroundColor: backgroundColor, borderColor: borderColor, onClick: onClick, onHover: onHover, isSelected: colorValue === selectedColor }));
    })));
});
var templateObject_1;
//# sourceMappingURL=color-palette.js.map