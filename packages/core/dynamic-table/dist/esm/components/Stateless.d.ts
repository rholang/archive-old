import React from 'react';
import { UIAnalyticsEvent } from '@atlaskit/analytics-next';
import { StatelessProps as Props, RowCellType, RankStart, RankEnd } from '../types';
export interface State {
    isRanking: boolean;
}
declare class DynamicTable extends React.Component<Props, State> {
    tableBody?: React.ComponentType<any>;
    state: {
        isRanking: boolean;
    };
    static defaultProps: {
        isLoading: boolean;
        isFixedSize: boolean;
        rowsPerPage: number;
        onSetPage: () => void;
        onSort: () => void;
        page: number;
        isRankable: boolean;
        isRankingDisabled: boolean;
        onRankStart: () => void;
        onRankEnd: () => void;
        paginationi18n: {
            prev: string;
            next: string;
        };
    };
    UNSAFE_componentWillMount(): void;
    UNSAFE_componentWillReceiveProps(nextProps: Props): void;
    onSort: (item: RowCellType) => () => void;
    onSetPage: (page: number, event?: UIAnalyticsEvent | undefined) => void;
    onRankStart: (params: RankStart) => void;
    onRankEnd: (params: RankEnd) => void;
    getSpinnerSize: () => import("../types").LoadingSpinnerSizeType;
    renderEmptyBody: () => JSX.Element | undefined;
    render(): JSX.Element;
}
export { DynamicTable as DynamicTableWithoutAnalytics };
declare const _default: React.ForwardRefExoticComponent<Pick<Pick<Pick<Props, "caption" | "head" | "isFixedSize" | "sortOrder" | "sortKey" | "page" | "onSort" | "isRankable" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | "highlightedRowIndex" | "isRankingDisabled" | "onRankStart" | "onRankEnd" | "isLoading" | "emptyView" | "loadingSpinnerSize" | "onSetPage" | "defaultPage" | "paginationi18n">, "caption" | "head" | "sortOrder" | "sortKey" | "rows" | "onPageRowsUpdate" | "highlightedRowIndex" | "emptyView" | "loadingSpinnerSize" | "defaultPage"> & Partial<Pick<Pick<Props, "caption" | "head" | "isFixedSize" | "sortOrder" | "sortKey" | "page" | "onSort" | "isRankable" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | "highlightedRowIndex" | "isRankingDisabled" | "onRankStart" | "onRankEnd" | "isLoading" | "emptyView" | "loadingSpinnerSize" | "onSetPage" | "defaultPage" | "paginationi18n">, "isFixedSize" | "page" | "onSort" | "isRankable" | "rowsPerPage" | "isRankingDisabled" | "onRankStart" | "onRankEnd" | "isLoading" | "onSetPage" | "paginationi18n">> & Partial<Pick<{
    isLoading: boolean;
    isFixedSize: boolean;
    rowsPerPage: number;
    onSetPage: () => void;
    onSort: () => void;
    page: number;
    isRankable: boolean;
    isRankingDisabled: boolean;
    onRankStart: () => void;
    onRankEnd: () => void;
    paginationi18n: {
        prev: string;
        next: string;
    };
}, never>> & React.RefAttributes<any> & import("@atlaskit/analytics-next/dist/cjs/withAnalyticsContext").WithContextProps, "key" | "analyticsContext" | "caption" | "head" | "isFixedSize" | "sortOrder" | "sortKey" | "page" | "onSort" | "isRankable" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | "highlightedRowIndex" | "isRankingDisabled" | "onRankStart" | "onRankEnd" | "isLoading" | "emptyView" | "loadingSpinnerSize" | "onSetPage" | "defaultPage" | "paginationi18n"> & React.RefAttributes<any>>;
export default _default;
