/// <reference types="react-redux" />
import { Component } from 'react';
import { EditorData, EditorError } from '../../../domain';
import { Selection } from '../../../actions/editorClose';
import { LocalUploadComponent } from '../../../../components/localUpload';
export interface MainEditorViewStateProps {
    readonly editorData?: EditorData;
}
export interface MainEditorViewOwnProps {
    readonly localUploader: LocalUploadComponent;
}
export interface MainEditorViewDispatchProps {
    readonly onCloseEditor: (selection: Selection) => void;
    readonly onShowEditorError: (error: EditorError) => void;
    readonly onDeselectFile: (fileId: string) => void;
}
export declare type MainEditorViewProps = MainEditorViewStateProps & MainEditorViewOwnProps & MainEditorViewDispatchProps;
export declare class MainEditorView extends Component<MainEditorViewProps> {
    render(): JSX.Element | null;
    private renderContent;
    private renderError;
    private onEditorError;
    private onEditorSave;
    private onCancel;
    private urltoFile;
}
declare const _default;
export default _default;
