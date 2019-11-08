"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var chalk_1 = tslib_1.__importDefault(require("chalk"));
var npm_1 = require("../../../utils/npm");
var package_json_1 = require("../../../utils/package-json");
exports.getVersionsTask = {
    title: function (_ctx, params) {
        return "Getting source and target versions of " + chalk_1.default.yellow('[' + params.packageName + ']');
    },
    task: function (ctx, params, task) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var targetVersion, currentVersion;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    task.progress("determining the target version...");
                    return [4 /*yield*/, npm_1.getLatest(params.packageName)];
                case 1:
                    targetVersion = _a.sent();
                    task.progress("determining the source version...");
                    currentVersion = package_json_1.getPackageVersion(ctx.packageJson, params.packageName);
                    if (!currentVersion) {
                        throw new Error("Package \"" + params.packageName + "\" is not listed in projects dependencies/devDependencies");
                    }
                    ctx.targetVersion = targetVersion;
                    ctx.sourceVersion = currentVersion;
                    return [2 /*return*/, task.format([
                            'Target: ' + targetVersion,
                            'Source: ' + currentVersion,
                        ])];
            }
        });
    }); },
};
//# sourceMappingURL=get-versions.js.map