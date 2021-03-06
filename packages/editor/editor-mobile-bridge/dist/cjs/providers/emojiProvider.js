"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var resource_1 = require("@atlaskit/emoji/resource");
var cross_platform_promise_1 = require("../cross-platform-promise");
var utils_1 = require("./utils");
/**
 * To construct an EmojiResourceConfig we need to know the base url
 * and the cloud Id to add provider urls. We request these from Native.
 *
 * Note:
 * Currently, the user must be authenticated to resolve the elements config.
 */
var elementsConfigPromise = cross_platform_promise_1.createPromise('getConfig');
function createEmojiProvider() {
    return elementsConfigPromise
        .submit()
        .then(function (elementsConfig) {
        var emojiConfig = createEmojiConfig(elementsConfig);
        /**
         * iOS has no stable APIs to intercept requests.
         * So we mock out fetch for specific URLs and send them to native.
         * This bypasses a number of issues introduced when working via the
         * file protocol (CORS, cookie support, null origin etc).
         * TODO: We should send all fetch requests to iOS for processing,
         *       to be as consistent as possible.
         */
        if (window.webkit) {
            utils_1.mockFetchFor(emojiConfig.providers.map(function (p) { return p.url; }));
        }
        return new resource_1.EmojiResource(emojiConfig);
    })
        .catch(function (error) {
        // eslint-disable-next-line no-console
        console.error('Failed to resolve ElementsConfig via `getConfig`. Please authenticate and try again.', error);
        return new resource_1.EmojiResource(createEmojiConfig());
    });
}
function createEmojiConfig(elementsConfig) {
    var providers = [];
    if (elementsConfig) {
        var cloudId = elementsConfig.cloudId, baseUrl = elementsConfig.baseUrl;
        baseUrl = baseUrl.endsWith('/') ? baseUrl : baseUrl + "/";
        providers.push({ url: baseUrl + "emoji/standard" });
        providers.push({ url: baseUrl + "emoji/atlassian" });
        if (cloudId) {
            providers.push({ url: baseUrl + "emoji/" + cloudId + "/site" });
        }
    }
    return { providers: providers };
}
exports.default = createEmojiProvider();
//# sourceMappingURL=emojiProvider.js.map