"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fs_1 = require("../../../utils/fs");
var git = tslib_1.__importStar(require("../../../utils/git"));
exports.commitChangedTask = {
    title: 'Committing changes',
    task: function (ctx) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, git.add(fs_1.resolveToCwd('package.json'))];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, git.add(fs_1.resolveToCwd('yarn.lock'))];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, git.commit("Updated packages [" + Object.keys(ctx.packages).join(', ') + "]", ctx.changelogs)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
};
//# sourceMappingURL=commit-changes.js.map