"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apply_marks_1 = require("../apply-marks");
var create_tag_1 = require("../create-tag");
var util_1 = require("../styles/util");
var common_1 = require("../styles/common");
var panel_1 = require("./panel");
var className = util_1.createClassName('p');
exports.styles = "\n." + className + " {\n  margin: 0;\n  padding: 0px;\n  margin-bottom: 7px;\n  padding-top: 7px;\n  mso-line-height-rule: exactly;\n  line-height: " + common_1.lineHeight + ";\n  font-size: " + common_1.fontSize + ";\n}\ntable td > ." + className + ":first-child,\ntable th > ." + className + ":first-child {\n  padding-top: 0px;\n}\ntable td > ." + className + ":last-child,\ntable th > ." + className + ":last-child {\n  margin-bottom: 0;\n}\n." + panel_1.className + "-inner > ." + className + " {\n  margin-bottom: 7px;\n  padding-top: 7px;\n}\n";
function paragraph(_a) {
    var text = _a.text, marks = _a.marks;
    var paragraph = create_tag_1.createTag('p', { class: className }, text);
    return apply_marks_1.applyMarks(marks, paragraph);
}
exports.default = paragraph;
//# sourceMappingURL=paragraph.js.map