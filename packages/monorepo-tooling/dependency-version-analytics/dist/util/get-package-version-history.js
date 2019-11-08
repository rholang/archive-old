"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
function getPackageVersionHistory(packageName) {
    return new Promise((resolve, reject) => {
        child_process_1.exec(`yarn info ${packageName} --json time`, (error, stdout, stderr) => {
            if (error) {
                reject(error);
            }
            if (stderr) {
                reject(stderr);
            }
            let json;
            try {
                json = JSON.parse(stdout).data;
            }
            catch (e) {
                reject(`Error parsing json output: ${e}`);
            }
            resolve(json);
        });
    });
}
exports.default = getPackageVersionHistory;
//# sourceMappingURL=get-package-version-history.js.map