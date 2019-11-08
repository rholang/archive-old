import React from 'react';
import { HeadType, SortOrderType, RowCellType } from '../types';
interface Props {
    head: HeadType;
    sortKey?: string;
    sortOrder?: SortOrderType;
    isFixedSize?: boolean;
    onSort: (item: RowCellType) => () => void;
    isRankable?: boolean;
    isRanking: boolean;
}
declare class TableHead extends React.Component<Props, {}> {
    UNSAFE_componentWillMount(): void;
    UNSAFE_componentWillReceiveProps(nextProps: Props): void;
    canSortOnEnterPressed: (e: React.KeyboardEvent<Element>, isSortable: void | Boolean) => boolean | void;
    render(): JSX.Element | null;
}
export default TableHead;
