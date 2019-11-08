import React from 'react';
import { HeadType, RowType, SortOrderType } from '../types';
export interface Props {
    head?: HeadType;
    page?: number;
    rows?: Array<RowType>;
    rowsPerPage?: number;
    sortKey?: string;
    sortOrder?: SortOrderType;
    onPageRowsUpdate?: (pageRows: Array<RowType>) => void;
}
export interface WithSortedPageRowsProps {
    pageRows: Array<RowType>;
}
export default function withSortedPageRows<WrappedComponentProps extends WithSortedPageRowsProps & Props>(WrappedComponent: React.ComponentType<WrappedComponentProps>): {
    new (props: Readonly<Pick<WrappedComponentProps & Props, "head" | "sortOrder" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | Exclude<keyof WrappedComponentProps, "pageRows">>>): {
        state: {
            pageRows: never[];
        };
        componentDidMount(): void;
        componentDidUpdate(_prevProps: Pick<WrappedComponentProps & Props, "head" | "sortOrder" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | Exclude<keyof WrappedComponentProps, "pageRows">>, prevState: {
            pageRows: RowType[];
        }): void;
        render(): JSX.Element;
        context: any;
        setState<K extends "pageRows">(state: {
            pageRows: RowType[];
        } | ((prevState: Readonly<{
            pageRows: RowType[];
        }>, props: Readonly<Pick<WrappedComponentProps & Props, "head" | "sortOrder" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | Exclude<keyof WrappedComponentProps, "pageRows">>>) => {
            pageRows: RowType[];
        } | Pick<{
            pageRows: RowType[];
        }, K> | null) | Pick<{
            pageRows: RowType[];
        }, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<WrappedComponentProps & Props, "head" | "sortOrder" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | Exclude<keyof WrappedComponentProps, "pageRows">>> & Readonly<{
            children?: React.ReactNode;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<Pick<WrappedComponentProps & Props, "head" | "sortOrder" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | Exclude<keyof WrappedComponentProps, "pageRows">>>, nextState: Readonly<{
            pageRows: RowType[];
        }>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<WrappedComponentProps & Props, "head" | "sortOrder" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | Exclude<keyof WrappedComponentProps, "pageRows">>>, prevState: Readonly<{
            pageRows: RowType[];
        }>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<WrappedComponentProps & Props, "head" | "sortOrder" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | Exclude<keyof WrappedComponentProps, "pageRows">>>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<WrappedComponentProps & Props, "head" | "sortOrder" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | Exclude<keyof WrappedComponentProps, "pageRows">>>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<WrappedComponentProps & Props, "head" | "sortOrder" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | Exclude<keyof WrappedComponentProps, "pageRows">>>, nextState: Readonly<{
            pageRows: RowType[];
        }>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<WrappedComponentProps & Props, "head" | "sortOrder" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | Exclude<keyof WrappedComponentProps, "pageRows">>>, nextState: Readonly<{
            pageRows: RowType[];
        }>, nextContext: any): void;
    };
    new (props: Pick<WrappedComponentProps & Props, "head" | "sortOrder" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | Exclude<keyof WrappedComponentProps, "pageRows">>, context?: any): {
        state: {
            pageRows: never[];
        };
        componentDidMount(): void;
        componentDidUpdate(_prevProps: Pick<WrappedComponentProps & Props, "head" | "sortOrder" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | Exclude<keyof WrappedComponentProps, "pageRows">>, prevState: {
            pageRows: RowType[];
        }): void;
        render(): JSX.Element;
        context: any;
        setState<K extends "pageRows">(state: {
            pageRows: RowType[];
        } | ((prevState: Readonly<{
            pageRows: RowType[];
        }>, props: Readonly<Pick<WrappedComponentProps & Props, "head" | "sortOrder" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | Exclude<keyof WrappedComponentProps, "pageRows">>>) => {
            pageRows: RowType[];
        } | Pick<{
            pageRows: RowType[];
        }, K> | null) | Pick<{
            pageRows: RowType[];
        }, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<WrappedComponentProps & Props, "head" | "sortOrder" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | Exclude<keyof WrappedComponentProps, "pageRows">>> & Readonly<{
            children?: React.ReactNode;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<Pick<WrappedComponentProps & Props, "head" | "sortOrder" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | Exclude<keyof WrappedComponentProps, "pageRows">>>, nextState: Readonly<{
            pageRows: RowType[];
        }>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<WrappedComponentProps & Props, "head" | "sortOrder" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | Exclude<keyof WrappedComponentProps, "pageRows">>>, prevState: Readonly<{
            pageRows: RowType[];
        }>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<WrappedComponentProps & Props, "head" | "sortOrder" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | Exclude<keyof WrappedComponentProps, "pageRows">>>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<WrappedComponentProps & Props, "head" | "sortOrder" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | Exclude<keyof WrappedComponentProps, "pageRows">>>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<WrappedComponentProps & Props, "head" | "sortOrder" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | Exclude<keyof WrappedComponentProps, "pageRows">>>, nextState: Readonly<{
            pageRows: RowType[];
        }>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<WrappedComponentProps & Props, "head" | "sortOrder" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | Exclude<keyof WrappedComponentProps, "pageRows">>>, nextState: Readonly<{
            pageRows: RowType[];
        }>, nextContext: any): void;
    };
    getDerivedStateFromProps(props: Pick<WrappedComponentProps & Props, "head" | "sortOrder" | "sortKey" | "page" | "rows" | "rowsPerPage" | "onPageRowsUpdate" | Exclude<keyof WrappedComponentProps, "pageRows">>, state: {
        pageRows: RowType[];
    }): {
        pageRows: RowType[];
    };
    contextType?: React.Context<any> | undefined;
};
