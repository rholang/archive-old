import React from 'react';
export declare type MediaCardAnalyticsErrorBoundaryProps = {
    data?: {
        [k: string]: any;
    };
};
export declare const ANALYTICS_MEDIA_CHANNEL = "media";
export default class MediaCardAnalyticsErrorBoundary extends React.Component<MediaCardAnalyticsErrorBoundaryProps> {
    static displayName: string;
    render(): JSX.Element;
}
