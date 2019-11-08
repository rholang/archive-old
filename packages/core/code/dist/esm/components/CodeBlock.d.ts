import { PureComponent } from 'react';
import { SupportedLanguages } from '../supportedLanguages';
import { Theme, ThemeProps } from '../themes/themeBuilder';
declare type CodeBlockProps = {
    /** The code to be formatted */
    text: string;
    /** The language in which the code is written */
    language: SupportedLanguages | string;
    /** Indicates whether or not to show line numbers */
    showLineNumbers?: boolean;
    /** A custom theme to be applied, implements the Theme interface */
    theme?: Theme | ThemeProps;
};
export default class CodeBlock extends PureComponent<CodeBlockProps, {}> {
    static displayName: string;
    static defaultProps: {
        showLineNumbers: boolean;
        language: string;
        theme: {};
    };
    handleCopy: (event: any) => void;
    render(): JSX.Element;
}
export {};
