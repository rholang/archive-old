/// <reference types="react-intl" />
import * as React from 'react';
import EditorViewType, { EditorViewProps } from './editorView';
export interface AsyncEditorViewState {
    EditorView?: typeof EditorViewType;
}
export default class AsyncEditorView extends React.PureComponent<EditorViewProps & AsyncEditorViewState, AsyncEditorViewState> {
    static displayName: string;
    static EditorView?: typeof EditorViewType;
    state: {
        EditorView: (React.ComponentClass<EditorViewProps, any> & {
            WrappedComponent: ReactIntl.ComponentConstructor<EditorViewProps & ReactIntl.InjectedIntlProps>;
        }) | undefined;
    };
    UNSAFE_componentWillMount(): Promise<void>;
    render(): JSX.Element;
}
