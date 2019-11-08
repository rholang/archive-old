"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DROPZONE_DROP_IN = 'DROPZONE_DROP_IN';
function isDropzoneDropInAction(action) {
    return action.type === exports.DROPZONE_DROP_IN;
}
exports.isDropzoneDropInAction = isDropzoneDropInAction;
function dropzoneDropIn(fileCount) {
    return {
        type: exports.DROPZONE_DROP_IN,
        fileCount: fileCount,
    };
}
exports.dropzoneDropIn = dropzoneDropIn;
//# sourceMappingURL=dropzoneDropIn.js.map