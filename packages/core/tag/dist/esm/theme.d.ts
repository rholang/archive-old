interface Themes {
    light: string | number;
    dark: string | number;
}
interface Properties {
    green: Themes;
    standard: Themes;
    blue: Themes;
    red: Themes;
    purple: Themes;
    grey: Themes;
    teal: Themes;
    yellow: Themes;
    greenLight: Themes;
    blueLight: Themes;
    redLight: Themes;
    purpleLight: Themes;
    greyLight: Themes;
    tealLight: Themes;
    yellowLight: Themes;
}
export declare const textColor: (props: any) => Properties;
export declare const backgroundColor: (props: any) => Properties;
export declare const textColorHover: (props: any) => Properties;
export declare const backgroundColorHover: (props: any) => Properties;
export {};
