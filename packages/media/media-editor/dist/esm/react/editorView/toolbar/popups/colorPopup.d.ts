import { Component } from 'react';
interface ColorCombinations {
    [backgroundColor: string]: string;
}
export declare const PICKER_COLORS: ColorCombinations;
export declare const DEFAULT_COLOR: any;
export interface ColorPopupProps {
    readonly isOpen: boolean;
    readonly color: string;
    readonly onPickColor: (color: string) => void;
    readonly onClose: () => void;
}
export declare class ColorPopup extends Component<ColorPopupProps> {
    private closeSoonTimeout?;
    private closeSoon;
    private cancelCloseSoon;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private renderButtons;
}
export {};
