"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_tag_1 = require("../create-tag");
var serialize_style_1 = require("../serialize-style");
var util_1 = require("../styles/util");
var className = util_1.createClassName('media-single');
exports.styles = "\n." + className + "-wide {\n  width: 100%;\n}\n." + className + "-full-width {\n  width: 100%;\n}\n." + className + "-center {\n  margin-left: auto;\n  margin-right: auto;\n}\n." + className + "-wrap-right {\n  float: right;\n}\n." + className + "-wrap-left {\n  float: left;\n}\n." + className + "-align-end {\n  margin-left: auto;\n  margin-right: 0px;\n}\n." + className + "-align-start {\n  margin-left: 0px;\n  margin-right: auto;\n}\n\n";
function mediaSingle(_a) {
    var attrs = _a.attrs, text = _a.text;
    var honorWidth = !['wide', 'full-width'].includes(attrs.layout);
    var style = {
        width: honorWidth ? (attrs.width || 100) + "%" : '100%',
        'max-width': '100%',
    };
    var layoutClass = className + "-" + attrs.layout;
    return create_tag_1.createTag('div', { style: serialize_style_1.serializeStyle(style), class: layoutClass }, text);
}
exports.default = mediaSingle;
//# sourceMappingURL=media-single.js.map