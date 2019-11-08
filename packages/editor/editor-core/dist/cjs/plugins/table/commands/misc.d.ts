import { Transaction } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
import { Node as PMNode, Slice, Schema } from 'prosemirror-model';
import { ContentNodeWithPos } from 'prosemirror-utils';
import { Command } from '../../../types';
export declare const setEditorFocus: (editorHasFocus: boolean) => Command;
export declare const setTableRef: (ref?: HTMLElement | null | undefined) => Command;
export declare const setCellAttr: (name: string, value: any) => Command;
export declare const triggerUnlessTableHeader: (command: Command) => Command;
export declare const transformSliceRemoveCellBackgroundColor: (slice: Slice<any>, schema: Schema<any, any>) => Slice<any>;
export declare const transformSliceToAddTableHeaders: (slice: Slice<any>, schema: Schema<any, any>) => Slice<any>;
export declare const transformSliceToRemoveColumnsWidths: (slice: Slice<any>, schema: Schema<any, any>) => Slice<any>;
export declare const deleteTable: Command;
export declare const convertFirstRowToHeader: (schema: Schema<any, any>) => (tr: Transaction<any>) => Transaction<any>;
export declare const goToNextCell: (direction: number) => Command;
export declare const moveCursorBackward: Command;
export declare const setMultipleCellAttrs: (attrs: Object, targetCellPosition?: number | undefined) => Command;
export declare const selectColumn: (column: number, expand?: boolean | undefined) => Command;
export declare const selectRow: (row: number, expand?: boolean | undefined) => Command;
export declare const showInsertColumnButton: (columnIndex: number) => Command;
export declare const showInsertRowButton: (rowIndex: number) => Command;
export declare const hideInsertColumnOrRowButton: () => Command;
export declare const autoSizeTable: (view: EditorView<any>, node: PMNode<any>, table: HTMLTableElement, basePos: number, opts: {
    dynamicTextSizing: boolean;
    containerWidth: number;
}) => boolean;
export declare const addBoldInEmptyHeaderCells: (tableCellHeader: ContentNodeWithPos) => Command;
/**
 * We need to split cell keeping the right type of cell given current table configuration.
 * We are using prosemirror-tables splitCellWithType that allows you to choose what cell type should be.
 */
export declare const splitCell: Command;
