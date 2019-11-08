"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var adf_schema_1 = require("@atlaskit/adf-schema");
var create_tag_1 = require("../create-tag");
var serialize_style_1 = require("../serialize-style");
var util_1 = require("../styles/util");
exports.styles = "\n." + util_1.createClassName('tableCell') + " {\n  background-clip: padding-box;\n  height: auto;\n  min-width: 3em;\n  vertical-align: top;\n  border: 1px solid " + adf_schema_1.N50 + ";\n  border-right-width: 0;\n  border-bottom-width: 0;\n  padding: 8px;\n}\n";
function tableCell(_a) {
    var attrs = _a.attrs, text = _a.text;
    var colspan = attrs.colspan, rowspan = attrs.rowspan, background = attrs.background;
    var style = serialize_style_1.serializeStyle({
        'background-color': background || 'white',
    });
    return create_tag_1.createTag('td', {
        colspan: colspan,
        rowspan: rowspan,
        style: style,
        class: util_1.createClassName('tableCell'),
    }, text);
}
exports.default = tableCell;
//# sourceMappingURL=table-cell.js.map