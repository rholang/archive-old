"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fs = tslib_1.__importStar(require("fs"));
var path = tslib_1.__importStar(require("path"));
var util_1 = require("util");
/**
 * Resolves file path to current working directory.
 */
function resolveToCwd(filename) {
    if (filename === void 0) { filename = ''; }
    return path.join(process.cwd(), filename);
}
exports.resolveToCwd = resolveToCwd;
exports.exists = util_1.promisify(fs.exists);
exports.readFile = util_1.promisify(fs.readFile);
exports.writeFile = util_1.promisify(fs.writeFile);
//# sourceMappingURL=fs.js.map