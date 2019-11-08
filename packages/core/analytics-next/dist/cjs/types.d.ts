import UIAnalyticsEvent from './UIAnalyticsEvent';
import { AnalyticsEventPayload } from './AnalyticsEvent';
export declare type CreateUIAnalyticsEvent = (payload: AnalyticsEventPayload) => UIAnalyticsEvent;
export declare type AnalyticsEventCreator = (create: CreateUIAnalyticsEvent, props: Record<string, any>) => UIAnalyticsEvent | undefined;
export declare type CreateEventMap = Record<string, AnalyticsEventPayload | AnalyticsEventCreator>;
