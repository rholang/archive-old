import * as React from 'react';
import { Node as PMNode } from 'prosemirror-model';
import { EditorView } from 'prosemirror-view';
import { ImageLoaderProps, ContextIdentifierProvider } from '@atlaskit/editor-common';
import { CardDimensions, CardOnClickCallback } from '@atlaskit/media-card';
import { MediaClientConfig } from '@atlaskit/media-core';
import { MediaProvider } from '../pm-plugins/main';
import { ProsemirrorGetPosHandler, ReactNodeProps } from '../../../nodeviews';
export declare const MEDIA_HEIGHT = 125;
export declare const FILE_WIDTH = 156;
export declare type Appearance = 'small' | 'image' | 'horizontal' | 'square';
export interface MediaNodeProps extends ReactNodeProps, ImageLoaderProps {
    view: EditorView;
    node: PMNode;
    getPos: ProsemirrorGetPosHandler;
    contextIdentifierProvider?: ContextIdentifierProvider;
    cardDimensions: CardDimensions;
    isMediaSingle?: boolean;
    onClick?: CardOnClickCallback;
    onExternalImageLoaded?: (dimensions: {
        width: number;
        height: number;
    }) => void;
    allowLazyLoading?: boolean;
    mediaProvider?: Promise<MediaProvider>;
    viewMediaClientConfig?: MediaClientConfig;
    uploadComplete?: boolean;
}
declare const _default: React.ComponentClass<MediaNodeProps & ImageLoaderProps, any>;
export default _default;
