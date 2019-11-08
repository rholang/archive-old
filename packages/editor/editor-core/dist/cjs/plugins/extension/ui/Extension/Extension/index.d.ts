import * as React from 'react';
import { Node as PmNode } from 'prosemirror-model';
import { EditorView } from 'prosemirror-view';
import { MacroProvider } from '../../../../macro';
export interface Props {
    node: PmNode;
    macroProvider?: MacroProvider;
    handleContentDOMRef: (node: HTMLElement | null) => void;
    onSelectExtension: (hasBody: boolean) => void;
    children?: React.ReactNode;
    view: EditorView;
}
declare const _default: {
    new (props: Readonly<Props>): {
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
        setState<K extends "showLeftShadow" | "showRightShadow">(state: import("@atlaskit/editor-common/dist/cjs/ui/OverflowShadow").OverflowShadowState | ((prevState: Readonly<import("@atlaskit/editor-common/dist/cjs/ui/OverflowShadow").OverflowShadowState>, props: Readonly<Props>) => import("@atlaskit/editor-common/dist/cjs/ui/OverflowShadow").OverflowShadowState | Pick<import("@atlaskit/editor-common/dist/cjs/ui/OverflowShadow").OverflowShadowState, K> | null) | Pick<import("@atlaskit/editor-common/dist/cjs/ui/OverflowShadow").OverflowShadowState, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<Props> & Readonly<{
            children?: React.ReactNode;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Props>, nextState: Readonly<import("@atlaskit/editor-common/dist/cjs/ui/OverflowShadow").OverflowShadowState>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Props>, prevState: Readonly<import("@atlaskit/editor-common/dist/cjs/ui/OverflowShadow").OverflowShadowState>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Props>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Props>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Props>, nextState: Readonly<import("@atlaskit/editor-common/dist/cjs/ui/OverflowShadow").OverflowShadowState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Props>, nextState: Readonly<import("@atlaskit/editor-common/dist/cjs/ui/OverflowShadow").OverflowShadowState>, nextContext: any): void;
    };
    new (props: Props, context?: any): {
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
        setState<K_1 extends "showLeftShadow" | "showRightShadow">(state: import("@atlaskit/editor-common/dist/cjs/ui/OverflowShadow").OverflowShadowState | ((prevState: Readonly<import("@atlaskit/editor-common/dist/cjs/ui/OverflowShadow").OverflowShadowState>, props: Readonly<Props>) => import("@atlaskit/editor-common/dist/cjs/ui/OverflowShadow").OverflowShadowState | Pick<import("@atlaskit/editor-common/dist/cjs/ui/OverflowShadow").OverflowShadowState, K_1> | null) | Pick<import("@atlaskit/editor-common/dist/cjs/ui/OverflowShadow").OverflowShadowState, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<Props> & Readonly<{
            children?: React.ReactNode;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Props>, nextState: Readonly<import("@atlaskit/editor-common/dist/cjs/ui/OverflowShadow").OverflowShadowState>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Props>, prevState: Readonly<import("@atlaskit/editor-common/dist/cjs/ui/OverflowShadow").OverflowShadowState>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Props>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Props>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Props>, nextState: Readonly<import("@atlaskit/editor-common/dist/cjs/ui/OverflowShadow").OverflowShadowState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Props>, nextState: Readonly<import("@atlaskit/editor-common/dist/cjs/ui/OverflowShadow").OverflowShadowState>, nextContext: any): void;
    };
    contextType?: React.Context<any> | undefined;
};
export default _default;
