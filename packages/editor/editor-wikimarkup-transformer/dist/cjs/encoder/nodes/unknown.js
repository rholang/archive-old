"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var editor_json_transformer_1 = require("@atlaskit/editor-json-transformer");
var jsonTransformer = new editor_json_transformer_1.JSONTransformer();
exports.unknown = function (node) {
    var content = JSON.stringify(jsonTransformer.encodeNode(node));
    return node.isBlock
        ? "{adf:display=block}\n" + content + "\n{adf}"
        : "{adf:display=inline}" + content + "{adf}";
};
//# sourceMappingURL=unknown.js.map