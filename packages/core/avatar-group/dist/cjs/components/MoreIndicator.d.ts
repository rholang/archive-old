import React, { MouseEvent } from 'react';
import { SizeType, AppearanceType } from '@atlaskit/avatar';
export interface MoreIndicatorProps {
    /** Used to override the default border color of the presence indicator.
     Accepts any color argument that the border-color CSS property accepts. */
    borderColor?: string;
    /** The total number excess of avatars */
    count?: number;
    /** When true, provides a gutter for the adjacent avatar */
    isStack?: boolean;
    /** Handle user interaction */
    onClick?: (event: MouseEvent) => unknown;
    /** Defines the size of the indicator */
    size?: SizeType;
    /** TODO */
    appearance?: AppearanceType;
    isActive?: boolean;
    isFocus?: boolean;
    isHover?: boolean;
}
declare const _default: {
    new (props: Readonly<MoreIndicatorProps>): {
        component: React.Ref<MoreIndicatorProps>;
        actionKeys: string[];
        UNSAFE_componentWillMount(): void;
        state: import("@atlaskit/avatar/dist/cjs/hoc/withPseudoState").State;
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
        setState<K extends "isActive" | "isHover" | "isFocus" | "isInteractive">(state: import("@atlaskit/avatar/dist/cjs/hoc/withPseudoState").State | ((prevState: Readonly<import("@atlaskit/avatar/dist/cjs/hoc/withPseudoState").State>, props: Readonly<MoreIndicatorProps>) => import("@atlaskit/avatar/dist/cjs/hoc/withPseudoState").State | Pick<import("@atlaskit/avatar/dist/cjs/hoc/withPseudoState").State, K> | null) | Pick<import("@atlaskit/avatar/dist/cjs/hoc/withPseudoState").State, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<MoreIndicatorProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<MoreIndicatorProps>, nextState: Readonly<import("@atlaskit/avatar/dist/cjs/hoc/withPseudoState").State>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<MoreIndicatorProps>, prevState: Readonly<import("@atlaskit/avatar/dist/cjs/hoc/withPseudoState").State>): any;
        componentDidUpdate?(prevProps: Readonly<MoreIndicatorProps>, prevState: Readonly<import("@atlaskit/avatar/dist/cjs/hoc/withPseudoState").State>, snapshot?: any): void;
        componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<MoreIndicatorProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<MoreIndicatorProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<MoreIndicatorProps>, nextState: Readonly<import("@atlaskit/avatar/dist/cjs/hoc/withPseudoState").State>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<MoreIndicatorProps>, nextState: Readonly<import("@atlaskit/avatar/dist/cjs/hoc/withPseudoState").State>, nextContext: any): void;
    };
    new (props: MoreIndicatorProps, context?: any): {
        component: React.Ref<MoreIndicatorProps>;
        actionKeys: string[];
        UNSAFE_componentWillMount(): void;
        state: import("@atlaskit/avatar/dist/cjs/hoc/withPseudoState").State;
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
        setState<K_1 extends "isActive" | "isHover" | "isFocus" | "isInteractive">(state: import("@atlaskit/avatar/dist/cjs/hoc/withPseudoState").State | ((prevState: Readonly<import("@atlaskit/avatar/dist/cjs/hoc/withPseudoState").State>, props: Readonly<MoreIndicatorProps>) => import("@atlaskit/avatar/dist/cjs/hoc/withPseudoState").State | Pick<import("@atlaskit/avatar/dist/cjs/hoc/withPseudoState").State, K_1> | null) | Pick<import("@atlaskit/avatar/dist/cjs/hoc/withPseudoState").State, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<MoreIndicatorProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<MoreIndicatorProps>, nextState: Readonly<import("@atlaskit/avatar/dist/cjs/hoc/withPseudoState").State>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<MoreIndicatorProps>, prevState: Readonly<import("@atlaskit/avatar/dist/cjs/hoc/withPseudoState").State>): any;
        componentDidUpdate?(prevProps: Readonly<MoreIndicatorProps>, prevState: Readonly<import("@atlaskit/avatar/dist/cjs/hoc/withPseudoState").State>, snapshot?: any): void;
        componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<MoreIndicatorProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<MoreIndicatorProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<MoreIndicatorProps>, nextState: Readonly<import("@atlaskit/avatar/dist/cjs/hoc/withPseudoState").State>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<MoreIndicatorProps>, nextState: Readonly<import("@atlaskit/avatar/dist/cjs/hoc/withPseudoState").State>, nextContext: any): void;
    };
    displayName: string;
    contextType?: React.Context<any> | undefined;
};
export default _default;
