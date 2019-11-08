"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var readline = tslib_1.__importStar(require("readline"));
var chalk_1 = tslib_1.__importDefault(require("chalk"));
function prompt(message) {
    return new Promise(function (resolve) {
        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        rl.question(chalk_1.default.blue("\u276F " + message + " " + chalk_1.default.dim('[yes|y|n|no]') + ": "), function (answer) {
            rl.close();
            if (answer === 'y' || answer === 'yes') {
                return resolve(true);
            }
            return resolve(false);
        });
    });
}
exports.prompt = prompt;
function badgeRed(text) {
    return chalk_1.default.bgRed.black(" " + text + " ");
}
exports.badgeRed = badgeRed;
function badgeGreen(text) {
    return chalk_1.default.bgGreen.black(" " + text + " ");
}
exports.badgeGreen = badgeGreen;
//# sourceMappingURL=console.js.map