"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var chalk_1 = tslib_1.__importDefault(require("chalk"));
var semver_1 = require("semver");
var changelog_1 = require("../../../utils/changelog");
var console_1 = require("../../../utils/console");
function printDeps(title, deps, task) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var dependencies, listWithBreaking, listWithoutBreaking, i, _a, name_1, versions, isMajor, depTitle, listItem, logs, majorChanges;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!Object.keys(deps).length) {
                        return [2 /*return*/, []];
                    }
                    dependencies = Object.entries(deps);
                    listWithBreaking = [];
                    listWithoutBreaking = [];
                    i = 0;
                    _b.label = 1;
                case 1:
                    if (!(i < dependencies.length)) return [3 /*break*/, 6];
                    _a = tslib_1.__read(dependencies[i], 2), name_1 = _a[0], versions = _a[1];
                    isMajor = semver_1.diff(semver_1.coerce(versions[0]).version, semver_1.coerce(versions[1]).version) ===
                        'major';
                    depTitle = name_1 + ": " + chalk_1.default.blue(versions[0]) + " \u2192 " + (isMajor ? console_1.badgeRed(versions[1]) : chalk_1.default.blue(versions[1]));
                    listItem = [
                        isMajor ? depTitle + " " + chalk_1.default.red('[breaking changes]') : depTitle,
                    ];
                    if (!isMajor) return [3 /*break*/, 4];
                    return [4 /*yield*/, changelog_1.getChangelog(name_1, versions[1])];
                case 2:
                    logs = _b.sent();
                    return [4 /*yield*/, changelog_1.getLogDetails(logs, versions[0])];
                case 3:
                    majorChanges = (_b.sent()).majorChanges;
                    listItem = listItem.concat(task.format(majorChanges, function (item) { return chalk_1.default.dim(item); }), '');
                    listWithBreaking = listWithBreaking.concat(listItem);
                    return [3 /*break*/, 5];
                case 4:
                    listWithoutBreaking = listWithoutBreaking.concat(listItem);
                    _b.label = 5;
                case 5:
                    i++;
                    return [3 /*break*/, 1];
                case 6: return [2 /*return*/, [title, listWithBreaking, listWithoutBreaking]];
            }
        });
    });
}
exports.showDependenciesListTask = {
    title: 'Preparing list of the dependencies',
    task: function (ctx, _params, task) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var list, changelogs;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all([
                            printDeps(chalk_1.default.yellow('Dependencies:'), ctx.packageJsonPatch.dependencies, task),
                            printDeps(chalk_1.default.yellow('DevDependencies:'), ctx.packageJsonPatch.devDependencies, task),
                        ])];
                    case 1:
                        list = _a.sent();
                        task.title = 'Updating following dependencies:';
                        changelogs = list.reduce(function (acc, item) { return tslib_1.__spread(acc, item); }, []);
                        ctx.changelogs = changelogs;
                        return [2 /*return*/, changelogs];
                }
            });
        });
    },
};
//# sourceMappingURL=show-dependencies-list.js.map