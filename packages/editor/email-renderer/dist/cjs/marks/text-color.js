"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_tag_1 = require("../create-tag");
var serialize_style_1 = require("../serialize-style");
function textColor(_a) {
    var mark = _a.mark, text = _a.text;
    var css = serialize_style_1.serializeStyle({ color: mark.attrs.color });
    return create_tag_1.createTag('span', { style: css }, text);
}
exports.default = textColor;
//# sourceMappingURL=text-color.js.map