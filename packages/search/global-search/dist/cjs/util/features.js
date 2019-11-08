"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var CrossProductSearchClient_1 = require("../api/CrossProductSearchClient");
var memoize_one_1 = tslib_1.__importDefault(require("memoize-one"));
var deep_equal_1 = tslib_1.__importDefault(require("deep-equal"));
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
exports.DEFAULT_FEATURES = {
    useUrsForBootstrapping: false,
    isAutocompleteEnabled: false,
    isNavAutocompleteEnabled: false,
    complexSearchExtensionsEnabled: false,
    disableJiraPreQueryPeopleSearch: false,
    isInFasterSearchExperiment: false,
    spaceballsExperimentEnabled: false,
    abTest: CrossProductSearchClient_1.DEFAULT_AB_TEST,
};
exports.createFeatures = memoize_one_1.default(function (_a) {
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
}, deep_equal_1.default);
//# sourceMappingURL=features.js.map