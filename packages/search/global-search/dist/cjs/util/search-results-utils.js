"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appendListWithoutDuplication = function (resultsFirst, resultsSecond) {
    return resultsFirst.concat(resultsSecond.filter(function (result) {
        return (resultsFirst.findIndex(function (o) {
            return o.resultId === result.resultId;
        }) === -1);
    }));
};
//# sourceMappingURL=search-results-utils.js.map