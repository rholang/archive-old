import * as React from 'react';
import * as PropTypes from 'prop-types';
export declare type ContextAdapter = Record<string, React.Context<any>>;
export declare const createContextAdapter: (createContextAdapter: Record<string, React.Context<any>>) => {
    new (props: Readonly<{}>): {
        contextState: Record<string, any>;
        getChildContext(): {
            contextAdapter: Record<string, React.Context<any> & {
                value: any;
            }>;
        };
        zipProvidersWithValues(): Record<string, React.Context<any> & {
            value: any;
        }>;
        render(): JSX.Element;
        context: any;
        setState<K extends "hasRendered">(state: {
            hasRendered: {};
        } | ((prevState: Readonly<{
            hasRendered: {};
        }>, props: Readonly<{}>) => {
            hasRendered: {};
        } | Pick<{
            hasRendered: {};
        }, K> | null) | Pick<{
            hasRendered: {};
        }, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<{}> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{
            hasRendered: {};
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{
            hasRendered: {};
        }>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<{}>, prevState: Readonly<{
            hasRendered: {};
        }>): any;
        componentDidUpdate?(prevProps: Readonly<{}>, prevState: Readonly<{
            hasRendered: {};
        }>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<{}>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{
            hasRendered: {};
        }>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{
            hasRendered: {};
        }>, nextContext: any): void;
    };
    new (props: {}, context?: any): {
        contextState: Record<string, any>;
        getChildContext(): {
            contextAdapter: Record<string, React.Context<any> & {
                value: any;
            }>;
        };
        zipProvidersWithValues(): Record<string, React.Context<any> & {
            value: any;
        }>;
        render(): JSX.Element;
        context: any;
        setState<K extends "hasRendered">(state: {
            hasRendered: {};
        } | ((prevState: Readonly<{
            hasRendered: {};
        }>, props: Readonly<{}>) => {
            hasRendered: {};
        } | Pick<{
            hasRendered: {};
        }, K> | null) | Pick<{
            hasRendered: {};
        }, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<{}> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{
            hasRendered: {};
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{
            hasRendered: {};
        }>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<{}>, prevState: Readonly<{
            hasRendered: {};
        }>): any;
        componentDidUpdate?(prevProps: Readonly<{}>, prevState: Readonly<{
            hasRendered: {};
        }>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<{}>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{
            hasRendered: {};
        }>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{
            hasRendered: {};
        }>, nextContext: any): void;
    };
    childContextTypes: {
        contextAdapter: PropTypes.Requireable<any>;
    };
    contextType?: React.Context<any> | undefined;
};
