import React from 'react';
import { AvatarClickType } from '@atlaskit/avatar';
interface Props {
    avatar: Record<string, any>;
    isActive?: boolean;
    isHover?: boolean;
    index?: number;
    onAvatarClick?: AvatarClickType;
}
declare const _default: {
    new (props: Readonly<Props>): {
        component: React.Ref<Props>;
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
        setState<K extends "isActive" | "isHover" | "isFocus" | "isInteractive">(state: import("@atlaskit/avatar/dist/cjs/hoc/withPseudoState").State | ((prevState: Readonly<import("@atlaskit/avatar/dist/cjs/hoc/withPseudoState").State>, props: Readonly<Props>) => import("@atlaskit/avatar/dist/cjs/hoc/withPseudoState").State | Pick<import("@atlaskit/avatar/dist/cjs/hoc/withPseudoState").State, K> | null) | Pick<import("@atlaskit/avatar/dist/cjs/hoc/withPseudoState").State, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<Props> & Readonly<{
            children?: React.ReactNode;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Props>, nextState: Readonly<import("@atlaskit/avatar/dist/cjs/hoc/withPseudoState").State>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Props>, prevState: Readonly<import("@atlaskit/avatar/dist/cjs/hoc/withPseudoState").State>): any;
        componentDidUpdate?(prevProps: Readonly<Props>, prevState: Readonly<import("@atlaskit/avatar/dist/cjs/hoc/withPseudoState").State>, snapshot?: any): void;
        componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Props>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Props>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Props>, nextState: Readonly<import("@atlaskit/avatar/dist/cjs/hoc/withPseudoState").State>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Props>, nextState: Readonly<import("@atlaskit/avatar/dist/cjs/hoc/withPseudoState").State>, nextContext: any): void;
    };
    new (props: Props, context?: any): {
        component: React.Ref<Props>;
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
        setState<K_1 extends "isActive" | "isHover" | "isFocus" | "isInteractive">(state: import("@atlaskit/avatar/dist/cjs/hoc/withPseudoState").State | ((prevState: Readonly<import("@atlaskit/avatar/dist/cjs/hoc/withPseudoState").State>, props: Readonly<Props>) => import("@atlaskit/avatar/dist/cjs/hoc/withPseudoState").State | Pick<import("@atlaskit/avatar/dist/cjs/hoc/withPseudoState").State, K_1> | null) | Pick<import("@atlaskit/avatar/dist/cjs/hoc/withPseudoState").State, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<Props> & Readonly<{
            children?: React.ReactNode;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Props>, nextState: Readonly<import("@atlaskit/avatar/dist/cjs/hoc/withPseudoState").State>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Props>, prevState: Readonly<import("@atlaskit/avatar/dist/cjs/hoc/withPseudoState").State>): any;
        componentDidUpdate?(prevProps: Readonly<Props>, prevState: Readonly<import("@atlaskit/avatar/dist/cjs/hoc/withPseudoState").State>, snapshot?: any): void;
        componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Props>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Props>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Props>, nextState: Readonly<import("@atlaskit/avatar/dist/cjs/hoc/withPseudoState").State>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Props>, nextState: Readonly<import("@atlaskit/avatar/dist/cjs/hoc/withPseudoState").State>, nextContext: any): void;
    };
    displayName: string;
    contextType?: React.Context<any> | undefined;
};
export default _default;
