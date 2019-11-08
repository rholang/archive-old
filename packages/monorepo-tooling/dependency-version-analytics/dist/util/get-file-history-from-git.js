"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
// Lock files tend to be huge
const FiveMBBuffer = 1024 * 5000;
function getFileHistoryFromGit(fileName) {
    return new Promise((resolve, reject) => {
        child_process_1.exec(`git log ${fileName}`, { maxBuffer: FiveMBBuffer }, (error, stdout, stderr) => {
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
exports.default = getFileHistoryFromGit;
//# sourceMappingURL=get-file-history-from-git.js.map