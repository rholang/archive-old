"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var url_utils_1 = require("../../util/url-utils");
var CONFLUENCE_SEARCH_SESSION_ID_PARAM_NAME = 'search_id';
var JIRA_SEARCH_SESSION_ID_PARAM_NAME = 'searchSessionId';
/**
 * Apply the given function to the specified keys in the supplied ResultMap
 * @param resultMapperFn function to map results
 * @param keysToMap the keys of the given ResultType to map over
 * @param results the GenericResultMap to apply resultMapperFn to
 */
var mapJiraResultMap = function (resultMapperFn, keysToMap, results) {
    var objectKeys = Object.keys(results);
    var nonMapped = objectKeys
        .filter(function (key) { return !keysToMap.includes(key); })
        .reduce(function (accum, key) {
        var _a;
        return (tslib_1.__assign(tslib_1.__assign({}, accum), (_a = {}, _a[key] = results[key], _a)));
    }, {});
    return Object.keys(results)
        .filter(function (key) { return keysToMap.includes(key); })
        .reduce(function (accum, resultType) {
        var _a;
        return (tslib_1.__assign(tslib_1.__assign({}, accum), (_a = {}, _a[resultType] = results[resultType].map(resultMapperFn), _a)));
    }, tslib_1.__assign({}, nonMapped));
};
/**
 * Same as mapGenericResultMap but for ConfluenceResultMaps. These maps contain more data than
 * @param resultMapperFn function to map results
 * @param keysToMap the keys of the given ResultType to map over
 * @param results the GenericResultMap to apply resultMapperFn to
 */
var mapConfluenceResultMap = function (resultMapperFn, keysToMap, results) {
    var objectKeys = Object.keys(results);
    return objectKeys
        .filter(function (key) { return keysToMap.includes(key); })
        .reduce(function (accum, resultType) {
        var _a;
        //It's currently impossible to type this due items being an union of arrays
        //see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-3.html#improved-behavior-for-calling-union-types
        //@ts-ignore
        var items = results[resultType].items.map(resultMapperFn);
        return tslib_1.__assign(tslib_1.__assign({}, accum), (_a = {}, _a[resultType] = tslib_1.__assign(tslib_1.__assign({}, results[resultType]), { items: items }), _a));
    }, tslib_1.__assign({}, results));
};
var attachSearchSessionIdToResult = function (searchSessionId, searchSessionIdParamName) { return function (result) {
    var href = result.href;
    href = url_utils_1.addQueryParam(href, searchSessionIdParamName, searchSessionId);
    return tslib_1.__assign(tslib_1.__assign({}, result), { href: href.toString() });
}; };
exports.attachConfluenceContextIdentifiers = function (searchSessionId, results) {
    return mapConfluenceResultMap(attachSearchSessionIdToResult(searchSessionId, CONFLUENCE_SEARCH_SESSION_ID_PARAM_NAME), ['objects', 'spaces'], results);
};
exports.attachJiraContextIdentifiers = function (searchSessionId, results) {
    var attachSearchSessionId = attachSearchSessionIdToResult(searchSessionId, JIRA_SEARCH_SESSION_ID_PARAM_NAME);
    var attachJiraContext = function (result) {
        var href = result.href;
        if (result.containerId) {
            href = url_utils_1.addQueryParam(href, 'searchContainerId', result.containerId);
        }
        href = url_utils_1.addQueryParam(href, 'searchContentType', result.contentType.replace('jira-', ''));
        href = url_utils_1.addQueryParam(href, 'searchObjectId', result.resultId);
        return tslib_1.__assign(tslib_1.__assign({}, result), { href: href });
    };
    return mapJiraResultMap(function (r) { return attachJiraContext(attachSearchSessionId(r)); }, ['objects', 'containers'], results);
};
//# sourceMappingURL=contextIdentifiersHelper.js.map