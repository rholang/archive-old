"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prosemirror_model_1 = require("prosemirror-model");
exports.fromHTML = function (html, schema) {
    var el = document.createElement('div');
    el.innerHTML = html;
    return prosemirror_model_1.DOMParser.fromSchema(schema).parse(el);
};
exports.toDOM = function (node, schema) {
    var serializer = prosemirror_model_1.DOMSerializer.fromSchema(schema);
    return serializer.serializeFragment(prosemirror_model_1.Fragment.from(node));
};
exports.toHTML = function (node, schema) {
    var el = document.createElement('div');
    el.appendChild(exports.toDOM(node, schema));
    return el.innerHTML;
};
//# sourceMappingURL=html-helpers.js.map