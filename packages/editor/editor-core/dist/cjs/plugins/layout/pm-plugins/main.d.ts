import { PluginKey, Plugin } from 'prosemirror-state';
import { PresetLayout } from '../actions';
export declare type LayoutState = {
    pos: number | null;
    allowBreakout: boolean;
    addSidebarLayouts: boolean;
    selectedLayout: PresetLayout | undefined;
};
export declare const DEFAULT_LAYOUT = "two_equal";
export declare const pluginKey: PluginKey<any>;
declare const _default: (pluginConfig?: boolean | {
    allowBreakout: boolean;
    UNSAFE_addSidebarLayouts?: boolean | undefined;
} | undefined) => Plugin<any>;
export default _default;
