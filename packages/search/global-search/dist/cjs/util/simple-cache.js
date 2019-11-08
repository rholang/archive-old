"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/**
 * Simple cache that caches exactly one item.
 */
var SimpleCache = /** @class */ (function () {
    /**
     * @param initialValue The initial value, if undefined then the first get() call when initiate the cache value
     *
     * @param supplier The callback that will be called if the cache times out or if no existing value exists for the cache.
     *                 In the case that the supplier throws an exception the error will not be cached. If there's an error
     *                    we will instead return the last known good value but will attempt to refresh the cache again the next time
     *                    get() is called.
     *                 Any parameters passed into get() will be passed through to supplier. Unlike memoize the cache does not
     *                    care about the parameters and will not be invalidated if these parameters change.
     *
     * @param timeoutMs The time to wait before allowing the cache to refresh, this defaults to 15 mins.
     */
    function SimpleCache(initialValue, supplier, timeoutMs) {
        if (timeoutMs === void 0) { timeoutMs = SimpleCache.DEFAULT_TIMEOUT_IN_MS; }
        this.nextCacheRefreshTime = Date.now();
        this.timeoutMs = timeoutMs;
        this.supplier = supplier;
        if (initialValue) {
            this.currentValue = initialValue;
            this.updateNextRefreshTime();
        }
    }
    SimpleCache.prototype.get = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.currentValue && Date.now() < this.nextCacheRefreshTime) {
            return this.currentValue;
        }
        this.updateNextRefreshTime();
        try {
            var result = this.supplier.apply(this, tslib_1.__spread(args));
            this.currentValue = result;
        }
        catch (e) {
            // If there's an error we will return the last good value but will attempt again on the next get()
            this.invalidate();
        }
        if (!this.currentValue) {
            throw new Error('Failed to initialise a value for the cache');
        }
        return this.currentValue;
    };
    SimpleCache.prototype.invalidate = function () {
        this.nextCacheRefreshTime = Date.now();
    };
    SimpleCache.prototype.updateNextRefreshTime = function () {
        this.nextCacheRefreshTime = Date.now() + this.timeoutMs;
    };
    SimpleCache.DEFAULT_TIMEOUT_IN_MS = 15 * 60 * 1000;
    return SimpleCache;
}());
exports.SimpleCache = SimpleCache;
//# sourceMappingURL=simple-cache.js.map