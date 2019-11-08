import { ABTest } from '../api/CrossProductSearchClient';
export interface CommonFeatures {
    abTest: ABTest;
    complexSearchExtensionsEnabled: boolean;
    spaceballsExperimentEnabled: boolean;
}
export interface ConfluenceFeatures extends CommonFeatures {
    useUrsForBootstrapping: boolean;
    isAutocompleteEnabled: boolean;
    isNavAutocompleteEnabled: boolean;
}
export interface JiraFeatures extends CommonFeatures {
    disableJiraPreQueryPeopleSearch: boolean;
    isInFasterSearchExperiment: boolean;
}
export declare const DEFAULT_FEATURES: ConfluenceFeatures & JiraFeatures;
export interface FeaturesParameters {
    abTest: ABTest;
    useUrsForBootstrapping: boolean;
    disableJiraPreQueryPeopleSearch: boolean;
    enablePreQueryFromAggregator: boolean;
    isAutocompleteEnabled: boolean;
    isNavAutocompleteEnabled: boolean;
}
export declare const createFeatures: (parameters: FeaturesParameters) => ConfluenceFeatures & JiraFeatures;
