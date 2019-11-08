import { CreateUIAnalyticsEvent, UIAnalyticsEvent } from '@atlaskit/analytics-next';
export declare const ELEMENTS_CHANNEL = "fabric-elements";
declare type EventPayload = {
    action: string;
    actionSubject: string;
    attributes?: {
        [key: string]: any;
    };
};
export declare const createStatusAnalyticsAndFire: (createAnalyticsEvent: CreateUIAnalyticsEvent) => (payload: EventPayload) => UIAnalyticsEvent;
export {};
