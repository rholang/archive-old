export declare type AnalyticsEventPayload = Record<string, any>;
declare type AnalyticsEventCallback = ((payload: AnalyticsEventPayload) => AnalyticsEventPayload);
declare type AnalyticsEventUpdater = AnalyticsEventPayload | AnalyticsEventCallback;
export declare type AnalyticsEventProps = {
    payload: AnalyticsEventPayload;
};
export default class AnalyticsEvent {
    payload: AnalyticsEventPayload;
    constructor(props: AnalyticsEventProps);
    clone: () => AnalyticsEvent | null;
    update(updater: AnalyticsEventUpdater): this;
}
export {};
