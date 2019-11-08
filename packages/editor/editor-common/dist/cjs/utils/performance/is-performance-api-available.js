"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hasRequiredPerformanceAPIs;
function isPerformanceAPIAvailable() {
    if (hasRequiredPerformanceAPIs === undefined) {
        hasRequiredPerformanceAPIs =
            typeof window !== 'undefined' &&
                'performance' in window &&
                [
                    'measure',
                    'clearMeasures',
                    'clearMarks',
                    'getEntriesByName',
                    'getEntriesByType',
                    'now',
                ].every(function (api) { return !!performance[api]; });
    }
    return hasRequiredPerformanceAPIs;
}
exports.isPerformanceAPIAvailable = isPerformanceAPIAvailable;
function isPerformanceObserverAvailable() {
    return !!(typeof window !== 'undefined' && 'PerformanceObserver' in window);
}
exports.isPerformanceObserverAvailable = isPerformanceObserverAvailable;
//# sourceMappingURL=is-performance-api-available.js.map