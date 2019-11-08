import { Node, Schema } from 'prosemirror-model';
import { Transaction, Selection, EditorState } from 'prosemirror-state';
import { ContentNodeWithPos } from 'prosemirror-utils';
import { ProviderFactory } from '@atlaskit/editor-common';
/**
 * Checks if node is an empty paragraph.
 */
export declare function isEmptyParagraph(node?: Node | null): boolean;
/**
 * Returns false if node contains only empty inline nodes and hardBreaks.
 */
export declare function hasVisibleContent(node: Node): boolean;
/**
 * Checks if a node has any content. Ignores node that only contain empty block nodes.
 */
export declare function isNodeEmpty(node?: Node): boolean;
/**
 * Checks if a node looks like an empty document
 */
export declare function isEmptyDocument(node: Node): boolean;
export declare function processRawValue(schema: Schema, value?: string | object, providerFactory?: ProviderFactory, sanitizePrivateContent?: boolean): Node | undefined;
export declare const getStepRange: (transaction: Transaction<any>) => {
    from: number;
    to: number;
} | null;
/**
 * Find the farthest node given a condition
 * @param predicate Function to check the node
 */
export declare const findFarthestParentNode: (predicate: (node: Node<any>) => boolean) => (selection: Selection<any>) => ContentNodeWithPos | null;
export declare const isSelectionEndOfParagraph: (state: EditorState<any>) => boolean;
export declare function nodesBetweenChanged(tr: Transaction, f: (node: Node<any>, pos: number, parent: Node<any>, index: number) => boolean | null | undefined | void, startPos?: number): void;
export declare function getNodesCount(node: Node): Record<string, number>;
