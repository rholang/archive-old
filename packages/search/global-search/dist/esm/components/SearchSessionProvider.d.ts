import * as React from 'react';
interface State {
    searchSessionId: string | undefined;
}
export interface SearchSessionProps {
    searchSessionId: string;
}
/**
 * Wraps a component and provides the component with a searchSessionId.
 * The searchSessionId will either be retrieved from the closest SearchSessionProvider or a new one
 * will be generated with the wrapped component is mounted.
 */
export declare function injectSearchSession<T>(Component: React.ComponentType<T & SearchSessionProps>): {
    new (props: Readonly<Pick<T, Exclude<keyof T, "searchSessionId">>>): {
        searchSessionId: string | null;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<T, Exclude<keyof T, "searchSessionId">>>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<T, Exclude<keyof T, "searchSessionId">>> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<T, Exclude<keyof T, "searchSessionId">>>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<T, Exclude<keyof T, "searchSessionId">>>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<T, Exclude<keyof T, "searchSessionId">>>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<T, Exclude<keyof T, "searchSessionId">>>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<T, Exclude<keyof T, "searchSessionId">>>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<T, Exclude<keyof T, "searchSessionId">>>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<T, Exclude<keyof T, "searchSessionId">>>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: Pick<T, Exclude<keyof T, "searchSessionId">>, context?: any): {
        searchSessionId: string | null;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<T, Exclude<keyof T, "searchSessionId">>>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<T, Exclude<keyof T, "searchSessionId">>> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<T, Exclude<keyof T, "searchSessionId">>>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<T, Exclude<keyof T, "searchSessionId">>>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<T, Exclude<keyof T, "searchSessionId">>>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<T, Exclude<keyof T, "searchSessionId">>>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<T, Exclude<keyof T, "searchSessionId">>>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<T, Exclude<keyof T, "searchSessionId">>>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<T, Exclude<keyof T, "searchSessionId">>>, nextState: Readonly<{}>, nextContext: any): void;
    };
    contextType?: React.Context<any> | undefined;
};
/**
 * A search session context provider.
 * This provides all children wrapped with injectSearchSession with the same search session id.
 * Noted a new search session id is generated if and only if this component is mounted.
 */
export default class SearchSessionProvider extends React.Component<{}, State> {
    state: {
        searchSessionId: string;
    };
    render(): JSX.Element;
}
export {};
