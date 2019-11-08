import { Node as PMNode, Schema } from 'prosemirror-model';
import { EditorView } from 'prosemirror-view';
import { EditorState, Plugin, PluginKey } from 'prosemirror-state';
import { MediaClientConfig } from '@atlaskit/media-core';
import { MediaSingleLayout } from '@atlaskit/adf-schema';
import { ContextIdentifierProvider } from '@atlaskit/editor-common';
import { Dispatch } from '../../../event-dispatcher';
import { ProsemirrorGetPosHandler } from '../../../nodeviews';
import { MediaPluginOptions } from '../media-plugin-options';
import PickerFacade, { MediaStateEventListener, MediaStateEventSubscriber } from '../picker-facade';
import { MediaState, MediaProvider, MediaStateStatus } from '../types';
import { MediaPMPluginOptions } from '..';
export { MediaState, MediaProvider, MediaStateStatus };
export interface MediaNodeWithPosHandler {
    node: PMNode;
    getPos: ProsemirrorGetPosHandler;
}
export declare class MediaPluginState {
    allowsUploads: boolean;
    mediaClientConfig?: MediaClientConfig;
    uploadMediaClientConfig?: MediaClientConfig;
    ignoreLinks: boolean;
    waitForMediaUpload: boolean;
    allUploadsFinished: boolean;
    showDropzone: boolean;
    element?: HTMLElement;
    layout: MediaSingleLayout;
    mediaNodes: MediaNodeWithPosHandler[];
    mediaGroupNodes: Record<string, any>;
    mobileUploadComplete: Record<string, boolean>;
    private pendingTask;
    options: MediaPluginOptions;
    private view;
    private destroyed;
    mediaProvider?: MediaProvider;
    private contextIdentifierProvider?;
    private errorReporter;
    pickers: PickerFacade[];
    pickerPromises: Array<Promise<PickerFacade>>;
    private popupPicker?;
    private customPicker?;
    editingMediaSinglePos?: number;
    showEditingDialog?: boolean;
    mediaPluginOptions?: MediaPMPluginOptions;
    private removeOnCloseListener;
    private openMediaPickerBrowser?;
    private onPopupToogleCallback;
    private reactContext;
    constructor(state: EditorState, options: MediaPluginOptions, reactContext: () => {}, mediaPluginOptions?: MediaPMPluginOptions);
    onContextIdentifierProvider: (_name: string, provider?: Promise<ContextIdentifierProvider> | undefined) => Promise<void>;
    setMediaProvider: (mediaProvider?: Promise<MediaProvider> | undefined) => Promise<void>;
    getMediaOptions: () => MediaPluginOptions;
    updateElement(): void;
    hasUserAuthProvider: () => import("@atlaskit/media-core").AuthProvider | undefined;
    private getDomElement;
    /**
     * we insert a new file by inserting a initial state for that file.
     *
     * called when we insert a new file via the picker (connected via pickerfacade)
     */
    insertFile: (mediaState: MediaState, onMediaStateChanged: (listener: MediaStateEventListener) => void, pickerType?: string | undefined) => void;
    splitMediaGroup: () => boolean;
    onPopupPickerClose: () => void;
    showMediaPicker: () => void;
    setBrowseFn: (browseFn: () => void) => void;
    onPopupToggle: (onPopupToogleCallback: (isOpen: boolean) => void) => void;
    /**
     * Returns a promise that is resolved after all pending operations have been finished.
     * An optional timeout will cause the promise to reject if the operation takes too long
     *
     * NOTE: The promise will resolve even if some of the media have failed to process.
     */
    waitForPendingTasks: (timeout?: number | undefined, lastTask?: Promise<MediaState | null> | undefined) => Promise<any>;
    setView(view: EditorView): void;
    /**
     * Called from React UI Component when user clicks on "Delete" icon
     * inside of it
     */
    handleMediaNodeRemoval: (node: PMNode<any> | undefined, getPos: ProsemirrorGetPosHandler) => void;
    /**
     * Called from React UI Component on componentDidMount
     */
    handleMediaNodeMount: (node: PMNode<any>, getPos: ProsemirrorGetPosHandler) => void;
    /**
     * Called from React UI Component on componentWillUnmount and UNSAFE_componentWillReceiveProps
     * when React component's underlying node property is replaced with a new node
     */
    handleMediaNodeUnmount: (oldNode: PMNode<any>) => void;
    destroy(): void;
    findMediaNode: (id: string) => MediaNodeWithPosHandler | null;
    private destroyAllPickers;
    private destroyPickers;
    private initPickers;
    trackNewMediaEvent(mediaState: MediaState, onMediaStateChanged: MediaStateEventSubscriber, pickerType?: string): void;
    private getInputMethod;
    updateMediaNodeAttrs: (id: string, attrs: object, isMediaSingle: boolean) => boolean | undefined;
    private collectionFromProvider;
    private handleMediaState;
    isMobileUploadCompleted: (mediaId: string) => boolean | undefined;
    removeNodeById: (state: MediaState) => void;
    removeSelectedMediaContainer: () => boolean;
    selectedMediaContainerNode: () => PMNode<any> | undefined;
    handleDrag: (dragState: "enter" | "leave") => void;
}
export declare const stateKey: PluginKey<any>;
export declare const getMediaPluginState: (state: EditorState<any>) => MediaPluginState;
export declare const createPlugin: (_schema: Schema<any, any>, options: MediaPluginOptions, reactContext: () => {}, dispatch?: Dispatch<any> | undefined, mediaPluginOptions?: MediaPMPluginOptions | undefined) => Plugin<any>;
