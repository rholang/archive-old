"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DROPZONE_DRAG_IN = 'DROPZONE_DRAG_IN';
function isDropzoneDragInAction(action) {
    return action.type === exports.DROPZONE_DRAG_IN;
}
exports.isDropzoneDragInAction = isDropzoneDragInAction;
function dropzoneDragIn(fileCount) {
    return {
        type: exports.DROPZONE_DRAG_IN,
        fileCount: fileCount,
    };
}
exports.dropzoneDragIn = dropzoneDragIn;
//# sourceMappingURL=dropzoneDragIn.js.map