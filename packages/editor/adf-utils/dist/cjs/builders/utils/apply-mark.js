"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_duplicate_mark_1 = require("./is-duplicate-mark");
var text_1 = require("../nodes/text");
function applyMark(mark, maybeNode) {
    var node = typeof maybeNode === 'string' ? text_1.text(maybeNode) : maybeNode;
    if (is_duplicate_mark_1.isDuplicateMark(node, mark.type)) {
        // eslint-disable-next-line
        console.error(is_duplicate_mark_1.duplicateMarkError(node, mark.type));
        return node;
    }
    node.marks = node.marks || [];
    node.marks.push(mark);
    return node;
}
exports.applyMark = applyMark;
//# sourceMappingURL=apply-mark.js.map