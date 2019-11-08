import { Node as PmNode } from 'prosemirror-model';
export declare function calcTableColumnWidths(node: PmNode): number[];
export declare function hasMergedCell(tableNode: PmNode): boolean;
export declare function convertProsemirrorTableNodeToArrayOfRows(tableNode: PmNode): Array<Array<PmNode | null>>;
