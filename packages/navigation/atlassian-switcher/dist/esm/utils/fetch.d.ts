export declare const FETCH_ERROR_NAME = "FetchError";
export declare type ErrorWithStatus = Error & {
    status: number;
};
export declare function enrichFetchError(error: Error, status: number): ErrorWithStatus;
export declare const fetchJsonSameOrigin: <T>(url: string, init?: RequestInit | undefined) => Promise<T>;
export declare const fetchJson: <T>(url: string) => Promise<T>;
export declare const postJson: <T>(url: string, data: any) => Promise<T>;
