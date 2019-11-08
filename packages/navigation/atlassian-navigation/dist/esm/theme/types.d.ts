import { CSSObject } from '@emotion/core';
export declare type CSSProperties = CSSObject & {
    backgroundColor: string;
    color: string;
};
export declare type ButtonCSSProperties = CSSProperties & {
    boxShadow: string;
};
export declare type ButtonFocusCSSProperties = {
    boxShadow: string;
    color: string;
};
export declare type ButtonCSSContext = {
    default: ButtonCSSProperties;
    hover: ButtonCSSProperties;
    focus: ButtonFocusCSSProperties;
    active: ButtonCSSProperties;
};
export declare type CreateCSS = ButtonCSSContext;
export declare type IconButtonCSS = ButtonCSSContext;
export declare type PrimaryButtonCSS = ButtonCSSContext;
export declare type NavigationCSS = CSSProperties;
export declare type SearchCSS = CSSProperties;
export declare type SkeletonCSS = CSSObject & {
    backgroundColor: string;
};
export declare type Mode = {
    create: CreateCSS;
    iconButton: IconButtonCSS;
    navigation: NavigationCSS;
    primaryButton: PrimaryButtonCSS;
    search: SearchCSS;
    skeleton: SkeletonCSS;
};
export declare type NavigationTheme = {
    mode: Mode;
};
