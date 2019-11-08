"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hasher = null;
exports.destroyHasher = function () { return (hasher = null); };
exports.createHasher = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var numWorkers, WorkerHasher, error_1, SimpleHasher;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                numWorkers = 3;
                if (!!hasher) return [3 /*break*/, 5];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 5]);
                return [4 /*yield*/, Promise.resolve().then(function () { return tslib_1.__importStar(require('./workerHasher')); })];
            case 2:
                WorkerHasher = (_a.sent()).WorkerHasher;
                hasher = new WorkerHasher(numWorkers);
                return [3 /*break*/, 5];
            case 3:
                error_1 = _a.sent();
                return [4 /*yield*/, Promise.resolve().then(function () { return tslib_1.__importStar(require('./simpleHasher')); })];
            case 4:
                SimpleHasher = (_a.sent()).SimpleHasher;
                hasher = new SimpleHasher();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/, hasher];
        }
    });
}); };
//# sourceMappingURL=hasherCreator.js.map