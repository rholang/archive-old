"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmojiUtils_1 = require("./EmojiUtils");
/**
 * Emoji providers should return JSON in the format defined by EmojiServiceResponse.
 */
var EmojiLoader = /** @class */ (function () {
    function EmojiLoader(config) {
        this.config = config;
    }
    /**
     * Returns a promise with an array of Emoji from all providers.
     */
    EmojiLoader.prototype.loadEmoji = function () {
        var emojisPromise = EmojiUtils_1.emojiRequest(this.config);
        return emojisPromise.then(function (emojiServiceResponse) {
            return EmojiUtils_1.denormaliseEmojiServiceResponse(emojiServiceResponse);
        });
    };
    return EmojiLoader;
}());
exports.default = EmojiLoader;
//# sourceMappingURL=EmojiLoader.js.map