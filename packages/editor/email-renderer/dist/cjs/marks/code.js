"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_tag_1 = require("../create-tag");
var util_1 = require("../styles/util");
var common_1 = require("../styles/common");
var adf_schema_1 = require("@atlaskit/adf-schema");
exports.styles = "\n." + util_1.createClassName('mark-code') + " {\n  background: " + adf_schema_1.N20 + ";\n  color: rgb(23, 43, 77);\n  border-radius: 3px;\n  padding: 2px 4px;\n  font-size: 12px;\n  line-height: 24px;\n  font-family: " + common_1.codeFontFamily + ";\n}";
function code(_a) {
    var text = _a.text;
    return create_tag_1.createTag('code', { class: util_1.createClassName('mark-code') }, text);
}
exports.default = code;
//# sourceMappingURL=code.js.map