"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var version_json_1 = require("./version.json");
exports.name = version_json_1.name;
exports.version = version_json_1.version;
var nextMajorVersion = function () {
    return [Number(version_json_1.version.split('.')[0]) + 1, 0, 0].join('.');
};
exports.nextMajorVersion = nextMajorVersion;
//# sourceMappingURL=version-wrapper.js.map