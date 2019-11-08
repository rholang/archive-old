"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
// Lock files tend to be huge
const FiveMBBuffer = 1024 * 5000;
function loadFileFromGitHistory(branchName, fileName) {
    return new Promise((resolve, reject) => {
        child_process_1.exec(`git show ${branchName}:${fileName}`, { maxBuffer: FiveMBBuffer }, (error, stdout, stderr) => {
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
exports.default = loadFileFromGitHistory;
//# sourceMappingURL=load-file-from-git-history.js.map