"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../../types");
var experiments_1 = require("./experiments");
function baseRecommendation() {
    return [
        { productKey: types_1.ProductKey.JIRA_SOFTWARE },
        { productKey: types_1.ProductKey.CONFLUENCE },
        { productKey: types_1.ProductKey.JIRA_SERVICE_DESK },
        { productKey: types_1.ProductKey.OPSGENIE },
    ];
}
function resolveRecommendations(featureFlags) {
    if (!featureFlags) {
        return baseRecommendation();
    }
    if (experiments_1.jswOgExpandsExperiment.showFeatureFlagVariation(featureFlags[experiments_1.jswOgExpandsExperiment.flagKey])) {
        return experiments_1.jswOgExpandsExperiment.recommendations();
    }
    if (featureFlags.isDiscoverSectionEnabled) {
        return experiments_1.productStoreRecommendation();
    }
    return baseRecommendation();
}
exports.resolveRecommendations = resolveRecommendations;
//# sourceMappingURL=index.js.map