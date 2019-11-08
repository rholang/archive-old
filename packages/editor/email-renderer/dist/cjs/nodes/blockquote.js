"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_tag_1 = require("../create-tag");
var adf_schema_1 = require("@atlaskit/adf-schema");
var util_1 = require("../styles/util");
var className = util_1.createClassName('blockquote');
exports.styles = "\n." + className + " {\n  border-left: 2px solid " + adf_schema_1.N40 + ";\n  color: " + adf_schema_1.N300 + ";\n  margin: 12px 0 0 0;\n  padding-left: 16px;\n}\n";
function blockquote(_a) {
    var text = _a.text;
    return create_tag_1.createTag('blockquote', { class: className }, text);
}
exports.default = blockquote;
//# sourceMappingURL=blockquote.js.map