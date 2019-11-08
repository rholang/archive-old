import { PluginKey, EditorState } from 'prosemirror-state';
import { EditorPlugin, EditorProps } from '../../types';
export declare const pluginKey: PluginKey<any>;
declare const sharedContextPlugin: () => EditorPlugin;
export declare const getEditorProps: (state: EditorState<any>) => EditorProps;
export default sharedContextPlugin;
