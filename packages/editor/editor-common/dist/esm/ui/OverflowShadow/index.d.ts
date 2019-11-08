import * as React from 'react';
export declare const shadowClassNames: {
    RIGHT_SHADOW: string;
    LEFT_SHADOW: string;
};
export interface OverflowShadowProps {
    handleRef: (ref: HTMLElement | null) => void;
    shadowClassNames: string;
}
export interface OverflowShadowState {
    showLeftShadow: boolean;
    showRightShadow: boolean;
}
export interface OverflowShadowOptions {
    overflowSelector: string;
    scrollableSelector?: string;
}
export default function overflowShadow<P>(Component: React.ComponentType<P & OverflowShadowProps> | React.StatelessComponent<P & OverflowShadowProps>, options: OverflowShadowOptions): {
    new (props: Readonly<P>): {
        overflowContainer?: HTMLElement | null | undefined;
        container?: HTMLElement | undefined;
        scrollable?: NodeList | undefined;
        diff?: number | undefined;
        state: {
            showLeftShadow: boolean;
            showRightShadow: boolean;
        };
        componentWillUnmount(): void;
        componentDidUpdate(): void;
        handleScroll: (event: Event) => void;
        updateRightShadow: () => void;
        handleUpdateRightShadow: any;
        handleScrollDebounced: any;
        calcOverflowDiff: () => number;
        calcScrollableWidth: () => number;
        handleContainer: (container: HTMLElement | null) => void;
        render(): JSX.Element;
        context: any;
        setState<K extends "showLeftShadow" | "showRightShadow">(state: OverflowShadowState | ((prevState: Readonly<OverflowShadowState>, props: Readonly<P>) => OverflowShadowState | Pick<OverflowShadowState, K> | null) | Pick<OverflowShadowState, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<P> & Readonly<{
            children?: React.ReactNode;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<P>, nextState: Readonly<OverflowShadowState>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<P>, prevState: Readonly<OverflowShadowState>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<P>, nextState: Readonly<OverflowShadowState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<P>, nextState: Readonly<OverflowShadowState>, nextContext: any): void;
    };
    new (props: P, context?: any): {
        overflowContainer?: HTMLElement | null | undefined;
        container?: HTMLElement | undefined;
        scrollable?: NodeList | undefined;
        diff?: number | undefined;
        state: {
            showLeftShadow: boolean;
            showRightShadow: boolean;
        };
        componentWillUnmount(): void;
        componentDidUpdate(): void;
        handleScroll: (event: Event) => void;
        updateRightShadow: () => void;
        handleUpdateRightShadow: any;
        handleScrollDebounced: any;
        calcOverflowDiff: () => number;
        calcScrollableWidth: () => number;
        handleContainer: (container: HTMLElement | null) => void;
        render(): JSX.Element;
        context: any;
        setState<K extends "showLeftShadow" | "showRightShadow">(state: OverflowShadowState | ((prevState: Readonly<OverflowShadowState>, props: Readonly<P>) => OverflowShadowState | Pick<OverflowShadowState, K> | null) | Pick<OverflowShadowState, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<P> & Readonly<{
            children?: React.ReactNode;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<P>, nextState: Readonly<OverflowShadowState>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<P>, prevState: Readonly<OverflowShadowState>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<P>, nextState: Readonly<OverflowShadowState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<P>, nextState: Readonly<OverflowShadowState>, nextContext: any): void;
    };
    contextType?: React.Context<any> | undefined;
};
