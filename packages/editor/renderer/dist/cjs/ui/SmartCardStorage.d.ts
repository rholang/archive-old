import * as React from 'react';
export interface WithSmartCardStorageProps {
    smartCardStorage: Map<string, string>;
}
export declare const Context: React.Context<Map<string, string>>;
export declare const Provider: React.FunctionComponent;
export declare const withSmartCardStorage: <Props extends WithSmartCardStorageProps>(WrappedComponent: React.ComponentType<Props>) => {
    new (props: Readonly<Pick<Props, Exclude<keyof Props, "smartCardStorage">>>): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Props, Exclude<keyof Props, "smartCardStorage">>>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Props, Exclude<keyof Props, "smartCardStorage">>> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Props, Exclude<keyof Props, "smartCardStorage">>>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Props, Exclude<keyof Props, "smartCardStorage">>>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Props, Exclude<keyof Props, "smartCardStorage">>>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Props, Exclude<keyof Props, "smartCardStorage">>>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Props, Exclude<keyof Props, "smartCardStorage">>>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Props, Exclude<keyof Props, "smartCardStorage">>>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Props, Exclude<keyof Props, "smartCardStorage">>>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: Pick<Props, Exclude<keyof Props, "smartCardStorage">>, context?: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Props, Exclude<keyof Props, "smartCardStorage">>>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Props, Exclude<keyof Props, "smartCardStorage">>> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Props, Exclude<keyof Props, "smartCardStorage">>>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Props, Exclude<keyof Props, "smartCardStorage">>>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Props, Exclude<keyof Props, "smartCardStorage">>>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Props, Exclude<keyof Props, "smartCardStorage">>>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Props, Exclude<keyof Props, "smartCardStorage">>>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Props, Exclude<keyof Props, "smartCardStorage">>>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Props, Exclude<keyof Props, "smartCardStorage">>>, nextState: Readonly<{}>, nextContext: any): void;
    };
    contextType?: React.Context<any> | undefined;
};
