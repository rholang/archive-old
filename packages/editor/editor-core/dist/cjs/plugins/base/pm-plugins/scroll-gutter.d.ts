import { Plugin } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
export declare const GUTTER_SIZE_IN_PX = 120;
export declare const GUTTER_SELECTOR = "#editor-scroll-gutter";
declare const _default: (getScrollElement: ((view: EditorView<any>) => HTMLElement | null) | undefined) => Plugin<any> | undefined;
export default _default;
