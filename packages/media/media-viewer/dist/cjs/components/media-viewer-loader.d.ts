import * as React from 'react';
import { WithMediaClientConfigProps } from '@atlaskit/media-client';
import { MediaViewerProps } from './types';
import { MediaViewerAnalyticsErrorBoundaryProps } from './media-viewer-analytics-error-boundary';
export declare type MediaViewerWithMediaClientConfigProps = WithMediaClientConfigProps<MediaViewerProps>;
declare type MediaViewerWithMediaClientConfigComponent = React.ComponentType<MediaViewerWithMediaClientConfigProps>;
declare type MediaViewerErrorBoundaryComponent = React.ComponentType<MediaViewerAnalyticsErrorBoundaryProps>;
export interface AsyncMediaViewerState {
    MediaViewer?: MediaViewerWithMediaClientConfigComponent;
    MediaViewerErrorBoundary?: MediaViewerErrorBoundaryComponent;
}
export default class AsyncMediaViewer extends React.PureComponent<MediaViewerWithMediaClientConfigProps & AsyncMediaViewerState, AsyncMediaViewerState> {
    static displayName: string;
    static MediaViewer?: MediaViewerWithMediaClientConfigComponent;
    static MediaViewerErrorBoundary?: MediaViewerErrorBoundaryComponent;
    state: AsyncMediaViewerState;
    UNSAFE_componentWillMount(): Promise<void>;
    render(): JSX.Element;
}
export {};
