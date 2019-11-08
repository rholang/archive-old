import * as React from 'react';
import { EditorView } from 'prosemirror-view';
import { TypeAheadItem } from '../types';
export declare const TypeAheadContent: React.ComponentClass<React.HTMLAttributes<{}>>;
export declare type TypeAheadProps = {
    active: boolean;
    items?: Array<TypeAheadItem>;
    isLoading?: boolean;
    currentIndex: number;
    editorView: EditorView;
    anchorElement?: HTMLElement;
    popupsMountPoint?: HTMLElement;
    popupsBoundariesElement?: HTMLElement;
    popupsScrollableElement?: HTMLElement;
    highlight?: JSX.Element | null;
};
export declare class TypeAhead extends React.Component<TypeAheadProps> {
    insertByIndex: (index: number) => void;
    setCurrentIndex: (index: number) => void;
    render(): JSX.Element | null;
}
