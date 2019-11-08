"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var adf_schema_1 = require("@atlaskit/adf-schema");
function getEditorColor(attrs) {
    var keys = Object.keys(attrs);
    return adf_schema_1.normalizeHexColor(keys[0]);
}
exports.getEditorColor = getEditorColor;
//# sourceMappingURL=color.js.map