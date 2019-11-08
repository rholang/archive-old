"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * In order to enable mentions in Editor we must set both properties: allowMentions and mentionProvider.
 * So this type is supposed to be a stub version of mention provider. We don't actually need it.
 */
var resource_1 = require("@atlaskit/mention/resource");
var cross_platform_promise_1 = require("../cross-platform-promise");
function createMentionProvider() {
    return cross_platform_promise_1.createPromise('getAccountId')
        .submit()
        .then(function (accountId) {
        return new resource_1.MentionResource({
            // Required attrib. Requests will happen natively.
            url: 'http://',
            shouldHighlightMention: function (mention) {
                if (accountId && accountId === mention.id) {
                    return true;
                }
                return false;
            },
        });
    });
}
exports.default = createMentionProvider();
//# sourceMappingURL=mentionProvider.js.map