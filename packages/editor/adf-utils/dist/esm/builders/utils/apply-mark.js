import { isDuplicateMark, duplicateMarkError } from './is-duplicate-mark';
import { text } from '../nodes/text';
export function applyMark(mark, maybeNode) {
    var node = typeof maybeNode === 'string' ? text(maybeNode) : maybeNode;
    if (isDuplicateMark(node, mark.type)) {
        // eslint-disable-next-line
        console.error(duplicateMarkError(node, mark.type));
        return node;
    }
    node.marks = node.marks || [];
    node.marks.push(mark);
    return node;
}
//# sourceMappingURL=apply-mark.js.map