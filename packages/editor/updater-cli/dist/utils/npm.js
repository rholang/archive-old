"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var child_process_1 = require("child_process");
var util_1 = require("util");
var semver = tslib_1.__importStar(require("semver"));
var pexec = util_1.promisify(child_process_1.exec);
function isShouldUpdateDep(oldVersion, newVersion) {
    if (oldVersion === '*') {
        return true;
    }
    if (newVersion === '*') {
        return false;
    }
    return semver.gt(semver.coerce(newVersion), semver.coerce(oldVersion));
}
exports.isShouldUpdateDep = isShouldUpdateDep;
function getLatest(packageName) {
    return show(packageName, ['versions']).then(function (response) { return response.pop(); });
}
exports.getLatest = getLatest;
function getDependencies(packageName, version) {
    if (version === void 0) { version = 'latest'; }
    return show("" + packageName + (version ? '@' + version : ''), [
        'dependencies',
        'devDependencies',
        'peerDependencies',
    ]);
}
exports.getDependencies = getDependencies;
function postProcessDependeciesList(packages) {
    return Array.from(packages
        .reduce(function (acc, item) {
        var prevVersion = (acc.get(item.name) || { version: null }).version;
        if (!prevVersion || isShouldUpdateDep(prevVersion, item.version)) {
            acc.set(item.name, item);
        }
        return acc;
    }, new Map())
        .values());
}
exports.postProcessDependeciesList = postProcessDependeciesList;
function toDepsList(list) {
    return list.map(function (dep) { return ({ name: dep[0], version: dep[1] }); });
}
function getFlatDependenciesList(packages, exclude, depth) {
    if (exclude === void 0) { exclude = []; }
    if (depth === void 0) { depth = 1; }
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var dependencies, _a, _b;
        var _this = this;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, Promise.all(packages.map(function (pkg) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                        var rawDeps;
                        return tslib_1.__generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, getDependencies(pkg.name, semver.coerce(pkg.version))];
                                case 1:
                                    rawDeps = _a.sent();
                                    if (!rawDeps) {
                                        return [2 /*return*/, []];
                                    }
                                    return [2 /*return*/, tslib_1.__spread(Object.entries(rawDeps.dependencies || {}).filter(function (_a) {
                                            var _b = tslib_1.__read(_a, 1), name = _b[0];
                                            return exclude.indexOf(name) === -1;
                                        }), Object.entries(rawDeps.peerDependencies || {}).filter(function (_a) {
                                            var _b = tslib_1.__read(_a, 1), name = _b[0];
                                            return exclude.indexOf(name) === -1;
                                        }))];
                            }
                        });
                    }); }))];
                case 1:
                    dependencies = (_c.sent()).reduce(function (acc, item) { return acc.concat(item); }, []);
                    if (!(depth > 0)) return [3 /*break*/, 3];
                    _a = postProcessDependeciesList;
                    _b = [toDepsList(dependencies)];
                    return [4 /*yield*/, getFlatDependenciesList(toDepsList(dependencies), exclude, depth - 1)];
                case 2: return [2 /*return*/, _a.apply(void 0, [tslib_1.__spread.apply(void 0, _b.concat([(_c.sent())]))])];
                case 3: return [2 /*return*/, postProcessDependeciesList(toDepsList(dependencies))];
            }
        });
    });
}
exports.getFlatDependenciesList = getFlatDependenciesList;
function show(packageName, fields) {
    return pexec("npm show " + packageName + " " + fields.join(' ') + " --json").then(function (_a) {
        var stdout = _a.stdout;
        return stdout ? JSON.parse(stdout) : null;
    });
}
exports.show = show;
//# sourceMappingURL=npm.js.map