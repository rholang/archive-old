"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var adf_schema_1 = require("@atlaskit/adf-schema");
var create_tag_1 = require("../create-tag");
var serialize_style_1 = require("../serialize-style");
var util_1 = require("../styles/util");
exports.styles = "\n." + util_1.createClassName('tableHeader') + " {\n  background-clip: padding-box;\n  border: 1px solid " + adf_schema_1.N50 + ";\n  border-right-width: 0;\n  border-bottom-width: 0;\n  font-weight: bold;\n  height: auto;\n  min-width: 3em;\n  padding: 8px;\n  text-align: left;\n  vertical-align: top;\n}\n";
function tableHeader(_a) {
    var attrs = _a.attrs, text = _a.text;
    var colspan = attrs.colspan, rowspan = attrs.rowspan, background = attrs.background;
    var style = serialize_style_1.serializeStyle({
        'background-color': background ? background : adf_schema_1.N20,
    });
    return create_tag_1.createTag('th', {
        colspan: colspan,
        rowspan: rowspan,
        style: style,
        class: util_1.createClassName('tableHeader'),
    }, text);
}
exports.default = tableHeader;
//# sourceMappingURL=table-header.js.map