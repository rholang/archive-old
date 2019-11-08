/// <reference types="react" />
/// <reference types="@emotion/core" />
import { RecommendationsFeatureFlags } from '../types';
export declare const RecommendationsEngineProvider: import("react").ForwardRefExoticComponent<Pick<{
    featureFlags?: RecommendationsFeatureFlags | undefined;
} & import("./as-data-provider").DataProviderProps<import("../types").RecommendationItem[]> & import("@atlaskit/analytics-next").WithAnalyticsEventsProps, "children" | "featureFlags"> & import("react").RefAttributes<any>>;
