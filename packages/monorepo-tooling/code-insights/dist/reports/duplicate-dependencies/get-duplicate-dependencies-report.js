"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const lockfile_1 = require("@yarnpkg/lockfile");
const fs_1 = tslib_1.__importDefault(require("fs"));
const path_1 = tslib_1.__importDefault(require("path"));
const defaultPackageJSONResolver = () => new Promise((resolve, reject) => {
    fs_1.default.readFile(path_1.default.resolve(process.cwd(), './package.json'), 'utf8', (readErr, source) => {
        if (readErr) {
            console.error(readErr);
            reject(readErr);
            return;
        }
        resolve(source);
    });
});
const defaultYarnLockResolver = () => new Promise((resolve, reject) => {
    fs_1.default.readFile(path_1.default.resolve(process.cwd(), './yarn.lock'), 'utf8', (readErr, source) => {
        if (readErr) {
            console.error(readErr);
            reject(readErr);
            return;
        }
        resolve(source);
    });
});
function getReportMap(parsedYarnLock) {
    const reportMap = new Map();
    Object.keys(parsedYarnLock.object).forEach(key => {
        const name = key.substring(0, key.lastIndexOf('@'));
        const { version } = parsedYarnLock.object[key];
        const currentVersions = reportMap.get(name);
        if (currentVersions) {
            currentVersions.add(version);
        }
        else {
            reportMap.set(name, new Set([version]));
        }
    });
    return reportMap;
}
exports.default = ({ returnAllDependencyCounts = false, packageJSONResolver = defaultPackageJSONResolver, yarnLockResolver = defaultYarnLockResolver, } = {}) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const packageJSON = JSON.parse(yield packageJSONResolver());
    const yarnLock = yield yarnLockResolver();
    const parsedYarnLock = lockfile_1.parse(yarnLock);
    const reportMap = getReportMap(parsedYarnLock);
    const { dependencies = {}, devDependencies = {} } = packageJSON;
    let report = Array.from(reportMap.entries()).map(([name, versionsSet]) => ({
        name,
        versions: Array.from(versionsSet),
        directVersion: dependencies[name] || devDependencies[name],
        isDevDependency: !dependencies[name] && !!devDependencies[name],
    }));
    if (!returnAllDependencyCounts) {
        report = report.filter(({ versions }) => versions.length > 1);
    }
    return report;
});
//# sourceMappingURL=get-duplicate-dependencies-report.js.map