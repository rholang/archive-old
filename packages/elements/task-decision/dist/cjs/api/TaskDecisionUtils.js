"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
exports.convertServiceTaskToTask = function (serviceTask) {
    var creationDate = serviceTask.creationDate, lastUpdateDate = serviceTask.lastUpdateDate, creatorId = serviceTask.creatorId, lastUpdaterId = serviceTask.lastUpdaterId, other = tslib_1.__rest(serviceTask, ["creationDate", "lastUpdateDate", "creatorId", "lastUpdaterId"]);
    return tslib_1.__assign({ creationDate: (creationDate && new Date(creationDate)) || undefined, lastUpdateDate: new Date(lastUpdateDate), creator: creatorId, lastUpdater: lastUpdaterId }, other);
};
exports.convertServiceTaskStateToBaseItem = function (serviceTaskInfo) {
    var lastUpdateDate = serviceTaskInfo.lastUpdateDate, other = tslib_1.__rest(serviceTaskInfo, ["lastUpdateDate"]);
    return tslib_1.__assign({ type: 'TASK', lastUpdateDate: new Date(lastUpdateDate) }, other);
};
exports.findIndex = function (array, predicate) {
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