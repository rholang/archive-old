import { Node as PMNode } from 'prosemirror-model';
import { CardAttributes } from '@atlaskit/adf-schema';
interface CompareOptions {
    getInlineCardTextFromStore(attrs: CardAttributes): string | null;
}
/**
 * Compare 2 prosemirror nodes and check if it's greater, equal or less than the other node
 *
 * @param {Node} nodeA
 * @param {Node} nodeB
 * @returns {(1 | 0 | -1)}
 *    1  -> NodeA > NodeB
 *    0  -> NodeA === NodeB
 *    -1 -> Node A < NodeB
 */
export declare const createCompareNodes: (options: CompareOptions) => (nodeA: PMNode<any> | null, nodeB: PMNode<any> | null) => number;
export {};
