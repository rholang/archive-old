import { Node } from 'prosemirror-model';
import { Command } from '../../types';
import { EditorState, Transaction } from 'prosemirror-state';
export declare type PresetLayout = 'two_equal' | 'three_equal' | 'two_right_sidebar' | 'two_left_sidebar' | 'three_with_sidebars';
export declare const TWO_COL_LAYOUTS: PresetLayout[];
export declare const THREE_COL_LAYOUTS: PresetLayout[];
/**
 * Finds layout preset based on the width attrs of all the layoutColumn nodes
 * inside the layoutSection node
 */
export declare const getPresetLayout: (section: Node<any>) => "two_equal" | "three_equal" | "two_right_sidebar" | "two_left_sidebar" | "three_with_sidebars" | undefined;
export declare const getSelectedLayout: (maybeLayoutSection: Node<any> | undefined, current: PresetLayout) => PresetLayout;
export declare const createDefaultLayoutSection: (state: EditorState<any>) => Node<any>;
export declare const insertLayoutColumns: Command;
export declare const insertLayoutColumnsWithAnalytics: (inputMethod: import("../analytics").INPUT_METHOD.INSERT_MENU | import("../analytics").INPUT_METHOD.TOOLBAR) => Command;
export declare function forceSectionToPresetLayout(state: EditorState, node: Node, pos: number, presetLayout: PresetLayout): Transaction;
export declare const setPresetLayout: (layout: PresetLayout) => Command;
export declare const fixColumnSizes: (changedTr: Transaction<any>, state: EditorState<any>) => undefined;
export declare const fixColumnStructure: (state: EditorState<any>) => Transaction<any> | undefined;
export declare const deleteActiveLayoutNode: Command;
