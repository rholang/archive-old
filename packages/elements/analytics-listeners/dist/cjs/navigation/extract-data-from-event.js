"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/**
 * Largely taken from analytics-web-react
 */
var lodash_merge_1 = tslib_1.__importDefault(require("lodash.merge"));
var analytics_namespaced_context_1 = require("@atlaskit/analytics-namespaced-context");
var extractFromEventContext = function (propertyNames, event, namespacedContextOnly) {
    if (namespacedContextOnly === void 0) { namespacedContextOnly = true; }
    return event.context
        .reduce(function (acc, contextItem) {
        propertyNames.forEach(function (propertyName) {
            var navContext = contextItem[analytics_namespaced_context_1.NAVIGATION_CONTEXT];
            var navContextProp = navContext ? navContext[propertyName] : null;
            acc.push(namespacedContextOnly
                ? navContextProp
                : navContextProp || contextItem[propertyName]);
        });
        return acc;
    }, [])
        .filter(Boolean);
};
exports.getSources = function (event) {
    return extractFromEventContext(['source'], event, false);
};
exports.getComponents = function (event) {
    return extractFromEventContext(['component', 'componentName'], event, false);
};
exports.getExtraAttributes = function (event) {
    return extractFromEventContext(['attributes'], event).reduce(function (result, extraAttributes) { return lodash_merge_1.default(result, extraAttributes); }, {});
};
exports.getPackageInfo = function (event) {
    return event.context
        .map(function (contextItem) {
        var navContext = contextItem[analytics_namespaced_context_1.NAVIGATION_CONTEXT];
        var item = navContext ? navContext : contextItem;
        return {
            packageName: item.packageName,
            packageVersion: item.packageVersion,
        };
    })
        .filter(function (p) { return p.packageName; });
};
exports.getPackageVersion = function (event) {
    return extractFromEventContext(['packageVersion'], event);
};
//# sourceMappingURL=extract-data-from-event.js.map