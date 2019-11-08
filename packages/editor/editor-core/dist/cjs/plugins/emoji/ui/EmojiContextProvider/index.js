"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var PropTypes = tslib_1.__importStar(require("prop-types"));
var EmojiContextProvider = /** @class */ (function (_super) {
    tslib_1.__extends(EmojiContextProvider, _super);
    function EmojiContextProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmojiContextProvider.prototype.getChildContext = function () {
        return {
            emoji: {
                emojiProvider: this.props.emojiProvider,
            },
        };
    };
    EmojiContextProvider.prototype.render = function () {
        return this.props.children;
    };
    EmojiContextProvider.childContextTypes = {
        emoji: PropTypes.object,
    };
    return EmojiContextProvider;
}(React.Component));
exports.EmojiContextProvider = EmojiContextProvider;
//# sourceMappingURL=index.js.map