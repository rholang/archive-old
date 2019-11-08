import * as React from 'react';
import * as PropTypes from 'prop-types';
import { EditorView } from 'prosemirror-view';
import { EventDispatcher, Dispatch } from '../../../../event-dispatcher';
import { EditorAppearanceComponentProps } from '../../../../types';
import { EditorProps } from '../editor-props-type';
export declare type EditorSharedConfig = {
    editorView: EditorView;
    eventDispatcher: EventDispatcher;
    dispatch: Dispatch;
    primaryToolbarComponents: EditorAppearanceComponentProps['primaryToolbarComponents'];
    contentComponents: EditorAppearanceComponentProps['contentComponents'];
    popupsMountPoint: EditorProps['popupsMountPoint'];
    popupsBoundariesElement: EditorProps['popupsBoundariesElement'];
    popupsScrollableElement: EditorProps['popupsScrollableElement'];
    providerFactory: EditorAppearanceComponentProps['providerFactory'];
    disabled: EditorProps['disabled'];
    onChange?: EditorProps['onChange'];
};
export declare class EditorSharedConfigProvider extends React.Component<{
    value: EditorSharedConfig | null;
}, any> {
    static childContextTypes: {
        editorSharedConfig: PropTypes.Requireable<any>;
    };
    getChildContext(): {
        editorSharedConfig: EditorSharedConfig | null;
    };
    render(): JSX.Element;
}
export declare class EditorSharedConfigConsumer extends React.Component<{
    children: (value: EditorSharedConfig | null) => React.ReactNode | null;
}> {
    static contextTypes: {
        editorSharedConfig: PropTypes.Requireable<any>;
    };
    render(): JSX.Element;
}
export declare const useEditorSharedConfig: () => EditorSharedConfig | null;
