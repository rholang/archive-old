"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DROPZONE_DRAG_OUT = 'DROPZONE_DRAG_OUT';
function isDropzoneDragOutAction(action) {
    return action.type === exports.DROPZONE_DRAG_OUT;
}
exports.isDropzoneDragOutAction = isDropzoneDragOutAction;
function dropzoneDragOut(fileCount) {
    return {
        type: exports.DROPZONE_DRAG_OUT,
        fileCount: fileCount,
    };
}
exports.dropzoneDragOut = dropzoneDragOut;
//# sourceMappingURL=dropzoneDragOut.js.map