import React from 'react';
import { AvatarPropTypes } from '../types';
export declare const AvatarWithoutAnalytics: {
    new (props: Readonly<AvatarPropTypes>): {
        component?: ((instance: any) => void) | React.RefObject<any> | null | undefined;
        blur: () => void;
        focus: () => void;
        setComponent: (component?: ((instance: any) => void) | React.RefObject<any> | null | undefined) => void;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<AvatarPropTypes>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<AvatarPropTypes> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<AvatarPropTypes>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<AvatarPropTypes>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<AvatarPropTypes>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<AvatarPropTypes>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<AvatarPropTypes>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<AvatarPropTypes>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<AvatarPropTypes>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: AvatarPropTypes, context?: any): {
        component?: ((instance: any) => void) | React.RefObject<any> | null | undefined;
        blur: () => void;
        focus: () => void;
        setComponent: (component?: ((instance: any) => void) | React.RefObject<any> | null | undefined) => void;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<AvatarPropTypes>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<AvatarPropTypes> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<AvatarPropTypes>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<AvatarPropTypes>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<AvatarPropTypes>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<AvatarPropTypes>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<AvatarPropTypes>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<AvatarPropTypes>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<AvatarPropTypes>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string | void | null;
    DecoratedComponent: React.ComponentType<AvatarPropTypes>;
    contextType?: React.Context<any> | undefined;
};
declare const _default: React.ForwardRefExoticComponent<Pick<Pick<AvatarPropTypes, "onBlur" | "onClick" | "onFocus" | "onKeyDown" | "onKeyUp" | "onMouseDown" | "onMouseEnter" | "onMouseLeave" | "onMouseUp" | "isActive" | "isFocus" | "isHover" | "isInteractive" | "label" | "href" | "size" | "className" | "tabIndex" | "theme" | "name" | "target" | "borderColor" | "presence" | "appearance" | "src" | "status" | "isDisabled" | "component" | "groupAppearance" | "enableTooltip" | "isSelected" | "stackIndex" | "testId"> & React.RefAttributes<any> & import("@atlaskit/analytics-next/dist/cjs/withAnalyticsContext").WithContextProps, "onBlur" | "onClick" | "onFocus" | "onKeyDown" | "onKeyUp" | "onMouseDown" | "onMouseEnter" | "onMouseLeave" | "onMouseUp" | "isActive" | "isFocus" | "isHover" | "isInteractive" | "label" | "href" | "size" | "key" | "className" | "tabIndex" | "theme" | "name" | "target" | "borderColor" | "presence" | "appearance" | "src" | "status" | "isDisabled" | "component" | "groupAppearance" | "enableTooltip" | "isSelected" | "stackIndex" | "testId" | "analyticsContext"> & React.RefAttributes<any>>;
export default _default;
