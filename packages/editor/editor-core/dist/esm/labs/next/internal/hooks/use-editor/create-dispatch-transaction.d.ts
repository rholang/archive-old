import { Transaction } from 'prosemirror-state';
import { EditorSharedConfig } from '../../context/shared-config';
export declare function createDispatchTransaction(editorSharedConfig: EditorSharedConfig): (transaction: Transaction<any>) => void;
