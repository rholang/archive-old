import { ConfluenceRecentsMap, Result, ConfluenceObjectResult } from '../model/Result';
import ConfluenceClientImpl from './ConfluenceClient';
import { SimpleCache } from '../util/simple-cache';
export default class CachingConfluenceClient extends ConfluenceClientImpl {
    itemCache: SimpleCache<Promise<ConfluenceObjectResult[]>>;
    spaceCache: SimpleCache<Promise<Result[]>>;
    constructor(url: string, prefetchedResults?: Promise<ConfluenceRecentsMap>);
    getRecentItems(): Promise<ConfluenceObjectResult[]>;
    getRecentSpaces(): Promise<Result[]>;
}
