export interface ScreenCounter {
    getCount(): number;
    increment(): void;
}
export declare class SearchScreenCounter implements ScreenCounter {
    count: number;
    getCount(): number;
    increment(): void;
}
