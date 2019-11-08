"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var code_1 = require("@atlaskit/code");
var editor_common_1 = require("@atlaskit/editor-common");
function identity(text) {
    return text;
}
var CodeBlock = /** @class */ (function (_super) {
    tslib_1.__extends(CodeBlock, _super);
    function CodeBlock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CodeBlock.prototype.render = function () {
        var _a = this.props, children = _a.children, language = _a.language, handleRef = _a.handleRef, shadowClassNames = _a.shadowClassNames;
        var codeProps = {
            language: language,
            text: React.Children.map(children, identity).join(''),
        };
        return (React.createElement("div", { className: "code-block " + shadowClassNames, ref: handleRef },
            React.createElement(code_1.AkCodeBlock, tslib_1.__assign({}, codeProps))));
    };
    return CodeBlock;
}(react_1.PureComponent));
exports.default = editor_common_1.overflowShadow(CodeBlock, {
    overflowSelector: 'span',
    scrollableSelector: 'code',
});
//# sourceMappingURL=codeBlock.js.map