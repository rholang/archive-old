"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var as_data_provider_1 = tslib_1.__importDefault(require("./as-data-provider"));
var recommendations_1 = require("./recommendations");
var fetchRecommendations = function (_a) {
    var featureFlags = _a.featureFlags;
    return Promise.resolve(recommendations_1.resolveRecommendations(featureFlags));
};
exports.RecommendationsEngineProvider = as_data_provider_1.default('productRecommendations', fetchRecommendations);
//# sourceMappingURL=recommendations-provider.js.map