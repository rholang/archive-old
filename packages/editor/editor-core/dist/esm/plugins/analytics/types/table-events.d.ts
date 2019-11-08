import { TableAEP } from './events';
import { INPUT_METHOD } from './enums';
import { SortOrder } from '../../table/types';
export declare enum TABLE_ACTION {
    DELETED = "deleted",
    CLEARED = "cleared",
    MERGED = "merged",
    SPLIT = "split",
    COLORED = "colored",
    TOGGLED_HEADER_COLUMN = "toggledHeaderColumn",
    TOGGLED_HEADER_ROW = "toggledHeaderRow",
    TOGGLED_NUMBER_COLUMN = "toggledNumberColumn",
    CHANGED_BREAKOUT_MODE = "changedBreakoutMode",
    CUT = "cut",
    COPIED = "copied",
    ADDED_ROW = "addedRow",
    ADDED_COLUMN = "addedColumn",
    DELETED_ROW = "deletedRow",
    DELETED_COLUMN = "deletedColumn",
    SORTED_COLUMN = "sortedColumn"
}
export declare enum TABLE_BREAKOUT {
    WIDE = "wide",
    FULL_WIDTH = "fullWidth",
    NORMAL = "normal"
}
interface SortColumn {
    sortOrder: SortOrder;
    mode: 'editor';
}
interface TotalRowAndColCount {
    totalRowCount: number;
    totalColumnCount: number;
}
interface HorizontalAndVerticalCells {
    horizontalCells: number;
    verticalCells: number;
}
declare type AllCellInfo = TotalRowAndColCount & HorizontalAndVerticalCells & {
    totalCells: number;
};
declare type TableDeleteAEP = TableAEP<TABLE_ACTION.DELETED, {
    inputMethod: INPUT_METHOD.KEYBOARD | INPUT_METHOD.FLOATING_TB;
}, undefined>;
declare type TableClearAEP = TableAEP<TABLE_ACTION.CLEARED, {
    inputMethod: INPUT_METHOD.KEYBOARD | INPUT_METHOD.CONTEXT_MENU;
} & HorizontalAndVerticalCells & TotalRowAndColCount, undefined>;
declare type TableMergeSplitAEP = TableAEP<TABLE_ACTION.MERGED | TABLE_ACTION.SPLIT, AllCellInfo, undefined>;
declare type TableColorAEP = TableAEP<TABLE_ACTION.COLORED, {
    cellColor: string;
} & AllCellInfo, undefined>;
declare type TableToggleHeaderAEP = TableAEP<TABLE_ACTION.TOGGLED_NUMBER_COLUMN | TABLE_ACTION.TOGGLED_HEADER_ROW | TABLE_ACTION.TOGGLED_HEADER_COLUMN, {
    newState: boolean;
} & TotalRowAndColCount, undefined>;
declare type TableChangeBreakoutAEP = TableAEP<TABLE_ACTION.CHANGED_BREAKOUT_MODE, {
    newBreakoutMode: TABLE_BREAKOUT;
    previousBreakoutMode: TABLE_BREAKOUT;
} & TotalRowAndColCount, undefined>;
declare type TableCopyAndCutAEP = TableAEP<TABLE_ACTION.CUT | TABLE_ACTION.COPIED, AllCellInfo, undefined>;
declare type TableAddRowOrColumnAEP = TableAEP<TABLE_ACTION.ADDED_ROW | TABLE_ACTION.ADDED_COLUMN, {
    inputMethod: INPUT_METHOD.SHORTCUT | INPUT_METHOD.CONTEXT_MENU | INPUT_METHOD.BUTTON | INPUT_METHOD.KEYBOARD;
    position: number;
} & TotalRowAndColCount, undefined>;
declare type TableDeleteRowOrColumnAEP = TableAEP<TABLE_ACTION.DELETED_ROW | TABLE_ACTION.DELETED_COLUMN, {
    inputMethod: INPUT_METHOD.CONTEXT_MENU | INPUT_METHOD.BUTTON;
    position: number;
    count: number;
} & TotalRowAndColCount, undefined>;
declare type TableSortColumnAEP = TableAEP<TABLE_ACTION.SORTED_COLUMN, {
    inputMethod: INPUT_METHOD.SHORTCUT | INPUT_METHOD.CONTEXT_MENU | INPUT_METHOD.BUTTON | INPUT_METHOD.KEYBOARD;
    position: number;
} & TotalRowAndColCount & SortColumn, undefined>;
export declare type TableEventPayload = TableDeleteAEP | TableClearAEP | TableMergeSplitAEP | TableColorAEP | TableToggleHeaderAEP | TableChangeBreakoutAEP | TableCopyAndCutAEP | TableAddRowOrColumnAEP | TableSortColumnAEP | TableDeleteRowOrColumnAEP;
export {};
