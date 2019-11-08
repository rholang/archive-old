"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_text_nodes_1 = require("../utils/create-text-nodes");
exports.paragraph = function () {
    var content = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        content[_i] = arguments[_i];
    }
    return ({
        type: 'paragraph',
        content: create_text_nodes_1.createTextNodes(content),
    });
};
//# sourceMappingURL=paragraph.js.map