"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_tag_1 = require("../create-tag");
var util_1 = require("../styles/util");
exports.styles = "\n." + util_1.createClassName('li') + " {\n  margin-top: 4px;\n}\n." + util_1.createClassName('li') + " > p {\n  margin-bottom: 0px;\n  padding-top: 0px;\n}\n";
function listItem(_a) {
    var text = _a.text;
    return create_tag_1.createTag('li', { class: util_1.createClassName('li') }, text);
}
exports.default = listItem;
//# sourceMappingURL=list-item.js.map