import { __extends } from "tslib";
import classNames from 'classnames';
import * as React from 'react';
import { PureComponent } from 'react';
import EmojiDeletePreview from '../common/EmojiDeletePreview';
import EmojiPreview from '../common/EmojiPreview';
import EmojiUploadPicker from '../common/EmojiUploadPicker';
import * as styles from './styles';
var EmojiPickerFooter = /** @class */ (function (_super) {
    __extends(EmojiPickerFooter, _super);
    function EmojiPickerFooter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmojiPickerFooter.prototype.render = function () {
        var _a = this.props, initialUploadName = _a.initialUploadName, onToneSelected = _a.onToneSelected, onToneSelectorCancelled = _a.onToneSelectorCancelled, onUploadCancelled = _a.onUploadCancelled, onUploadEmoji = _a.onUploadEmoji, onCloseDelete = _a.onCloseDelete, onDeleteEmoji = _a.onDeleteEmoji, selectedEmoji = _a.selectedEmoji, selectedTone = _a.selectedTone, toneEmoji = _a.toneEmoji, uploadErrorMessage = _a.uploadErrorMessage, uploading = _a.uploading, onFileChooserClicked = _a.onFileChooserClicked, onOpenUpload = _a.onOpenUpload, uploadEnabled = _a.uploadEnabled, emojiToDelete = _a.emojiToDelete;
        var previewFooterClassnames = classNames([
            styles.emojiPickerFooter,
            styles.emojiPickerFooterWithTopShadow,
        ]);
        if (uploading) {
            return (React.createElement("div", { className: previewFooterClassnames },
                React.createElement(EmojiUploadPicker, { onUploadCancelled: onUploadCancelled, onUploadEmoji: onUploadEmoji, onFileChooserClicked: onFileChooserClicked, errorMessage: uploadErrorMessage, initialUploadName: initialUploadName })));
        }
        if (emojiToDelete) {
            return (React.createElement("div", { className: previewFooterClassnames },
                React.createElement(EmojiDeletePreview, { emoji: emojiToDelete, onDeleteEmoji: onDeleteEmoji, onCloseDelete: onCloseDelete })));
        }
        return (React.createElement("div", { className: previewFooterClassnames },
            React.createElement(EmojiPreview, { emoji: selectedEmoji, toneEmoji: toneEmoji, selectedTone: selectedTone, onToneSelected: onToneSelected, onToneSelectorCancelled: onToneSelectorCancelled, onOpenUpload: onOpenUpload, uploadEnabled: uploadEnabled })));
    };
    return EmojiPickerFooter;
}(PureComponent));
export default EmojiPickerFooter;
//# sourceMappingURL=EmojiPickerFooter.js.map