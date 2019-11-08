import { __assign, __extends } from "tslib";
import React, { PureComponent } from 'react';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { normalizeLanguage } from '../supportedLanguages';
import { applyTheme } from '../themes/themeBuilder';
var Code = /** @class */ (function (_super) {
    __extends(Code, _super);
    function Code() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Code.prototype.render = function () {
        var inlineCodeStyle = applyTheme(this.props.theme).inlineCodeStyle;
        var language = normalizeLanguage(this.props.language);
        var props = {
            language: language,
            PreTag: this.props.preTag,
            style: this.props.codeStyle || inlineCodeStyle,
            showLineNumbers: this.props.showLineNumbers,
            lineNumberContainerStyle: this.props.lineNumberContainerStyle,
            codeTagProps: this.props.codeTagProps,
        };
        return React.createElement(SyntaxHighlighter, __assign({}, props), this.props.text);
    };
    Code.defaultProps = {
        theme: {},
        showLineNumbers: false,
        lineNumberContainerStyle: {},
        codeTagProps: {},
        preTag: 'span',
    };
    return Code;
}(PureComponent));
export default Code;
//# sourceMappingURL=Code.js.map