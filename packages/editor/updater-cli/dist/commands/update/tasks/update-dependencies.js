"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var package_json_1 = require("../../../utils/package-json");
var yarn_1 = require("../../../utils/yarn");
var fs_1 = require("../../../utils/fs");
exports.updateDependenciesTask = {
    title: 'Updating dependencies',
    abort: function (_ctx, _params, task) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, task.prompt("Continue updating?:")];
                    case 1:
                        if (!(_a.sent())) {
                            task.abort();
                            return [2 /*return*/, true];
                        }
                        return [2 /*return*/, false];
                }
            });
        });
    },
    task: function (ctx, _params, task) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var packageJsonPatch, packageJsonPath, deps;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        packageJsonPatch = ctx.packageJsonPatch, packageJsonPath = ctx.packageJsonPath, deps = ctx.deps;
                        task.progress('updating package.json...');
                        return [4 /*yield*/, package_json_1.updatePackageJson(packageJsonPath, packageJsonPatch)];
                    case 1:
                        _a.sent();
                        task.progress('running yarn...');
                        return [4 /*yield*/, yarn_1.yarn()];
                    case 2:
                        _a.sent();
                        task.progress('deduplicating yarn.lock...');
                        return [4 /*yield*/, yarn_1.deduplicate(fs_1.resolveToCwd('yarn.lock'), deps.map(function (pkg) { return pkg.name; }))];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
};
//# sourceMappingURL=update-dependencies.js.map