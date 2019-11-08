"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var chalk_1 = tslib_1.__importDefault(require("chalk"));
var npm_1 = require("../../../utils/npm");
var package_json_1 = require("../../../utils/package-json");
var semver_1 = require("../../../utils/semver");
exports.getVersionsTask = {
    title: function (_ctx, params) {
        return "Getting source and target versions of " + chalk_1.default.yellow('[' + params.packages.join(', ') + ']');
    },
    task: function (ctx, params, task) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var output, ignoredOutput, packages, _a, _b, pkg, sourceVersion, targetVersion, _c, _d, _e, e_1_1;
        var e_1, _f;
        return tslib_1.__generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    output = [];
                    ignoredOutput = [];
                    packages = {};
                    _g.label = 1;
                case 1:
                    _g.trys.push([1, 7, 8, 9]);
                    _a = tslib_1.__values(params.packages), _b = _a.next();
                    _g.label = 2;
                case 2:
                    if (!!_b.done) return [3 /*break*/, 6];
                    pkg = _b.value;
                    task.progress(pkg + "...");
                    sourceVersion = package_json_1.getPackageVersion(ctx.packageJson, pkg);
                    _c = sourceVersion;
                    if (!_c) return [3 /*break*/, 4];
                    _d = semver_1.updateVersionRange;
                    _e = [sourceVersion];
                    return [4 /*yield*/, npm_1.getLatest(pkg)];
                case 3:
                    _c = _d.apply(void 0, _e.concat([_g.sent()]));
                    _g.label = 4;
                case 4:
                    targetVersion = _c;
                    if (sourceVersion && targetVersion) {
                        packages[pkg] = [sourceVersion, targetVersion];
                        output.push(pkg, task.format(['Target: ' + targetVersion, 'Source: ' + sourceVersion]));
                    }
                    else {
                        ignoredOutput.push(chalk_1.default.yellow.dim("[ignored] " + pkg + " is not listed in project's dependencies/devDependencies"));
                    }
                    _g.label = 5;
                case 5:
                    _b = _a.next();
                    return [3 /*break*/, 2];
                case 6: return [3 /*break*/, 9];
                case 7:
                    e_1_1 = _g.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 9];
                case 8:
                    try {
                        if (_b && !_b.done && (_f = _a.return)) _f.call(_a);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 9:
                    if (!Object.keys(packages).length) {
                        task.abort();
                        return [2 /*return*/, task.format([
                                "None of the provided packages is listed in project's dependencies/devDependencies",
                            ])];
                    }
                    ctx.packages = packages;
                    return [2 /*return*/, tslib_1.__spread(output, ignoredOutput)];
            }
        });
    }); },
};
//# sourceMappingURL=get-versions.js.map