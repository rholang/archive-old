import { EventEmitter2 } from 'eventemitter2';
import { LRUCache } from 'lru-fast';
import { Observable } from 'rxjs/Observable';
import { FileState } from '@atlaskit/media-client';
export interface StateDeferredValue<T> {
    promise: Promise<T>;
    resolve: Function;
    value?: T;
}
export interface CachedMediaState<T> {
    streams: LRUCache<string, Observable<T>>;
    stateDeferreds: Map<string, StateDeferredValue<T>>;
    eventEmitter?: EventEmitter2;
}
export declare const mediaState: CachedMediaState<FileState>;
