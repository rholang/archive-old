import * as React from 'react';
import { Component } from 'react';
import { ADFEntity } from '@atlaskit/adf-utils';
import { CardAppearance, CardDimensions, CardOnClickCallback } from '@atlaskit/media-card';
import { Context, MediaClientConfig } from '@atlaskit/media-core';
import { ImageResizeMode, Identifier, FileState } from '@atlaskit/media-client';
import { MediaType } from '@atlaskit/adf-schema';
import { ImageStatus, ImageLoaderProps, ContextIdentifierProvider } from '@atlaskit/editor-common';
import { RendererAppearance } from './Renderer/types';
import { RendererContext } from '../react';
import { XOR } from '@atlaskit/type-helpers';
export interface WithViewMediaClientConfig {
    viewMediaClientConfig: MediaClientConfig;
}
export declare type WithViewContext = {
    /**
     * @deprecated Use viewMediaClientConfig instead.
     */
    viewContext: Promise<Context>;
};
export declare type MediaProvider = XOR<WithViewMediaClientConfig, WithViewContext>;
export interface MediaCardProps {
    id?: string;
    mediaProvider?: Promise<MediaProvider>;
    contextIdentifierProvider?: Promise<ContextIdentifierProvider>;
    eventHandlers?: {
        media?: {
            onClick?: CardOnClickCallback;
        };
    };
    shouldOpenMediaViewer?: boolean;
    type: MediaType;
    collection?: string;
    url?: string;
    cardDimensions?: CardDimensions;
    resizeMode?: ImageResizeMode;
    appearance?: CardAppearance;
    rendererAppearance?: RendererAppearance;
    occurrenceKey?: string;
    imageStatus?: ImageStatus;
    disableOverlay?: boolean;
    useInlinePlayer?: boolean;
    rendererContext?: RendererContext;
}
export interface State {
    mediaClientConfig?: MediaClientConfig;
    contextIdentifierProvider?: ContextIdentifierProvider;
    fileState?: FileState;
}
export declare const getListOfIdentifiersFromDoc: (doc?: ADFEntity | undefined) => Identifier[];
export declare class MediaCardInternal extends Component<MediaCardProps, State> {
    state: State;
    componentDidMount(): Promise<void>;
    UNSAFE_componentWillReceiveProps(newProps: MediaCardProps): void;
    componentWillUnmount(): void;
    saveFileState: (id: string, mediaClientConfig: MediaClientConfig) => Promise<void>;
    private renderLoadingCard;
    private renderExternal;
    /**
     * We want to call provided `eventHandlers.media.onClick` when it's provided,
     * but we also don't want to call it when it's a video and inline video player is enabled.
     * This is due to consumers normally process this onClick call by opening media viewer and
     * we don't want that to happened described above text.
     */
    private getOnCardClickCallback;
    render(): JSX.Element | null;
}
export declare const CardWrapper: import("styled-components").StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export declare const getClipboardAttrs: ({ id, collection, contextIdentifierProvider, cardDimensions, fileState, }: {
    id: string;
    collection?: string | undefined;
    contextIdentifierProvider?: ContextIdentifierProvider | undefined;
    cardDimensions?: CardDimensions | undefined;
    fileState?: import("@atlaskit/media-core").UploadingFileState | import("@atlaskit/media-core").ProcessingFileState | import("@atlaskit/media-core").ProcessedFileState | import("@atlaskit/media-core").ErrorFileState | import("@atlaskit/media-core").ProcessingFailedState | undefined;
}) => {
    [key: string]: string | number | undefined;
};
export declare const MediaCard: React.ComponentClass<MediaCardProps & ImageLoaderProps, any>;
