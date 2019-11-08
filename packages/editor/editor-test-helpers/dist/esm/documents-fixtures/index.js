/// <reference types="node" />
import { __awaiter, __generator } from "tslib";
import * as fs from 'fs';
import * as path from 'path';
import { promisify } from 'util';
var readFile = promisify(fs.readFile);
var readdir = promisify(fs.readdir);
export function loadAdfDocFixture(fileName) {
    return __awaiter(this, void 0, void 0, function () {
        var file;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, readFile(path.join(__dirname, 'documents', fileName), 'utf8')];
                case 1:
                    file = _a.sent();
                    return [2 /*return*/, JSON.parse(file)];
            }
        });
    });
}
export function getAdfDocFixturesList() {
    return __awaiter(this, void 0, void 0, function () {
        var files;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, readdir(path.join(__dirname, 'documents'))];
                case 1:
                    files = _a.sent();
                    return [2 /*return*/, files.filter(function (files) { return !files.endsWith('.json'); })];
            }
        });
    });
}
//# sourceMappingURL=index.js.map