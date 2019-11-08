declare type Func = (...args: any[]) => any;
declare type ProxyFunc<F extends Func> = F & {
    [K in keyof F]: F[K];
};
declare type Resolve<T> = T extends Promise<infer U> ? U : T;
export declare const RELEASE_RESOLVED_PROMISE_DELAY = 5000;
export declare type WithCached<F extends Func> = ProxyFunc<F> & {
    cached: (...args: Parameters<F>) => Resolve<ReturnType<F>> | void;
    reset: () => void;
};
/**
 * withCached wraps a function and keeps track of in-flight promises:
 *
 * 1. First call will result to normal invocation. After promise is resolved
 * it will be removed from the promise-cache and store value into result-cache.
 *
 * 2. Second and subsequent calls will:
 *    a) return unresolved promise if any
 *    b) do a normal invocation otherwise
 *
 * 3. Provides methods to get `cached` value and `reset` caches
 */
export declare const withCached: <F extends Func>(fn: F) => WithCached<F>;
export {};
