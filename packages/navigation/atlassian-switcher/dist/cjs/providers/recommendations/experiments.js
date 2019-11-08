"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../../types");
var constants_1 = require("./constants");
function showFeatureFlagVariation(featureFlagValue) {
    if (typeof featureFlagValue !== 'string') {
        return false;
    }
    if (constants_1.JSW_OG_EXPANDS_EXPERIMENT_VARIATIONS.includes(featureFlagValue)) {
        return true;
    }
    return false;
}
function jswOgRecommendation() {
    return [
        { productKey: types_1.ProductKey.JIRA_SOFTWARE },
        { productKey: types_1.ProductKey.CONFLUENCE },
        { productKey: types_1.ProductKey.JIRA_SERVICE_DESK },
        { productKey: types_1.ProductKey.OPSGENIE },
    ];
}
function productStoreRecommendation() {
    return [
        { productKey: types_1.ProductKey.JIRA_SOFTWARE },
        { productKey: types_1.ProductKey.CONFLUENCE },
        { productKey: types_1.ProductKey.JIRA_SERVICE_DESK },
        { productKey: types_1.ProductKey.OPSGENIE },
    ];
}
exports.productStoreRecommendation = productStoreRecommendation;
exports.jswOgExpandsExperiment = {
    flagKey: constants_1.JSW_OG_EXPANDS_EXPERIMENT_FEATURE_FLAG_KEY,
    variationValues: constants_1.JSW_OG_EXPANDS_EXPERIMENT_FEATURE_FLAG_KEY,
    recommendations: jswOgRecommendation,
    showFeatureFlagVariation: showFeatureFlagVariation,
};
//# sourceMappingURL=experiments.js.map