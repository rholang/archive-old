"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const load_file_from_git_history_1 = tslib_1.__importDefault(require("../../util/load-file-from-git-history"));
const get_duplicate_dependencies_report_1 = tslib_1.__importDefault(require("./get-duplicate-dependencies-report"));
const insights_report_1 = require("../insights-report");
const message = (annotationCount) => `This report interprets the yarn lock file, to tell you if there are any duplicate dependencies introduced by your PR.
    Duplicate dependencies are marked as high severity, dev dependencies as low severity
    ${annotationCount > 0
    ? `There are ${annotationCount} new duplicate dependencies introduced in this PR 😢`
    : `Good job! No new duplicate dependencies are introduced in this PR 😃`}
    `;
function getTargetBranchPackageJSONResolver(targetBranch) {
    return () => load_file_from_git_history_1.default(targetBranch, 'package.json');
}
function getTargetBranchYarnLockResolver(targetBranch) {
    return () => load_file_from_git_history_1.default(targetBranch, 'yarn.lock');
}
function getRegressedDependencies(targetBranch) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const [currentBranch, masterDuplicatesReport] = yield Promise.all([
            get_duplicate_dependencies_report_1.default({ returnAllDependencyCounts: true }),
            get_duplicate_dependencies_report_1.default({
                returnAllDependencyCounts: true,
                packageJSONResolver: getTargetBranchPackageJSONResolver(targetBranch),
                yarnLockResolver: getTargetBranchYarnLockResolver(targetBranch),
            }),
        ]);
        const regressedDependencies = currentBranch
            .map(branchDependencyInfo => [
            masterDuplicatesReport.find(({ name }) => branchDependencyInfo.name === name),
            branchDependencyInfo,
        ])
            .filter(([masterDependencyInfo, branchDependencyInfo]) => {
            const existingDependencyWithNewDupes = masterDependencyInfo &&
                branchDependencyInfo &&
                branchDependencyInfo.versions.length >
                    masterDependencyInfo.versions.length;
            const newDependencyDupedAlready = !masterDependencyInfo &&
                branchDependencyInfo &&
                branchDependencyInfo.versions.length > 1;
            return existingDependencyWithNewDupes || newDependencyDupedAlready;
        })
            .map(([masterDependencyInfo, branchDependencyInfo]) => {
            if (!branchDependencyInfo) {
                throw new Error("This check is only here to make typescript happy, it's impossible to ever happen...");
            }
            if (!masterDependencyInfo) {
                return Object.assign(Object.assign({}, branchDependencyInfo), { newVersions: branchDependencyInfo.versions });
            }
            return Object.assign(Object.assign({}, branchDependencyInfo), { newVersions: branchDependencyInfo.versions.filter(version => !masterDependencyInfo.versions.includes(version)) });
        });
        return regressedDependencies;
    });
}
function duplicateDependenciesReport(targetBranch) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const regressedDependencies = yield getRegressedDependencies(targetBranch);
        // add base report
        const totalNewDuplicatesCount = regressedDependencies.reduce((accumulator, currentValue) => accumulator + currentValue.newVersions.length, 0);
        const result = {
            details: message(totalNewDuplicatesCount),
            status: totalNewDuplicatesCount > 0
                ? insights_report_1.InsightsReportResults.FAIL
                : insights_report_1.InsightsReportResults.PASS,
            totalErrors: totalNewDuplicatesCount,
            annotations: regressedDependencies.map(({ newVersions, name, directVersion, isDevDependency }) => ({
                message: `${newVersions.length} extra versions of ${name} are introduced in this change (${newVersions.join(',')})`,
                path: 'yarn.lock',
                line: 0,
                severity: !directVersion || isDevDependency ? insights_report_1.Severity.LOW : insights_report_1.Severity.HIGH,
            })),
        };
        return result;
    });
}
exports.default = duplicateDependenciesReport;
//# sourceMappingURL=duplicate-dependencies-report.js.map