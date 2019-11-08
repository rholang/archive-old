import { Node as PmNode } from 'prosemirror-model';
import { TableCellContent } from './doc';
export declare const tablePrefixSelector = "pm-table";
export declare const tableCellSelector: string;
export declare const tableHeaderSelector: string;
export declare const tableCellContentWrapperSelector: string;
export declare const tableCellContentDomSelector: string;
export declare const setCellAttrs: (node: PmNode<any>, cell?: HTMLElement | undefined) => {
    colspan?: number | undefined;
    rowspan?: number | undefined;
    style?: string | undefined;
    'data-colwidth'?: string | undefined;
    class?: string | undefined;
};
export declare const tableBackgroundColorPalette: Map<string, string>;
export declare const tableBackgroundBorderColor: string;
export declare const tableBackgroundColorNames: Map<string, string>;
export declare type Layout = 'default' | 'full-width' | 'wide';
export interface TableAttributes {
    isNumberColumnEnabled?: boolean;
    layout?: Layout;
    __autoSize?: boolean;
}
/**
 * @name table_node
 */
export interface TableDefinition {
    type: 'table';
    attrs?: TableAttributes;
    /**
     * @minItems 1
     */
    content: Array<TableRow>;
}
/**
 * @name table_row_node
 */
export interface TableRow {
    type: 'tableRow';
    content: Array<TableHeader | TableCell>;
}
/**
 * @name table_cell_node
 */
export interface TableCell {
    type: 'tableCell';
    attrs?: CellAttributes;
    content: TableCellContent;
}
/**
 * @name table_header_node
 */
export interface TableHeader {
    type: 'tableHeader';
    attrs?: CellAttributes;
    content: TableCellContent;
}
export interface CellAttributes {
    colspan?: number;
    rowspan?: number;
    colwidth?: number[];
    background?: string;
}
export declare const table: any;
export declare const tableToJSON: (node: PmNode<any>) => {
    attrs: {
        [key: string]: any;
    };
};
export declare const tableRow: {
    content: string;
    tableRole: string;
    parseDOM: {
        tag: string;
    }[];
    toDOM(): (string | number)[];
};
export declare const tableCell: {
    content: string;
    attrs: {
        colspan: {
            default: number;
        };
        rowspan: {
            default: number;
        };
        colwidth: {
            default: null;
        };
        background: {
            default: null;
        };
    };
    tableRole: string;
    marks: string;
    isolating: boolean;
    parseDOM: ({
        tag: string;
        ignore: boolean;
        getAttrs?: undefined;
    } | {
        tag: string;
        getAttrs: (dom: HTMLElement) => {
            colspan: number;
            rowspan: number;
            colwidth: number[] | null;
            background: string | null;
        };
        ignore?: undefined;
    })[];
    toDOM: (node: PmNode<any>) => (string | number | {
        colspan?: number | undefined;
        rowspan?: number | undefined;
        style?: string | undefined;
        'data-colwidth'?: string | undefined;
        class?: string | undefined;
    })[];
};
export declare const toJSONTableCell: (node: PmNode<any>) => {
    attrs: Record<string, any>;
};
export declare const tableHeader: {
    content: string;
    attrs: {
        colspan: {
            default: number;
        };
        rowspan: {
            default: number;
        };
        colwidth: {
            default: null;
        };
        background: {
            default: null;
        };
    };
    tableRole: string;
    isolating: boolean;
    marks: string;
    parseDOM: {
        tag: string;
        getAttrs: (dom: HTMLElement) => {
            colspan: number;
            rowspan: number;
            colwidth: number[] | null;
            background: string | null;
        };
    }[];
    toDOM: (node: PmNode<any>) => (string | number | {
        colspan?: number | undefined;
        rowspan?: number | undefined;
        style?: string | undefined;
        'data-colwidth'?: string | undefined;
        class?: string | undefined;
    })[];
};
export declare const toJSONTableHeader: (node: PmNode<any>) => {
    attrs: Record<string, any>;
};
