import { Plugin, PluginKey, Transaction } from 'prosemirror-state';
import { ColumnResizingPluginState } from '../../types';
import { Dispatch } from '../../../../event-dispatcher';
export declare const pluginKey: PluginKey<any>;
declare const createCommand: (action: {
    type: "SET_RESIZE_HANDLE_POSITION";
    data: {
        resizeHandlePos: number | null;
    };
} | {
    type: "STOP_RESIZING";
} | {
    type: "SET_DRAGGING";
    data: {
        dragging: {
            startX: number;
            startWidth: number;
        } | null;
    };
} | {
    type: "SET_LAST_CLICK";
    data: {
        lastClick: {
            x: number;
            y: number;
            time: number;
        } | null;
    };
} | ((state: Readonly<import("prosemirror-state").EditorState<any>>) => false | {
    type: "SET_RESIZE_HANDLE_POSITION";
    data: {
        resizeHandlePos: number | null;
    };
} | {
    type: "STOP_RESIZING";
} | {
    type: "SET_DRAGGING";
    data: {
        dragging: {
            startX: number;
            startWidth: number;
        } | null;
    };
} | {
    type: "SET_LAST_CLICK";
    data: {
        lastClick: {
            x: number;
            y: number;
            time: number;
        } | null;
    };
}), transform?: ((tr: Transaction<any>, state: import("prosemirror-state").EditorState<any>) => Transaction<any>) | undefined) => import("../../../..").Command, getPluginState: (state: import("prosemirror-state").EditorState<any>) => ColumnResizingPluginState;
export declare function createPlugin(dispatch: Dispatch<ColumnResizingPluginState>, { lastColumnResizable, dynamicTextSizing, }: ColumnResizingPluginState): Plugin<any>;
export { createCommand, getPluginState };
