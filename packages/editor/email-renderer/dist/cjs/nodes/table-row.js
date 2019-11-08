"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var adf_schema_1 = require("@atlaskit/adf-schema");
var create_tag_1 = require("../create-tag");
var util_1 = require("../styles/util");
var table_1 = require("./table");
exports.styles = "\n." + util_1.createClassName('tableRow-numCol') + " {\n  background-color: " + adf_schema_1.N20 + ";\n  background-clip: padding-box;\n  border: 1px solid " + adf_schema_1.N50 + ";\n  border-right-width: 0;\n  border-bottom-width: 0;\n  height: auto;\n  padding: 8px;\n  text-align: center;\n  vertical-align: top;\n  width: " + table_1.numberedColumnWidth + "px;\n}\n." + util_1.createClassName('tableRow-numCol-p') + " {\n  margin: 0;\n  padding: 0px;\n  mso-line-height-rule: exactly;\n  line-height: 24px;\n  font-size: 14px;\n  color: " + adf_schema_1.N200 + ";\n}\n";
function tableRow(_a) {
    var text = _a.text, attrs = _a.attrs;
    var numberedColumn = '';
    if (attrs && attrs.isNumberColumnEnabled) {
        var paragraph = create_tag_1.createTag('p', { class: util_1.createClassName('tableRow-numCol-p') }, attrs.index);
        numberedColumn = create_tag_1.createTag('td', { class: util_1.createClassName('tableRow-numCol') }, paragraph);
    }
    return create_tag_1.createTag('tr', {}, numberedColumn + text);
}
exports.default = tableRow;
//# sourceMappingURL=table-row.js.map