import { ConfluenceObjectResult, Result } from '../model/Result';
export interface ConfluenceClient {
    getRecentItems(): Promise<ConfluenceObjectResult[]>;
    getRecentSpaces(): Promise<Result[]>;
}
export declare type ConfluenceContentType = 'blogpost' | 'page';
export interface RecentPage {
    available: boolean;
    contentType: ConfluenceContentType;
    id: number;
    lastSeen: number;
    space: string;
    spaceKey: string;
    title?: string;
    type: string;
    url: string;
    iconClass: string;
}
export interface RecentSpace {
    id: string;
    key: string;
    icon: string;
    name: string;
}
export default class ConfluenceClientImpl implements ConfluenceClient {
    private serviceConfig;
    constructor(url: string);
    getRecentItems(): Promise<ConfluenceObjectResult[]>;
    getRecentSpaces(): Promise<Result[]>;
    private createRecentRequestPromise;
}
