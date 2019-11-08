import { CreateUIAnalyticsEvent } from './types';
export declare type UseAnalyticsEventsHook = {
    createAnalyticsEvent: CreateUIAnalyticsEvent;
};
export declare function useAnalyticsEvents(): UseAnalyticsEventsHook;
