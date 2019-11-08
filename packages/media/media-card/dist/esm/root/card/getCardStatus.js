// we don't want to show complete status for empty files, ideally there should be no such file on the media api,
// but there are some edge cases when using id upfront that can result on that.
export var getCardStatus = function (state, props) {
    var status = state.status, metadata = state.metadata, dataURI = state.dataURI;
    var identifier = props.identifier, disableOverlay = props.disableOverlay;
    if (identifier.mediaItemType !== 'file') {
        return status;
    }
    if (metadata) {
        var _a = metadata, size = _a.size, mediaType = _a.mediaType, name_1 = _a.name;
        if (mediaType === 'image' || mediaType === 'video') {
            if (status === 'complete' && !dataURI) {
                return 'processing';
            }
        }
        else if (name_1 && size && !disableOverlay && status === 'processing') {
            // If we have enough metadata for non images, we show it
            return 'complete';
        }
        else if (status === 'complete' && !size) {
            return 'processing';
        }
    }
    return status;
};
export var getCardStatusFromFileState = function (fileState, dataURI) {
    switch (fileState.status) {
        case 'uploading':
        case 'failed-processing':
        case 'error':
            return fileState.status;
        case 'processed':
            return 'complete';
        case 'processing':
            if (dataURI) {
                return 'complete';
            }
            else {
                return 'processing';
            }
        default:
            return 'loading';
    }
};
export var getCardProgressFromFileState = function (fileState, dataURI) {
    switch (fileState.status) {
        case 'uploading':
            return fileState.progress;
        case 'processing':
            if (dataURI) {
                return 1;
            }
    }
};
export var getAnalyticsStatusFromCardStatus = function (cardStatus) {
    switch (cardStatus) {
        case 'error':
        case 'failed-processing':
            return 'failed';
        default:
            return;
    }
};
export var getAnalyticsErrorStateAttributes = function (fileState, error) {
    return !fileState
        ? {
            failReason: 'media-client-error',
            error: (error && error.message) || 'unknown error',
        }
        : ['error', 'failed-processing'].includes(fileState.status)
            ? {
                failReason: 'file-status-error',
                error: ('message' in fileState && fileState.message) || 'unknown error',
            }
            : {};
};
//# sourceMappingURL=getCardStatus.js.map