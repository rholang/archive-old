"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
// @ts-ignore
const promise_1 = tslib_1.__importDefault(require("simple-git/promise"));
function getChangesSince(since) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const revisionRange = since ? [`${since}..`] : [];
        return promise_1.default().log([
            '--first-parent',
            '--reverse',
            ...revisionRange,
            './package.json',
        ]);
    });
}
exports.getChangesSince = getChangesSince;
function tagCommit(tag) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return promise_1.default().tag(['-f', tag]);
    });
}
exports.tagCommit = tagCommit;
function doesTagExist(tag) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const tags = yield promise_1.default().tags({ [tag]: null });
        return tags.all.length > 0;
    });
}
exports.doesTagExist = doesTagExist;
function refetchTag(tag) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
            yield promise_1.default()
                .silent(true)
                .tag(['-d', tag]);
        }
        catch (e) {
            // Ignore tag not found errors
            if (!/tag.*not found/.test(e.message)) {
                throw e;
            }
        }
        let fetchTagResult;
        try {
            fetchTagResult = yield promise_1.default()
                .silent(true)
                .fetch(['origin', 'tag', tag]);
        }
        catch (e) {
            // Ignore can't find tag in remote errors
            if (!/Couldn't find remote ref refs\/tags\//.test(e.message)) {
                throw e;
            }
        }
        return { fetchTagResult };
    });
}
exports.refetchTag = refetchTag;
function getHash(ref) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return promise_1.default()
            .silent(true)
            .revparse([ref]);
    });
}
exports.getHash = getHash;
//# sourceMappingURL=git.js.map