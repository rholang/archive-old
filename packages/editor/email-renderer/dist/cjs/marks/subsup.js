"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_tag_1 = require("../create-tag");
function subsup(_a) {
    var mark = _a.mark, text = _a.text;
    return create_tag_1.createTag(mark.attrs.type, {}, text);
}
exports.default = subsup;
//# sourceMappingURL=subsup.js.map