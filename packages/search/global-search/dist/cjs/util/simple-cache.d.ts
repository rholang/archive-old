/**
 * Simple cache that caches exactly one item.
 */
export declare class SimpleCache<T, Args extends Varargs = []> {
    static DEFAULT_TIMEOUT_IN_MS: number;
    timeoutMs: number;
    nextCacheRefreshTime: number;
    currentValue: NonNullable<T> | undefined;
    supplier: (...args: Args) => NonNullable<T>;
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
    constructor(initialValue: NonNullable<T> | undefined, supplier: (...args: Args) => NonNullable<T>, timeoutMs?: number);
    get(...args: Args): NonNullable<T>;
    invalidate(): void;
    private updateNextRefreshTime;
}
