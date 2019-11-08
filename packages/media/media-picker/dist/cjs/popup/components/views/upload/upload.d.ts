/// <reference types="react-redux" />
import * as React from 'react';
import { Component } from 'react';
import { CardEventHandler } from '@atlaskit/media-card';
import { MediaClient } from '@atlaskit/media-client';
import { InjectedIntlProps } from 'react-intl';
import { FileReference, LocalUploads, Recents, SelectedItem, ServiceFile, ServiceName } from '../../../domain';
import { Browser } from '../../../../components/browser/browser';
export interface UploadViewOwnProps {
    readonly browserRef: React.RefObject<Browser>;
    readonly mediaClient: MediaClient;
    readonly recentsCollection: string;
}
export interface UploadViewStateProps {
    readonly isLoading: boolean;
    readonly recents: Recents;
    readonly uploads: LocalUploads;
    readonly selectedItems: SelectedItem[];
}
export interface UploadViewDispatchProps {
    readonly onFileClick: (serviceFile: ServiceFile, serviceName: ServiceName) => void;
    readonly onEditorShowImage: (file: FileReference, dataUri: string) => void;
    readonly onEditRemoteImage: (file: FileReference, collectionName: string) => void;
    readonly removeFileFromRecents: (id: string, occurrenceKey?: string) => void;
}
export declare type UploadViewProps = UploadViewOwnProps & UploadViewStateProps & UploadViewDispatchProps & InjectedIntlProps;
export interface UploadViewState {
    readonly hasPopupBeenVisible: boolean;
    readonly isWebGLWarningFlagVisible: boolean;
    readonly shouldDismissWebGLWarningFlag: boolean;
    readonly isLoadingNextPage: boolean;
    readonly deletionCandidate?: {
        id: string;
        occurrenceKey?: string;
    };
}
export declare class StatelessUploadView extends Component<UploadViewProps, UploadViewState> {
    private mounted;
    state: UploadViewState;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private renderDeleteConfirmation;
    private onThresholdReachedListener;
    private renderLoadingView;
    private renderLoadingNextPageView;
    private renderRecentsView;
    onAnnotateActionClick(callback: CardEventHandler): CardEventHandler;
    private renderWebGLWarningFlag;
    private renderCards;
    private uploadingFilesCards;
    private recentFilesCards;
    private showWebGLWarningFlag;
    private onFlagDismissed;
    private onLearnMoreClicked;
}
declare const _default;
export default _default;
