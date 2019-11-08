import React from 'react';
import { DropResult, DragStart } from 'react-beautiful-dnd';
import { HeadType, RowType, RankStart, RankEnd } from '../../types';
import { WithSortedPageRowsProps } from '../../hoc/withSortedPageRows';
export interface Props extends WithSortedPageRowsProps {
    highlightedRowIndex?: number;
    onRankStart: (rankStart: RankStart) => void;
    onRankEnd: (rankEnd: RankEnd) => void;
    isFixedSize: boolean;
    isRanking: boolean;
    isRankingDisabled: boolean;
    head?: HeadType;
}
export declare class RankableBody extends React.Component<Props, {}> {
    onBeforeDragStart: (dragStart: DragStart) => void;
    onDragEnd: (result: DropResult) => void;
    render(): JSX.Element;
}
declare const _default: {
    new (props: Readonly<Pick<Props & import("../../hoc/withSortedPageRows").Props, "head" | "isFixedSize" | "sortOrder" | "isRanking" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | "highlightedRowIndex" | "isRankingDisabled" | "onRankStart" | "onRankEnd">>): {
        state: {
            pageRows: never[];
        };
        componentDidMount(): void;
        componentDidUpdate(_prevProps: Pick<Props & import("../../hoc/withSortedPageRows").Props, "head" | "isFixedSize" | "sortOrder" | "isRanking" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | "highlightedRowIndex" | "isRankingDisabled" | "onRankStart" | "onRankEnd">, prevState: {
            pageRows: RowType[];
        }): void;
        render(): JSX.Element;
        context: any;
        setState<K extends "pageRows">(state: {
            pageRows: RowType[];
        } | ((prevState: Readonly<{
            pageRows: RowType[];
        }>, props: Readonly<Pick<Props & import("../../hoc/withSortedPageRows").Props, "head" | "isFixedSize" | "sortOrder" | "isRanking" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | "highlightedRowIndex" | "isRankingDisabled" | "onRankStart" | "onRankEnd">>) => {
            pageRows: RowType[];
        } | Pick<{
            pageRows: RowType[];
        }, K> | null) | Pick<{
            pageRows: RowType[];
        }, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Props & import("../../hoc/withSortedPageRows").Props, "head" | "isFixedSize" | "sortOrder" | "isRanking" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | "highlightedRowIndex" | "isRankingDisabled" | "onRankStart" | "onRankEnd">> & Readonly<{
            children?: React.ReactNode;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<Pick<Props & import("../../hoc/withSortedPageRows").Props, "head" | "isFixedSize" | "sortOrder" | "isRanking" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | "highlightedRowIndex" | "isRankingDisabled" | "onRankStart" | "onRankEnd">>, nextState: Readonly<{
            pageRows: RowType[];
        }>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Props & import("../../hoc/withSortedPageRows").Props, "head" | "isFixedSize" | "sortOrder" | "isRanking" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | "highlightedRowIndex" | "isRankingDisabled" | "onRankStart" | "onRankEnd">>, prevState: Readonly<{
            pageRows: RowType[];
        }>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Props & import("../../hoc/withSortedPageRows").Props, "head" | "isFixedSize" | "sortOrder" | "isRanking" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | "highlightedRowIndex" | "isRankingDisabled" | "onRankStart" | "onRankEnd">>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Props & import("../../hoc/withSortedPageRows").Props, "head" | "isFixedSize" | "sortOrder" | "isRanking" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | "highlightedRowIndex" | "isRankingDisabled" | "onRankStart" | "onRankEnd">>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Props & import("../../hoc/withSortedPageRows").Props, "head" | "isFixedSize" | "sortOrder" | "isRanking" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | "highlightedRowIndex" | "isRankingDisabled" | "onRankStart" | "onRankEnd">>, nextState: Readonly<{
            pageRows: RowType[];
        }>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Props & import("../../hoc/withSortedPageRows").Props, "head" | "isFixedSize" | "sortOrder" | "isRanking" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | "highlightedRowIndex" | "isRankingDisabled" | "onRankStart" | "onRankEnd">>, nextState: Readonly<{
            pageRows: RowType[];
        }>, nextContext: any): void;
    };
    new (props: Pick<Props & import("../../hoc/withSortedPageRows").Props, "head" | "isFixedSize" | "sortOrder" | "isRanking" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | "highlightedRowIndex" | "isRankingDisabled" | "onRankStart" | "onRankEnd">, context?: any): {
        state: {
            pageRows: never[];
        };
        componentDidMount(): void;
        componentDidUpdate(_prevProps: Pick<Props & import("../../hoc/withSortedPageRows").Props, "head" | "isFixedSize" | "sortOrder" | "isRanking" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | "highlightedRowIndex" | "isRankingDisabled" | "onRankStart" | "onRankEnd">, prevState: {
            pageRows: RowType[];
        }): void;
        render(): JSX.Element;
        context: any;
        setState<K extends "pageRows">(state: {
            pageRows: RowType[];
        } | ((prevState: Readonly<{
            pageRows: RowType[];
        }>, props: Readonly<Pick<Props & import("../../hoc/withSortedPageRows").Props, "head" | "isFixedSize" | "sortOrder" | "isRanking" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | "highlightedRowIndex" | "isRankingDisabled" | "onRankStart" | "onRankEnd">>) => {
            pageRows: RowType[];
        } | Pick<{
            pageRows: RowType[];
        }, K> | null) | Pick<{
            pageRows: RowType[];
        }, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Props & import("../../hoc/withSortedPageRows").Props, "head" | "isFixedSize" | "sortOrder" | "isRanking" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | "highlightedRowIndex" | "isRankingDisabled" | "onRankStart" | "onRankEnd">> & Readonly<{
            children?: React.ReactNode;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<Pick<Props & import("../../hoc/withSortedPageRows").Props, "head" | "isFixedSize" | "sortOrder" | "isRanking" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | "highlightedRowIndex" | "isRankingDisabled" | "onRankStart" | "onRankEnd">>, nextState: Readonly<{
            pageRows: RowType[];
        }>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Props & import("../../hoc/withSortedPageRows").Props, "head" | "isFixedSize" | "sortOrder" | "isRanking" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | "highlightedRowIndex" | "isRankingDisabled" | "onRankStart" | "onRankEnd">>, prevState: Readonly<{
            pageRows: RowType[];
        }>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Props & import("../../hoc/withSortedPageRows").Props, "head" | "isFixedSize" | "sortOrder" | "isRanking" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | "highlightedRowIndex" | "isRankingDisabled" | "onRankStart" | "onRankEnd">>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Props & import("../../hoc/withSortedPageRows").Props, "head" | "isFixedSize" | "sortOrder" | "isRanking" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | "highlightedRowIndex" | "isRankingDisabled" | "onRankStart" | "onRankEnd">>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Props & import("../../hoc/withSortedPageRows").Props, "head" | "isFixedSize" | "sortOrder" | "isRanking" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | "highlightedRowIndex" | "isRankingDisabled" | "onRankStart" | "onRankEnd">>, nextState: Readonly<{
            pageRows: RowType[];
        }>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Props & import("../../hoc/withSortedPageRows").Props, "head" | "isFixedSize" | "sortOrder" | "isRanking" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | "highlightedRowIndex" | "isRankingDisabled" | "onRankStart" | "onRankEnd">>, nextState: Readonly<{
            pageRows: RowType[];
        }>, nextContext: any): void;
    };
    getDerivedStateFromProps(props: Pick<Props & import("../../hoc/withSortedPageRows").Props, "head" | "isFixedSize" | "sortOrder" | "isRanking" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | "highlightedRowIndex" | "isRankingDisabled" | "onRankStart" | "onRankEnd">, state: {
        pageRows: RowType[];
    }): {
        pageRows: RowType[];
    };
    contextType?: React.Context<any> | undefined;
};
export default _default;
