"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var escape_html_string_1 = require("./escape-html-string");
exports.createTag = function (tagName, attrs, content) {
    var attrsList = [];
    Object.keys(attrs || {}).forEach(function (key) {
        var value = attrs[key];
        if (value === undefined) {
            return;
        }
        var attrValue = escape_html_string_1.escapeHtmlString(String(value)).replace(/"/g, "'");
        attrsList.push(key + "=\"" + attrValue + "\"");
    });
    var attrsSerialized = attrsList.length ? " " + attrsList.join(' ') : '';
    return content
        ? "<" + tagName + attrsSerialized + ">" + content + "</" + tagName + ">"
        : "<" + tagName + attrsSerialized + "/>";
};
//# sourceMappingURL=create-tag.js.map