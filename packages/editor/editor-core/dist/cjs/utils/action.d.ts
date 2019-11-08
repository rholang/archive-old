import { Node } from 'prosemirror-model';
import { EditorView } from 'prosemirror-view';
import { Command } from '../types';
export declare function getEditorValueWithMedia(editorView?: EditorView): Promise<Node | undefined>;
/**
 * Iterates over the commands one after the other,
 * passes the tr through and dispatches the cumulated transaction
 */
export declare function cascadeCommands(cmds: Command[]): Command;
