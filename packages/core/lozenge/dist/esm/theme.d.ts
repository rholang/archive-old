/// <reference types="@atlaskit/theme/components" />
/** Note:
 * Lozenge does not support dark mode at the moment.
 * Hence, color values are the same.
 */
export declare const defaultBackgroundColor: {
    default: {
        light: any;
        dark: any;
    };
    inprogress: {
        light: any;
        dark: any;
    };
    moved: {
        light: any;
        dark: any;
    };
    new: {
        light: any;
        dark: any;
    };
    removed: {
        light: any;
        dark: any;
    };
    success: {
        light: any;
        dark: any;
    };
};
export declare const defaultTextColor: {
    default: {
        light: any;
        dark: any;
    };
    inprogress: {
        light: any;
        dark: any;
    };
    moved: {
        light: any;
        dark: any;
    };
    new: {
        light: any;
        dark: any;
    };
    removed: {
        light: any;
        dark: any;
    };
    success: {
        light: any;
        dark: any;
    };
};
export declare const boldBackgroundColor: {
    default: {
        light: any;
        dark: any;
    };
    inprogress: {
        light: any;
        dark: any;
    };
    moved: {
        light: any;
        dark: any;
    };
    new: {
        light: any;
        dark: any;
    };
    removed: {
        light: any;
        dark: any;
    };
    success: {
        light: any;
        dark: any;
    };
};
export declare const boldTextColor: {
    default: {
        light: any;
        dark: any;
    };
    inprogress: {
        light: any;
        dark: any;
    };
    moved: {
        light: any;
        dark: any;
    };
    new: {
        light: any;
        dark: any;
    };
    removed: {
        light: any;
        dark: any;
    };
    success: {
        light: any;
        dark: any;
    };
};
export declare type ThemeAppearance = 'default' | 'inprogress' | 'moved' | 'new' | 'removed' | 'success' | Record<string, any>;
export interface ThemeProps {
    appearance: ThemeAppearance | Record<string, any>;
    isBold: boolean;
    maxWidth: number | string;
}
export interface ThemeTokens {
    backgroundColor: string;
    maxWidth: number | string;
    textColor: string;
}
export declare const Theme: import("@atlaskit/theme/components").Theme<ThemeTokens, ThemeProps>;
