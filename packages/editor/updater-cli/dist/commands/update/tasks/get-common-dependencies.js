"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var package_json_1 = require("../../../utils/package-json");
exports.getCommonDependenciesTask = {
    title: 'Calculating dependencies that should be updated',
    task: function (ctx) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                ctx.packageJsonPatch = package_json_1.createPackageJsonPatch(ctx.packageJson, ctx.deps);
                return [2 /*return*/];
            });
        });
    },
};
//# sourceMappingURL=get-common-dependencies.js.map