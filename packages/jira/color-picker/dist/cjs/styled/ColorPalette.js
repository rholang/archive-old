"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var theme_1 = require("@atlaskit/theme");
exports.ColorCardWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  margin: 2px;\n"], ["\n  display: flex;\n  margin: 2px;\n"])));
var palettePadding = "padding: " + theme_1.gridSize() / 2 + "px " + theme_1.gridSize() + "px";
exports.ColorPaletteContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n  ", ";\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  ", ";\n"])), palettePadding);
var templateObject_1, templateObject_2;
//# sourceMappingURL=ColorPalette.js.map