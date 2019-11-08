"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_performance_api_available_1 = require("./is-performance-api-available");
var measureMap = new Map();
function startMeasure(measureName) {
    if (!is_performance_api_available_1.isPerformanceAPIAvailable()) {
        return;
    }
    performance.mark(measureName);
    measureMap.set(measureName, performance.now());
}
exports.startMeasure = startMeasure;
function stopMeasure(measureName, onMeasureComplete) {
    if (!is_performance_api_available_1.isPerformanceAPIAvailable()) {
        return;
    }
    var start = measureMap.get(measureName);
    try {
        performance.measure(measureName, measureName);
        var entry = performance.getEntriesByName(measureName).pop();
        if (entry) {
            onMeasureComplete(entry.duration, entry.startTime);
        }
        else if (start) {
            onMeasureComplete(performance.now() - start, start);
        }
    }
    catch (error) {
        if (start) {
            onMeasureComplete(performance.now() - start, start);
        }
    }
    clearMeasure(measureName);
}
exports.stopMeasure = stopMeasure;
function clearMeasure(measureName) {
    if (!is_performance_api_available_1.isPerformanceAPIAvailable()) {
        return;
    }
    measureMap.delete(measureName);
    performance.clearMarks(measureName);
    performance.clearMeasures(measureName);
}
exports.clearMeasure = clearMeasure;
//# sourceMappingURL=measure.js.map