import { EditorSharedConfig } from '../../context/shared-config';
import { CreateEditorParams } from './create-editor';
import { EditorActions } from '../../../../..';
export declare function useEditor(config: CreateEditorParams & {
    editorActions?: EditorActions;
}): [EditorSharedConfig | null, (ref: HTMLDivElement | null) => void];
