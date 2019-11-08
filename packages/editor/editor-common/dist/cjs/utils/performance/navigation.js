"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_performance_api_available_1 = require("./is-performance-api-available");
function getResponseEndTime() {
    if (!is_performance_api_available_1.isPerformanceAPIAvailable()) {
        return;
    }
    var nav = performance.getEntriesByType('navigation')[0];
    if (nav) {
        return nav.responseEnd;
    }
    return;
}
exports.getResponseEndTime = getResponseEndTime;
//# sourceMappingURL=navigation.js.map