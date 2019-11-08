/// <reference types="react" />
declare type Appearance = 'warning' | 'error' | 'announcement' | undefined;
interface VisibilityProps {
    bannerHeight: number;
    isOpen?: boolean;
}
export declare const getMaxHeight: ({ appearance }: {
    appearance: Appearance;
}) => "88px" | "52px";
export declare const backgroundColor: any;
export declare const Container: import("styled-components").StyledComponentClass<import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & {
    appearance: Appearance;
}, any, import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & {
    appearance: Appearance;
}>;
export declare const testErrorBackgroundColor: any;
export declare const testErrorTextColor: any;
export declare const textColor: any;
export declare const Content: import("styled-components").StyledComponentClass<import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & {
    appearance: Appearance;
}, any, import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & {
    appearance: Appearance;
}>;
export declare const Icon: import("styled-components").StyledComponentClass<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, any, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>>;
export declare const Visibility: import("styled-components").StyledComponentClass<import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & VisibilityProps, any, import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & VisibilityProps>;
export declare const Text: import("styled-components").StyledComponentClass<import("react").ClassAttributes<HTMLSpanElement> & import("react").HTMLAttributes<HTMLSpanElement> & {
    appearance: Appearance;
}, any, import("react").ClassAttributes<HTMLSpanElement> & import("react").HTMLAttributes<HTMLSpanElement> & {
    appearance: Appearance;
}>;
export {};
