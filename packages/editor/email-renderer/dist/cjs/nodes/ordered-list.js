"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_tag_1 = require("../create-tag");
var util_1 = require("../styles/util");
exports.styles = "\n." + util_1.createClassName('ol') + " {\n  list-style-type: decimal;\n  margin-top: 12px;\n  margin-bottom: 12px;\n}\n." + util_1.createClassName('li') + " > ." + util_1.createClassName('ol') + " {\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n";
function orderedList(_a) {
    var text = _a.text;
    return create_tag_1.createTag('ol', { class: util_1.createClassName('ol') }, text);
}
exports.default = orderedList;
//# sourceMappingURL=ordered-list.js.map