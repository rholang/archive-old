"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
function validateVisitors(_visitors) {
    return true;
}
exports.validateVisitors = validateVisitors;
function traverse(adf, visitors) {
    if (!validateVisitors(visitors)) {
        throw new Error("Visitors are not valid: \"" + Object.keys(visitors).join(', ') + "\"");
    }
    return traverseNode(adf, { node: undefined }, visitors, 0);
}
exports.traverse = traverse;
function traverseNode(adfNode, parent, visitors, index) {
    var visitor = visitors[adfNode.type] || visitors['any'];
    var newNode = tslib_1.__assign({}, adfNode);
    if (visitor) {
        var processedNode = visitor(tslib_1.__assign({}, newNode), parent, index);
        if (processedNode === false) {
            return false;
        }
        newNode = processedNode || adfNode;
    }
    if (newNode.content) {
        newNode.content = newNode.content.reduce(function (acc, node, idx) {
            var processedNode = traverseNode(node, { node: newNode, parent: parent }, visitors, idx);
            if (processedNode !== false) {
                acc.push(processedNode);
            }
            return acc;
        }, []);
    }
    return newNode;
}
//# sourceMappingURL=traverse.js.map