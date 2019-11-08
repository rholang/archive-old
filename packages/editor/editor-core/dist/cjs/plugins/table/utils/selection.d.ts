import { Transaction, Selection } from 'prosemirror-state';
import { Rect } from 'prosemirror-tables';
export declare const isSelectionUpdated: (oldSelection: Selection<any>, newSelection?: Selection<any> | undefined) => boolean;
export declare const normalizeSelection: (tr: Transaction<any>) => Transaction<any>;
export declare const getSelectedColumnIndexes: (selectionRect: Rect) => number[];
export declare const getSelectedRowIndexes: (selectionRect: Rect) => number[];
