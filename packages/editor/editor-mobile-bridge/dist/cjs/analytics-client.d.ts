import { AnalyticsWebClient } from '@atlaskit/analytics-listeners';
import { GasPurePayload, GasPureScreenEventPayload } from '@atlaskit/analytics-gas-types';
export declare const analyticsBridgeClient: (handleAnalyticsEvent: (event: GasPurePayload | GasPureScreenEventPayload) => void) => AnalyticsWebClient;
