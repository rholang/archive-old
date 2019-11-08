import { Node } from 'prosemirror-model';
import { EditorState, Plugin, PluginKey } from 'prosemirror-state';
import { Dispatch } from '../../../event-dispatcher';
export declare enum LinkAction {
    SHOW_INSERT_TOOLBAR = "SHOW_INSERT_TOOLBAR",
    HIDE_TOOLBAR = "HIDE_TOOLBAR",
    SELECTION_CHANGE = "SELECTION_CHANGE",
    INSERT_LINK_TOOLBAR = "INSERT",
    EDIT_INSERTED_TOOLBAR = "EDIT_INSERTED_TOOLBAR"
}
export declare enum InsertStatus {
    EDIT_LINK_TOOLBAR = "EDIT",
    INSERT_LINK_TOOLBAR = "INSERT",
    EDIT_INSERTED_TOOLBAR = "EDIT_INSERTED"
}
export declare type InsertState = {
    type: InsertStatus.INSERT_LINK_TOOLBAR;
    from: number;
    to: number;
};
export declare type EditInsertedState = {
    type: InsertStatus.EDIT_INSERTED_TOOLBAR;
    node: Node;
    pos: number;
};
export declare type EditState = {
    type: InsertStatus.EDIT_LINK_TOOLBAR;
    node: Node;
    pos: number;
};
export declare type LinkToolbarState = EditState | EditInsertedState | InsertState | undefined;
export declare const canLinkBeCreatedInRange: (from: number, to: number) => (state: EditorState<any>) => boolean;
export interface HyperlinkState {
    activeText?: string;
    activeLinkMark?: LinkToolbarState;
    canInsertLink: boolean;
}
export declare const stateKey: PluginKey<any>;
export declare const plugin: (dispatch: Dispatch<any>) => Plugin<any>;
