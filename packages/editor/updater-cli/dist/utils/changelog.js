"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
var semver_1 = require("semver");
var chalk_1 = tslib_1.__importDefault(require("chalk"));
var terminal_link_1 = tslib_1.__importDefault(require("terminal-link"));
function printLogDetails(log) {
    return log.details.reduce(function (acc, detail) {
        if (detail.link) {
            acc.push(md(detail.text) +
                chalk_1.default.dim(terminal_link_1.default(" [" + detail.link + "]", "https://product-fabric.atlassian.net/browse/" + detail.link)));
        }
        else {
            acc.push(md(detail.text));
        }
        return acc;
    }, []);
}
function md(str) {
    var bold = /(\*\*|__)(.*?)\1/g;
    return str.replace(bold, chalk_1.default.bold('$2'));
}
function getLogDetails(changelogs, currentVersion) {
    var logs = changelogs.filter(function (log) {
        return semver_1.satisfies(log.version, ">" + semver_1.coerce(currentVersion)) &&
            log.details.length;
    });
    var majorChanges = logs
        .filter(function (log) { return log.type === 'major'; })
        .map(printLogDetails);
    var minorChanges = logs
        .filter(function (log) { return log.type === 'minor'; })
        .map(printLogDetails);
    var patchChanges = logs
        .filter(function (log) { return log.type === 'patch'; })
        .map(printLogDetails);
    return {
        majorChanges: majorChanges,
        minorChanges: minorChanges,
        patchChanges: patchChanges,
    };
}
exports.getLogDetails = getLogDetails;
function capitalize(str) {
    var _a = tslib_1.__read(str.split('')), first = _a[0], rest = _a.slice(1);
    return "" + first.toLocaleUpperCase() + rest.join('');
}
var jiraRegex = /(^|\s)[a-zA-Z]+-\d{1,10}/g;
var isJiraTicket = function (str) { return str.match(jiraRegex); };
function sortChanges(logs) {
    return logs.sort(function (a, b) {
        var aHas = a.details.some(function (d) { return !!d.link; });
        var bHas = b.details.some(function (d) { return !!d.link; });
        if (aHas === bHas) {
            return 0;
        }
        if (aHas && !bHas) {
            return 1;
        }
        return -1;
    });
}
function parseChangelog(raw) {
    var splitToken = "__CHANGELOG_SPLIT_" + Date.now() + "__";
    return raw
        .replace(/[\n\r\s]## /g, splitToken + "## ")
        .split(splitToken)
        .reduce(function (all, log) {
        var match = log.match(/\d+\.\d+\.\d+/);
        var v = match ? match[0] : null;
        if (!v) {
            return all;
        }
        var version = semver_1.coerce(v);
        if (!version) {
            return all;
        }
        var isPatch = version.patch !== 0;
        var isMinor = version.minor !== 0 && !isPatch;
        var isMajor = version.major !== 0 && !isMinor && !isPatch;
        var type = isMajor ? 'major' : isMinor ? 'minor' : 'patch';
        var lines = log.split('\n');
        var details = [];
        var updated = [];
        var isIndented = false;
        lines.forEach(function (line) {
            var text = line
                .trim()
                .replace(/^-(\s)?(\[(major|minor|patch)\])?/, '')
                .replace(/\[(.*?)\](\(https:\/\/bitbucket\.org\/atlassian\/atlaskit-mk-2\/commits\/\1\)):?/, '')
                .trim();
            if (!(!text ||
                text.substr(0, 2) === '##' ||
                text.indexOf('Updated dependencies') !== -1)) {
                if (line.substr(4, 10) === '@atlaskit/') {
                    updated.push(line.substring(4, line.lastIndexOf('@')));
                }
                else {
                    var match_1 = isJiraTicket(text);
                    var isList = line.trim().substr(0, 1) === '-';
                    if (!isList) {
                        isIndented = true;
                    }
                    if (match_1) {
                        details.push({
                            link: match_1[0],
                            text: (isIndented ? '  ' : '') + "- " + capitalize(text
                                .replace(jiraRegex, '')
                                .trim()
                                .replace(/^(:|-)?/, '')
                                .trim()),
                        });
                    }
                    else {
                        details.push({
                            text: !isList ? "  " + text : "- " + capitalize(text),
                        });
                    }
                }
            }
        });
        return all.concat({
            type: type,
            version: version,
            details: details,
            updated: updated,
        });
    }, []);
}
function getChangelog(packageName, versionTo) {
    if (versionTo === void 0) { versionTo = 'latest'; }
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var res, data, logs;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, node_fetch_1.default("https://unpkg.com/" + packageName + "@" + versionTo + "/CHANGELOG.md")];
                case 1:
                    res = _a.sent();
                    if (!(res.status === 200)) return [3 /*break*/, 3];
                    return [4 /*yield*/, res.text()];
                case 2:
                    data = _a.sent();
                    logs = sortChanges(parseChangelog(data));
                    return [2 /*return*/, logs];
                case 3: throw new Error("Unable to fetch changelog for \"" + packageName + "\".");
            }
        });
    });
}
exports.getChangelog = getChangelog;
//# sourceMappingURL=changelog.js.map