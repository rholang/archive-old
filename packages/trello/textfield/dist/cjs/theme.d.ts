import { TextFieldThemeProps, TextFieldStyleProps } from './types';
export declare function applyPropertyStyle(property: keyof TextFieldStyleProps, { appearance, ...props }: TextFieldThemeProps, baseThemeStyles: TextFieldStyleProps): any;
declare const theme: (adgTheme: Function, themeProps: TextFieldThemeProps) => {
    container: any;
    input: any;
};
export default theme;
