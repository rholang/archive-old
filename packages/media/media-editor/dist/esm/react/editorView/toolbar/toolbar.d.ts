import * as React from 'react';
import { Component } from 'react';
import { InjectedIntlProps } from 'react-intl';
import { WithAnalyticsEventsProps } from '@atlaskit/analytics-next';
import { Tool } from '../../../common';
export declare type PopupState = 'none' | 'color' | 'lineWidth' | 'shape';
export declare const tools: Tool[];
export interface ToolbarProps {
    readonly color: string;
    readonly tool: Tool;
    readonly lineWidth: number;
    readonly onSave: () => void;
    readonly onCancel: () => void;
    readonly onToolChanged: (tool: Tool) => void;
    readonly onColorChanged: (color: string) => void;
    readonly onLineWidthChanged: (lineWidth: number) => void;
}
export interface ToolbarState {
    readonly popup: PopupState;
}
export declare class Toolbar extends Component<ToolbarProps & InjectedIntlProps & WithAnalyticsEventsProps, ToolbarState> {
    state: ToolbarState;
    onColorButtonClick: () => void;
    onLineWidthButtonClick: () => void;
    onShapeButtonClick: () => void;
    render(): JSX.Element;
    private onToolClick;
    private renderSimpleTool;
    private showOrHidePopup;
}
declare const _default: React.ForwardRefExoticComponent<Pick<ToolbarProps & WithAnalyticsEventsProps, "color" | "tool" | "lineWidth" | "onSave" | "onCancel" | "onToolChanged" | "onColorChanged" | "onLineWidthChanged"> & React.RefAttributes<any>>;
export default _default;
