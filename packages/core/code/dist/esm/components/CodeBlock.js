import { __assign, __extends } from "tslib";
import React, { PureComponent } from 'react';
import { normalizeLanguage } from '../supportedLanguages';
import { applyTheme } from '../themes/themeBuilder';
import Code from './Code';
var LANGUAGE_FALLBACK = 'text';
var CodeBlock = /** @class */ (function (_super) {
    __extends(CodeBlock, _super);
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
        var _a = applyTheme(this.props.theme), lineNumberContainerStyle = _a.lineNumberContainerStyle, codeBlockStyle = _a.codeBlockStyle, codeContainerStyle = _a.codeContainerStyle;
        var props = {
            language: normalizeLanguage(this.props.language || LANGUAGE_FALLBACK),
            codeStyle: codeBlockStyle,
            showLineNumbers: this.props.showLineNumbers,
            codeTagProps: { style: codeContainerStyle },
            lineNumberContainerStyle: lineNumberContainerStyle,
            text: this.props.text.toString(),
        };
        return React.createElement(Code, __assign({}, props));
    };
    CodeBlock.displayName = 'CodeBlock';
    CodeBlock.defaultProps = {
        showLineNumbers: true,
        language: LANGUAGE_FALLBACK,
        theme: {},
    };
    return CodeBlock;
}(PureComponent));
export default CodeBlock;
//# sourceMappingURL=CodeBlock.js.map