"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_tag_1 = require("../create-tag");
var date_helper_1 = require("../date-helper");
var adf_schema_1 = require("@atlaskit/adf-schema");
var util_1 = require("../styles/util");
var className = util_1.createClassName('date');
exports.styles = "\n." + className + " {\n  border-radius: 3px;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  box-sizing: border-box;\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1;\n  max-width: 100%;\n  vertical-align: baseline;\n  border-width: 3px;\n  padding: 2px 4px 3px 4px;\n}\n." + className + "-red {\n  background-color: " + adf_schema_1.R50 + ";\n  color: " + adf_schema_1.R500 + ";\n}\n." + className + "-neutral {\n  background-color: " + adf_schema_1.N40 + ";\n  color: " + adf_schema_1.N500 + ";\n}\n";
function status(_a) {
    var attrs = _a.attrs, parent = _a.parent;
    var timestamp = attrs.timestamp;
    var isParentToDoTask = false;
    if (parent &&
        parent.type.name === 'taskItem' &&
        parent.attrs.state === 'TODO') {
        isParentToDoTask = true;
    }
    var colorClass = !!isParentToDoTask && date_helper_1.isPastDate(timestamp)
        ? className + "-red"
        : className + "-neutral";
    var text = date_helper_1.timestampToString(timestamp);
    return create_tag_1.createTag('span', { class: className + ' ' + colorClass }, text);
}
exports.default = status;
//# sourceMappingURL=date.js.map