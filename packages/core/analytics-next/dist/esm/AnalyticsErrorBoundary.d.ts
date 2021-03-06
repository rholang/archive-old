import React, { ReactNode, Component } from 'react';
import { WithAnalyticsEventsProps } from './withAnalyticsEvents';
declare type AnalyticsErrorBoundaryErrorInfo = {
    componentStack: string;
};
export interface AnalyticsErrorBoundaryProps extends WithAnalyticsEventsProps {
    /** React component to be wrapped */
    children: ReactNode;
    channel: string;
    data: {};
}
declare type AnalyticsErrorBoundaryPayload = {
    error: Error | string;
    info?: AnalyticsErrorBoundaryErrorInfo;
    [key: string]: any;
};
export declare class BaseAnalyticsErrorBoundary extends Component<AnalyticsErrorBoundaryProps, {}> {
    fireAnalytics: (analyticsErrorPayload: AnalyticsErrorBoundaryPayload) => void;
    componentDidCatch(error: Error, info?: AnalyticsErrorBoundaryErrorInfo): void;
    render(): JSX.Element;
}
declare const AnalyticsErrorBoundary: React.ForwardRefExoticComponent<Pick<AnalyticsErrorBoundaryProps, "children" | "channel" | "data"> & React.RefAttributes<any>>;
export default AnalyticsErrorBoundary;
