"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_tag_1 = require("../create-tag");
var util_1 = require("../styles/util");
exports.styles = "\n." + util_1.createClassName('ul') + " {\n  list-style-type: disc;\n  margin-top: 12px;\n  margin-bottom: 12px;\n}\n." + util_1.createClassName('li') + " > ." + util_1.createClassName('ul') + " {\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n";
function bulletList(_a) {
    var text = _a.text;
    return create_tag_1.createTag('ul', { class: util_1.createClassName('ul') }, text);
}
exports.default = bulletList;
//# sourceMappingURL=bullet-list.js.map