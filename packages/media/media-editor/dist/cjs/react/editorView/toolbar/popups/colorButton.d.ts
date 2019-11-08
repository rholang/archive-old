import { Component } from 'react';
export interface ColorButtonProps {
    readonly color: string;
    readonly isSelected: boolean;
    readonly onClick: (color: string) => void;
}
export declare class ColorButton extends Component<ColorButtonProps> {
    render(): JSX.Element;
    private checkMark;
}
