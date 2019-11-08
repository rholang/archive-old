import { __extends } from "tslib";
import * as React from 'react';
import * as PropTypes from 'prop-types';
var EmojiContextProvider = /** @class */ (function (_super) {
    __extends(EmojiContextProvider, _super);
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
export { EmojiContextProvider };
//# sourceMappingURL=index.js.map