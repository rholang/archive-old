"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var chalk_1 = tslib_1.__importDefault(require("chalk"));
var semver_1 = require("semver");
var changelog_1 = require("../../../utils/changelog");
function getUpdated(logs, currentVersion) {
    return Array.from(new Set(logs
        .filter(function (log) {
        return semver_1.satisfies(log.version, ">" + currentVersion) && log.updated.length;
    })
        .reduce(function (acc, cur) {
        acc = acc.concat(cur.updated);
        return acc;
    }, [])).values());
}
exports.getUpdated = getUpdated;
exports.showChangelogTask = {
    title: 'Getting changelog...',
    task: function (ctx, params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var sourceVersion, logs, updated, _a, majorChanges, minorChanges, patchChanges, output, noChanges;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        sourceVersion = params.currentVersion || ctx.sourceVersion;
                        return [4 /*yield*/, changelog_1.getChangelog(params.packageName, ctx.targetVersion)];
                    case 1:
                        logs = _b.sent();
                        updated = getUpdated(logs, sourceVersion);
                        _a = changelog_1.getLogDetails(logs, sourceVersion), majorChanges = _a.majorChanges, minorChanges = _a.minorChanges, patchChanges = _a.patchChanges;
                        output = [];
                        if (majorChanges.length) {
                            output.push(chalk_1.default.bold(chalk_1.default.yellow('💥 Breaking Changes (major)')), majorChanges, '');
                        }
                        if (minorChanges.length) {
                            output.push(chalk_1.default.bold(chalk_1.default.yellow('🚀 New Features (minor)')), minorChanges, '');
                        }
                        if (patchChanges.length) {
                            output.push(chalk_1.default.bold(chalk_1.default.yellow('🐛 Bug Fixes (patch)')), patchChanges, '');
                        }
                        noChanges = !majorChanges.length && !minorChanges.length && !patchChanges.length;
                        if (noChanges && !updated.length) {
                            return [2 /*return*/, "\uD83E\uDDD0 Looks like nothing changed! You're probably already on " + ctx.targetVersion + " of \"" + params.packageName + "\"."];
                        }
                        else if (noChanges && updated.length) {
                            return [2 /*return*/, [
                                    "\uD83D\uDC4D No changes were made in \"" + params.packageName + "\" between " + sourceVersion + " and " + ctx.targetVersion + ". It has been bumped due to changes made in the following packages:",
                                    updated.map(function (pkg) { return chalk_1.default.bold("  - " + pkg); }),
                                ]];
                        }
                        return [2 /*return*/, output];
                }
            });
        });
    },
};
//# sourceMappingURL=show-changelogs.js.map