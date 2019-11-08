"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var adf_utils_1 = require("@atlaskit/adf-utils");
function removeMarks(node) {
    var newNode = tslib_1.__assign({}, node);
    delete newNode.marks;
    return newNode;
}
exports.removeMarks = removeMarks;
function sanitizeNode(json) {
    var sanitizedJSON = adf_utils_1.traverse(json, {
        text: function (node) {
            if (!node || !Array.isArray(node.marks)) {
                return node;
            }
            return tslib_1.__assign(tslib_1.__assign({}, node), { marks: node.marks.filter(function (mark) { return mark.type !== 'typeAheadQuery'; }) });
        },
        status: function (node) {
            if (node.attrs && !!node.attrs.text) {
                return removeMarks(node);
            }
            return false; // empty status
        },
        emoji: removeMarks,
        mention: removeMarks,
        date: removeMarks,
        hardBreak: removeMarks,
        inlineCard: removeMarks,
    });
    return sanitizedJSON;
}
exports.sanitizeNode = sanitizeNode;
//# sourceMappingURL=node-filter.js.map