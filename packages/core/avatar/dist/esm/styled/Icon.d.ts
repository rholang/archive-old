/// <reference types="react" />
import { SizeType } from '../types';
interface OuterProps {
    size?: SizeType;
    bgColor?: string | (() => unknown);
}
export declare const Outer: import("react").ComponentType<import("styled-components").ThemedOuterStyledProps<import("react").ClassAttributes<HTMLSpanElement> & import("react").HTMLAttributes<HTMLSpanElement> & OuterProps, any>>;
export declare const Inner: import("styled-components").StyledComponentClass<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, any, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>>;
export {};
