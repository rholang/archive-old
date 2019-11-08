/// <reference types="@atlaskit/theme/components" />
export declare type ThemeAppearance = 'standard' | 'subtle' | 'none';
export declare type ThemeProps = {
    appearance: ThemeAppearance;
    mode: 'dark' | 'light';
};
export declare type ThemeTokens = {
    borderColor: string;
    borderColorFocus: string;
    backgroundColor: string;
    backgroundColorFocus: string;
    backgroundColorHover: string;
    disabledRules: {
        backgroundColor: string;
        backgroundColorFocus: string;
        backgroundColorHover: string;
        borderColor: string;
        borderColorFocus: string;
        textColor: string;
    };
    invalidRules: {
        borderColor: string;
        borderColorFocus: string;
        backgroundColor: string;
        backgroundColorFocus: string;
        backgroundColorHover: string;
    };
    textColor: string;
    placeholderTextColor: string;
};
export declare const themeTokens: {
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
    invalidRules: {
        light: {
            borderColor: any;
            borderColorFocus: any;
            backgroundColor: any;
            backgroundColorFocus: any;
            backgroundColorHover: any;
        };
        dark: {
            borderColor: any;
            borderColorFocus: any;
            backgroundColor: any;
            backgroundColorFocus: any;
            backgroundColorHover: any;
        };
    };
    textColor: {
        light: any;
        dark: any;
    };
    placeholderTextColor: {
        light: any;
        dark: any;
    };
};
export declare const Theme: import("@atlaskit/theme/components").Theme<ThemeTokens, ThemeProps>;
