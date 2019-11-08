import { GasPayload } from '@atlaskit/analytics-gas-types';
import { CreateUIAnalyticsEvent } from '@atlaskit/analytics-next';
export declare type AnalyticsNextEvent = {
    payload: GasPayload;
    context: Array<any>;
    update: (payload: GasPayload) => AnalyticsNextEvent;
    fire: (string: string) => AnalyticsNextEvent;
};
export declare type CreateAnalyticsEventFn = CreateUIAnalyticsEvent;
