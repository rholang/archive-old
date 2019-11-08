"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_tag_1 = require("../create-tag");
var apply_marks_1 = require("../apply-marks");
var util_1 = require("../styles/util");
var adf_schema_1 = require("@atlaskit/adf-schema");
var commonStyle = "\nfont-style: inherit;\ncolor: " + adf_schema_1.N800 + ";\nfont-weight: 600;\nmargin-bottom: 0;\n";
exports.styles = "\n." + util_1.createClassName('h1') + " {\n  " + commonStyle + "\n  font-size: 23px;\n  line-height: 1.1034;\n  margin-top: 40px;\n  letter-spacing: -0.01em;\n}\n." + util_1.createClassName('h2') + " {\n  " + commonStyle + "\n  font-size: 20px;\n  line-height: 1.1666;\n  margin-top: 36px;\n  font-weight: 500;\n  letter-spacing: -0.01em;\n}\n." + util_1.createClassName('h3') + " {\n  " + commonStyle + "\n  font-size: 16px;\n  line-height: 1.2;\n  margin-top: 32px;\n  font-weight: 500;\n  letter-spacing: -0.008em;\n}\n." + util_1.createClassName('h4') + " {\n  " + commonStyle + "\n  font-size: 14px;\n  line-height: 1.25;\n  margin-top: 20px;\n  letter-spacing: -0.006em;\n}\n." + util_1.createClassName('h5') + " {\n  " + commonStyle + "\n  font-size: 11px;\n  line-height: 1.4286;\n  margin-top: 20px;\n  letter-spacing: -0.003em;\n}\n." + util_1.createClassName('h6') + " {\n  " + commonStyle + "\n  font-size: 11px;\n  line-height: 1.3333;\n  text-transform: uppercase;\n  margin-top: 16px;\n}\n";
function heading(_a) {
    var attrs = _a.attrs, marks = _a.marks, text = _a.text;
    var tagName = "h" + attrs.level;
    var headingTag = create_tag_1.createTag(tagName, { class: util_1.createClassName(tagName) }, text);
    return apply_marks_1.applyMarks(marks, headingTag);
}
exports.default = heading;
//# sourceMappingURL=heading.js.map