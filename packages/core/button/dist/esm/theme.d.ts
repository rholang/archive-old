/// <reference types="@atlaskit/theme/components" />
import { ThemeProps, ThemeTokens, ThemeMode, ThemeFallbacks } from './types';
export declare const fallbacks: ThemeFallbacks;
export declare const baseTheme: {
    background: {
        default: {
            default: {
                light: any;
                dark: any;
            };
            hover: {
                light: any;
                dark: any;
            };
            active: {
                light: string;
                dark: any;
            };
            disabled: {
                light: any;
                dark: any;
            };
            selected: {
                light: any;
                dark: any;
            };
            focusSelected: {
                light: any;
                dark: any;
            };
        };
        primary: {
            default: {
                light: any;
                dark: any;
            };
            hover: {
                light: any;
                dark: any;
            };
            active: {
                light: any;
                dark: any;
            };
            disabled: {
                light: any;
                dark: any;
            };
            selected: {
                light: any;
                dark: any;
            };
            focusSelected: {
                light: any;
                dark: any;
            };
        };
        warning: {
            default: {
                light: any;
                dark: any;
            };
            hover: {
                light: any;
                dark: any;
            };
            active: {
                light: any;
                dark: any;
            };
            disabled: {
                light: any;
                dark: any;
            };
            selected: {
                light: any;
                dark: any;
            };
            focusSelected: {
                light: any;
                dark: any;
            };
        };
        danger: {
            default: {
                light: any;
                dark: any;
            };
            hover: {
                light: any;
                dark: any;
            };
            active: {
                light: any;
                dark: any;
            };
            disabled: {
                light: any;
                dark: any;
            };
            selected: {
                light: any;
                dark: any;
            };
            focusSelected: {
                light: any;
                dark: any;
            };
        };
        link: {
            default: {
                light: string;
                dark: string;
            };
            selected: {
                light: any;
                dark: any;
            };
            focusSelected: {
                light: any;
                dark: any;
            };
        };
        subtle: {
            default: {
                light: string;
                dark: string;
            };
            hover: {
                light: any;
                dark: any;
            };
            active: {
                light: string;
                dark: any;
            };
            disabled: {
                light: string;
                dark: string;
            };
            selected: {
                light: any;
                dark: any;
            };
            focusSelected: {
                light: any;
                dark: any;
            };
        };
        'subtle-link': {
            default: {
                light: string;
                dark: string;
            };
            selected: {
                light: any;
                dark: any;
            };
            focusSelected: {
                light: any;
                dark: any;
            };
        };
    };
    boxShadowColor: {
        default: {
            focus: {
                light: string;
                dark: any;
            };
            focusSelected: {
                light: string;
                dark: any;
            };
        };
        primary: {
            focus: {
                light: string;
                dark: any;
            };
            focusSelected: {
                light: string;
                dark: any;
            };
        };
        warning: {
            focus: {
                light: any;
                dark: any;
            };
            focusSelected: {
                light: any;
                dark: any;
            };
        };
        danger: {
            focus: {
                light: any;
                dark: any;
            };
            focusSelected: {
                light: any;
                dark: any;
            };
        };
        link: {
            focus: {
                light: string;
                dark: any;
            };
            focusSelected: {
                light: string;
                dark: any;
            };
        };
        subtle: {
            focus: {
                light: string;
                dark: any;
            };
            focusSelected: {
                light: string;
                dark: any;
            };
        };
        'subtle-link': {
            focus: {
                light: string;
                dark: any;
            };
            focusSelected: {
                light: string;
                dark: any;
            };
        };
    };
    color: {
        default: {
            default: {
                light: any;
                dark: any;
            };
            active: {
                light: any;
                dark: any;
            };
            disabled: {
                light: any;
                dark: any;
            };
            selected: {
                light: any;
                dark: any;
            };
            focusSelected: {
                light: any;
                dark: any;
            };
        };
        primary: {
            default: {
                light: any;
                dark: any;
            };
            disabled: {
                light: any;
                dark: any;
            };
            selected: {
                light: any;
                dark: any;
            };
            focusSelected: {
                light: any;
                dark: any;
            };
        };
        warning: {
            default: {
                light: any;
                dark: any;
            };
            disabled: {
                light: any;
                dark: any;
            };
            selected: {
                light: any;
                dark: any;
            };
            focusSelected: {
                light: any;
                dark: any;
            };
        };
        danger: {
            default: {
                light: any;
                dark: any;
            };
            disabled: {
                light: any;
                dark: any;
            };
            selected: {
                light: any;
                dark: any;
            };
            focusSelected: {
                light: any;
                dark: any;
            };
        };
        link: {
            default: {
                light: any;
                dark: any;
            };
            hover: {
                light: any;
                dark: any;
            };
            active: {
                light: any;
                dark: any;
            };
            disabled: {
                light: any;
                dark: any;
            };
            selected: {
                light: any;
                dark: any;
            };
            focusSelected: {
                light: any;
                dark: any;
            };
        };
        subtle: {
            default: {
                light: any;
                dark: any;
            };
            active: {
                light: any;
                dark: any;
            };
            disabled: {
                light: any;
                dark: any;
            };
            selected: {
                light: any;
                dark: any;
            };
            focusSelected: {
                light: any;
                dark: any;
            };
        };
        'subtle-link': {
            default: {
                light: any;
                dark: any;
            };
            hover: {
                light: any;
                dark: any;
            };
            active: {
                light: any;
                dark: any;
            };
            disabled: {
                light: any;
                dark: any;
            };
            selected: {
                light: any;
                dark: any;
            };
            focusSelected: {
                light: any;
                dark: any;
            };
        };
    };
};
export declare function applyPropertyStyle(property: string, { appearance, state, mode, }: {
    appearance?: string;
    state?: string;
    mode?: ThemeMode;
}, theme: any): any;
export declare const Theme: import("@atlaskit/theme/components").Theme<ThemeTokens, ThemeProps>;
