"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDecision = function (item) {
    return !!(item && item.type === 'DECISION');
};
exports.isTask = function (item) {
    return !!(item && item.type === 'TASK');
};
exports.toObjectKey = function (item) {
    var localId = item.localId, objectAri = item.objectAri;
    return {
        localId: localId,
        objectAri: objectAri,
    };
};
exports.objectKeyToString = function (objectKey) {
    var objectAri = objectKey.objectAri, localId = objectKey.localId;
    return objectAri + ":" + localId;
};
exports.toggleTaskState = function (state) {
    return state === 'DONE' ? 'TODO' : 'DONE';
};
//# sourceMappingURL=type-helpers.js.map