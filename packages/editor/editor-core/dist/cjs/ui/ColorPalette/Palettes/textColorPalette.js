"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var adf_schema_1 = require("@atlaskit/adf-schema");
var getColorMessage_1 = tslib_1.__importDefault(require("./getColorMessage"));
var paletteMessages_1 = tslib_1.__importDefault(require("./paletteMessages"));
var textColorPalette = [];
adf_schema_1.colorPalette.forEach(function (label, color) {
    var border = adf_schema_1.borderColorPalette[color.toUpperCase()];
    var key = label.toLowerCase().replace(' ', '-');
    var message = getColorMessage_1.default(paletteMessages_1.default, key);
    if (!border) {
        // eslint-disable-next-line no-console
        console.warn("Text color palette doest not have a border for " + color + " color.\nYou must add the respective border color in 'borderColorPalette' in 'adf-schema'.\nThis could be happen when someone change the colorPalette from 'adf-schema', without updating 'borderColorPalette'.\n");
    }
    textColorPalette.push({
        value: color,
        label: label,
        border: border,
        message: message,
    });
});
exports.default = textColorPalette;
//# sourceMappingURL=textColorPalette.js.map