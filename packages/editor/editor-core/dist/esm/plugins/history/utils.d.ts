import { Plugin, EditorState } from 'prosemirror-state';
import { PmHistoryPluginState } from './pm-history-types';
export declare const getPmHistoryPlugin: (state: EditorState<any>) => Plugin<any> | undefined;
export declare const getPmHistoryPluginState: (state: EditorState<any>) => PmHistoryPluginState | undefined;
