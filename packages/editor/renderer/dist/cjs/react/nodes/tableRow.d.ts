import * as React from 'react';
import { SortOrder } from '@atlaskit/editor-common';
declare type Props = {
    isNumberColumnEnabled?: number;
    index?: number;
    children?: React.ReactNode;
    onSorting?: (columnIndex?: number, currentSortOrdered?: SortOrder) => void;
    allowColumnSorting?: boolean;
    tableOrderStatus?: {
        columnIndex: number;
        order: SortOrder;
    };
};
declare const TableRow: (props: Props) => JSX.Element;
export default TableRow;
