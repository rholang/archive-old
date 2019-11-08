"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
exports.FETCH_CONVERSATIONS_REQUEST = 'fetchConversationsRequest';
exports.FETCH_CONVERSATIONS_SUCCESS = 'fetchConversationsSuccess';
exports.ADD_COMMENT_REQUEST = 'addCommentRequest';
exports.ADD_COMMENT_SUCCESS = 'addCommentSuccess';
exports.ADD_COMMENT_ERROR = 'addCommentError';
exports.DELETE_COMMENT_REQUEST = 'deleteCommentRequest';
exports.DELETE_COMMENT_SUCCESS = 'deleteCommentSuccess';
exports.DELETE_COMMENT_ERROR = 'deleteCommentError';
exports.UPDATE_COMMENT_REQUEST = 'updateCommentRequest';
exports.UPDATE_COMMENT_SUCCESS = 'updateCommentSuccess';
exports.UPDATE_COMMENT_ERROR = 'updateCommentError';
exports.HIGHLIGHT_COMMENT = 'highlightComment';
exports.REVERT_COMMENT = 'revertComment';
exports.UPDATE_USER_SUCCESS = 'updateUserSuccess';
exports.CREATE_CONVERSATION_REQUEST = 'createConversationRequest';
exports.CREATE_CONVERSATION_SUCCESS = 'createConversationSuccess';
exports.CREATE_CONVERSATION_ERROR = 'createConversationError';
exports.addComment = function (conversationId, parentId, value, localId, provider, onSuccess) {
    if (localId === void 0) { localId = undefined; }
    return function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var commentId;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, provider.addComment(conversationId, parentId, value, localId)];
                case 1:
                    commentId = (_a.sent()).commentId;
                    if (typeof onSuccess === 'function') {
                        onSuccess(commentId);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
};
exports.updateComment = function (conversationId, commentId, value, provider, onSuccess) { return function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, provider.updateComment(conversationId, commentId, value)];
            case 1:
                _a.sent();
                if (typeof onSuccess === 'function') {
                    onSuccess(commentId);
                }
                return [2 /*return*/];
        }
    });
}); }; };
exports.deleteComment = function (conversationId, commentId, provider, onSuccess) { return function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, provider.deleteComment(conversationId, commentId)];
            case 1:
                _a.sent();
                if (typeof onSuccess === 'function') {
                    onSuccess(commentId);
                }
                return [2 /*return*/];
        }
    });
}); }; };
exports.revertComment = function (conversationId, commentId, provider) { return function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        provider.revertComment(conversationId, commentId);
        return [2 /*return*/];
    });
}); }; };
exports.updateUser = function (user, provider) { return function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        provider.updateUser(user);
        return [2 /*return*/];
    });
}); }; };
exports.createConversation = function (localId, value, meta, provider, objectId, containerId, onSuccess) { return function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var conversationId;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, provider.create(localId, value, meta, objectId, containerId)];
            case 1:
                conversationId = (_a.sent()).conversationId;
                if (typeof onSuccess === 'function') {
                    onSuccess(conversationId);
                }
                return [2 /*return*/];
        }
    });
}); }; };
exports.saveDraft = function (isLocal, value, conversationId, commentId, meta, provider, objectId, containerId) { return function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        provider.saveDraft(isLocal, value, conversationId, commentId, meta, objectId, containerId);
        return [2 /*return*/];
    });
}); }; };
//# sourceMappingURL=actions.js.map