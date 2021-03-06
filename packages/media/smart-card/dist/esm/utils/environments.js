var devBaseUrl = 'https://api-private.dev.atlassian.com';
var stgBaseUrl = 'https://api-private.stg.atlassian.com';
var prodBaseUrl = 'https://api-private.atlassian.com';
export var BaseUrls = {
    dev: devBaseUrl,
    development: devBaseUrl,
    stg: stgBaseUrl,
    staging: stgBaseUrl,
    prd: prodBaseUrl,
    prod: prodBaseUrl,
    production: prodBaseUrl,
};
export var getBaseUrl = function (envKey) {
    // If an environment is provided, then use Stargate.
    if (envKey) {
        return envKey in BaseUrls ? BaseUrls[envKey] : prodBaseUrl;
    }
    // Otherwise, use the current origin of the page.
    return window.location.origin;
};
export var getResolverUrl = function (envKey) {
    // If an environment is provided, then use Stargate directly for requests.
    if (envKey) {
        var baseUrl = getBaseUrl(envKey);
        return baseUrl + "/object-resolver";
    }
    else {
        // Otherwise, we fallback to using the Edge Proxy to access Stargate,
        // which fixes some cookie issues with strict Browser policies.
        return '/gateway/api/object-resolver';
    }
};
export default BaseUrls;
//# sourceMappingURL=environments.js.map