import git from 'simple-git/promise';
import { ListLogSummary } from 'simple-git/typings/response';
export declare type ListLogLine = {
    hash: string;
    date: string;
    message: string;
    refs: string;
    body: string;
    author_name: string;
    author_email: string;
};
export declare function getChangesSince(since?: string): Promise<ListLogSummary>;
export declare function tagCommit(tag: string): Promise<string>;
export declare function doesTagExist(tag: string): Promise<boolean>;
export declare function refetchTag(tag: string): Promise<{
    fetchTagResult: git.FetchResult | undefined;
}>;
export declare function getHash(ref: string): Promise<string>;
