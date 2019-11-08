import { Node as PMNode, Schema, Slice } from 'prosemirror-model';
import { EditorView } from 'prosemirror-view';
import { EditorState, Selection } from 'prosemirror-state';
import { MediaSingleLayout, MediaSingleAttributes } from '@atlaskit/adf-schema';
import { MediaState } from '../types';
import { WidthPluginState } from '../../width';
import { InputMethodInsertMedia } from '../../analytics';
export declare const wrappedLayouts: MediaSingleLayout[];
export declare const nonWrappedLayouts: MediaSingleLayout[];
export interface MediaSingleState extends MediaState {
    dimensions: {
        width: number;
        height: number;
    };
    scaleFactor?: number;
    contextId?: string;
}
export declare const isMediaSingle: (schema: Schema<any, any>, fileMimeType?: string | undefined) => boolean;
export declare const insertMediaAsMediaSingle: (view: EditorView<any>, node: PMNode<any>, inputMethod: InputMethodInsertMedia) => boolean;
export declare const insertMediaSingleNode: (view: EditorView<any>, mediaState: MediaState, inputMethod?: import("../../analytics").INPUT_METHOD.CLIPBOARD | import("../../analytics").INPUT_METHOD.DRAG_AND_DROP | import("../../analytics").INPUT_METHOD.PICKER_CLOUD | undefined, collection?: string | undefined) => boolean;
export declare const createMediaSingleNode: (schema: Schema<any, any>, collection: string) => (mediaState: MediaSingleState) => PMNode<Schema<any, any>>;
export declare function transformSliceForMedia(slice: Slice, schema: Schema): (selection: Selection<any>) => Slice<any>;
export declare const alignAttributes: (layout: MediaSingleLayout, oldAttrs: MediaSingleAttributes, gridSize?: number) => MediaSingleAttributes;
export declare const calcMediaPxWidth: (opts: {
    origWidth: number;
    origHeight: number;
    state: EditorState<any>;
    containerWidth: WidthPluginState;
    layout?: "full-width" | "wide" | "center" | "wrap-right" | "wrap-left" | "align-start" | "align-end" | undefined;
    pctWidth?: number | undefined;
    pos?: number | undefined;
    isFullWidthModeEnabled?: boolean | undefined;
    resizedPctWidth?: number | undefined;
}) => number;
