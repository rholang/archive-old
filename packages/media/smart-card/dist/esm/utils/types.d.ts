import { GasPayload } from '@atlaskit/analytics-gas-types';
export declare type AnalyticsAction = 'resolved' | 'unresolved' | 'connectSucceeded' | 'connectFailed' | 'connected' | 'clicked' | 'closed';
export declare type AnalyticsActionSubject = 'smartLink' | 'applicationAccount' | 'button' | 'consentModal';
export declare type AnalyticsPayload = GasPayload & {
    action?: AnalyticsAction;
    actionSubject: AnalyticsActionSubject;
};
export declare type AnalyticsHandler = (event: AnalyticsPayload) => void;
