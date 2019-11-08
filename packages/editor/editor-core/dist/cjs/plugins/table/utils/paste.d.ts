import { Node as PMNode, Schema, Slice, Fragment } from 'prosemirror-model';
export declare const unwrapContentFromTable: (maybeTable: PMNode<any>) => PMNode<any> | PMNode<any>[];
export declare const removeTableFromFirstChild: (node: PMNode<any>, i: number) => PMNode<any> | PMNode<any>[];
export declare const removeTableFromLastChild: (node: PMNode<any>, i: number, fragment: Fragment<any>) => PMNode<any> | PMNode<any>[];
/**
 * When we copy from a table cell with a hardBreak at the end,
 * the slice generated will come with a hardBreak outside of the table.
 * This code will look for that pattern and fix it.
 */
export declare const transformSliceToFixHardBreakProblemOnCopyFromCell: (slice: Slice<any>, schema: Schema<any, any>) => Slice<any>;
export declare const transformSliceToRemoveOpenTable: (slice: Slice<any>, schema: Schema<any, any>) => Slice<any>;
export declare const transformSliceToCorrectEmptyTableCells: (slice: Slice<any>, schema: Schema<any, any>) => Slice<any>;
