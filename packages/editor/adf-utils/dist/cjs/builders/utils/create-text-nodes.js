"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var text_1 = require("../nodes/text");
function createTextNodes(nodes) {
    return nodes.map(createTextFromString);
}
exports.createTextNodes = createTextNodes;
function createTextFromString(str) {
    return typeof str === 'string' ? text_1.text(str) : str;
}
exports.createTextFromString = createTextFromString;
//# sourceMappingURL=create-text-nodes.js.map