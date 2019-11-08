"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var element_1 = require("@atlaskit/emoji/element");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var typestyle_1 = require("typestyle");
var utils_1 = require("./utils");
var emojiButtonStyle = typestyle_1.style({
    outline: 'none',
    display: 'flex',
    backgroundColor: 'transparent',
    border: 0,
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '0',
    padding: '10px 8px',
    $nest: {
        '&:hover > span': {
            transition: 'transform cubic-bezier(0.23, 1, 0.32, 1) 200ms',
            transform: 'scale(1.33)',
        },
    },
});
var EmojiButton = /** @class */ (function (_super) {
    tslib_1.__extends(EmojiButton, _super);
    function EmojiButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleMouseDown = function (event) {
            event.preventDefault();
            if (_this.props.onClick && utils_1.isLeftClick(event)) {
                _this.props.onClick(_this.props.emojiId, undefined, event);
            }
        };
        return _this;
    }
    EmojiButton.prototype.render = function () {
        var _a = this.props, emojiId = _a.emojiId, emojiProvider = _a.emojiProvider;
        return (React.createElement("button", { onMouseUp: this.handleMouseDown, className: emojiButtonStyle },
            React.createElement(element_1.ResourcedEmoji, { emojiProvider: emojiProvider, emojiId: emojiId })));
    };
    return EmojiButton;
}(react_1.PureComponent));
exports.EmojiButton = EmojiButton;
//# sourceMappingURL=EmojiButton.js.map