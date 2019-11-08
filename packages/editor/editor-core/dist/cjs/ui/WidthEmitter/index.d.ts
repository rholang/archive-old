import { Component } from 'react';
import { EditorView } from 'prosemirror-view';
export interface Props {
    editorView: EditorView;
    contentArea?: HTMLElement | null;
}
export default class WidthEmitter extends Component<Props> {
    private width?;
    private debounce;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private broadcastWidth;
}
