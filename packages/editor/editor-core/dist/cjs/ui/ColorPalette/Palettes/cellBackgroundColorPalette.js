"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var adf_schema_1 = require("@atlaskit/adf-schema");
var getColorMessage_1 = tslib_1.__importDefault(require("./getColorMessage"));
var paletteMessages_1 = tslib_1.__importDefault(require("./paletteMessages"));
var cellBackgroundColorPalette = [];
adf_schema_1.tableBackgroundColorPalette.forEach(function (label, color) {
    var key = label.toLowerCase().replace(' ', '-');
    var message = getColorMessage_1.default(paletteMessages_1.default, key);
    cellBackgroundColorPalette.push({
        value: color,
        label: label,
        border: adf_schema_1.tableBackgroundBorderColor,
        message: message,
    });
});
exports.default = cellBackgroundColorPalette;
//# sourceMappingURL=cellBackgroundColorPalette.js.map