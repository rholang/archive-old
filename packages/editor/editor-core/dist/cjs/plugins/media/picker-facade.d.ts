import { MediaPicker, UploadPreviewUpdateEventPayload, UploadParams, UploadErrorEventPayload, UploadProcessingEventPayload, Popup, PopupConfig } from '@atlaskit/media-picker';
import { MediaClientConfig } from '@atlaskit/media-core';
import { ErrorReportingHandler } from '@atlaskit/editor-common';
import { MediaState, CustomMediaPicker, MobileUploadEndEventPayload } from './types';
export declare type PickerType = 'popup' | 'clipboard' | 'dropzone' | 'customMediaPicker';
export declare type ExtendedComponentConfigs = {
    popup: PopupConfig;
    customMediaPicker: CustomMediaPicker;
    dropzone: null;
    clipboard: null;
};
export declare type PickerFacadeConfig = {
    mediaClientConfig: MediaClientConfig;
    errorReporter: ErrorReportingHandler;
};
export declare type MediaStateEvent = MediaState;
export declare type MediaStateEventListener = (evt: MediaStateEvent) => void;
export declare type MediaStateEventSubscriber = ((listener: MediaStateEventListener) => void);
export declare type NewMediaEvent = (state: MediaState, onStateChanged: MediaStateEventSubscriber, pickerType?: string) => void;
export default class PickerFacade {
    readonly config: PickerFacadeConfig;
    readonly pickerConfig?: CustomMediaPicker | PopupConfig | null | undefined;
    readonly mediaPickerFactoryClass: typeof MediaPicker;
    private picker?;
    private onDragListeners;
    private errorReporter;
    private pickerType;
    private onStartListeners;
    private eventListeners;
    private analyticsName;
    constructor(pickerType: PickerType, config: PickerFacadeConfig, pickerConfig?: CustomMediaPicker | PopupConfig | null | undefined, mediaPickerFactoryClass?: typeof MediaPicker, analyticsName?: string);
    init(): Promise<PickerFacade>;
    readonly type: PickerType;
    readonly mediaPicker: CustomMediaPicker | Popup | undefined;
    destroy(): void;
    setUploadParams(params: UploadParams): void;
    onClose(cb: () => void): () => void;
    show(): void;
    hide(): void;
    onNewMedia(cb: NewMediaEvent): void;
    onDrag(cb: (state: 'enter' | 'leave') => any): void;
    handleUploadPreviewUpdate: (event: UploadPreviewUpdateEventPayload) => void;
    private subscribeStateChanged;
    handleUploadError: ({ error }: UploadErrorEventPayload) => void;
    handleMobileUploadEnd: (event: MobileUploadEndEventPayload) => void;
    handleReady: (event: UploadProcessingEventPayload) => void;
}
