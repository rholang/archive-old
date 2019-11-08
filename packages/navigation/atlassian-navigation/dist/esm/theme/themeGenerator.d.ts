import { NavigationTheme } from './types';
export declare type Colors = {
    backgroundColor: string;
    color: string;
};
export declare type GenerateThemeArgs = {
    name?: string;
    primary: Colors;
    secondary?: Colors;
};
export declare const generateTheme: (args: GenerateThemeArgs) => NavigationTheme;
