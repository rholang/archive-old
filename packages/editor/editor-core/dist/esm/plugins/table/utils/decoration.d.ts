import { Decoration, DecorationSet } from 'prosemirror-view';
import { Node as PmNode } from 'prosemirror-model';
import { EditorState, Selection, Transaction } from 'prosemirror-state';
import { TableDecorations, Cell } from '../types';
export declare const findColumnControlSelectedDecoration: (decorationSet: DecorationSet<any>) => Decoration[];
export declare const findControlsHoverDecoration: (decorationSet: DecorationSet<any>) => Decoration[];
export declare const createCellHoverDecoration: (cells: Cell[], type: "warning") => Decoration[];
export declare const createControlsHoverDecoration: (cells: Cell[], type: "table" | "row" | "column", danger?: boolean | undefined) => Decoration[];
export declare const createColumnSelectedDecorations: (tr: Transaction<any>) => Decoration[];
export declare const createColumnControlsDecoration: (selection: Selection<any>) => Decoration[];
export declare const updateNodeDecorations: (node: PmNode<any>, decorationSet: DecorationSet<any>, decorations: Decoration[], key: TableDecorations) => DecorationSet<any>;
export declare const updatePluginStateDecorations: (state: EditorState<any>, decorations: Decoration[], key: TableDecorations) => DecorationSet<any>;
