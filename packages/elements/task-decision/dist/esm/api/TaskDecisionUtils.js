import { __assign, __rest } from "tslib";
export var convertServiceTaskToTask = function (serviceTask) {
    var creationDate = serviceTask.creationDate, lastUpdateDate = serviceTask.lastUpdateDate, creatorId = serviceTask.creatorId, lastUpdaterId = serviceTask.lastUpdaterId, other = __rest(serviceTask, ["creationDate", "lastUpdateDate", "creatorId", "lastUpdaterId"]);
    return __assign({ creationDate: (creationDate && new Date(creationDate)) || undefined, lastUpdateDate: new Date(lastUpdateDate), creator: creatorId, lastUpdater: lastUpdaterId }, other);
};
export var convertServiceTaskStateToBaseItem = function (serviceTaskInfo) {
    var lastUpdateDate = serviceTaskInfo.lastUpdateDate, other = __rest(serviceTaskInfo, ["lastUpdateDate"]);
    return __assign({ type: 'TASK', lastUpdateDate: new Date(lastUpdateDate) }, other);
};
export var findIndex = function (array, predicate) {
    var index = -1;
    array.some(function (item, i) {
        if (predicate(item)) {
            index = i;
            return true;
        }
        return false;
    });
    return index;
};
//# sourceMappingURL=TaskDecisionUtils.js.map