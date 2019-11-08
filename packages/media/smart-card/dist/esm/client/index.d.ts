import { JsonLd, CardClient as CardClientInterface, EnvironmentsKeys } from './types';
export declare type FetchErrorKind = 'fatal' | 'auth';
export declare class FetchError extends Error {
    readonly kind: FetchErrorKind;
    constructor(kind: FetchErrorKind, message: string);
}
export default class CardClient implements CardClientInterface {
    private resolverUrl;
    private loadersByDomain;
    constructor(envKey?: EnvironmentsKeys);
    private batchResolve;
    private createLoader;
    private getLoader;
    fetchData(url: string): Promise<JsonLd>;
}
