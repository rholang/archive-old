"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_tag_1 = require("../create-tag");
var util_1 = require("../styles/util");
var adf_schema_1 = require("@atlaskit/adf-schema");
var commonStyle = "\n  border-radius: 3px;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  box-sizing: border-box;\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 700;\n  line-height: 1;\n  max-width: 100%;\n  text-transform: uppercase;\n  vertical-align: baseline;\n  padding: 2px 4px 3px 4px;\n";
exports.styles = "\n." + util_1.createClassName('status-blue') + " {\n  " + commonStyle + "\n  background-color: " + adf_schema_1.B50 + ";\n  color: " + adf_schema_1.B500 + ";\n}\n." + util_1.createClassName('status-red') + " {\n  " + commonStyle + "\n  background-color: " + adf_schema_1.R50 + ";\n  color: " + adf_schema_1.R500 + ";\n}\n." + util_1.createClassName('status-yellow') + " {\n  " + commonStyle + "\n  background-color: " + adf_schema_1.Y75 + ";\n  color: " + adf_schema_1.N800 + ";\n}\n." + util_1.createClassName('status-green') + " {\n  " + commonStyle + "\n  background-color: " + adf_schema_1.G50 + ";\n  color: " + adf_schema_1.G500 + ";\n}\n." + util_1.createClassName('status-purple') + " {\n  " + commonStyle + "\n  background-color: " + adf_schema_1.P50 + ";\n  color: " + adf_schema_1.P500 + ";\n}\n." + util_1.createClassName('status-neutral') + " {\n  " + commonStyle + "\n  background-color: " + adf_schema_1.N40 + ";\n  color: " + adf_schema_1.N500 + ";\n}\n";
var ALLOWED_COLORS = new Set([
    'blue',
    'red',
    'yellow',
    'green',
    'purple',
    'neutral',
]);
function status(_a) {
    var attrs = _a.attrs, text = _a.text;
    var color = ALLOWED_COLORS.has(attrs.color) ? attrs.color : 'neutral';
    return create_tag_1.createTag('span', { class: util_1.createClassName("status-" + color) }, text);
}
exports.default = status;
//# sourceMappingURL=status.js.map