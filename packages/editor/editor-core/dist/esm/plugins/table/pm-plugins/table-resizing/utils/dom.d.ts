import { EditorState } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
export declare const updateControls: (state: EditorState<any>) => void;
export declare const isClickNear: (event: MouseEvent, click: {
    x: number;
    y: number;
}) => boolean;
export declare const getResizeCellPos: (view: EditorView<any>, event: MouseEvent, lastColumnResizable: boolean) => number | null;
