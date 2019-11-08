import asDataProvider from './as-data-provider';
import { resolveRecommendations } from './recommendations';
var fetchRecommendations = function (_a) {
    var featureFlags = _a.featureFlags;
    return Promise.resolve(resolveRecommendations(featureFlags));
};
export var RecommendationsEngineProvider = asDataProvider('productRecommendations', fetchRecommendations);
//# sourceMappingURL=recommendations-provider.js.map