"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var runner_1 = require("../../runner");
var load_package_json_1 = require("../common-tasks/load-package-json");
var get_versions_1 = require("./tasks/get-versions");
var show_changelogs_1 = require("./tasks/show-changelogs");
var project_checks_1 = require("../common-tasks/project-checks");
var changeLogTasks = runner_1.createCommand([
    project_checks_1.projectChecksTask,
    load_package_json_1.loadPackageJsonTask,
    get_versions_1.getVersionsTask,
    show_changelogs_1.showChangelogTask,
]);
function changelogCommand(packageName, currentVersion) {
    if (currentVersion === void 0) { currentVersion = ''; }
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            return [2 /*return*/, changeLogTasks({ packageName: packageName, currentVersion: currentVersion })];
        });
    });
}
exports.changelogCommand = changelogCommand;
//# sourceMappingURL=index.js.map