import { CreateUIAnalyticsEvent } from '@atlaskit/analytics-next';
export declare const FABRIC_CHANNEL = "fabric-elements";
export declare const createStatusAnalyticsAndFire: (createAnalyticsEvent?: CreateUIAnalyticsEvent | undefined) => (payload: Record<string, any>) => void;
export declare const analyticsState: (isNew: boolean | undefined) => "update" | "new";
