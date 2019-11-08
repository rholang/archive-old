"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var adf_schema_1 = require("@atlaskit/adf-schema");
var create_tag_1 = require("../create-tag");
var util_1 = require("../styles/util");
var className = util_1.createClassName('tableNode');
exports.styles = "\n." + className + " {\n  border: 1px solid " + adf_schema_1.N50 + ";\n  border-collapse: collapse;\n  width: 100%;\n  table-layout: fixed;\n}\n." + className + "-wrapper {\n  margin-bottom: 20px;\n  margin-top: 20px;\n}\n";
exports.numberedColumnWidth = 42;
function table(_a) {
    var text = _a.text, node = _a.node;
    var colgroup = '';
    if (node.attrs && node.attrs.isNumberColumnEnabled) {
        var style = "width: " + exports.numberedColumnWidth + "px";
        var colTag = create_tag_1.createTag('col', { style: style });
        colgroup = create_tag_1.createTag('colgroup', undefined, colTag);
    }
    var table = create_tag_1.createTag('table', { class: className }, colgroup + text);
    return create_tag_1.createTag('div', { class: className + "-wrapper" }, table);
}
exports.default = table;
//# sourceMappingURL=table.js.map