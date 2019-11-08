"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var styles = tslib_1.__importStar(require("./styles"));
var Emoji_1 = tslib_1.__importDefault(require("./Emoji"));
var mouse_1 = require("../../util/mouse");
var handleMouseDown = function (props, event) {
    var onSelected = props.onSelected;
    event.preventDefault();
    if (onSelected && mouse_1.leftClick(event)) {
        onSelected();
    }
};
exports.EmojiButton = function (props) {
    var emoji = props.emoji, selectOnHover = props.selectOnHover;
    var classes = [styles.emojiButton];
    return (React.createElement("button", { className: classnames_1.default(classes), onMouseDown: function (event) {
            handleMouseDown(props, event);
        } },
        React.createElement(Emoji_1.default, { emoji: emoji, selectOnHover: selectOnHover })));
};
exports.default = exports.EmojiButton;
//# sourceMappingURL=EmojiButton.js.map