"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Creates a function that "collects" and returns values !== undefined,
 * falls back to default value for subsequent calls after first value === undefined
 */
function createCollector() {
    var keepCollecting = true;
    return function (nextResult, defaultValue) {
        if (keepCollecting && nextResult !== undefined) {
            return nextResult;
        }
        keepCollecting = false;
        return defaultValue;
    };
}
exports.createCollector = createCollector;
//# sourceMappingURL=create-collector.js.map