"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_tag_1 = require("../create-tag");
var util_1 = require("../styles/util");
var className = util_1.createClassName('decisionList');
exports.styles = "\n." + className + " {\n  margin-top: 12px;\n}\n";
function decisionList(_a) {
    var text = _a.text;
    return create_tag_1.createTag('div', { class: className }, text);
}
exports.default = decisionList;
//# sourceMappingURL=decision-list.js.map