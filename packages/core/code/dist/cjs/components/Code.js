"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_syntax_highlighter_1 = require("react-syntax-highlighter");
var supportedLanguages_1 = require("../supportedLanguages");
var themeBuilder_1 = require("../themes/themeBuilder");
var Code = /** @class */ (function (_super) {
    tslib_1.__extends(Code, _super);
    function Code() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Code.prototype.render = function () {
        var inlineCodeStyle = themeBuilder_1.applyTheme(this.props.theme).inlineCodeStyle;
        var language = supportedLanguages_1.normalizeLanguage(this.props.language);
        var props = {
            language: language,
            PreTag: this.props.preTag,
            style: this.props.codeStyle || inlineCodeStyle,
            showLineNumbers: this.props.showLineNumbers,
            lineNumberContainerStyle: this.props.lineNumberContainerStyle,
            codeTagProps: this.props.codeTagProps,
        };
        return react_1.default.createElement(react_syntax_highlighter_1.PrismAsyncLight, tslib_1.__assign({}, props), this.props.text);
    };
    Code.defaultProps = {
        theme: {},
        showLineNumbers: false,
        lineNumberContainerStyle: {},
        codeTagProps: {},
        preTag: 'span',
    };
    return Code;
}(react_1.PureComponent));
exports.default = Code;
//# sourceMappingURL=Code.js.map