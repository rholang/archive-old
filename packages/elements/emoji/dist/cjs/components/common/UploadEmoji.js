"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmojiResource_1 = require("../../api/EmojiResource");
var analytics_1 = require("../../util/analytics");
var i18n_1 = require("../i18n");
exports.uploadEmoji = function (upload, emojiProvider, errorSetter, onSuccess, fireAnalytics) {
    var startTime = Date.now();
    errorSetter(undefined);
    if (EmojiResource_1.supportsUploadFeature(emojiProvider)) {
        emojiProvider
            .uploadCustomEmoji(upload)
            .then(function (emojiDescription) {
            fireAnalytics(analytics_1.uploadSucceededEvent({
                duration: Date.now() - startTime,
            }));
            onSuccess(emojiDescription);
        })
            .catch(function (err) {
            errorSetter(i18n_1.messages.emojiUploadFailed);
            // eslint-disable-next-line no-console
            console.error('Unable to upload emoji', err);
            fireAnalytics(analytics_1.uploadFailedEvent({
                duration: Date.now() - startTime,
                reason: i18n_1.messages.emojiUploadFailed.defaultMessage,
            }));
        });
    }
};
//# sourceMappingURL=UploadEmoji.js.map