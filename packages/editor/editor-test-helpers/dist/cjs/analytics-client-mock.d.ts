import { GasPurePayload, GasPureScreenEventPayload } from '@atlaskit/analytics-gas-types';
declare type AnalyticsEventHandler = (event: GasPurePayload | GasPureScreenEventPayload) => void;
export declare const analyticsClient: (analyticsEventHandler?: AnalyticsEventHandler) => any;
export {};
