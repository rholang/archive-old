"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var runner_1 = require("../../runner");
var load_package_json_1 = require("../common-tasks/load-package-json");
var apply_preset_1 = require("./apply-preset");
var get_versions_1 = require("./tasks/get-versions");
var compare_version_1 = require("./tasks/compare-version");
var get_dependencies_1 = require("./tasks/get-dependencies");
var get_common_dependencies_1 = require("./tasks/get-common-dependencies");
var show_dependencies_list_1 = require("./tasks/show-dependencies-list");
var update_dependencies_1 = require("./tasks/update-dependencies");
var project_checks_1 = require("../common-tasks/project-checks");
var commit_changes_1 = require("./tasks/commit-changes");
var updateTasks = runner_1.createCommand([
    project_checks_1.projectChecksTask,
    load_package_json_1.loadPackageJsonTask,
    get_versions_1.getVersionsTask,
    compare_version_1.compareVersionsTask,
    get_dependencies_1.getDependenciesTask,
    get_common_dependencies_1.getCommonDependenciesTask,
    show_dependencies_list_1.showDependenciesListTask,
    update_dependencies_1.updateDependenciesTask,
    commit_changes_1.commitChangedTask,
]);
function updateCommand(packages, flags) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            return [2 /*return*/, updateTasks({
                    packages: packages.concat(apply_preset_1.applyPreset(flags.preset)),
                    flags: flags,
                })];
        });
    });
}
exports.updateCommand = updateCommand;
//# sourceMappingURL=index.js.map