import * as React from 'react';
import { Component } from 'react';
import { InjectedIntlProps } from 'react-intl';
import { CancelInputType, Tool, Dimensions, ShapeParameters } from '../../common';
export declare const TOOLBAR_HEIGHT = 64;
export interface EditorViewProps {
    readonly imageUrl: string;
    readonly onSave: (image: string, dimensions: Dimensions) => void;
    readonly onCancel: (input: CancelInputType) => void;
    readonly onError: (message: string) => void;
    readonly onAnyEdit?: (tool: Tool, shapeParameters: ShapeParameters) => void;
}
export interface EditorViewState {
    readonly dimensions: Dimensions;
    readonly color: string;
    readonly lineWidth: number;
    readonly tool: Tool;
}
export declare class EditorView extends Component<EditorViewProps & InjectedIntlProps, EditorViewState> {
    private loadParameters?;
    private rootDiv?;
    state: EditorViewState;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    renderEditor(): JSX.Element;
    renderToolbar(): JSX.Element;
    private onLoad;
    private onError;
    private onSave;
    private saveProperties;
    private loadProperties;
    private handleEsc;
}
declare const _default: React.ComponentClass<EditorViewProps, any> & {
    WrappedComponent: ReactIntl.ComponentConstructor<EditorViewProps & InjectedIntlProps>;
};
export default _default;
