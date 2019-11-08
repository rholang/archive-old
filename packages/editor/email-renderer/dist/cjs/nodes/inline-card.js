"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_tag_1 = require("../create-tag");
var util_1 = require("../styles/util");
var adf_schema_1 = require("@atlaskit/adf-schema");
var className = util_1.createClassName('inlineCard');
exports.styles = "\n." + className + " {\n  border-radius: 3px;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  padding: 0px 0px 2px 0px;\n  background-color: #e9eaee;\n  line-height: 24px;\n}\n." + className + "-link {\n  color: " + adf_schema_1.B400 + ";\n  border: none;\n  background: transparent;\n  text-decoration: none;\n}\n";
function inlineCard(_a) {
    var attrs = _a.attrs;
    var scAttrs;
    var textContent;
    var href;
    if (attrs.data) {
        scAttrs = attrs;
        href = scAttrs.data.url;
        textContent = scAttrs.data.name;
    }
    else {
        scAttrs = attrs;
        href = scAttrs.url;
        textContent = scAttrs.url;
    }
    var card = create_tag_1.createTag('span', { class: className }, "&nbsp;" + textContent + "&nbsp;");
    var fontTag = create_tag_1.createTag('font', { color: adf_schema_1.B400, class: className + '-link' }, card);
    return href
        ? create_tag_1.createTag('a', { href: href, class: className + '-link' }, fontTag)
        : fontTag;
}
exports.default = inlineCard;
//# sourceMappingURL=inline-card.js.map