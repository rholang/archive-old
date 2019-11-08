"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var adf_utils_1 = require("@atlaskit/adf-utils");
var resource_1 = require("@atlaskit/mention/resource");
/**
 * Sanitises a document where some content should not be in the document (e.g. mention names).
 *
 * It is expected that these names we be resolved separately (e.g. when rendering
 * a node view).
 */
function sanitizeNodeForPrivacy(json, providerFactory) {
    var mentionNames = new Map();
    var hasCacheableMentions = false;
    var sanitizedJSON = adf_utils_1.traverse(json, {
        mention: function (node) {
            if (node.attrs && node.attrs.text) {
                hasCacheableMentions = true;
                // Remove @ prefix
                var text = node.attrs.text;
                var name_1 = text.startsWith('@') ? text.slice(1) : text;
                mentionNames.set(node.attrs.id, name_1);
            }
            return tslib_1.__assign(tslib_1.__assign({}, node), { attrs: tslib_1.__assign(tslib_1.__assign({}, node.attrs), { text: '' }) });
        },
    });
    if (hasCacheableMentions && providerFactory) {
        var handler_1 = function (_name, providerPromise) {
            if (providerPromise) {
                providerPromise.then(function (provider) {
                    if (resource_1.isResolvingMentionProvider(provider)) {
                        mentionNames.forEach(function (name, id) {
                            provider.cacheMentionName(id, name);
                        });
                        mentionNames.clear();
                        providerFactory.unsubscribe('mentionProvider', handler_1);
                    }
                });
            }
        };
        providerFactory.subscribe('mentionProvider', handler_1);
    }
    return sanitizedJSON;
}
exports.sanitizeNodeForPrivacy = sanitizeNodeForPrivacy;
//# sourceMappingURL=privacy-filter.js.map