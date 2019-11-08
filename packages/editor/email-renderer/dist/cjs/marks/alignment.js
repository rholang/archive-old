"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_tag_1 = require("../create-tag");
var util_1 = require("../styles/util");
exports.styles = "\n." + util_1.createClassName('mark-alignment') + "-right,\n." + util_1.createClassName('mark-alignment') + "-end {\n  width: 100%;\n  text-align: right\n}\n." + util_1.createClassName('mark-alignment') + "-center {\n  width: 100%;\n  text-align: center\n}\n";
function alignment(_a) {
    var mark = _a.mark, text = _a.text;
    return create_tag_1.createTag('div', { class: util_1.createClassName("mark-alignment-" + mark.attrs.align) }, text);
}
exports.default = alignment;
//# sourceMappingURL=alignment.js.map