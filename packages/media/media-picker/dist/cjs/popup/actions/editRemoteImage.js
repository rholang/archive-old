"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EDIT_REMOTE_IMAGE = 'EDIT_REMOTE_IMAGE';
function isEditRemoteImageAction(action) {
    return action.type === exports.EDIT_REMOTE_IMAGE;
}
exports.isEditRemoteImageAction = isEditRemoteImageAction;
function editRemoteImage(item, collectionName) {
    return {
        type: exports.EDIT_REMOTE_IMAGE,
        item: item,
        collectionName: collectionName,
    };
}
exports.editRemoteImage = editRemoteImage;
//# sourceMappingURL=editRemoteImage.js.map