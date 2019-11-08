import { WithAnalyticsEventsProps } from '@atlaskit/analytics-next';
import { MentionNameDetails } from '../types';
import { MentionNameClient } from './MentionNameClient';
export interface MentionNameResolver {
    lookupName(id: string): Promise<MentionNameDetails> | MentionNameDetails;
    cacheName(id: string, name: string): void;
}
export declare class DefaultMentionNameResolver implements MentionNameResolver {
    static waitForBatch: number;
    private client;
    private nameCache;
    private nameQueue;
    private nameStartTime;
    private processingQueue;
    private debounce;
    private fireHydrationEvent;
    constructor(client: MentionNameClient, analyticsProps?: WithAnalyticsEventsProps);
    lookupName(id: string): Promise<MentionNameDetails> | MentionNameDetails;
    cacheName(id: string, name: string): void;
    private scheduleProcessQueue;
    private isQueueAtLimit;
    private splitQueueAtLimit;
    private resolveQueueItem;
    private processQueue;
    private fireAnalytics;
}
