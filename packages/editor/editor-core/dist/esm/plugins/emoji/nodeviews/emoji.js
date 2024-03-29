import { __extends } from "tslib";
import * as React from 'react';
import Emoji from '../ui/Emoji';
import { ReactNodeView } from '../../../nodeviews';
import InlineNodeWrapper, { createMobileInlineDomRef, } from '../../../ui/InlineNodeWrapper';
import { ZeroWidthSpace } from '../../../utils';
var EmojiNodeView = /** @class */ (function (_super) {
    __extends(EmojiNodeView, _super);
    function EmojiNodeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmojiNodeView.prototype.createDomRef = function () {
        if (this.reactComponentProps.options &&
            this.reactComponentProps.options.useInlineWrapper) {
            return createMobileInlineDomRef();
        }
        return _super.prototype.createDomRef.call(this);
    };
    EmojiNodeView.prototype.render = function (props) {
        var providerFactory = props.providerFactory, options = props.options;
        var _a = this.node.attrs, shortName = _a.shortName, id = _a.id, text = _a.text;
        return (React.createElement(InlineNodeWrapper, { useInlineWrapper: options && options.useInlineWrapper },
            React.createElement(Emoji, { providers: providerFactory, id: id, shortName: shortName, fallback: text }),
            options && options.allowZeroWidthSpaceAfter && ZeroWidthSpace));
    };
    return EmojiNodeView;
}(ReactNodeView));
export { EmojiNodeView };
export default function emojiNodeView(portalProviderAPI, providerFactory, options) {
    return function (node, view, getPos) {
        return new EmojiNodeView(node, view, getPos, portalProviderAPI, {
            providerFactory: providerFactory,
            options: options,
        }).init();
    };
}
//# sourceMappingURL=emoji.js.map