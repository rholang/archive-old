"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_tag_1 = require("../create-tag");
var util_1 = require("../styles/util");
var adf_schema_1 = require("@atlaskit/adf-schema");
exports.styles = "\n." + util_1.createClassName('mention') + " {\n  background: #EFEFF2;\n  border: 1px solid transparent;\n  border-radius: 20px;\n  color: " + adf_schema_1.N500 + ";\n  padding: 0 4px 2px 3px;\n  white-space: nowrap;\n}\n";
var resolveMention = function (node) {
    if (['all', 'here'].includes(node.attrs.id)) {
        return '@' + node.attrs.id;
    }
    return node.text || '@unknown';
};
function mention(node) {
    return create_tag_1.createTag('span', { class: util_1.createClassName('mention') }, resolveMention(node));
}
exports.default = mention;
//# sourceMappingURL=mention.js.map