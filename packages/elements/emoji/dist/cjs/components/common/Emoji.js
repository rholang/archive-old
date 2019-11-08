"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var cross_circle_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/cross-circle"));
var theme_1 = require("@atlaskit/theme");
var tooltip_1 = tslib_1.__importDefault(require("@atlaskit/tooltip"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var EmojiUtils_1 = require("../../api/EmojiUtils");
var constants_1 = require("../../util/constants");
var type_helpers_1 = require("../../util/type-helpers");
var mouse_1 = require("../../util/mouse");
var styles = tslib_1.__importStar(require("./styles"));
var handleMouseDown = function (props, event) {
    // Clicked emoji delete button
    if (event.target instanceof Element &&
        event.target.getAttribute('aria-label') === constants_1.deleteEmojiLabel) {
        return;
    }
    var emoji = props.emoji, onSelected = props.onSelected;
    event.preventDefault();
    if (onSelected && mouse_1.leftClick(event)) {
        onSelected(type_helpers_1.toEmojiId(emoji), emoji, event);
    }
};
var handleMouseMove = function (props, event) {
    var emoji = props.emoji, onMouseMove = props.onMouseMove;
    if (onMouseMove) {
        onMouseMove(type_helpers_1.toEmojiId(emoji), emoji, event);
    }
};
var handleDelete = function (props, event) {
    var emoji = props.emoji, onDelete = props.onDelete;
    if (onDelete) {
        onDelete(type_helpers_1.toEmojiId(emoji), emoji, event);
    }
};
var handleImageError = function (props, event) {
    var emoji = props.emoji, onLoadError = props.onLoadError;
    // Hide error state (but keep space for it)
    if (event.target) {
        var target = event.target;
        target.style.visibility = 'hidden';
    }
    if (onLoadError) {
        onLoadError(type_helpers_1.toEmojiId(emoji), emoji, event);
    }
};
// Pure functional components are used in favour of class based components, due to the performance!
// When rendering 1500+ emoji using class based components had a significant impact.
var renderAsSprite = function (props) {
    var _a;
    var emoji = props.emoji, fitToHeight = props.fitToHeight, selected = props.selected, selectOnHover = props.selectOnHover, className = props.className, showTooltip = props.showTooltip;
    var representation = emoji.representation;
    var sprite = representation.sprite;
    var classes = (_a = {},
        _a[styles.emojiContainer] = true,
        _a[styles.emojiNode] = true,
        _a[styles.selected] = selected,
        _a[styles.selectOnHover] = selectOnHover,
        _a);
    if (className) {
        classes[className] = true;
    }
    var sizing = {};
    if (fitToHeight) {
        sizing = {
            width: fitToHeight + "px",
            height: fitToHeight + "px",
        };
    }
    var xPositionInPercent = (100 / (sprite.column - 1)) * (representation.xIndex - 0);
    var yPositionInPercent = (100 / (sprite.row - 1)) * (representation.yIndex - 0);
    var style = tslib_1.__assign({ backgroundImage: "url(" + sprite.url + ")", backgroundPosition: xPositionInPercent + "% " + yPositionInPercent + "%", backgroundSize: sprite.column * 100 + "% " + sprite.row * 100 + "%" }, sizing);
    var emojiNode = (React.createElement("span", { className: styles.emojiSprite, style: style }, "\u00A0"));
    return (React.createElement("span", { className: classnames_1.default(classes), onMouseDown: function (event) {
            handleMouseDown(props, event);
        }, onMouseMove: function (event) {
            handleMouseMove(props, event);
        }, "aria-label": emoji.shortName }, showTooltip ? (React.createElement(tooltip_1.default, { tag: "span", content: emoji.shortName }, emojiNode)) : (emojiNode)));
};
// Keep as pure functional component, see renderAsSprite.
var renderAsImage = function (props) {
    var _a;
    var emoji = props.emoji, fitToHeight = props.fitToHeight, selected = props.selected, selectOnHover = props.selectOnHover, className = props.className, showTooltip = props.showTooltip, showDelete = props.showDelete;
    var classes = (_a = {},
        _a[styles.emoji] = true,
        _a[styles.emojiNode] = true,
        _a[styles.selected] = selected,
        _a[styles.selectOnHover] = selectOnHover,
        _a);
    if (className) {
        classes[className] = true;
    }
    var width;
    var height;
    var src;
    var representation = EmojiUtils_1.shouldUseAltRepresentation(emoji, fitToHeight)
        ? emoji.altRepresentation
        : emoji.representation;
    if (type_helpers_1.isImageRepresentation(representation)) {
        src = representation.imagePath;
        width = representation.width;
        height = representation.height;
    }
    else if (type_helpers_1.isMediaRepresentation(representation)) {
        src = representation.mediaPath;
        width = representation.width;
        height = representation.height;
    }
    var deleteButton;
    if (showDelete) {
        deleteButton = (React.createElement("span", { className: styles.deleteButton },
            React.createElement(button_1.default, { iconBefore: React.createElement(cross_circle_1.default, { label: constants_1.deleteEmojiLabel, primaryColor: theme_1.colors.N500, size: "small" }), onClick: function (event) { return handleDelete(props, event); }, appearance: "subtle-link", spacing: "none" })));
    }
    var sizing = {};
    if (fitToHeight && width && height) {
        // Presize image, to prevent reflow due to size changes after loading
        sizing = {
            width: (fitToHeight / height) * width,
            height: fitToHeight,
        };
    }
    var onError = function (event) {
        handleImageError(props, event);
    };
    // Pass src attribute as key to force React to rerender img node since browser does not
    // change preview image until loaded
    var emojiNode = (React.createElement("img", tslib_1.__assign({ src: src, key: src, alt: emoji.shortName, "data-emoji-short-name": emoji.shortName, "data-emoji-id": emoji.id, "data-emoji-text": emoji.fallback || emoji.shortName, className: "emoji", style: { visibility: 'visible' }, onError: onError }, sizing)));
    return (React.createElement("span", { className: classnames_1.default(classes), onMouseDown: function (event) {
            handleMouseDown(props, event);
        }, onMouseMove: function (event) {
            handleMouseMove(props, event);
        }, "aria-label": emoji.shortName },
        deleteButton,
        showTooltip ? (React.createElement(tooltip_1.default, { tag: "span", content: emoji.shortName }, emojiNode)) : (emojiNode)));
};
exports.Emoji = function (props) {
    var emoji = props.emoji;
    if (type_helpers_1.isSpriteRepresentation(emoji.representation)) {
        return renderAsSprite(props);
    }
    return renderAsImage(props);
};
exports.default = exports.Emoji;
//# sourceMappingURL=Emoji.js.map