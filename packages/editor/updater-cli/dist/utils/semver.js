"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var semver_1 = require("semver");
function updateVersionRange(oldVersionRange, newVersion) {
    return oldVersionRange.replace(semver_1.coerce(oldVersionRange).version, semver_1.coerce(newVersion).version);
}
exports.updateVersionRange = updateVersionRange;
//# sourceMappingURL=semver.js.map