"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mentionLinkResolver(link, schema) {
    if (link.notLinkBody.startsWith('~')) {
        var mentionText = link.notLinkBody.substring(1);
        return [
            schema.nodes.mention.createChecked({
                id: mentionText,
            }),
        ];
    }
    return;
}
exports.mentionLinkResolver = mentionLinkResolver;
//# sourceMappingURL=mention-link.js.map