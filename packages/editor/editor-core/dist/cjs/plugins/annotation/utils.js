"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Finds the marks in the nodes to the left and right.
 * @param $pos Position to center search around
 */
exports.surroundingMarks = function ($pos) {
    var nodeBefore = $pos.nodeBefore, nodeAfter = $pos.nodeAfter;
    var markNodeBefore = nodeBefore && $pos.doc.nodeAt($pos.pos - nodeBefore.nodeSize - 1);
    var markNodeAfter = nodeAfter && $pos.doc.nodeAt($pos.pos + nodeAfter.nodeSize);
    return [
        (markNodeBefore && markNodeBefore.marks) || [],
        (markNodeAfter && markNodeAfter.marks) || [],
    ];
};
/**
 * Finds annotation marks, and returns their IDs.
 * @param marks Array of marks to search in
 */
exports.filterAnnotationIds = function (marks) {
    if (!marks.length) {
        return [];
    }
    var annotation = marks[0].type.schema.marks.annotation;
    return marks
        .filter(function (mark) { return mark.type === annotation; })
        .map(function (mark) { return mark.attrs.id; });
};
//# sourceMappingURL=utils.js.map