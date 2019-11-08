"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_tag_1 = require("../create-tag");
var common_1 = require("../styles/common");
var adf_schema_1 = require("@atlaskit/adf-schema");
var util_1 = require("../styles/util");
var className = util_1.createClassName("codeBlock");
exports.styles = "\n." + className + "-pre {\n  white-space: pre-wrap;\n  font-size: 12px;\n  line-height: 20px;\n  font-family: " + common_1.codeFontFamily + ";\n  color: rgb(23, 43, 77);\n  background: " + adf_schema_1.N20 + ";\n  border-radius: 3px;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  margin: 0px;\n  overflow-wrap: break-word;\n}\n." + className + "-div {\n  padding: 8px 16px;\n  background-color: " + adf_schema_1.N20 + ";\n  border-radius: 3px;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  color: rgb(23, 43, 77);\n}\n";
function codeBlock(_a) {
    var text = _a.text;
    var sanitizedText = (text || '').replace(/\n/g, '<br/>');
    var pre = create_tag_1.createTag('pre', { class: className + "-pre" }, sanitizedText);
    return create_tag_1.createTag('div', { class: className + "-div" }, pre);
}
exports.default = codeBlock;
//# sourceMappingURL=code-block.js.map