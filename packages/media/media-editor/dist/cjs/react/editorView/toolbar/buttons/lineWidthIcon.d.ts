import { Component } from 'react';
export interface LineWidthButtonProps {
    readonly isActive: boolean;
    readonly lineWidth: number;
    readonly onLineWidthClick: (lineWidth: number) => void;
}
export declare class LineWidthIcon extends Component<LineWidthButtonProps> {
    private getCircleSize;
    render(): JSX.Element;
}
