/// <reference types="@atlaskit/theme/components" />
export declare type ThemeAppearance = 'added' | 'default' | 'important' | 'primary' | 'primaryInverted' | 'removed' | Record<string, any>;
export declare type ThemeMode = 'dark' | 'light';
export interface ThemeProps {
    appearance: ThemeAppearance;
    mode: ThemeMode;
}
export interface ThemeTokens {
    backgroundColor: string;
    textColor: string;
}
export declare const backgroundColors: {
    added: {
        light: any;
        dark: any;
    };
    default: {
        light: any;
        dark: any;
    };
    important: {
        light: any;
        dark: any;
    };
    primary: {
        light: any;
        dark: any;
    };
    primaryInverted: {
        light: any;
        dark: any;
    };
    removed: {
        light: any;
        dark: any;
    };
};
export declare const textColors: {
    added: {
        light: any;
        dark: any;
    };
    default: {
        light: any;
        dark: any;
    };
    important: {
        light: any;
        dark: any;
    };
    primary: {
        light: any;
        dark: any;
    };
    primaryInverted: {
        light: any;
        dark: any;
    };
    removed: {
        light: any;
        dark: any;
    };
};
export declare const Theme: import("@atlaskit/theme/components").Theme<ThemeTokens, ThemeProps>;
