import { MediaClientConfig } from '@atlaskit/media-core';
import { Node as PMNode, ResolvedPos, Slice, Schema } from 'prosemirror-model';
import { EditorState } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
import { ProsemirrorGetPosHandler } from '../../../nodeviews';
import { MediaProvider, MediaState } from '../types';
export declare const posOfMediaGroupNearby: (state: EditorState<any>) => number | undefined;
export declare const isSelectionNonMediaBlockNode: (state: EditorState<any>) => boolean;
export declare const posOfPrecedingMediaGroup: (state: EditorState<any>) => number | undefined;
/**
 * Determine whether the cursor is inside empty paragraph
 * or the selection is the entire paragraph
 */
export declare const isInsidePotentialEmptyParagraph: (state: EditorState<any>) => boolean;
export declare const posOfMediaGroupBelow: (state: EditorState<any>, $pos: ResolvedPos<any>, prepend?: boolean) => number | undefined;
export declare const posOfParentMediaGroup: (state: EditorState<any>, $pos?: ResolvedPos<any> | undefined, prepend?: boolean) => number | undefined;
/**
 * The function will return the position after current selection where mediaGroup can be inserted.
 */
export declare function endPositionForMedia(state: EditorState, resolvedPos: ResolvedPos): number;
export declare const removeMediaNode: (view: EditorView<any>, node: PMNode<any>, getPos: ProsemirrorGetPosHandler) => void;
export declare const splitMediaGroup: (view: EditorView<any>) => boolean;
export declare const copyOptionalAttrsFromMediaState: (mediaState: MediaState, node: PMNode<any>) => void;
/**
 * Customer can define either deprecated Context or MediaClientConfig object directly. All internal
 * API are being switched to MediaClientConfig exclusively.
 * This utility helps to retrieve MediaClientConfig object from media Provider no matter what customer
 * has provided.
 */
export declare const getViewMediaClientConfigFromMediaProvider: (mediaProvider: MediaProvider) => Promise<MediaClientConfig>;
/**
 * Customer can define either deprecated Context or MediaClientConfig object directly. All internal
 * API are being switched to MediaClientConfig exclusively.
 * This utility helps to retrieve MediaClientConfig object from media Provider no matter what customer
 * has provided.
 */
export declare const getUploadMediaClientConfigFromMediaProvider: (mediaProvider: MediaProvider) => Promise<MediaClientConfig | undefined>;
export declare const transformSliceToCorrectMediaWrapper: (slice: Slice<any>, schema: Schema<any, any>) => Slice<any>;
/**
 * Given a html string, we attempt to hoist any nested `<img>` tags,
 * not wrapped by a `<div>` as ProseMirror no-op's on those scenarios.
 * @param html
 */
export declare const unwrapNestedMediaElements: (html: string) => string;
