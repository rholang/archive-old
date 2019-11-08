"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var react_intl_1 = require("react-intl");
var i18n_1 = require("../i18n");
var CachingEmoji_1 = tslib_1.__importDefault(require("./CachingEmoji"));
var EmojiErrorMessage_1 = tslib_1.__importDefault(require("./EmojiErrorMessage"));
var RetryableButton_1 = tslib_1.__importDefault(require("./RetryableButton"));
var styles = tslib_1.__importStar(require("./styles"));
var EmojiDeletePreview = /** @class */ (function (_super) {
    tslib_1.__extends(EmojiDeletePreview, _super);
    function EmojiDeletePreview(props) {
        var _this = _super.call(this, props) || this;
        _this.onSubmit = function () {
            var _a = _this.props, emoji = _a.emoji, onDeleteEmoji = _a.onDeleteEmoji, onCloseDelete = _a.onCloseDelete;
            if (!_this.state.loading) {
                _this.setState({ loading: true });
                onDeleteEmoji(emoji).then(function (success) {
                    if (success) {
                        onCloseDelete();
                        return;
                    }
                    _this.setState({
                        loading: false,
                        error: true,
                    });
                });
            }
        };
        _this.onCancel = function () {
            _this.props.onCloseDelete();
        };
        _this.state = {
            loading: false,
            error: false,
        };
        return _this;
    }
    EmojiDeletePreview.prototype.UNSAFE_componentWillUpdate = function (nextProps) {
        if (nextProps.emoji.id !== this.props.emoji.id) {
            this.setState({ error: false });
        }
    };
    EmojiDeletePreview.prototype.render = function () {
        var _this = this;
        var emoji = this.props.emoji;
        var _a = this.state, loading = _a.loading, error = _a.error;
        return (React.createElement("div", { className: styles.deletePreview },
            React.createElement("div", { className: styles.deleteText },
                React.createElement("h5", null,
                    React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, i18n_1.messages.deleteEmojiTitle))),
                React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, i18n_1.messages.deleteEmojiDescription, { values: { emojiShortName: emoji.shortName } }))),
            React.createElement("div", { className: styles.deleteFooter },
                React.createElement(CachingEmoji_1.default, { emoji: emoji }),
                React.createElement("div", { className: styles.previewButtonGroup },
                    error ? (React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, i18n_1.messages.deleteEmojiFailed), function (message) {
                        return !loading ? (React.createElement(EmojiErrorMessage_1.default, { message: message, className: styles.emojiDeleteErrorMessage, tooltip: true })) : null;
                    })) : null,
                    React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, i18n_1.messages.deleteEmojiLabel), function (message) { return (React.createElement(RetryableButton_1.default, { className: styles.uploadEmojiButton, retryClassName: styles.uploadRetryButton, label: message, onSubmit: _this.onSubmit, appearance: "danger", loading: loading, error: error })); }),
                    React.createElement(button_1.default, { appearance: "subtle", onClick: this.onCancel, className: styles.cancelButton },
                        React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, i18n_1.messages.cancelLabel)))))));
    };
    return EmojiDeletePreview;
}(react_1.Component));
exports.default = EmojiDeletePreview;
//# sourceMappingURL=EmojiDeletePreview.js.map