import React from 'react';
export declare type MediaViewerAnalyticsErrorBoundaryProps = {
    data?: {
        [k: string]: any;
    };
};
export declare const ANALYTICS_MEDIA_CHANNEL = "media";
export default class MediaViewerAnalyticsErrorBoundary extends React.Component<MediaViewerAnalyticsErrorBoundaryProps> {
    static displayName: string;
    render(): JSX.Element;
}
