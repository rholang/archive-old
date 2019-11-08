"use strict";
/// <reference types="node" />
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fs = tslib_1.__importStar(require("fs"));
var path = tslib_1.__importStar(require("path"));
var util_1 = require("util");
var readFile = util_1.promisify(fs.readFile);
var readdir = util_1.promisify(fs.readdir);
function loadAdfDocFixture(fileName) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var file;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, readFile(path.join(__dirname, 'documents', fileName), 'utf8')];
                case 1:
                    file = _a.sent();
                    return [2 /*return*/, JSON.parse(file)];
            }
        });
    });
}
exports.loadAdfDocFixture = loadAdfDocFixture;
function getAdfDocFixturesList() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var files;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, readdir(path.join(__dirname, 'documents'))];
                case 1:
                    files = _a.sent();
                    return [2 /*return*/, files.filter(function (files) { return !files.endsWith('.json'); })];
            }
        });
    });
}
exports.getAdfDocFixturesList = getAdfDocFixturesList;
//# sourceMappingURL=index.js.map