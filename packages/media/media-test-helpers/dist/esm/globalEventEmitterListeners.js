import { globalMediaEventEmitter, } from '@atlaskit/media-client';
var fileAddedListener = function (fileState) {
    // eslint-disable-next-line no-console
    console.log('file-added -> globalMediaEventEmitter', { fileState: fileState });
};
var attachmentViewedListener = function (payload) {
    // eslint-disable-next-line no-console
    console.log('media-viewed -> globalMediaEventEmitter', { payload: payload });
};
export var addGlobalEventEmitterListeners = function () {
    globalMediaEventEmitter.off('file-added', fileAddedListener);
    globalMediaEventEmitter.off('media-viewed', attachmentViewedListener);
    globalMediaEventEmitter.on('file-added', fileAddedListener);
    globalMediaEventEmitter.on('media-viewed', attachmentViewedListener);
};
//# sourceMappingURL=globalEventEmitterListeners.js.map