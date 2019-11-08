import { EditorView } from 'prosemirror-view';
import { Selection } from 'prosemirror-state';
export declare const getColumnsWidths: (view: EditorView<any>) => (number | undefined)[];
export declare const isColumnDeleteButtonVisible: (selection: Selection<any>) => boolean;
export declare const getColumnDeleteButtonParams: (columnsWidths: (number | undefined)[], selection: Selection<any>) => {
    left: number;
    indexes: number[];
} | null;
export declare const getColumnClassNames: (index: number, selection: Selection<any>, hoveredColumns?: number[], isInDanger?: boolean | undefined, isResizing?: boolean | undefined) => string;
