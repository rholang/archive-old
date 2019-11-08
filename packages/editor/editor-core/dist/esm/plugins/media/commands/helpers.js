export var findMediaSingleNode = function (mediaPluginState, id) {
    var mediaNodes = mediaPluginState.mediaNodes;
    // Array#find... no IE support
    return mediaNodes.reduce(function (memo, nodeWithPos) {
        if (memo) {
            return memo;
        }
        var node = nodeWithPos.node;
        if (node.attrs.id === id) {
            return nodeWithPos;
        }
        return memo;
    }, null);
};
export var findAllMediaSingleNodes = function (mediaPluginState, id) {
    var mediaNodes = mediaPluginState.mediaNodes;
    return mediaNodes.filter(function (nodeWithHandler) {
        return nodeWithHandler.node.attrs.id === id;
    });
};
export var findMediaNode = function (mediaPluginState, id, isMediaSingle) {
    var mediaNodeWithPos = isMediaSingle
        ? findMediaSingleNode(mediaPluginState, id)
        : mediaPluginState.mediaGroupNodes[id];
    return mediaNodeWithPos;
};
export var isMobileUploadCompleted = function (mediaPluginState, mediaId) {
    return mediaPluginState.mediaPluginOptions &&
        // This flag tells us that it's a 'mobile' env.
        mediaPluginState.mediaPluginOptions.allowMarkingUploadsAsIncomplete &&
        typeof mediaPluginState.mobileUploadComplete[mediaId] === 'boolean'
        ? mediaPluginState.mobileUploadComplete[mediaId]
        : undefined;
};
//# sourceMappingURL=helpers.js.map