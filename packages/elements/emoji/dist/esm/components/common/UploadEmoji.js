import { supportsUploadFeature } from '../../api/EmojiResource';
import { uploadFailedEvent, uploadSucceededEvent } from '../../util/analytics';
import { messages } from '../i18n';
export var uploadEmoji = function (upload, emojiProvider, errorSetter, onSuccess, fireAnalytics) {
    var startTime = Date.now();
    errorSetter(undefined);
    if (supportsUploadFeature(emojiProvider)) {
        emojiProvider
            .uploadCustomEmoji(upload)
            .then(function (emojiDescription) {
            fireAnalytics(uploadSucceededEvent({
                duration: Date.now() - startTime,
            }));
            onSuccess(emojiDescription);
        })
            .catch(function (err) {
            errorSetter(messages.emojiUploadFailed);
            // eslint-disable-next-line no-console
            console.error('Unable to upload emoji', err);
            fireAnalytics(uploadFailedEvent({
                duration: Date.now() - startTime,
                reason: messages.emojiUploadFailed.defaultMessage,
            }));
        });
    }
};
//# sourceMappingURL=UploadEmoji.js.map