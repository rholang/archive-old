import { Node } from 'prosemirror-model';
import { Plugin, PluginKey } from 'prosemirror-state';
import { DecorationSet } from 'prosemirror-view';
import { EditorPlugin } from '../../types';
export declare const pluginKey: PluginKey<any>;
export declare function createPlaceholderDecoration(doc: Node, placeholderText: string): DecorationSet;
export declare function createPlugin(placeholderText?: string): Plugin | undefined;
interface PlaceholderPluginOptions {
    placeholder?: string;
}
declare const placeholderPlugin: (options?: PlaceholderPluginOptions | undefined) => EditorPlugin;
export default placeholderPlugin;
