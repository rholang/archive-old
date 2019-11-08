import { PureComponent } from 'react';
import { SupportedLanguages } from '../supportedLanguages';
import { Theme, ThemeProps } from '../themes/themeBuilder';
declare type CodeProps = {
    /** The style object to apply to code */
    codeStyle?: {};
    /** The element or custom react component to use in place of the default code tag */
    codeTagProps?: {};
    /** The language in which the code is written */
    language: SupportedLanguages | string;
    /** The style object to apply to the container that shows line number */
    lineNumberContainerStyle: {};
    /** The element or custom react component to use in place of the default span tag */
    preTag: Node | string;
    /** Indicates whether or not to show line numbers */
    showLineNumbers: boolean;
    /** The code to be formatted */
    text: string;
    /** A custom theme to be applied, implements the Theme interface */
    theme?: Theme | ThemeProps;
};
export default class Code extends PureComponent<CodeProps, {}> {
    static defaultProps: {
        theme: {};
        showLineNumbers: boolean;
        lineNumberContainerStyle: {};
        codeTagProps: {};
        preTag: string;
    };
    render(): JSX.Element;
}
export {};
