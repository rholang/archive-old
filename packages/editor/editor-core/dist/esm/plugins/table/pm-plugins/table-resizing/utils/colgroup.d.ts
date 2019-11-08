import { Node as PmNode } from 'prosemirror-model';
export declare const generateColgroup: (table: PmNode<any>) => (string | {
    [name: string]: string;
})[][];
export declare const insertColgroupFromNode: (tableRef: HTMLTableElement, table: PmNode<any>) => HTMLCollection;
export declare const hasTableBeenResized: (table: PmNode<any>) => boolean;
