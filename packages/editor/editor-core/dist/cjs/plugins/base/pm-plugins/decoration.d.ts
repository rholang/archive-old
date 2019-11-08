import { NodeType } from 'prosemirror-model';
import { Decoration } from 'prosemirror-view';
import { PluginKey, Plugin } from 'prosemirror-state';
import { Command } from '../../../types';
export declare const decorationStateKey: PluginKey<any>;
export declare enum ACTIONS {
    DECORATION_ADD = 0,
    DECORATION_REMOVE = 1
}
export declare const hoverDecoration: (nodeType: NodeType<any> | NodeType<any>[], add: boolean, className?: string) => Command;
export declare type DecorationState = {
    decoration?: Decoration;
};
declare const _default: () => Plugin<any>;
export default _default;
