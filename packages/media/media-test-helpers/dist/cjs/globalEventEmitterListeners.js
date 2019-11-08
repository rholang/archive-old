"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var media_client_1 = require("@atlaskit/media-client");
var fileAddedListener = function (fileState) {
    // eslint-disable-next-line no-console
    console.log('file-added -> globalMediaEventEmitter', { fileState: fileState });
};
var attachmentViewedListener = function (payload) {
    // eslint-disable-next-line no-console
    console.log('media-viewed -> globalMediaEventEmitter', { payload: payload });
};
exports.addGlobalEventEmitterListeners = function () {
    media_client_1.globalMediaEventEmitter.off('file-added', fileAddedListener);
    media_client_1.globalMediaEventEmitter.off('media-viewed', attachmentViewedListener);
    media_client_1.globalMediaEventEmitter.on('file-added', fileAddedListener);
    media_client_1.globalMediaEventEmitter.on('media-viewed', attachmentViewedListener);
};
//# sourceMappingURL=globalEventEmitterListeners.js.map