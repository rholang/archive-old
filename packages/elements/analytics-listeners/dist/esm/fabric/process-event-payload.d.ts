import { GasPayload, GasScreenEventPayload } from '@atlaskit/analytics-gas-types';
import { UIAnalyticsEvent } from '@atlaskit/analytics-next';
export declare const processEventPayload: (event: UIAnalyticsEvent, tag: string) => GasPayload | GasScreenEventPayload;
