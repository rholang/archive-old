"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConversation = function (state, conversationId) {
    return state.conversations.filter(function (c) { return c.conversationId === conversationId || c.localId === conversationId; })[0];
};
exports.getComments = function (state, conversationId, parentId) {
    var conversation = exports.getConversation(state, conversationId);
    if (conversation) {
        if (parentId) {
            return (conversation.comments || []).filter(function (c) { return c.parentId === parentId; });
        }
        return (conversation.comments || [])
            .filter(function (c) {
            return (!c.parentId && c.conversationId === conversation.conversationId) ||
                (c.parentId && c.parentId === conversation.conversationId);
        })
            .sort(function (a, b) {
            if (a.createdAt === b.createdAt) {
                return 0;
            }
            return a.createdAt < b.createdAt ? -1 : 1;
        });
    }
    return [];
};
exports.getHighlighted = function (state) {
    return state.highlighted;
};
exports.getUser = function (state) { return state.user; };
//# sourceMappingURL=selectors.js.map