import { Component } from 'react';
import { EditorView } from 'prosemirror-view';
import { CellSelectionType } from './types';
import { Selection } from 'prosemirror-state';
export interface Props {
    editorView: EditorView;
    selection: Selection;
    tableRef?: HTMLTableElement;
    mountPoint?: HTMLElement;
    boundariesElement?: HTMLElement;
    scrollableElement?: HTMLElement;
}
export interface State {
    selectionType?: CellSelectionType;
    left: number;
    top: number;
    indexes: number[];
}
export declare function getSelectionType(selection: Selection): 'column' | 'row' | undefined;
declare class FloatingDeleteButton extends Component<Props, State> {
    constructor(props: Props);
    shouldComponentUpdate(_: Props, nextState: State): boolean;
    /**
     * We derivate the button state from the properties passed.
     * We do this in here because we need this information in different places
     * and this prevent to do multiple width calculations in the same component.
     */
    static getDerivedStateFromProps(nextProps: Readonly<Props>, prevState: State): Partial<State> | null;
    private handleMouseEnter;
    private handleMouseLeave;
    /**
     *
     *
     * @private
     * @memberof FloatingDeleteButton
     */
    private handleClick;
    render(): JSX.Element | null;
}
export default FloatingDeleteButton;
