import React from 'react';
import { WithSortedPageRowsProps } from '../hoc/withSortedPageRows';
import { HeadType } from '../types';
interface Props extends WithSortedPageRowsProps {
    head?: HeadType;
    highlightedRowIndex?: number;
    isFixedSize: boolean;
}
declare const _default: {
    new (props: Readonly<Pick<Props & import("../hoc/withSortedPageRows").Props, "head" | "isFixedSize" | "sortOrder" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | "highlightedRowIndex">>): {
        state: {
            pageRows: never[];
        };
        componentDidMount(): void;
        componentDidUpdate(_prevProps: Pick<Props & import("../hoc/withSortedPageRows").Props, "head" | "isFixedSize" | "sortOrder" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | "highlightedRowIndex">, prevState: {
            pageRows: import("../types").RowType[];
        }): void;
        render(): JSX.Element;
        context: any;
        setState<K extends "pageRows">(state: {
            pageRows: import("../types").RowType[];
        } | ((prevState: Readonly<{
            pageRows: import("../types").RowType[];
        }>, props: Readonly<Pick<Props & import("../hoc/withSortedPageRows").Props, "head" | "isFixedSize" | "sortOrder" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | "highlightedRowIndex">>) => {
            pageRows: import("../types").RowType[];
        } | Pick<{
            pageRows: import("../types").RowType[];
        }, K> | null) | Pick<{
            pageRows: import("../types").RowType[];
        }, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Props & import("../hoc/withSortedPageRows").Props, "head" | "isFixedSize" | "sortOrder" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | "highlightedRowIndex">> & Readonly<{
            children?: React.ReactNode;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<Pick<Props & import("../hoc/withSortedPageRows").Props, "head" | "isFixedSize" | "sortOrder" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | "highlightedRowIndex">>, nextState: Readonly<{
            pageRows: import("../types").RowType[];
        }>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Props & import("../hoc/withSortedPageRows").Props, "head" | "isFixedSize" | "sortOrder" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | "highlightedRowIndex">>, prevState: Readonly<{
            pageRows: import("../types").RowType[];
        }>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Props & import("../hoc/withSortedPageRows").Props, "head" | "isFixedSize" | "sortOrder" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | "highlightedRowIndex">>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Props & import("../hoc/withSortedPageRows").Props, "head" | "isFixedSize" | "sortOrder" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | "highlightedRowIndex">>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Props & import("../hoc/withSortedPageRows").Props, "head" | "isFixedSize" | "sortOrder" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | "highlightedRowIndex">>, nextState: Readonly<{
            pageRows: import("../types").RowType[];
        }>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Props & import("../hoc/withSortedPageRows").Props, "head" | "isFixedSize" | "sortOrder" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | "highlightedRowIndex">>, nextState: Readonly<{
            pageRows: import("../types").RowType[];
        }>, nextContext: any): void;
    };
    new (props: Pick<Props & import("../hoc/withSortedPageRows").Props, "head" | "isFixedSize" | "sortOrder" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | "highlightedRowIndex">, context?: any): {
        state: {
            pageRows: never[];
        };
        componentDidMount(): void;
        componentDidUpdate(_prevProps: Pick<Props & import("../hoc/withSortedPageRows").Props, "head" | "isFixedSize" | "sortOrder" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | "highlightedRowIndex">, prevState: {
            pageRows: import("../types").RowType[];
        }): void;
        render(): JSX.Element;
        context: any;
        setState<K extends "pageRows">(state: {
            pageRows: import("../types").RowType[];
        } | ((prevState: Readonly<{
            pageRows: import("../types").RowType[];
        }>, props: Readonly<Pick<Props & import("../hoc/withSortedPageRows").Props, "head" | "isFixedSize" | "sortOrder" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | "highlightedRowIndex">>) => {
            pageRows: import("../types").RowType[];
        } | Pick<{
            pageRows: import("../types").RowType[];
        }, K> | null) | Pick<{
            pageRows: import("../types").RowType[];
        }, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Props & import("../hoc/withSortedPageRows").Props, "head" | "isFixedSize" | "sortOrder" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | "highlightedRowIndex">> & Readonly<{
            children?: React.ReactNode;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<Pick<Props & import("../hoc/withSortedPageRows").Props, "head" | "isFixedSize" | "sortOrder" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | "highlightedRowIndex">>, nextState: Readonly<{
            pageRows: import("../types").RowType[];
        }>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Props & import("../hoc/withSortedPageRows").Props, "head" | "isFixedSize" | "sortOrder" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | "highlightedRowIndex">>, prevState: Readonly<{
            pageRows: import("../types").RowType[];
        }>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Props & import("../hoc/withSortedPageRows").Props, "head" | "isFixedSize" | "sortOrder" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | "highlightedRowIndex">>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Props & import("../hoc/withSortedPageRows").Props, "head" | "isFixedSize" | "sortOrder" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | "highlightedRowIndex">>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Props & import("../hoc/withSortedPageRows").Props, "head" | "isFixedSize" | "sortOrder" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | "highlightedRowIndex">>, nextState: Readonly<{
            pageRows: import("../types").RowType[];
        }>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Props & import("../hoc/withSortedPageRows").Props, "head" | "isFixedSize" | "sortOrder" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | "highlightedRowIndex">>, nextState: Readonly<{
            pageRows: import("../types").RowType[];
        }>, nextContext: any): void;
    };
    getDerivedStateFromProps(props: Pick<Props & import("../hoc/withSortedPageRows").Props, "head" | "isFixedSize" | "sortOrder" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | "highlightedRowIndex">, state: {
        pageRows: import("../types").RowType[];
    }): {
        pageRows: import("../types").RowType[];
    };
    contextType?: React.Context<any> | undefined;
};
export default _default;
