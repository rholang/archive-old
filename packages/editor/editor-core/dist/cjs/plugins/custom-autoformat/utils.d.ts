import { PluginKey, EditorState, Transaction } from 'prosemirror-state';
import { CustomAutoformatState, CustomAutoformatAction } from './types';
export declare const pluginKey: PluginKey<any>;
export declare const getPluginState: (editorState: EditorState<any>) => CustomAutoformatState | undefined;
export declare const autoformatAction: (tr: Transaction<any>, action: CustomAutoformatAction) => Transaction<any>;
