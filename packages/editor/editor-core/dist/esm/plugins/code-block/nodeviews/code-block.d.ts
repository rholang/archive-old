import { Node } from 'prosemirror-model';
export declare class CodeBlockView {
    node: Node;
    dom: HTMLElement;
    contentDOM: HTMLElement;
    lineNumberGutter: HTMLElement;
    constructor(node: Node);
    private ensureLineNumbers;
    update(node: Node): boolean;
    ignoreMutation(record: MutationRecord): boolean;
}
declare const _default: (node: Node<any>) => CodeBlockView;
export default _default;
