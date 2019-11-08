import * as React from 'react';
import { Node as PmNode } from 'prosemirror-model';
import { EditorView } from 'prosemirror-view';
import { TablePluginState, ColumnResizingPluginState } from '../types';
import { Props } from './table';
import { WidthPluginState } from '../../width';
export interface ComponentProps extends Props {
    view: EditorView;
    node: PmNode;
    allowColumnResizing: boolean;
    contentDOM: (element: HTMLElement | undefined) => void;
    containerWidth: WidthPluginState;
    pluginState: TablePluginState;
    tableResizingPluginState?: ColumnResizingPluginState;
    width: number;
}
interface TableState {
    scroll: number;
    tableContainerWidth: string;
    parentWidth?: number;
}
declare class TableComponent extends React.Component<ComponentProps, TableState> {
    state: {
        scroll: number;
        tableContainerWidth: string;
        parentWidth: undefined;
    };
    private wrapper?;
    private table?;
    private rightShadow?;
    private leftShadow?;
    private frameId?;
    private node?;
    private containerWidth?;
    private layoutSize?;
    constructor(props: ComponentProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: ComponentProps): void;
    render(): JSX.Element;
    private handleScroll;
    private handleTableResizing;
    private scaleTable;
    private handleAutoSize;
    private handleWindowResize;
    private updateTableContainerWidth;
    private getParentNodeWidth;
    private updateParentWidth;
    private tableNodeLayoutSize;
    private scaleTableDebounced;
    private handleTableResizingDebounced;
    private handleScrollDebounced;
    private handleAutoSizeDebounced;
    private handleWindowResizeDebounced;
}
export declare const updateOverflowShadows: (wrapper?: HTMLElement | null | undefined, table?: HTMLElement | null | undefined, rightShadow?: HTMLElement | null | undefined, leftShadow?: HTMLElement | null | undefined) => void;
export default TableComponent;
