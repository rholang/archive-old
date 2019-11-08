import { LRUCache } from 'lru-fast';
import { Observable } from 'rxjs/Observable';
import { FileState } from './models/file-state';
export declare class StreamsCache<T> {
    private readonly streams;
    constructor(streams: LRUCache<string, Observable<T>>);
    has(id: string): boolean;
    set(id: string, stream: Observable<T>): void;
    get(id: string): Observable<T> | undefined;
    getOrInsert(id: string, callback: () => Observable<T>): Observable<T>;
    removeAll(): void;
    remove(id: string): void;
    readonly size: number;
}
export declare const getFileStreamsCache: () => StreamsCache<FileState>;
