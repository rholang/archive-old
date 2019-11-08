import { EditorView } from 'prosemirror-view';
import { CustomAutoformatState, AutoformatHandler } from './types';
import { InputRuleHander } from './input-rules';
export declare const buildHandler: (_regex: string, handler: AutoformatHandler) => InputRuleHander;
export declare const completeReplacements: (view: EditorView<any>, state: CustomAutoformatState) => void;
