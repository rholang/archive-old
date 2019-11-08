"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function hasLocalUploadStartedProcessing(localUpload) {
    return localUpload.events.some(function (event) { return event.name === 'upload-processing'; });
}
exports.hasLocalUploadStartedProcessing = hasLocalUploadStartedProcessing;
//# sourceMappingURL=local-upload.js.map