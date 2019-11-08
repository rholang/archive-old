import { EditorView } from 'prosemirror-view';
import { EditorPlugin } from '../../types';
interface BasePluginOptions {
    allowScrollGutter?: ((view: EditorView) => HTMLElement | null) | undefined;
    allowInlineCursorTarget?: boolean;
    addRunTimePerformanceCheck?: boolean;
}
declare const basePlugin: (options?: BasePluginOptions | undefined) => EditorPlugin;
export default basePlugin;
