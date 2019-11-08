"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var adf_schema_1 = require("@atlaskit/adf-schema");
var table_util_1 = require("../table-util");
var create_tag_1 = require("../create-tag");
var static_1 = require("../static");
var util_1 = require("../styles/util");
var common_1 = require("../styles/common");
exports.className = util_1.createClassName('panel');
exports.styles = "\n." + exports.className + " {\n  font-family: " + common_1.fontFamily + ";\n  font-size: " + common_1.fontSize + ";\n  line-height: " + common_1.lineHeight + ";\n  font-weight: " + common_1.fontWeight + ";\n  padding: 8px 0px 8px 0px;\n  margin: 0px;\n  width: 100%;\n}\n." + exports.className + "-innerTable {\n  font-family: " + common_1.fontFamily + ";\n  font-size: " + common_1.fontSize + ";\n  line-height: " + common_1.lineHeight + ";\n  font-weight: " + common_1.fontWeight + ";\n  border-radius: 3px;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  table-layout: fixed;\n  line-height: 20px;\n}\n." + exports.className + "-inner {\n  font-family: " + common_1.fontFamily + ";\n  font-size: " + common_1.fontSize + ";\n  line-height: " + common_1.lineHeight + ";\n  font-weight: " + common_1.fontWeight + ";\n  font-size: 14px;\n  width: 100%;\n  padding: 1px 8px 1px 0;\n  margin: 0px;\n}\n." + exports.className + "-icon {\n  width: 16px;\n  height: 16px;\n}\n." + exports.className + "-iconTd {\n  vertical-align: top;\n  width: 24px;\n  height: 24px;\n  padding: 12px 0px 0px 8px;\n}\n." + exports.className + "-type-info {\n    background: " + adf_schema_1.B50 + ";\n}\n." + exports.className + "-type-note {\n    background: " + adf_schema_1.P50 + ";\n}\n." + exports.className + "-type-tip {\n    background: " + adf_schema_1.G50 + ";\n}\n." + exports.className + "-type-success {\n    background: " + adf_schema_1.G50 + ";\n}\n." + exports.className + "-type-warning {\n    background: " + adf_schema_1.Y50 + ";\n}\n." + exports.className + "-type-error {\n    background: " + adf_schema_1.R50 + ";\n}\n";
function panel(_a) {
    var attrs = _a.attrs, text = _a.text;
    var type = attrs.panelType;
    var panelIcon = create_tag_1.createTag('img', {
        class: exports.className + '-icon',
        src: static_1.createContentId(type),
    });
    var iconTd = {
        text: panelIcon,
        attrs: { class: exports.className + '-iconTd' },
    };
    var textTd = {
        text: text,
        attrs: { class: exports.className + '-inner' },
    };
    var innerTable = table_util_1.createTable([[iconTd, textTd]], {}, { class: exports.className + "-innerTable " + exports.className + "-type-" + type });
    return table_util_1.createTable([[{ attrs: { class: exports.className }, text: innerTable }]]);
}
exports.default = panel;
//# sourceMappingURL=panel.js.map