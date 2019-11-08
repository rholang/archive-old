"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var supportedLanguages_1 = require("../supportedLanguages");
var themeBuilder_1 = require("../themes/themeBuilder");
var Code_1 = tslib_1.__importDefault(require("./Code"));
var LANGUAGE_FALLBACK = 'text';
var CodeBlock = /** @class */ (function (_super) {
    tslib_1.__extends(CodeBlock, _super);
    function CodeBlock() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleCopy = function (event) {
            /**
             * We don't want to copy the markup after highlighting, but rather the preformatted text in the selection
             */
            var data = event.nativeEvent.clipboardData;
            if (data) {
                event.preventDefault();
                var selection = window.getSelection();
                if (selection === null) {
                    return;
                }
                var selectedText = selection.toString();
                var document_1 = "<!doctype html><html><head></head><body><pre>" + selectedText + "</pre></body></html>";
                data.clearData();
                data.setData('text/html', document_1);
                data.setData('text/plain', selectedText);
            }
        };
        return _this;
    }
    CodeBlock.prototype.render = function () {
        var _a = themeBuilder_1.applyTheme(this.props.theme), lineNumberContainerStyle = _a.lineNumberContainerStyle, codeBlockStyle = _a.codeBlockStyle, codeContainerStyle = _a.codeContainerStyle;
        var props = {
            language: supportedLanguages_1.normalizeLanguage(this.props.language || LANGUAGE_FALLBACK),
            codeStyle: codeBlockStyle,
            showLineNumbers: this.props.showLineNumbers,
            codeTagProps: { style: codeContainerStyle },
            lineNumberContainerStyle: lineNumberContainerStyle,
            text: this.props.text.toString(),
        };
        return react_1.default.createElement(Code_1.default, tslib_1.__assign({}, props));
    };
    CodeBlock.displayName = 'CodeBlock';
    CodeBlock.defaultProps = {
        showLineNumbers: true,
        language: LANGUAGE_FALLBACK,
        theme: {},
    };
    return CodeBlock;
}(react_1.PureComponent));
exports.default = CodeBlock;
//# sourceMappingURL=CodeBlock.js.map