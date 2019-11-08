import { Slice, Schema, Node as PmNode } from 'prosemirror-model';
import { EditorState } from 'prosemirror-state';
import { UpdateExtension } from '@atlaskit/editor-common';
import { MacroProvider } from '../macro';
import { Command, CommandDispatch } from '../../types';
export declare const updateExtensionLayout: (layout: string) => Command;
export declare const updateExtensionParams: (updateExtension: UpdateExtension<object>, node: {
    node: PmNode<any>;
    pos: number;
}) => (state: EditorState<any>, dispatch?: CommandDispatch | undefined) => Promise<void>;
export declare const editExtension: (macroProvider: MacroProvider | null, updateExtension?: UpdateExtension<object> | undefined) => Command;
export declare const removeExtension: () => Command;
/**
 * Lift content out of "open" top-level bodiedExtensions.
 * Will not work if bodiedExtensions are nested, or when bodiedExtensions are not in the top level
 */
export declare const transformSliceToRemoveOpenBodiedExtension: (slice: Slice<any>, schema: Schema<any, any>) => Slice<any>;
