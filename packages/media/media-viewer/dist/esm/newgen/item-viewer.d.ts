import * as React from 'react';
import { MediaClient, FileState, Identifier } from '@atlaskit/media-client';
import { WithShowControlMethodProp } from '@atlaskit/media-ui';
import { Outcome } from './domain';
import { MediaViewerError } from './error';
import { WithAnalyticsEventsProps } from '@atlaskit/analytics-next';
export declare type Props = Readonly<{
    identifier: Identifier;
    mediaClient: MediaClient;
    onClose?: () => void;
    previewCount: number;
}> & WithAnalyticsEventsProps & WithShowControlMethodProp;
export declare type State = {
    item: Outcome<FileState, MediaViewerError>;
};
export declare class ItemViewerBase extends React.Component<Props, State> {
    state: State;
    private subscription?;
    UNSAFE_componentWillReceiveProps(nextProps: Props): void;
    componentDidUpdate(oldProps: Props): void;
    componentWillUnmount(): void;
    componentDidMount(): void;
    private onViewerLoaded;
    private onCanPlay;
    private onError;
    private renderFileState;
    private renderError;
    render(): JSX.Element;
    private renderDownloadButton;
    private init;
    private fireAnalytics;
    private needsReset;
    private release;
}
export declare const ItemViewer: React.ForwardRefExoticComponent<Pick<Props, "onClose" | "mediaClient" | "identifier" | "previewCount" | "showControls"> & React.RefAttributes<any>>;
