"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var child_process_1 = require("child_process");
var util_1 = require("util");
var pexec = util_1.promisify(child_process_1.exec);
function add(filePath) {
    return pexec("git add " + filePath);
}
exports.add = add;
function indent(text, level) {
    if (level === void 0) { level = 1; }
    return "" + ''.padStart(level * 2, ' ') + text;
}
exports.indent = indent;
function processPrintableOutput(printable, level) {
    if (level === void 0) { level = 0; }
    return (Array.isArray(printable) ? printable : [printable]).reduce(function (acc, item) {
        if (Array.isArray(item)) {
            acc.push.apply(acc, tslib_1.__spread(processPrintableOutput(item, level + 1)));
        }
        else {
            acc.push(indent(item, level));
        }
        return acc;
    }, []);
}
exports.processPrintableOutput = processPrintableOutput;
function commit(title, msg) {
    var msgByLine = '-m ' +
        processPrintableOutput(msg)
            .map(function (line) { return "\"" + line + "\""; })
            .join(' -m ');
    return pexec("git commit -m \"" + title + "\" " + msgByLine);
}
exports.commit = commit;
//# sourceMappingURL=git.js.map