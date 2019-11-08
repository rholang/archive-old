"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var Emoji_1 = tslib_1.__importDefault(require("../ui/Emoji"));
var nodeviews_1 = require("../../../nodeviews");
var InlineNodeWrapper_1 = tslib_1.__importStar(require("../../../ui/InlineNodeWrapper"));
var utils_1 = require("../../../utils");
var EmojiNodeView = /** @class */ (function (_super) {
    tslib_1.__extends(EmojiNodeView, _super);
    function EmojiNodeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmojiNodeView.prototype.createDomRef = function () {
        if (this.reactComponentProps.options &&
            this.reactComponentProps.options.useInlineWrapper) {
            return InlineNodeWrapper_1.createMobileInlineDomRef();
        }
        return _super.prototype.createDomRef.call(this);
    };
    EmojiNodeView.prototype.render = function (props) {
        var providerFactory = props.providerFactory, options = props.options;
        var _a = this.node.attrs, shortName = _a.shortName, id = _a.id, text = _a.text;
        return (React.createElement(InlineNodeWrapper_1.default, { useInlineWrapper: options && options.useInlineWrapper },
            React.createElement(Emoji_1.default, { providers: providerFactory, id: id, shortName: shortName, fallback: text }),
            options && options.allowZeroWidthSpaceAfter && utils_1.ZeroWidthSpace));
    };
    return EmojiNodeView;
}(nodeviews_1.ReactNodeView));
exports.EmojiNodeView = EmojiNodeView;
function emojiNodeView(portalProviderAPI, providerFactory, options) {
    return function (node, view, getPos) {
        return new EmojiNodeView(node, view, getPos, portalProviderAPI, {
            providerFactory: providerFactory,
            options: options,
        }).init();
    };
}
exports.default = emojiNodeView;
//# sourceMappingURL=emoji.js.map