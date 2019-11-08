import { Node as PMNode } from 'prosemirror-model';
import { Command, DomAtPos } from '../../../../types';
import { ScaleOptions, ResizeState } from './utils';
import { Transaction } from 'prosemirror-state';
export declare const handleBreakoutContent: (tableRef: HTMLTableElement, cellPos: number, start: number, minWidth: number, table: PMNode<any>, domAtPos: DomAtPos) => Command;
export declare const scaleTable: (tableRef: HTMLTableElement | null | undefined, options: ScaleOptions, domAtPos: DomAtPos) => Command;
export declare const evenColumns: ({ resizeState, table, start, event, }: {
    resizeState: ResizeState;
    table: PMNode<any>;
    start: number;
    event: MouseEvent;
}) => Command;
export declare const setResizeHandlePos: (resizeHandlePos: number | null) => Command;
export declare const stopResizing: (tr?: Transaction<any> | undefined) => Command;
export declare const setDragging: (dragging: {
    startX: number;
    startWidth: number;
} | null, tr?: Transaction<any> | undefined) => Command;
export declare const setLastClick: (lastClick: {
    x: number;
    y: number;
    time: number;
} | null, transform?: ((tr: Transaction<any>) => Transaction<any>) | undefined) => Command;
