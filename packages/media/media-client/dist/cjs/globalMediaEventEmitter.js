"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var media_core_1 = require("@atlaskit/media-core");
exports.globalMediaEventEmitter = {
    on: function (event, listener) {
        if (media_core_1.mediaState.eventEmitter) {
            media_core_1.mediaState.eventEmitter.on(event, listener);
        }
    },
    off: function (event, listener) {
        if (media_core_1.mediaState.eventEmitter) {
            media_core_1.mediaState.eventEmitter.off(event, listener);
        }
    },
    emit: function (event, payload) {
        if (media_core_1.mediaState.eventEmitter) {
            return media_core_1.mediaState.eventEmitter.emit(event, payload);
        }
        return undefined;
    },
};
//# sourceMappingURL=globalMediaEventEmitter.js.map