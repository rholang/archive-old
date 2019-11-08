"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var chalk_1 = tslib_1.__importDefault(require("chalk"));
var npm_1 = require("../../../utils/npm");
// Packages for which we don't allow automatic updates by default
var SKIP_AUTOMATIC_UPDATES = ['react', 'react-dom', 'styled-components'];
exports.getDependenciesTask = {
    title: function (ctx) {
        return "Getting dependencies of " + chalk_1.default.yellow('[' + Object.keys(ctx.packages).join(', ') + ']');
    },
    task: function (ctx, params, task) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var packages, skipAutomatic, flatDeps;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        packages = Object.entries(ctx.packages).map(function (pkg) { return ({
                            name: pkg[0],
                            version: pkg[1][1],
                        }); });
                        skipAutomatic = SKIP_AUTOMATIC_UPDATES.filter(function (pkg) { return params.packages.indexOf(pkg) === -1; });
                        return [4 /*yield*/, npm_1.getFlatDependenciesList(packages, tslib_1.__spread((params.flags.exclude || []), skipAutomatic), 0)];
                    case 1:
                        flatDeps = _a.sent();
                        ctx.deps = npm_1.postProcessDependeciesList(tslib_1.__spread(packages, flatDeps));
                        return [2 /*return*/, task.format("Found: " + ctx.deps.length)];
                }
            });
        });
    },
};
//# sourceMappingURL=get-dependencies.js.map