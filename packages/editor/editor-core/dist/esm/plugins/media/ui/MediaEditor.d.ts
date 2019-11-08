import * as React from 'react';
import { EditorView } from 'prosemirror-view';
import { MediaEditorState } from '../types';
declare type Props = {
    mediaEditorState: MediaEditorState;
    view: EditorView;
};
export default class MediaEditor extends React.PureComponent<Props> {
    private onUploadStart;
    private onClose;
    render(): JSX.Element | null;
}
export {};
