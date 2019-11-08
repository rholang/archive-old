import React, { KeyboardEvent } from 'react';
import { SortOrderType } from '../types';
export interface Props {
    sortKey?: string;
    isSortable?: boolean;
    sortOrder?: SortOrderType;
    isFixedSize?: boolean;
    innerRef?: (element?: React.ReactElement<any>) => void;
    inlineStyles?: {};
    content?: React.ReactNode;
    onClick?: () => void;
    onKeyDown?: (e: KeyboardEvent) => void;
}
declare class TableHeadCell extends React.Component<Props, {}> {
    static defaultProps: {
        innerRef: () => void;
        inlineStyles: {};
    };
    render(): JSX.Element;
}
export default TableHeadCell;
