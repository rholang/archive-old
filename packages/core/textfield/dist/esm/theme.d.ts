/// <reference types="@atlaskit/theme/components" />
import { CSSProperties } from 'react';
export declare type ThemeAppearance = 'subtle' | 'standard' | 'none';
export interface ThemeProps {
    appearance: ThemeAppearance;
    isDisabled: boolean;
    isInvalid: boolean;
    isFocused: boolean;
    isHovered: boolean;
    isMonospaced: boolean;
    isCompact: boolean;
    mode: 'dark' | 'light';
    width?: string | number;
}
export interface ThemeTokens {
    container: CSSProperties;
    input: CSSProperties;
}
export declare const Theme: import("@atlaskit/theme/components").Theme<ThemeTokens, ThemeProps>;
export declare const themeTokens: {
    backgroundColor: {
        standard: {
            light: any;
            dark: any;
        };
        subtle: {
            light: string;
            dark: string;
        };
        none: {
            light: string;
            dark: string;
        };
    };
    backgroundColorFocus: {
        standard: {
            light: any;
            dark: any;
        };
        subtle: {
            light: any;
            dark: any;
        };
        none: {
            light: string;
            dark: string;
        };
    };
    backgroundColorHover: {
        standard: {
            light: any;
            dark: any;
        };
        subtle: {
            light: any;
            dark: any;
        };
        none: {
            light: string;
            dark: string;
        };
    };
    borderColor: {
        standard: {
            light: any;
            dark: any;
        };
        subtle: {
            light: string;
            dark: string;
        };
        none: {
            light: string;
            dark: string;
        };
    };
    borderColorFocus: {
        standard: {
            light: any;
            dark: any;
        };
        subtle: {
            light: any;
            dark: any;
        };
        none: {
            light: string;
            dark: string;
        };
    };
    placeholderTextColor: {
        light: any;
        dark: any;
    };
    textColor: {
        light: any;
        dark: any;
    };
    invalidRules: {
        light: {
            backgroundColor: any;
            backgroundColorFocus: any;
            backgroundColorHover: any;
            borderColor: any;
            borderColorFocus: any;
        };
        dark: {
            backgroundColor: any;
            backgroundColorFocus: any;
            backgroundColorHover: any;
            borderColor: any;
            borderColorFocus: any;
        };
    };
    disabledRules: {
        light: {
            backgroundColor: any;
            backgroundColorFocus: any;
            backgroundColorHover: any;
            borderColor: any;
            borderColorFocus: any;
            textColor: any;
        };
        dark: {
            backgroundColor: any;
            backgroundColorFocus: any;
            backgroundColorHover: any;
            borderColor: any;
            borderColorFocus: any;
            textColor: any;
        };
    };
};
