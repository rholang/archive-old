"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_tag_1 = require("../create-tag");
var serialize_style_1 = require("../serialize-style");
function mediaGroup(_a) {
    var text = _a.text;
    var style = serialize_style_1.serializeStyle({
        width: '100%',
    });
    return create_tag_1.createTag('div', { style: style }, text);
}
exports.default = mediaGroup;
//# sourceMappingURL=media-group.js.map