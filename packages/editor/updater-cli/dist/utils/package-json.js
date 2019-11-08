"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fs_1 = require("./fs");
var npm_1 = require("./npm");
function loadPackageJson(packageJsonPath) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var _a, _b;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _b = (_a = JSON).parse;
                    return [4 /*yield*/, fs_1.readFile(packageJsonPath, 'utf8')];
                case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
            }
        });
    });
}
exports.loadPackageJson = loadPackageJson;
function getPackageVersion(packageJson, packageName) {
    if (packageJson.dependencies && packageJson.dependencies[packageName]) {
        return packageJson.dependencies[packageName];
    }
    if (packageJson.devDependencies && packageJson.devDependencies[packageName]) {
        return packageJson.devDependencies[packageName];
    }
    return;
}
exports.getPackageVersion = getPackageVersion;
function createPackageJsonPatch(packageJson, deps) {
    var getDep = function (packageJson, dep) {
        return packageJson.dependencies && packageJson.dependencies[dep]
            ? { type: 'dependencies', version: packageJson.dependencies[dep] }
            : packageJson.devDependencies && packageJson.devDependencies[dep]
                ? { type: 'devDependencies', version: packageJson.devDependencies[dep] }
                : packageJson.peerDependencies && packageJson.peerDependencies[dep]
                    ? { type: 'peerDependencies', version: packageJson.peerDependencies[dep] }
                    : null;
    };
    return deps.reduce(function (acc, targetDep) {
        var sourceDep = getDep(packageJson, targetDep.name);
        if (sourceDep &&
            npm_1.isShouldUpdateDep(sourceDep.version, targetDep.version)) {
            acc[sourceDep.type][targetDep.name] = [
                sourceDep.version,
                targetDep.version,
            ];
        }
        return acc;
    }, { dependencies: {}, devDependencies: {}, peerDependencies: {} });
}
exports.createPackageJsonPatch = createPackageJsonPatch;
function updatePackageJson(packageJsonPath, patch) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var update, packageJson;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    update = function (packageJson, type, dep, version) {
                        packageJson[type][dep] = version;
                    };
                    return [4 /*yield*/, loadPackageJson(packageJsonPath)];
                case 1:
                    packageJson = _a.sent();
                    Object.entries(patch.dependencies).forEach(function (_a) {
                        var _b = tslib_1.__read(_a, 2), name = _b[0], version = _b[1];
                        update(packageJson, 'dependencies', name, version[1]);
                    });
                    Object.entries(patch.devDependencies).forEach(function (_a) {
                        var _b = tslib_1.__read(_a, 2), name = _b[0], version = _b[1];
                        update(packageJson, 'devDependencies', name, version[1]);
                    });
                    Object.entries(patch.peerDependencies).forEach(function (_a) {
                        var _b = tslib_1.__read(_a, 2), name = _b[0], version = _b[1];
                        update(packageJson, 'peerDependencies', name, version[1]);
                    });
                    return [4 /*yield*/, fs_1.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 4), 'utf8')];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.updatePackageJson = updatePackageJson;
//# sourceMappingURL=package-json.js.map