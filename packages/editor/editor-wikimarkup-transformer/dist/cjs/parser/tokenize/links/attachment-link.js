"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var mediaGroup_1 = tslib_1.__importDefault(require("../../nodes/mediaGroup"));
function attachmentLinkResolver(link, schema) {
    if (link.attachmentName) {
        return [mediaGroup_1.default(schema, link.attachmentName)];
    }
    return;
}
exports.attachmentLinkResolver = attachmentLinkResolver;
//# sourceMappingURL=attachment-link.js.map