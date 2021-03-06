import asDataProvider from './as-data-provider';
import { fetchJson } from '../utils/fetch';
import { withCached } from '../utils/with-cached';
export var createProvider = function (name, url) {
    var fetchMethod = withCached(function (param) { return fetchJson(url); });
    return {
        fetchMethod: fetchMethod,
        ProviderComponent: asDataProvider(name, fetchMethod, fetchMethod.cached),
    };
};
//# sourceMappingURL=create-data-provider.js.map