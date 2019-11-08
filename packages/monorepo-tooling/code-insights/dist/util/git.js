"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const projector_spawn_1 = tslib_1.__importDefault(require("projector-spawn"));
function getOriginUrl() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const gitCmd = yield projector_spawn_1.default('git', ['remote', 'get-url', 'origin']);
        return gitCmd.stdout.trim();
    });
}
exports.getOriginUrl = getOriginUrl;
function getRef() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const gitCmd = yield projector_spawn_1.default('git', ['rev-parse', 'HEAD']);
        return gitCmd.stdout.trim().split('\n')[0];
    });
}
exports.getRef = getRef;
//# sourceMappingURL=git.js.map