import { MediaAttributes, ExternalMediaAttributes } from '@atlaskit/adf-schema';
import { Node as PMNode } from 'prosemirror-model';
import { EditorView } from 'prosemirror-view';
import { MediaProvider } from '../types';
import { ContextIdentifierProvider } from '@atlaskit/editor-common';
import { MediaPMPluginOptions } from '../';
import { DispatchAnalyticsEvent } from '../../analytics';
export declare type RemoteDimensions = {
    id: string;
    height: number;
    width: number;
};
export interface MediaNodeUpdaterProps {
    view: EditorView;
    node: PMNode;
    mediaProvider?: Promise<MediaProvider>;
    contextIdentifierProvider?: Promise<ContextIdentifierProvider>;
    isMediaSingle: boolean;
    mediaPluginOptions?: MediaPMPluginOptions;
    dispatchAnalyticsEvent?: DispatchAnalyticsEvent;
}
export declare class MediaNodeUpdater {
    props: MediaNodeUpdaterProps;
    constructor(props: MediaNodeUpdaterProps);
    isMediaBlobUrl(): boolean;
    updateContextId: () => Promise<void>;
    hasFileAttributesDefined: () => string | false | 0 | null | undefined;
    updateFileAttrs: () => Promise<void>;
    getAttrs: () => MediaAttributes | ExternalMediaAttributes | undefined;
    getObjectId: () => Promise<string | undefined>;
    uploadExternalMedia: (pos: number) => Promise<void>;
    getCurrentContextId: () => string | undefined;
    updateDimensions: (dimensions: RemoteDimensions) => void;
    getRemoteDimensions(): Promise<false | RemoteDimensions>;
    isNodeFromDifferentCollection: () => Promise<boolean>;
    copyNodeFromBlobUrl: (pos: number) => Promise<void>;
    copyNode: () => Promise<void>;
}
