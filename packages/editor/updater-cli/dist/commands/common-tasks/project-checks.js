"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fs_1 = require("../../utils/fs");
var package_json_1 = require("../../utils/package-json");
exports.projectChecksTask = {
    title: "Checking project's compatibility",
    task: function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var yarnLockPath, packageJsonPath, packageJsonLockPath, packageJson;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        yarnLockPath = fs_1.resolveToCwd('yarn.lock');
                        packageJsonPath = fs_1.resolveToCwd('package.json');
                        packageJsonLockPath = fs_1.resolveToCwd('package-json.lock');
                        return [4 /*yield*/, fs_1.exists(packageJsonPath)];
                    case 1:
                        if (!(_a.sent())) {
                            throw new Error('File "package.json" doesn\'t exist in current directory.');
                        }
                        return [4 /*yield*/, fs_1.exists(packageJsonLockPath)];
                    case 2:
                        if (_a.sent()) {
                            throw new Error('File "package-json.lock" exists in current directory and npm is not supported yet.');
                        }
                        return [4 /*yield*/, fs_1.exists(yarnLockPath)];
                    case 3:
                        if (!(_a.sent())) {
                            throw new Error('File "yarn.lock" doesn\'t exist in current directory.');
                        }
                        return [4 /*yield*/, package_json_1.loadPackageJson(packageJsonPath)];
                    case 4:
                        packageJson = _a.sent();
                        if (packageJson.bolt) {
                            throw new Error('Bolt repositores is not yet supported.');
                        }
                        return [2 /*return*/];
                }
            });
        });
    },
};
//# sourceMappingURL=project-checks.js.map