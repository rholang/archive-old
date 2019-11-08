import { UIAnalyticsEvent } from '@atlaskit/analytics-next';
export declare const getSources: (event: UIAnalyticsEvent) => any[];
export declare const getComponents: (event: UIAnalyticsEvent) => any[];
export declare const getExtraAttributes: (event: UIAnalyticsEvent) => any;
export declare const getPackageInfo: (event: UIAnalyticsEvent) => {
    packageName: any;
    packageVersion: any;
}[];
export declare const getPackageVersion: (event: UIAnalyticsEvent) => any[];
