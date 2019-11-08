/// <reference types="react" />
import { DotsAppearance, Spacing, Size } from '../components/Dots';
export declare const Container: import("styled-components").StyledComponentClass<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
interface IndicatorButtonProps {
    selected: boolean;
    appearance: DotsAppearance;
    gutter: Spacing;
    size: Size;
}
export declare const IndicatorButton: import("styled-components").StyledComponentClass<import("react").ClassAttributes<HTMLButtonElement> & import("react").ButtonHTMLAttributes<HTMLButtonElement> & IndicatorButtonProps, any, import("react").ClassAttributes<HTMLButtonElement> & import("react").ButtonHTMLAttributes<HTMLButtonElement> & IndicatorButtonProps>;
export declare const IndicatorDiv: import("styled-components").StyledComponentClass<import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & IndicatorButtonProps, any, import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & IndicatorButtonProps>;
export {};
