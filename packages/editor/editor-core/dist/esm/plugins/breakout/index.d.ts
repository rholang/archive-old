import * as React from 'react';
import { PluginKey, EditorState } from 'prosemirror-state';
import { EditorPlugin } from '../../types';
export declare const Wrapper: import("styled-components").StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export declare const pluginKey: PluginKey<any>;
export declare const getPluginState: (state: EditorState<any>) => any;
interface BreakoutPluginOptions {
    allowBreakoutButton?: boolean;
}
declare const breakoutPlugin: (options?: BreakoutPluginOptions | undefined) => EditorPlugin;
export default breakoutPlugin;
