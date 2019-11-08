import React from 'react';
export declare type MediaPickerAnalyticsErrorBoundaryProps = {
    data?: {
        [k: string]: any;
    };
};
export declare const ANALYTICS_MEDIA_CHANNEL = "media";
export default class MediaPickerAnalyticsErrorBoundary extends React.Component<MediaPickerAnalyticsErrorBoundaryProps> {
    static displayName: string;
    render(): JSX.Element;
}
