import { EditorState, StateField, PluginKey, Transaction } from 'prosemirror-state';
import { Dispatch } from '../event-dispatcher';
import { Command } from '../types';
export declare type Reducer<PluginState, Action> = (state: PluginState, action: Action) => PluginState;
declare type MapState<PluginState> = (tr: Transaction, pluginState: PluginState) => PluginState;
export declare function pluginFactory<PluginState, Action, InitialState extends PluginState>(pluginKey: PluginKey, reducer: Reducer<PluginState, Action>, options?: {
    mapping?: MapState<PluginState>;
    onDocChanged?: MapState<PluginState>;
    onSelectionChanged?: MapState<PluginState>;
}): {
    createPluginState: (dispatch: Dispatch, initialState: InitialState) => StateField<PluginState>;
    createCommand: (action: Action | ((state: Readonly<EditorState>) => Action | false), transform?: (tr: Transaction, state: EditorState) => Transaction) => Command;
    getPluginState: (state: EditorState) => PluginState;
};
export {};
