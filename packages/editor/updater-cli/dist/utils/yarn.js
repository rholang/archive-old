"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var child_process_1 = require("child_process");
var util_1 = require("util");
var yarn_deduplicate_1 = require("yarn-deduplicate");
var fs_1 = require("./fs");
var pexec = util_1.promisify(child_process_1.exec);
function yarn() {
    return pexec('yarn');
}
exports.yarn = yarn;
function loadYarnLock(yarnLockPath) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fs_1.readFile(yarnLockPath, 'utf8')];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.loadYarnLock = loadYarnLock;
function deduplicate(yarnLockPath, packages) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var yarnLock, dedupedYarnLock;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loadYarnLock(yarnLockPath)];
                case 1:
                    yarnLock = _a.sent();
                    dedupedYarnLock = yarn_deduplicate_1.fixDuplicates(yarnLock, {
                        includePackages: packages,
                    });
                    return [4 /*yield*/, fs_1.writeFile(yarnLockPath, dedupedYarnLock)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, pexec("rm -rf " + fs_1.resolveToCwd('node_modules'))];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, pexec('yarn')];
                case 4:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.deduplicate = deduplicate;
//# sourceMappingURL=yarn.js.map