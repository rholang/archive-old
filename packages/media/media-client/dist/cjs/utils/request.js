"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var query_string_1 = require("query-string");
var media_core_1 = require("@atlaskit/media-core");
var auth_query_parameters_1 = require("../models/auth-query-parameters");
function request(url, options, controller) {
    if (options === void 0) { options = {}; }
    var _a = options.method, method = _a === void 0 ? 'GET' : _a, auth = options.auth, params = options.params, headers = options.headers, body = options.body;
    var processFetchResponse = function (response) {
        if (response.ok || response.redirected) {
            return response;
        }
        else {
            throw response;
        }
    };
    if (method === 'GET') {
        return fetch(createUrl(url, { params: params, auth: auth }), {
            method: method,
            body: body,
            headers: headers,
            signal: controller && controller.signal,
        }).then(processFetchResponse);
    }
    else {
        return fetch(createUrl(url, { params: params }), {
            method: method,
            body: body,
            headers: withAuth(auth)(headers),
        }).then(processFetchResponse);
    }
}
exports.request = request;
function mapResponseToJson(response) {
    return response.json();
}
exports.mapResponseToJson = mapResponseToJson;
function mapResponseToBlob(response) {
    return response.blob();
}
exports.mapResponseToBlob = mapResponseToBlob;
function mapResponseToVoid(_response) {
    return Promise.resolve();
}
exports.mapResponseToVoid = mapResponseToVoid;
function createUrl(url, _a) {
    var params = _a.params, auth = _a.auth;
    var _b = extract(url), baseUrl = _b.baseUrl, queryParams = _b.queryParams;
    var authParams = auth && auth_query_parameters_1.mapAuthToQueryParameters(auth);
    var queryString = query_string_1.stringify(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, queryParams), params), authParams));
    var shouldAppendQueryString = queryString.length > 0;
    return "" + baseUrl + (shouldAppendQueryString ? "?" + queryString : '');
}
exports.createUrl = createUrl;
function withAuth(auth) {
    return function (headers) {
        if (auth) {
            return tslib_1.__assign(tslib_1.__assign({}, (headers || {})), mapAuthToRequestHeaders(auth));
        }
        else {
            return headers;
        }
    };
}
function extract(url) {
    var index = url.indexOf('?');
    if (index > 0) {
        return {
            baseUrl: url.substring(0, index),
            queryParams: query_string_1.parse(url.substring(index + 1, url.length)),
        };
    }
    else {
        return {
            baseUrl: url,
        };
    }
}
function mapAuthToRequestHeaders(auth) {
    if (media_core_1.isClientBasedAuth(auth)) {
        return {
            'X-Client-Id': auth.clientId,
            Authorization: "Bearer " + auth.token,
        };
    }
    else {
        return {
            'X-Issuer': auth.asapIssuer,
            Authorization: "Bearer " + auth.token,
        };
    }
}
//# sourceMappingURL=request.js.map