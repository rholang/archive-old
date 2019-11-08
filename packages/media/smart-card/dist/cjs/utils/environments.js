"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var devBaseUrl = 'https://api-private.dev.atlassian.com';
var stgBaseUrl = 'https://api-private.stg.atlassian.com';
var prodBaseUrl = 'https://api-private.atlassian.com';
exports.BaseUrls = {
    dev: devBaseUrl,
    development: devBaseUrl,
    stg: stgBaseUrl,
    staging: stgBaseUrl,
    prd: prodBaseUrl,
    prod: prodBaseUrl,
    production: prodBaseUrl,
};
exports.getBaseUrl = function (envKey) {
    // If an environment is provided, then use Stargate.
    if (envKey) {
        return envKey in exports.BaseUrls ? exports.BaseUrls[envKey] : prodBaseUrl;
    }
    // Otherwise, use the current origin of the page.
    return window.location.origin;
};
exports.getResolverUrl = function (envKey) {
    // If an environment is provided, then use Stargate directly for requests.
    if (envKey) {
        var baseUrl = exports.getBaseUrl(envKey);
        return baseUrl + "/object-resolver";
    }
    else {
        // Otherwise, we fallback to using the Edge Proxy to access Stargate,
        // which fixes some cookie issues with strict Browser policies.
        return '/gateway/api/object-resolver';
    }
};
exports.default = exports.BaseUrls;
//# sourceMappingURL=environments.js.map