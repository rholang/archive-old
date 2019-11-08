/// <reference types="react" />
/// <reference types="@emotion/core" />
import { AppearanceTypes } from '../../types';
declare const _default: import("styled-components").StyledComponentClass<import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & {
    appearance?: "normal" | "error" | "info" | "success" | "warning" | undefined;
}, any, import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & {
    appearance?: "normal" | "error" | "info" | "success" | "warning" | undefined;
}>;
export default _default;
export declare const Header: import("styled-components").StyledComponentClass<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export declare const Icon: import("styled-components").StyledComponentClass<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export declare const Title: import("styled-components").StyledComponentClass<import("react").ClassAttributes<HTMLSpanElement> & import("react").HTMLAttributes<HTMLSpanElement> & {
    appearance?: "normal" | "error" | "info" | "success" | "warning" | undefined;
}, any, import("react").ClassAttributes<HTMLSpanElement> & import("react").HTMLAttributes<HTMLSpanElement> & {
    appearance?: "normal" | "error" | "info" | "success" | "warning" | undefined;
}>;
interface DismissButtonProps {
    appearance?: AppearanceTypes;
    focusRingColor: string;
}
export declare const DismissButton: import("styled-components").StyledComponentClass<import("react").ClassAttributes<HTMLButtonElement> & import("react").ButtonHTMLAttributes<HTMLButtonElement> & DismissButtonProps, any, import("react").ClassAttributes<HTMLButtonElement> & import("react").ButtonHTMLAttributes<HTMLButtonElement> & DismissButtonProps>;
export declare const Content: import("styled-components").StyledComponentClass<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
interface ExpanderProps {
    isExpanded: boolean;
}
export declare const Expander: import("styled-components").StyledComponentClass<import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & ExpanderProps, any, import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & ExpanderProps>;
export declare const Description: import("styled-components").StyledComponentClass<import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & {
    appearance?: "normal" | "error" | "info" | "success" | "warning" | undefined;
}, any, import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & {
    appearance?: "normal" | "error" | "info" | "success" | "warning" | undefined;
}>;
