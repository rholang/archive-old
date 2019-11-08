import { escapeHtmlString } from './escape-html-string';
export var createTag = function (tagName, attrs, content) {
    var attrsList = [];
    Object.keys(attrs || {}).forEach(function (key) {
        var value = attrs[key];
        if (value === undefined) {
            return;
        }
        var attrValue = escapeHtmlString(String(value)).replace(/"/g, "'");
        attrsList.push(key + "=\"" + attrValue + "\"");
    });
    var attrsSerialized = attrsList.length ? " " + attrsList.join(' ') : '';
    return content
        ? "<" + tagName + attrsSerialized + ">" + content + "</" + tagName + ">"
        : "<" + tagName + attrsSerialized + "/>";
};
//# sourceMappingURL=create-tag.js.map