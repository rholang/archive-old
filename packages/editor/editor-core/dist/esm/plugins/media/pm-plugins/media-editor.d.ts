import { Plugin, PluginKey } from 'prosemirror-state';
import { PMPluginFactoryParams } from '../../../types';
import { MediaEditorState, MediaEditorAction } from '../types';
export declare const pluginKey: PluginKey<any>;
export declare const reducer: (state: MediaEditorState, action: MediaEditorAction) => MediaEditorState;
declare const createCommand: (action: import("../types").OpenMediaEditor | import("../types").UploadAnnotation | import("../types").CloseMediaEditor | import("../types").SetMediaMediaClientConfig | ((state: Readonly<import("prosemirror-state").EditorState<any>>) => false | import("../types").OpenMediaEditor | import("../types").UploadAnnotation | import("../types").CloseMediaEditor | import("../types").SetMediaMediaClientConfig), transform?: ((tr: import("prosemirror-state").Transaction<any>, state: import("prosemirror-state").EditorState<any>) => import("prosemirror-state").Transaction<any>) | undefined) => import("../../../types").Command, getPluginState: (state: import("prosemirror-state").EditorState<any>) => MediaEditorState;
export declare const createPlugin: ({ dispatch, providerFactory, }: PMPluginFactoryParams) => Plugin<any>;
export { createCommand, getPluginState };
