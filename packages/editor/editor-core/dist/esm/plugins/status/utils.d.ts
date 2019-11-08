import { Selection, Transaction } from 'prosemirror-state';
import { StatusType } from './plugin';
import { Node as PMNode } from 'prosemirror-model';
export declare const mayGetStatusAtSelection: (selection: Selection<any>) => StatusType | null;
export declare const mayGetStatusAtPos: (pos: number | null, doc: PMNode<any>) => StatusType | null;
export declare const isEmptyStatus: (node: StatusType) => boolean;
export declare const setSelectionNearPos: (tr: Transaction<any>, pos: number) => Transaction<any>;
export declare const setNodeSelectionNearPos: (tr: Transaction<any>, pos: number) => Transaction<any>;
