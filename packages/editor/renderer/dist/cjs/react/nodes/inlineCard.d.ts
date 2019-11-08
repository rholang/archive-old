import * as React from 'react';
import { EventHandlers } from '@atlaskit/editor-common';
import { WithSmartCardStorageProps } from '../../ui/SmartCardStorage';
interface InlineCardProps {
    url?: string;
    data?: object;
    eventHandlers?: EventHandlers;
    portal?: HTMLElement;
}
declare const _default: {
    new (props: Readonly<Pick<InlineCardProps & WithSmartCardStorageProps, "data" | "eventHandlers" | "url" | "portal">>): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<InlineCardProps & WithSmartCardStorageProps, "data" | "eventHandlers" | "url" | "portal">>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<InlineCardProps & WithSmartCardStorageProps, "data" | "eventHandlers" | "url" | "portal">> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<InlineCardProps & WithSmartCardStorageProps, "data" | "eventHandlers" | "url" | "portal">>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<InlineCardProps & WithSmartCardStorageProps, "data" | "eventHandlers" | "url" | "portal">>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<InlineCardProps & WithSmartCardStorageProps, "data" | "eventHandlers" | "url" | "portal">>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<InlineCardProps & WithSmartCardStorageProps, "data" | "eventHandlers" | "url" | "portal">>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<InlineCardProps & WithSmartCardStorageProps, "data" | "eventHandlers" | "url" | "portal">>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<InlineCardProps & WithSmartCardStorageProps, "data" | "eventHandlers" | "url" | "portal">>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<InlineCardProps & WithSmartCardStorageProps, "data" | "eventHandlers" | "url" | "portal">>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: Pick<InlineCardProps & WithSmartCardStorageProps, "data" | "eventHandlers" | "url" | "portal">, context?: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<InlineCardProps & WithSmartCardStorageProps, "data" | "eventHandlers" | "url" | "portal">>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<InlineCardProps & WithSmartCardStorageProps, "data" | "eventHandlers" | "url" | "portal">> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<InlineCardProps & WithSmartCardStorageProps, "data" | "eventHandlers" | "url" | "portal">>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<InlineCardProps & WithSmartCardStorageProps, "data" | "eventHandlers" | "url" | "portal">>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<InlineCardProps & WithSmartCardStorageProps, "data" | "eventHandlers" | "url" | "portal">>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<InlineCardProps & WithSmartCardStorageProps, "data" | "eventHandlers" | "url" | "portal">>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<InlineCardProps & WithSmartCardStorageProps, "data" | "eventHandlers" | "url" | "portal">>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<InlineCardProps & WithSmartCardStorageProps, "data" | "eventHandlers" | "url" | "portal">>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<InlineCardProps & WithSmartCardStorageProps, "data" | "eventHandlers" | "url" | "portal">>, nextState: Readonly<{}>, nextContext: any): void;
    };
    contextType?: React.Context<any> | undefined;
};
export default _default;
