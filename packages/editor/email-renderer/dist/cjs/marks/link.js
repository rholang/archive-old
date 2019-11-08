"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_tag_1 = require("../create-tag");
var util_1 = require("../styles/util");
exports.styles = "\n." + util_1.createClassName('mark-link') + " {\n  border: none;\n  background: transparent;\n  color: #0052cc;\n  text-decoration: none;\n}\n";
function link(_a) {
    var mark = _a.mark, text = _a.text;
    var _b = mark.attrs, href = _b.href, title = _b.title;
    return create_tag_1.createTag('a', {
        href: href,
        title: title,
        class: util_1.createClassName('mark-link'),
    }, text);
}
exports.default = link;
//# sourceMappingURL=link.js.map