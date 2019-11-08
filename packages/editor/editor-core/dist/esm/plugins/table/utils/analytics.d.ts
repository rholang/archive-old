import { TableMap } from 'prosemirror-tables';
import { Selection } from 'prosemirror-state';
export declare function getSelectedTableInfo(selection: Selection): {
    table: import("prosemirror-utils").ContentNodeWithPos | undefined;
    map: TableMap | undefined;
    totalRowCount: number;
    totalColumnCount: number;
};
export declare function getSelectedCellInfo(selection: Selection): {
    totalRowCount: number;
    totalColumnCount: number;
    horizontalCells: number;
    verticalCells: number;
    totalCells: number;
};
