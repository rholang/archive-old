/// <reference types="react-redux" />
import { Component } from 'react';
import { Store } from 'redux';
import { IntlShape } from 'react-intl';
import { MediaClient } from '@atlaskit/media-client';
import { UIAnalyticsEventHandler } from '@atlaskit/analytics-next';
import { ServiceName, State } from '../domain';
import { UploadParams, PopupConfig } from '../..';
import { StartAppActionPayload } from '../actions/startApp';
import { UploadsStartEventPayload, UploadPreviewUpdateEventPayload, UploadStatusUpdateEventPayload, UploadProcessingEventPayload, UploadEndEventPayload, UploadErrorEventPayload } from '../../domain/uploadEvent';
import { DropzoneDragEnterEventPayload, DropzoneDragLeaveEventPayload } from '../../components/types';
export interface AppStateProps {
    readonly selectedServiceName: ServiceName;
    readonly isVisible: boolean;
    readonly tenantMediaClient: MediaClient;
    readonly userMediaClient: MediaClient;
    readonly config?: Partial<PopupConfig>;
}
export interface AppDispatchProps {
    readonly onStartApp: (payload: StartAppActionPayload) => void;
    readonly onClose: () => void;
    readonly onUploadsStart: (payload: UploadsStartEventPayload) => void;
    readonly onUploadPreviewUpdate: (payload: UploadPreviewUpdateEventPayload) => void;
    readonly onUploadStatusUpdate: (payload: UploadStatusUpdateEventPayload) => void;
    readonly onUploadProcessing: (payload: UploadProcessingEventPayload) => void;
    readonly onUploadEnd: (payload: UploadEndEventPayload) => void;
    readonly onUploadError: (payload: UploadErrorEventPayload) => void;
    readonly onDropzoneDragIn: (fileCount: number) => void;
    readonly onDropzoneDragOut: (fileCount: number) => void;
    readonly onDropzoneDropIn: (fileCount: number) => void;
}
export interface AppProxyReactContext {
    getAtlaskitAnalyticsEventHandlers: () => UIAnalyticsEventHandler[];
    getAtlaskitAnalyticsContext?: () => Record<string, any>[];
    intl?: IntlShape;
}
export interface AppOwnProps {
    store: Store<State>;
    tenantUploadParams: UploadParams;
    proxyReactContext?: AppProxyReactContext;
}
export declare type AppProps = AppStateProps & AppOwnProps & AppDispatchProps;
export interface AppState {
    readonly isDropzoneActive: boolean;
}
export declare class App extends Component<AppProps, AppState> {
    private readonly componentMediaClient;
    private browserRef;
    private dropzoneRef;
    private readonly localUploader;
    constructor(props: AppProps);
    onDragLeave: (payload: DropzoneDragLeaveEventPayload) => void;
    onDragEnter: (payload: DropzoneDragEnterEventPayload) => void;
    onDrop: (payload: UploadsStartEventPayload) => void;
    render(): JSX.Element;
    private renderCurrentView;
    private setDropzoneActive;
    private renderClipboard;
    private renderBrowser;
    private renderDropzone;
}
declare const _default;
export default _default;
