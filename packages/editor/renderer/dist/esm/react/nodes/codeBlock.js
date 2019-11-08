import { __assign, __extends } from "tslib";
import * as React from 'react';
import { PureComponent } from 'react';
import { AkCodeBlock } from '@atlaskit/code';
import { overflowShadow } from '@atlaskit/editor-common';
function identity(text) {
    return text;
}
var CodeBlock = /** @class */ (function (_super) {
    __extends(CodeBlock, _super);
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
            React.createElement(AkCodeBlock, __assign({}, codeProps))));
    };
    return CodeBlock;
}(PureComponent));
export default overflowShadow(CodeBlock, {
    overflowSelector: 'span',
    scrollableSelector: 'code',
});
//# sourceMappingURL=codeBlock.js.map