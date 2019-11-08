"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DESELECT_ITEM = 'DESELECT_ITEM';
function isDeslectItemAction(action) {
    return action.type === exports.DESELECT_ITEM;
}
exports.isDeslectItemAction = isDeslectItemAction;
function deselectItem(fileId) {
    return {
        type: exports.DESELECT_ITEM,
        id: fileId,
    };
}
exports.deselectItem = deselectItem;
//# sourceMappingURL=deselectItem.js.map