/// <reference types="prosemirror-model" />
import { EditorState, Plugin, PluginKey, Transaction } from 'prosemirror-state';
import { DecorationSet } from 'prosemirror-view';
import { Dispatch } from '../../../event-dispatcher';
import { PortalProviderAPI } from '../../../ui/PortalProvider';
import { PluginConfig } from '../types';
export declare const pluginKey: PluginKey<any>;
export declare const defaultTableSelection: {
    hoveredColumns: never[];
    hoveredRows: never[];
    isInDanger: boolean;
};
declare const createCommand: (action: {
    type: "SET_EDITOR_FOCUS";
    data: {
        editorHasFocus: boolean;
    };
} | {
    type: "TOGGLE_HEADER_ROW";
} | {
    type: "TOGGLE_HEADER_COLUMN";
} | {
    type: "SORT_TABLE";
    data: {
        ordering: import("../types").TableColumnOrdering;
    };
} | {
    type: "SET_TABLE_REF";
    data: {
        tableRef?: HTMLElement | undefined;
        tableNode?: import("prosemirror-model").Node<any> | undefined;
        tableWrapperTarget?: HTMLElement | undefined;
        layout: import("@atlaskit/adf-schema").TableLayout;
        isHeaderRowEnabled: boolean;
        isHeaderColumnEnabled: boolean;
    };
} | {
    type: "HOVER_ROWS";
    data: {
        decorationSet: DecorationSet<any>;
        hoveredRows: number[];
        isInDanger?: boolean | undefined;
    };
} | {
    type: "HOVER_CELLS";
    data: {
        decorationSet: DecorationSet<any>;
    };
} | {
    type: "HOVER_COLUMNS";
    data: {
        decorationSet: DecorationSet<any>;
        hoveredColumns: number[];
        isInDanger?: boolean | undefined;
    };
} | {
    type: "HOVER_TABLE";
    data: {
        decorationSet: DecorationSet<any>;
        hoveredRows: number[];
        hoveredColumns: number[];
        isInDanger?: boolean | undefined;
    };
} | {
    type: "CLEAR_HOVER_SELECTION";
    data: {
        decorationSet: DecorationSet<any>;
    };
} | {
    type: "SET_TARGET_CELL_POSITION";
    data: {
        targetCellPosition?: number | undefined;
    };
} | {
    type: "SET_TABLE_LAYOUT";
    data: {
        layout: import("@atlaskit/adf-schema").TableLayout;
    };
} | {
    type: "SHOW_INSERT_ROW_BUTTON";
    data: {
        insertRowButtonIndex: number;
    };
} | {
    type: "SHOW_INSERT_COLUMN_BUTTON";
    data: {
        insertColumnButtonIndex: number;
    };
} | {
    type: "HIDE_INSERT_COLUMN_OR_ROW_BUTTON";
} | {
    type: "TOGGLE_CONTEXTUAL_MENU";
} | ((state: Readonly<EditorState<any>>) => false | {
    type: "SET_EDITOR_FOCUS";
    data: {
        editorHasFocus: boolean;
    };
} | {
    type: "TOGGLE_HEADER_ROW";
} | {
    type: "TOGGLE_HEADER_COLUMN";
} | {
    type: "SORT_TABLE";
    data: {
        ordering: import("../types").TableColumnOrdering;
    };
} | {
    type: "SET_TABLE_REF";
    data: {
        tableRef?: HTMLElement | undefined;
        tableNode?: import("prosemirror-model").Node<any> | undefined;
        tableWrapperTarget?: HTMLElement | undefined;
        layout: import("@atlaskit/adf-schema").TableLayout;
        isHeaderRowEnabled: boolean;
        isHeaderColumnEnabled: boolean;
    };
} | {
    type: "HOVER_ROWS";
    data: {
        decorationSet: DecorationSet<any>;
        hoveredRows: number[];
        isInDanger?: boolean | undefined;
    };
} | {
    type: "HOVER_CELLS";
    data: {
        decorationSet: DecorationSet<any>;
    };
} | {
    type: "HOVER_COLUMNS";
    data: {
        decorationSet: DecorationSet<any>;
        hoveredColumns: number[];
        isInDanger?: boolean | undefined;
    };
} | {
    type: "HOVER_TABLE";
    data: {
        decorationSet: DecorationSet<any>;
        hoveredRows: number[];
        hoveredColumns: number[];
        isInDanger?: boolean | undefined;
    };
} | {
    type: "CLEAR_HOVER_SELECTION";
    data: {
        decorationSet: DecorationSet<any>;
    };
} | {
    type: "SET_TARGET_CELL_POSITION";
    data: {
        targetCellPosition?: number | undefined;
    };
} | {
    type: "SET_TABLE_LAYOUT";
    data: {
        layout: import("@atlaskit/adf-schema").TableLayout;
    };
} | {
    type: "SHOW_INSERT_ROW_BUTTON";
    data: {
        insertRowButtonIndex: number;
    };
} | {
    type: "SHOW_INSERT_COLUMN_BUTTON";
    data: {
        insertColumnButtonIndex: number;
    };
} | {
    type: "HIDE_INSERT_COLUMN_OR_ROW_BUTTON";
} | {
    type: "TOGGLE_CONTEXTUAL_MENU";
}), transform?: ((tr: Transaction<any>, state: EditorState<any>) => Transaction<any>) | undefined) => import("../../..").Command, getPluginState: (state: EditorState<any>) => import("../types").TablePluginState;
export declare const createPlugin: (dispatch: Dispatch<any>, portalProviderAPI: PortalProviderAPI, pluginConfig: PluginConfig, dynamicTextSizing?: boolean | undefined, breakoutEnabled?: boolean | undefined, fullWidthModeEnabled?: boolean | undefined, previousFullWidthModeEnabled?: boolean | undefined) => Plugin<any>;
export { createCommand, getPluginState };
