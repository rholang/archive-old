import React, { ComponentType } from 'react';
export interface WithPseudoStateProps {
    href?: string;
    isActive?: boolean;
    isFocus?: boolean;
    isHover?: boolean;
    isInteractive?: boolean;
    onBlur?: (...args: any) => void;
    onClick?: (...args: any) => void;
    onFocus?: (...args: any) => void;
    onKeyDown?: (...args: any) => void;
    onKeyUp?: (...args: any) => void;
    onMouseDown?: (...args: any) => void;
    onMouseEnter?: (...args: any) => void;
    onMouseLeave?: (...args: any) => void;
    onMouseUp?: (...args: any) => void;
}
export interface State {
    isActive: boolean;
    isFocus: boolean;
    isHover: boolean;
    isInteractive: boolean;
}
export default function withPseudoState<Props extends WithPseudoStateProps>(WrappedComponent: ComponentType<Props>): {
    new (props: Readonly<Props>): {
        component: React.Ref<Props>;
        actionKeys: string[];
        UNSAFE_componentWillMount(): void;
        state: State;
        blur: () => void;
        focus: () => void;
        setComponent: (component: React.Ref<any>) => void;
        onBlur: (...args: any[]) => void;
        onFocus: (...args: any[]) => void;
        onMouseLeave: (...args: any[]) => void;
        onMouseEnter: (...args: any[]) => void;
        onMouseUp: (...args: any[]) => void;
        onMouseDown: (...args: any[]) => void;
        onKeyDown: (event: KeyboardEvent, ...rest: any[]) => void;
        onKeyUp: (event: KeyboardEvent, ...rest: any[]) => void;
        render(): JSX.Element;
        context: any;
        setState<K extends "isActive" | "isFocus" | "isHover" | "isInteractive">(state: State | ((prevState: Readonly<State>, props: Readonly<Props>) => State | Pick<State, K> | null) | Pick<State, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<Props> & Readonly<{
            children?: React.ReactNode;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Props>, prevState: Readonly<State>): any;
        componentDidUpdate?(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void;
        componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Props>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Props>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): void;
    };
    new (props: Props, context?: any): {
        component: React.Ref<Props>;
        actionKeys: string[];
        UNSAFE_componentWillMount(): void;
        state: State;
        blur: () => void;
        focus: () => void;
        setComponent: (component: React.Ref<any>) => void;
        onBlur: (...args: any[]) => void;
        onFocus: (...args: any[]) => void;
        onMouseLeave: (...args: any[]) => void;
        onMouseEnter: (...args: any[]) => void;
        onMouseUp: (...args: any[]) => void;
        onMouseDown: (...args: any[]) => void;
        onKeyDown: (event: KeyboardEvent, ...rest: any[]) => void;
        onKeyUp: (event: KeyboardEvent, ...rest: any[]) => void;
        render(): JSX.Element;
        context: any;
        setState<K extends "isActive" | "isFocus" | "isHover" | "isInteractive">(state: State | ((prevState: Readonly<State>, props: Readonly<Props>) => State | Pick<State, K> | null) | Pick<State, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<Props> & Readonly<{
            children?: React.ReactNode;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Props>, prevState: Readonly<State>): any;
        componentDidUpdate?(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void;
        componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Props>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Props>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): void;
    };
    displayName: string;
    contextType?: React.Context<any> | undefined;
};
