export declare type Appearance = 'drawer' | 'standalone';
export declare type ThemingPublicApi = {
    primaryTextColor?: string;
    secondaryTextColor?: string;
    primaryHoverBackgroundColor?: string;
    secondaryHoverBackgroundColor?: string;
};
export declare type ItemStateTokens = {
    background?: string;
    text?: string;
    secondaryText?: string;
};
export declare type ThemeTokens = {
    padding?: any;
    hover?: ItemStateTokens;
    default?: ItemStateTokens;
    active?: ItemStateTokens;
};
export declare type ThemeProps = {};
export declare type ApplyThemeFn = (props: ThemeProps) => ThemeTokens;
declare type ThemeFn = (theme: ApplyThemeFn, props: ThemeProps) => ThemeTokens;
export declare type CustomThemeResult = {
    itemTheme: ThemeFn;
    childItemTheme: ThemeFn;
    topLevelItemWrapperTheme: ThemeFn;
};
export declare type WithTheme = {
    theme?: ThemingPublicApi;
    appearance?: Appearance;
};
export declare type Themed<T> = T & {
    theme?: ThemeFn;
    appearance?: Appearance;
};
export {};
