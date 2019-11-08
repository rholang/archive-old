export function isDuplicateMark(node, type) {
    if (node.marks && node.marks.some(function (mark) { return mark.type === type; })) {
        return true;
    }
    return false;
}
export function duplicateMarkError(node, type) {
    return "Mark with the same name '" + type + "' already exists on a node: " + JSON.stringify(node);
}
//# sourceMappingURL=is-duplicate-mark.js.map