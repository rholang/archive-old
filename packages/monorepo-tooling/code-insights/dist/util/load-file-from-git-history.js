"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const child_process_1 = require("child_process");
function getCurrentBranch() {
    return new Promise((resolve, reject) => {
        child_process_1.exec(`git rev-parse --abbrev-ref HEAD`, (error, stdout, stderr) => {
            if (error) {
                reject(error);
            }
            if (stderr) {
                reject(stderr);
            }
            resolve(stdout.toString().replace(/\n$/gi, ''));
        });
    });
}
function getAncestorCommit(branchName, currentBranch) {
    return new Promise((resolve, reject) => {
        child_process_1.exec(`git merge-base ${branchName} ${currentBranch}`, (error, stdout, stderr) => {
            if (error) {
                reject(error);
            }
            if (stderr) {
                reject(stderr);
            }
            resolve(stdout.toString().replace(/\n$/gi, ''));
        });
    });
}
function getFileFromGitHistory(ancestorCommit, fileName) {
    return new Promise((resolve, reject) => {
        child_process_1.exec(`git show ${ancestorCommit}:${fileName}`, { maxBuffer: FiveMBBuffer }, (error, stdout, stderr) => {
            if (error) {
                reject(error);
            }
            if (stderr) {
                reject(stderr);
            }
            resolve(stdout);
        });
    });
}
// Lock files tend to be huge
const FiveMBBuffer = 1024 * 5000;
function loadFileFromGitHistory(branchName, fileName) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const currentBranch = yield getCurrentBranch();
        const ancestorCommit = yield getAncestorCommit(branchName, currentBranch);
        return getFileFromGitHistory(ancestorCommit, fileName);
    });
}
exports.default = loadFileFromGitHistory;
//# sourceMappingURL=load-file-from-git-history.js.map