"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var media_editor_1 = require("../pm-plugins/media-editor");
exports.openMediaEditor = function (pos, identifier) {
    return media_editor_1.createCommand({
        type: 'open',
        identifier: identifier,
        pos: pos,
    });
};
exports.closeMediaEditor = function () {
    return media_editor_1.createCommand({
        type: 'close',
    });
};
exports.setMediaClientConfig = function (mediaClientConfig) {
    return media_editor_1.createCommand({
        type: 'setMediaClientConfig',
        mediaClientConfig: mediaClientConfig,
    });
};
exports.uploadAnnotation = function (newIdentifier, newDimensions) {
    return media_editor_1.createCommand({
        type: 'upload',
        newIdentifier: newIdentifier,
    }, function (tr, state) {
        var editingMedia = media_editor_1.getPluginState(state).editor;
        if (!editingMedia) {
            return tr;
        }
        // remap pos across transactions being applied
        var pos = tr.mapping.map(editingMedia.pos);
        // get the old media node to copy attributes; ensure it's still media
        var oldMediaNode = tr.doc.nodeAt(pos);
        var media = state.schema.nodes.media;
        if (!oldMediaNode || oldMediaNode.type !== media) {
            return tr;
        }
        // update attributes
        var attrs = tslib_1.__assign(tslib_1.__assign({}, oldMediaNode.attrs), { 
            // @atlaskit/media-editor always gives id as string (better types would be nice...)
            id: newIdentifier.id, collection: newIdentifier.collectionName || oldMediaNode.attrs.collection, occurrenceKey: newIdentifier.occurrenceKey, width: newDimensions.width, height: newDimensions.height });
        return tr.setNodeMarkup(pos, undefined, attrs);
    });
};
//# sourceMappingURL=media-editor.js.map