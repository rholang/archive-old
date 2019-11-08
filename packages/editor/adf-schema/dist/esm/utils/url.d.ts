export declare const isSafeUrl: (url: string) => boolean;
export interface Match {
    schema: any;
    index: number;
    lastIndex: number;
    raw: string;
    text: string;
    url: string;
    length?: number;
}
export declare function getLinkMatch(str: string): '' | Match | null;
/**
 * Adds protocol to url if needed.
 */
export declare function normalizeUrl(url: string): string;
