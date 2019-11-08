"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var react_intl_1 = require("react-intl");
var constants_1 = require("../../util/constants");
var i18n_1 = require("../i18n");
var Emoji_1 = tslib_1.__importDefault(require("./Emoji"));
var EmojiErrorMessage_1 = tslib_1.__importDefault(require("./EmojiErrorMessage"));
var internal_types_1 = require("./internal-types");
var RetryableButton_1 = tslib_1.__importDefault(require("./RetryableButton"));
var styles = tslib_1.__importStar(require("./styles"));
var EmojiUploadPreview = /** @class */ (function (_super) {
    tslib_1.__extends(EmojiUploadPreview, _super);
    function EmojiUploadPreview() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmojiUploadPreview.prototype.render = function () {
        var _a = this.props, name = _a.name, previewImage = _a.previewImage, uploadStatus = _a.uploadStatus, errorMessage = _a.errorMessage, onAddEmoji = _a.onAddEmoji, onUploadCancelled = _a.onUploadCancelled;
        var emojiComponent;
        if (previewImage) {
            var emoji = {
                shortName: ":" + name + ":",
                type: constants_1.customCategory,
                category: constants_1.customCategory,
                representation: {
                    imagePath: previewImage,
                    width: 24,
                    height: 24,
                },
                searchable: true,
            };
            emojiComponent = React.createElement(Emoji_1.default, { emoji: emoji });
        }
        var uploading = uploadStatus === internal_types_1.UploadStatus.Uploading;
        return (React.createElement("div", { className: styles.uploadPreviewFooter },
            React.createElement("div", { className: styles.uploadPreview },
                React.createElement("div", { className: styles.uploadPreviewText },
                    React.createElement("h5", null,
                        React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, i18n_1.messages.emojiPreviewTitle))),
                    React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, i18n_1.messages.emojiPreview, { values: { emoji: emojiComponent } }))),
                React.createElement("div", { className: styles.bigEmojiPreview }, emojiComponent)),
            React.createElement("div", { className: styles.uploadAddRow },
                !uploading && errorMessage ? (React.createElement(EmojiErrorMessage_1.default, { className: styles.emojiPreviewErrorMessage, message: errorMessage, tooltip: true })) : null,
                React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, i18n_1.messages.addEmojiLabel), function (label) { return (React.createElement(RetryableButton_1.default, { className: styles.uploadEmojiButton, retryClassName: styles.uploadRetryButton, label: label, onSubmit: onAddEmoji, appearance: "primary", loading: uploading, error: !!errorMessage })); }),
                React.createElement(button_1.default, { onClick: onUploadCancelled, appearance: "subtle", isDisabled: uploading, className: styles.cancelButton },
                    React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, i18n_1.messages.cancelLabel))))));
    };
    return EmojiUploadPreview;
}(react_1.PureComponent));
exports.default = EmojiUploadPreview;
//# sourceMappingURL=EmojiUploadPreview.js.map