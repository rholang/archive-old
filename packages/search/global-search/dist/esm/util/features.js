import { DEFAULT_AB_TEST } from '../api/CrossProductSearchClient';
import memoizeOne from 'memoize-one';
import deepEqual from 'deep-equal';
var FASTER_SEARCH_EXPERIMENT = 'faster-search';
var SEARCH_EXTENSIONS_COMPLEX_EXPERIMENT = 'search-extensions-complex';
var SPACEBALLS_EXPERIMENT = 'spaceballs';
var isInFasterSearchExperiment = function (abTest) {
    return abTest.experimentId === FASTER_SEARCH_EXPERIMENT;
};
var isInSearchExtensionsComplexExperiment = function (abTest) {
    return abTest.experimentId === SEARCH_EXTENSIONS_COMPLEX_EXPERIMENT;
};
var isInSpaceballsExperiment = function (abTest) {
    return abTest.experimentId === SPACEBALLS_EXPERIMENT;
};
export var DEFAULT_FEATURES = {
    useUrsForBootstrapping: false,
    isAutocompleteEnabled: false,
    isNavAutocompleteEnabled: false,
    complexSearchExtensionsEnabled: false,
    disableJiraPreQueryPeopleSearch: false,
    isInFasterSearchExperiment: false,
    spaceballsExperimentEnabled: false,
    abTest: DEFAULT_AB_TEST,
};
export var createFeatures = memoizeOne(function (_a) {
    var abTest = _a.abTest, useUrsForBootstrapping = _a.useUrsForBootstrapping, disableJiraPreQueryPeopleSearch = _a.disableJiraPreQueryPeopleSearch, enablePreQueryFromAggregator = _a.enablePreQueryFromAggregator, isAutocompleteEnabled = _a.isAutocompleteEnabled, isNavAutocompleteEnabled = _a.isNavAutocompleteEnabled;
    return {
        abTest: abTest,
        useUrsForBootstrapping: useUrsForBootstrapping,
        disableJiraPreQueryPeopleSearch: disableJiraPreQueryPeopleSearch,
        enablePreQueryFromAggregator: enablePreQueryFromAggregator,
        isInFasterSearchExperiment: isInFasterSearchExperiment(abTest),
        isAutocompleteEnabled: isAutocompleteEnabled,
        isNavAutocompleteEnabled: isNavAutocompleteEnabled,
        complexSearchExtensionsEnabled: isInSearchExtensionsComplexExperiment(abTest),
        spaceballsExperimentEnabled: isInSpaceballsExperiment(abTest),
    };
}, deepEqual);
//# sourceMappingURL=features.js.map