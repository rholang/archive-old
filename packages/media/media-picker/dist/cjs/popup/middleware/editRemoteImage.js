"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var phrases_1 = require("../components/views/editor/phrases");
var editorShowError_1 = require("../actions/editorShowError");
var editorShowImage_1 = require("../actions/editorShowImage");
var editorShowLoading_1 = require("../actions/editorShowLoading");
var editRemoteImage_1 = require("../actions/editRemoteImage");
// When we complete upload, we need to check if we can open the editor.
// What can be changed:
// 1) The user pressed ESC and the editor shouldn't appear. In this case state.editorData will be null.
// 2) The user has chosen another image to edit. In this case state.editorData.originalFile.id will be different.
//
// We continue with the uploaded image only if:
// - the file is the same
// - state.imageUrl is not defined (the editor is not open)
var continueRenderingEditor = function (id, store) {
    var editorData = store.getState().editorData;
    if (!editorData) {
        return false;
    }
    var originalFile = editorData.originalFile, imageUrl = editorData.imageUrl;
    if (originalFile) {
        return originalFile.id === id && !imageUrl;
    }
    else {
        return false;
    }
};
exports.editRemoteImageMiddleware = function () { return function (store) { return function (next) { return function (action) {
    if (action.type === editRemoteImage_1.EDIT_REMOTE_IMAGE) {
        editRemoteImage(store, action);
    }
    return next(action);
}; }; }; };
function editRemoteImage(store, action) {
    var item = action.item, collectionName = action.collectionName;
    var userMediaClient = store.getState().userMediaClient;
    store.dispatch(editorShowLoading_1.editorShowLoading(item));
    return userMediaClient
        .getImageUrl(item.id, {
        mode: 'full-fit',
        collection: collectionName,
    })
        .then(function (imageUrl) {
        if (continueRenderingEditor(item.id, store)) {
            store.dispatch(editorShowImage_1.editorShowImage(imageUrl));
        }
    })
        .catch(function () {
        if (continueRenderingEditor(item.id, store)) {
            var retryHandler = function () {
                store.dispatch(action);
            };
            store.dispatch(editorShowError_1.editorShowError(phrases_1.couldNotLoadImage, retryHandler));
        }
    });
}
exports.editRemoteImage = editRemoteImage;
//# sourceMappingURL=editRemoteImage.js.map