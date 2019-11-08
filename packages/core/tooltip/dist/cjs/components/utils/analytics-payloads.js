"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var version_json_1 = require("../../version.json");
exports.hoveredPayload = {
    action: 'displayed',
    actionSubject: 'tooltip',
    attributes: {
        componentName: 'tooltip',
        packageName: version_json_1.name,
        packageVersion: version_json_1.version,
    },
};
exports.unhoveredPayload = {
    action: 'hidden',
    actionSubject: 'tooltip',
    attributes: {
        componentName: 'tooltip',
        packageName: version_json_1.name,
        packageVersion: version_json_1.version,
    },
};
//# sourceMappingURL=analytics-payloads.js.map