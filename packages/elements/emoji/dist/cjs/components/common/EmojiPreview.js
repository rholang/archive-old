"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var add_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/add"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var react_intl_1 = require("react-intl");
var CachingEmoji_1 = tslib_1.__importDefault(require("../../components/common/CachingEmoji"));
var EmojiButton_1 = tslib_1.__importDefault(require("../../components/common/EmojiButton"));
var i18n_1 = require("../i18n");
var styles = tslib_1.__importStar(require("./styles"));
var ToneSelector_1 = tslib_1.__importDefault(require("./ToneSelector"));
var EmojiPreview = /** @class */ (function (_super) {
    tslib_1.__extends(EmojiPreview, _super);
    function EmojiPreview() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            selectingTone: false,
        };
        _this.onToneButtonClick = function () {
            _this.setState({
                selectingTone: true,
            });
        };
        _this.onToneSelected = function (toneValue) {
            _this.setState({
                selectingTone: false,
            });
            if (_this.props.onToneSelected) {
                _this.props.onToneSelected(toneValue);
            }
        };
        _this.onMouseLeave = function () {
            var selectingTone = _this.state.selectingTone;
            var onToneSelectorCancelled = _this.props.onToneSelectorCancelled;
            if (selectingTone && onToneSelectorCancelled) {
                onToneSelectorCancelled();
            }
            _this.setState({
                selectingTone: false,
            });
        };
        return _this;
    }
    EmojiPreview.prototype.renderTones = function () {
        var _this = this;
        var _a = this.props, toneEmoji = _a.toneEmoji, selectedTone = _a.selectedTone;
        if (!toneEmoji) {
            return null;
        }
        if (this.state.selectingTone) {
            return (React.createElement("div", { className: styles.toneSelectorContainer },
                React.createElement(ToneSelector_1.default, { emoji: toneEmoji, onToneSelected: this.onToneSelected })));
        }
        var previewEmoji = toneEmoji;
        if (selectedTone && previewEmoji.skinVariations) {
            previewEmoji = previewEmoji.skinVariations[(selectedTone || 1) - 1];
        }
        return (React.createElement("div", { className: styles.buttons },
            React.createElement(EmojiButton_1.default, { emoji: previewEmoji, onSelected: function () { return _this.onToneButtonClick(); }, selectOnHover: true })));
    };
    EmojiPreview.prototype.renderEmojiPreview = function () {
        var _a, _b;
        var selectingTone = this.state.selectingTone;
        var _c = this.props, emoji = _c.emoji, uploadEnabled = _c.uploadEnabled;
        if (!emoji || selectingTone || uploadEnabled) {
            return null;
        }
        var previewClasses = classnames_1.default((_a = {},
            _a[styles.preview] = true,
            _a[styles.withToneSelector] = !!this.props.toneEmoji,
            _a));
        var previewTextClasses = classnames_1.default((_b = {},
            _b[styles.previewText] = true,
            _b[styles.previewSingleLine] = !emoji.name,
            _b));
        return (React.createElement("div", { className: previewClasses },
            React.createElement("span", { className: styles.previewImg },
                React.createElement(CachingEmoji_1.default, { emoji: emoji })),
            React.createElement("div", { className: previewTextClasses },
                React.createElement("span", { className: styles.name }, emoji.name),
                React.createElement("span", { className: styles.shortName }, emoji.shortName))));
    };
    // note: emoji-picker-add-emoji className is used by pollinator synthetic checks
    EmojiPreview.prototype.renderAddOwnEmoji = function () {
        var _a = this.props, onOpenUpload = _a.onOpenUpload, uploadEnabled = _a.uploadEnabled;
        var selectingTone = this.state.selectingTone;
        if (!uploadEnabled || selectingTone) {
            return null;
        }
        return (React.createElement("div", { className: styles.AddCustomEmoji },
            React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, i18n_1.messages.addCustomEmojiLabel), function (label) { return (React.createElement(button_1.default, { onClick: onOpenUpload, iconBefore: React.createElement(add_1.default, { label: label, size: "small" }), appearance: "subtle", className: styles.addCustomEmojiButton + ' emoji-picker-add-emoji' }, label)); })));
    };
    EmojiPreview.prototype.render = function () {
        var sectionClasses = classnames_1.default([
            styles.emojiPreview,
            styles.emojiPreviewSection,
        ]);
        return (React.createElement("div", { className: sectionClasses, onMouseLeave: this.onMouseLeave },
            this.renderAddOwnEmoji(),
            this.renderEmojiPreview(),
            this.renderTones()));
    };
    return EmojiPreview;
}(react_1.PureComponent));
exports.default = EmojiPreview;
//# sourceMappingURL=EmojiPreview.js.map