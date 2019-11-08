import { Component } from 'react';
export declare const THICKNESS_MIN = 4;
export declare const THICKNESS_MAX = 12;
export interface LineWidthPopupProps {
    readonly isOpen: boolean;
    readonly lineWidth: number;
    readonly onLineWidthClick: (lineWidth: number) => void;
    readonly onClose: () => void;
}
export declare class LineWidthPopup extends Component<LineWidthPopupProps> {
    private closeSoonTimeout?;
    private closeSoon;
    private cancelCloseSoon;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private onSliderChange;
}
