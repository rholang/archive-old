import { Style, Attrs } from './interfaces';
export declare type TableData = {
    text?: string | null;
    style?: Style;
    attrs?: Attrs;
};
export declare const styles: string;
export declare const createTableAttrs: (tableAttrs?: Attrs, tableStyle?: Style) => {
    class: string;
    cellspacing: number;
    cellpadding: number;
    border: number;
    style: string;
};
export declare const tableDataMapper: ({ style, text, attrs }: TableData) => string;
export declare const tableRowMapper: (tableRow: TableData[]) => string;
export declare const createTable: (tableData: TableData[][], tableStyle?: Style, tableAttrs?: Attrs) => string;
