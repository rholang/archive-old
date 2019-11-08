"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isDuplicateMark(node, type) {
    if (node.marks && node.marks.some(function (mark) { return mark.type === type; })) {
        return true;
    }
    return false;
}
exports.isDuplicateMark = isDuplicateMark;
function duplicateMarkError(node, type) {
    return "Mark with the same name '" + type + "' already exists on a node: " + JSON.stringify(node);
}
exports.duplicateMarkError = duplicateMarkError;
//# sourceMappingURL=is-duplicate-mark.js.map