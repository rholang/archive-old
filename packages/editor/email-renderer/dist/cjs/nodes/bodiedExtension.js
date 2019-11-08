"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_tag_1 = require("../create-tag");
var adf_schema_1 = require("@atlaskit/adf-schema");
var util_1 = require("../styles/util");
var className = util_1.createClassName('bodiedExtension');
exports.styles = "\n." + className + "-inner {\n  background-color: " + adf_schema_1.N30 + ";\n  border: 10px solid " + adf_schema_1.N30 + ";\n  border-radius: 3px;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  color: " + adf_schema_1.N800 + ",\n}\n." + className + "-outer {\n  border: 1px solid " + adf_schema_1.N50 + ";\n  margin-top: 10px;\n  border-radius: 3px;\n  border-style: dashed;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n}\n";
function bodiedExtension(_a) {
    var attrs = _a.attrs;
    var inner = create_tag_1.createTag('div', { class: className + '-inner' }, "&nbsp;" + attrs.extensionKey + "&nbsp;");
    return create_tag_1.createTag('div', { class: className + '-outer' }, inner);
}
exports.default = bodiedExtension;
//# sourceMappingURL=bodiedExtension.js.map