import { ThemeProp } from '@atlaskit/theme/components';
import React, { ComponentType, ReactNode } from 'react';
import { ThemeItemTokens } from '../theme/item';
import { AvatarClickType } from '../types';
interface Props {
    avatar: ReactNode;
    /** Change background color */
    backgroundColor?: string;
    /** A custom component to use instead of the default span. */
    component?: ComponentType<any>;
    /** Provides a url for avatars being used as a link. */
    href?: string;
    /** Change the style to indicate the item is active. */
    isActive?: boolean;
    /** Change the style to indicate the item is disabled. */
    isDisabled?: boolean;
    /** Change the style to indicate the item is focused. */
    isFocus?: boolean;
    /** Change the style to indicate the item is hovered. */
    isHover?: boolean;
    /** Change the style to indicate the item is selected. */
    isSelected?: boolean;
    /** Handler to be called on click. */
    onClick?: AvatarClickType;
    /** PrimaryText text */
    primaryText?: ReactNode;
    /** SecondaryText text */
    secondaryText?: ReactNode;
    /** Pass target down to the anchor, if href is provided. */
    target?: '_blank' | '_self' | '_top' | '_parent';
    /** The item's theme. */
    theme?: ThemeProp<ThemeItemTokens, {}>;
    /** Whether or not overflowing primary and secondary text is truncated */
    enableTextTruncate?: boolean;
}
declare const _default: {
    new (props: Readonly<Props>): {
        component: React.Ref<Props>;
        actionKeys: string[];
        UNSAFE_componentWillMount(): void;
        state: import("../hoc/withPseudoState").State;
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
        setState<K extends "isActive" | "isFocus" | "isHover" | "isInteractive">(state: import("../hoc/withPseudoState").State | ((prevState: Readonly<import("../hoc/withPseudoState").State>, props: Readonly<Props>) => import("../hoc/withPseudoState").State | Pick<import("../hoc/withPseudoState").State, K> | null) | Pick<import("../hoc/withPseudoState").State, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<Props> & Readonly<{
            children?: React.ReactNode;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Props>, nextState: Readonly<import("../hoc/withPseudoState").State>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Props>, prevState: Readonly<import("../hoc/withPseudoState").State>): any;
        componentDidUpdate?(prevProps: Readonly<Props>, prevState: Readonly<import("../hoc/withPseudoState").State>, snapshot?: any): void;
        componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Props>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Props>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Props>, nextState: Readonly<import("../hoc/withPseudoState").State>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Props>, nextState: Readonly<import("../hoc/withPseudoState").State>, nextContext: any): void;
    };
    new (props: Props, context?: any): {
        component: React.Ref<Props>;
        actionKeys: string[];
        UNSAFE_componentWillMount(): void;
        state: import("../hoc/withPseudoState").State;
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
        setState<K extends "isActive" | "isFocus" | "isHover" | "isInteractive">(state: import("../hoc/withPseudoState").State | ((prevState: Readonly<import("../hoc/withPseudoState").State>, props: Readonly<Props>) => import("../hoc/withPseudoState").State | Pick<import("../hoc/withPseudoState").State, K> | null) | Pick<import("../hoc/withPseudoState").State, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<Props> & Readonly<{
            children?: React.ReactNode;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Props>, nextState: Readonly<import("../hoc/withPseudoState").State>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Props>, prevState: Readonly<import("../hoc/withPseudoState").State>): any;
        componentDidUpdate?(prevProps: Readonly<Props>, prevState: Readonly<import("../hoc/withPseudoState").State>, snapshot?: any): void;
        componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Props>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Props>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Props>, nextState: Readonly<import("../hoc/withPseudoState").State>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Props>, nextState: Readonly<import("../hoc/withPseudoState").State>, nextContext: any): void;
    };
    displayName: string;
    contextType?: React.Context<any> | undefined;
};
export default _default;
