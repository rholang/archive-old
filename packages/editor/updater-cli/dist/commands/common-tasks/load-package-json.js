"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fs_1 = require("../../utils/fs");
var package_json_1 = require("../../utils/package-json");
exports.loadPackageJsonTask = {
    title: "Loading project's package.json",
    task: function (ctx) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var packageJsonPath, _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    packageJsonPath = fs_1.resolveToCwd('package.json');
                    ctx.packageJsonPath = packageJsonPath;
                    _a = ctx;
                    return [4 /*yield*/, package_json_1.loadPackageJson(packageJsonPath)];
                case 1:
                    _a.packageJson = _b.sent();
                    return [2 /*return*/];
            }
        });
    }); },
};
//# sourceMappingURL=load-package-json.js.map