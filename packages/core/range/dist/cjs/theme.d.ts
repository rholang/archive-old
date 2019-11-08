/// <reference types="@atlaskit/theme/components" />
export interface ThemeTokensThumb {
    background: string;
    border: string;
}
export interface ThemeTokensTrack {
    lower: string;
    upper: string;
}
export interface ThemeTokens {
    thumb: {
        default: ThemeTokensThumb;
        disabled: {
            boxShadow: string;
        };
        focus: ThemeTokensThumb;
    };
    track: {
        background: string;
        default: ThemeTokensTrack;
        disabled: ThemeTokensTrack;
        hover: ThemeTokensTrack;
    };
}
export declare const thumb: {
    default: {
        background: any;
        border: any;
    };
    disabled: {
        boxShadow: any;
    };
    focus: {
        background: any;
        border: any;
    };
};
export declare const track: {
    background: any;
    default: {
        lower: any;
        upper: any;
    };
    disabled: {
        lower: any;
        upper: any;
    };
    hover: {
        lower: any;
        upper: any;
    };
};
export declare const Theme: import("@atlaskit/theme/components").Theme<ThemeTokens, any>;
