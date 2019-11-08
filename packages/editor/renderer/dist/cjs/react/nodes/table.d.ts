import * as React from 'react';
import { Node as PMNode } from 'prosemirror-model';
import { TableLayout } from '@atlaskit/adf-schema';
import { OverflowShadowProps, SortOrder } from '@atlaskit/editor-common';
import { RendererAppearance } from '../../ui/Renderer/types';
import { WithSmartCardStorageProps } from '../../ui/SmartCardStorage';
export interface TableProps {
    columnWidths?: Array<number>;
    layout: TableLayout;
    isNumberColumnEnabled: boolean;
    children: React.ReactElement<any> | Array<React.ReactElement<any>>;
    tableNode?: PMNode;
    renderWidth: number;
    rendererAppearance?: RendererAppearance;
    allowDynamicTextSizing?: boolean;
    allowColumnSorting?: boolean;
}
export interface ScaleOptions {
    renderWidth: number;
    tableWidth: number;
    maxScale: number;
}
export declare const calcScalePercent: ({ renderWidth, tableWidth, maxScale, }: ScaleOptions) => number;
interface TableOrderStatus {
    columnIndex: number;
    order: SortOrder;
}
interface TableState {
    tableOrderStatus?: TableOrderStatus;
}
export declare class TableContainer extends React.Component<TableProps & OverflowShadowProps & WithSmartCardStorageProps, TableState> {
    state: {
        tableOrderStatus: undefined;
    };
    render(): JSX.Element | null;
    private addNumberColumnIndexes;
    private addSortableColumn;
    private changeSortOrder;
    private renderColgroup;
}
declare const _default: {
    new (props: Readonly<Pick<TableProps & WithSmartCardStorageProps, "layout" | "children" | "rendererAppearance" | "allowDynamicTextSizing" | "allowColumnSorting" | "renderWidth" | "isNumberColumnEnabled" | "columnWidths" | "tableNode">>): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<TableProps & WithSmartCardStorageProps, "layout" | "children" | "rendererAppearance" | "allowDynamicTextSizing" | "allowColumnSorting" | "renderWidth" | "isNumberColumnEnabled" | "columnWidths" | "tableNode">>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<TableProps & WithSmartCardStorageProps, "layout" | "children" | "rendererAppearance" | "allowDynamicTextSizing" | "allowColumnSorting" | "renderWidth" | "isNumberColumnEnabled" | "columnWidths" | "tableNode">> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<TableProps & WithSmartCardStorageProps, "layout" | "children" | "rendererAppearance" | "allowDynamicTextSizing" | "allowColumnSorting" | "renderWidth" | "isNumberColumnEnabled" | "columnWidths" | "tableNode">>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<TableProps & WithSmartCardStorageProps, "layout" | "children" | "rendererAppearance" | "allowDynamicTextSizing" | "allowColumnSorting" | "renderWidth" | "isNumberColumnEnabled" | "columnWidths" | "tableNode">>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<TableProps & WithSmartCardStorageProps, "layout" | "children" | "rendererAppearance" | "allowDynamicTextSizing" | "allowColumnSorting" | "renderWidth" | "isNumberColumnEnabled" | "columnWidths" | "tableNode">>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<TableProps & WithSmartCardStorageProps, "layout" | "children" | "rendererAppearance" | "allowDynamicTextSizing" | "allowColumnSorting" | "renderWidth" | "isNumberColumnEnabled" | "columnWidths" | "tableNode">>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<TableProps & WithSmartCardStorageProps, "layout" | "children" | "rendererAppearance" | "allowDynamicTextSizing" | "allowColumnSorting" | "renderWidth" | "isNumberColumnEnabled" | "columnWidths" | "tableNode">>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<TableProps & WithSmartCardStorageProps, "layout" | "children" | "rendererAppearance" | "allowDynamicTextSizing" | "allowColumnSorting" | "renderWidth" | "isNumberColumnEnabled" | "columnWidths" | "tableNode">>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<TableProps & WithSmartCardStorageProps, "layout" | "children" | "rendererAppearance" | "allowDynamicTextSizing" | "allowColumnSorting" | "renderWidth" | "isNumberColumnEnabled" | "columnWidths" | "tableNode">>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: Pick<TableProps & WithSmartCardStorageProps, "layout" | "children" | "rendererAppearance" | "allowDynamicTextSizing" | "allowColumnSorting" | "renderWidth" | "isNumberColumnEnabled" | "columnWidths" | "tableNode">, context?: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<TableProps & WithSmartCardStorageProps, "layout" | "children" | "rendererAppearance" | "allowDynamicTextSizing" | "allowColumnSorting" | "renderWidth" | "isNumberColumnEnabled" | "columnWidths" | "tableNode">>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<TableProps & WithSmartCardStorageProps, "layout" | "children" | "rendererAppearance" | "allowDynamicTextSizing" | "allowColumnSorting" | "renderWidth" | "isNumberColumnEnabled" | "columnWidths" | "tableNode">> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<TableProps & WithSmartCardStorageProps, "layout" | "children" | "rendererAppearance" | "allowDynamicTextSizing" | "allowColumnSorting" | "renderWidth" | "isNumberColumnEnabled" | "columnWidths" | "tableNode">>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<TableProps & WithSmartCardStorageProps, "layout" | "children" | "rendererAppearance" | "allowDynamicTextSizing" | "allowColumnSorting" | "renderWidth" | "isNumberColumnEnabled" | "columnWidths" | "tableNode">>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<TableProps & WithSmartCardStorageProps, "layout" | "children" | "rendererAppearance" | "allowDynamicTextSizing" | "allowColumnSorting" | "renderWidth" | "isNumberColumnEnabled" | "columnWidths" | "tableNode">>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<TableProps & WithSmartCardStorageProps, "layout" | "children" | "rendererAppearance" | "allowDynamicTextSizing" | "allowColumnSorting" | "renderWidth" | "isNumberColumnEnabled" | "columnWidths" | "tableNode">>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<TableProps & WithSmartCardStorageProps, "layout" | "children" | "rendererAppearance" | "allowDynamicTextSizing" | "allowColumnSorting" | "renderWidth" | "isNumberColumnEnabled" | "columnWidths" | "tableNode">>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<TableProps & WithSmartCardStorageProps, "layout" | "children" | "rendererAppearance" | "allowDynamicTextSizing" | "allowColumnSorting" | "renderWidth" | "isNumberColumnEnabled" | "columnWidths" | "tableNode">>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<TableProps & WithSmartCardStorageProps, "layout" | "children" | "rendererAppearance" | "allowDynamicTextSizing" | "allowColumnSorting" | "renderWidth" | "isNumberColumnEnabled" | "columnWidths" | "tableNode">>, nextState: Readonly<{}>, nextContext: any): void;
    };
    contextType?: React.Context<any> | undefined;
};
export default _default;
