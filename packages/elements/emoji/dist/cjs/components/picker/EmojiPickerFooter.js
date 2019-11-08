"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var EmojiDeletePreview_1 = tslib_1.__importDefault(require("../common/EmojiDeletePreview"));
var EmojiPreview_1 = tslib_1.__importDefault(require("../common/EmojiPreview"));
var EmojiUploadPicker_1 = tslib_1.__importDefault(require("../common/EmojiUploadPicker"));
var styles = tslib_1.__importStar(require("./styles"));
var EmojiPickerFooter = /** @class */ (function (_super) {
    tslib_1.__extends(EmojiPickerFooter, _super);
    function EmojiPickerFooter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmojiPickerFooter.prototype.render = function () {
        var _a = this.props, initialUploadName = _a.initialUploadName, onToneSelected = _a.onToneSelected, onToneSelectorCancelled = _a.onToneSelectorCancelled, onUploadCancelled = _a.onUploadCancelled, onUploadEmoji = _a.onUploadEmoji, onCloseDelete = _a.onCloseDelete, onDeleteEmoji = _a.onDeleteEmoji, selectedEmoji = _a.selectedEmoji, selectedTone = _a.selectedTone, toneEmoji = _a.toneEmoji, uploadErrorMessage = _a.uploadErrorMessage, uploading = _a.uploading, onFileChooserClicked = _a.onFileChooserClicked, onOpenUpload = _a.onOpenUpload, uploadEnabled = _a.uploadEnabled, emojiToDelete = _a.emojiToDelete;
        var previewFooterClassnames = classnames_1.default([
            styles.emojiPickerFooter,
            styles.emojiPickerFooterWithTopShadow,
        ]);
        if (uploading) {
            return (React.createElement("div", { className: previewFooterClassnames },
                React.createElement(EmojiUploadPicker_1.default, { onUploadCancelled: onUploadCancelled, onUploadEmoji: onUploadEmoji, onFileChooserClicked: onFileChooserClicked, errorMessage: uploadErrorMessage, initialUploadName: initialUploadName })));
        }
        if (emojiToDelete) {
            return (React.createElement("div", { className: previewFooterClassnames },
                React.createElement(EmojiDeletePreview_1.default, { emoji: emojiToDelete, onDeleteEmoji: onDeleteEmoji, onCloseDelete: onCloseDelete })));
        }
        return (React.createElement("div", { className: previewFooterClassnames },
            React.createElement(EmojiPreview_1.default, { emoji: selectedEmoji, toneEmoji: toneEmoji, selectedTone: selectedTone, onToneSelected: onToneSelected, onToneSelectorCancelled: onToneSelectorCancelled, onOpenUpload: onOpenUpload, uploadEnabled: uploadEnabled })));
    };
    return EmojiPickerFooter;
}(react_1.PureComponent));
exports.default = EmojiPickerFooter;
//# sourceMappingURL=EmojiPickerFooter.js.map