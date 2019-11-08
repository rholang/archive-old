"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var semver_1 = require("semver");
var chalk_1 = tslib_1.__importDefault(require("chalk"));
var console_1 = require("../../../utils/console");
exports.compareVersionsTask = {
    title: function (ctx) {
        return "Comparing versions of: " + chalk_1.default.yellow('[' + Object.keys(ctx.packages).join(', ') + ']');
    },
    skip: function (_ctx, params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, !!params.flags.force];
            });
        });
    },
    task: function (ctx, params, task) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var output, packages;
            return tslib_1.__generator(this, function (_a) {
                output = [];
                packages = Object.entries(ctx.packages).reduce(function (acc, pkg) {
                    if (!semver_1.eq(semver_1.coerce(pkg[1][0]), semver_1.coerce(pkg[1][1])) || params.flags.force) {
                        acc[pkg[0]] = pkg[1];
                        var isMajor = semver_1.diff(semver_1.coerce(pkg[1][0]).version, semver_1.coerce(pkg[1][1]).version) ===
                            'major';
                        output.push("\u2192 " + pkg[0] + ": " + chalk_1.default.blue(pkg[1][0]) + " \u2192 " + (isMajor
                            ? console_1.badgeRed
                            : chalk_1.default.blue)(pkg[1][1]));
                    }
                    else {
                        output.push(chalk_1.default.dim("\u2192 " + pkg[0] + ": " + pkg[1][0] + " === " + pkg[1][1]));
                    }
                    return acc;
                }, {});
                ctx.packages = packages;
                if (!Object.keys(packages).length) {
                    task.abort();
                    return [2 /*return*/, task.format("Packages [" + Object.entries(ctx.packages)
                            .map(function (p) { return p[0]; })
                            .join(', ') + "] are up-to-date. Use --force to force update.")];
                }
                return [2 /*return*/, output];
            });
        });
    },
};
//# sourceMappingURL=compare-version.js.map