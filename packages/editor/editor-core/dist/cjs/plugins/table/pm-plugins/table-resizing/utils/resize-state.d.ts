import { Node as PMNode } from 'prosemirror-model';
import { ColumnState } from './column-state';
export interface ResizeState {
    cols: ColumnState[];
    maxSize: number;
}
export declare const getResizeState: ({ minWidth, maxSize, table, tableRef, start, domAtPos, }: {
    minWidth: number;
    maxSize: number;
    table: PMNode<any>;
    tableRef: HTMLTableElement;
    start: number;
    domAtPos: (pos: number) => {
        node: Node;
        offset: number;
    };
}) => ResizeState;
export declare const resizeColumn: (resizeState: ResizeState, colIndex: number, amount: number, tableRef: HTMLElement, selectedColumns?: number[] | undefined) => ResizeState;
export declare const updateColgroup: (state: ResizeState, tableRef: HTMLElement) => void;
export declare const getTotalWidth: ({ cols }: ResizeState) => number;
export declare const adjustColumnsWidths: (resizeState: ResizeState, maxSize: number) => ResizeState;
export declare const evenAllColumnsWidths: (resizeState: ResizeState) => ResizeState;
export declare const bulkColumnsResize: (resizeState: ResizeState, columnsIndexes: number[], sourceColumnIndex: number) => ResizeState;
export declare const areColumnsEven: (resizeState: ResizeState) => boolean;
