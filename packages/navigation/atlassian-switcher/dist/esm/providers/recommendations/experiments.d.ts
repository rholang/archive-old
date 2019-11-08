import { RecommendationItem } from '../../types';
declare function showFeatureFlagVariation(featureFlagValue: string | boolean): boolean;
declare function jswOgRecommendation(): RecommendationItem[];
export declare function productStoreRecommendation(): RecommendationItem[];
export declare const jswOgExpandsExperiment: {
    flagKey: string;
    variationValues: string;
    recommendations: typeof jswOgRecommendation;
    showFeatureFlagVariation: typeof showFeatureFlagVariation;
};
export {};
