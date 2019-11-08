import { Component } from 'react';
import { Identifier } from '@atlaskit/media-client';
import { MediaViewerProps, MediaViewerDataSource } from './types';
export interface MediaViewerState {
}
export declare class MediaViewer extends Component<MediaViewerProps, MediaViewerState> {
    getDataSourceWithSelectedItem: (dataSource: MediaViewerDataSource, selectedItem: Identifier) => MediaViewerDataSource;
    render(): JSX.Element;
}
