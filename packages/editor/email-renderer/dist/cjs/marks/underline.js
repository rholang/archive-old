"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_tag_1 = require("../create-tag");
var util_1 = require("../styles/util");
exports.styles = "\n." + util_1.createClassName('mark-underline') + " {\n  text-decoration: underline;\n}\n";
function strong(_a) {
    var text = _a.text;
    return create_tag_1.createTag('span', { class: util_1.createClassName('mark-underline') }, text);
}
exports.default = strong;
//# sourceMappingURL=underline.js.map