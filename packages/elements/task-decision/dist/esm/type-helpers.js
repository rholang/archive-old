export var isDecision = function (item) {
    return !!(item && item.type === 'DECISION');
};
export var isTask = function (item) {
    return !!(item && item.type === 'TASK');
};
export var toObjectKey = function (item) {
    var localId = item.localId, objectAri = item.objectAri;
    return {
        localId: localId,
        objectAri: objectAri,
    };
};
export var objectKeyToString = function (objectKey) {
    var objectAri = objectKey.objectAri, localId = objectKey.localId;
    return objectAri + ":" + localId;
};
export var toggleTaskState = function (state) {
    return state === 'DONE' ? 'TODO' : 'DONE';
};
//# sourceMappingURL=type-helpers.js.map