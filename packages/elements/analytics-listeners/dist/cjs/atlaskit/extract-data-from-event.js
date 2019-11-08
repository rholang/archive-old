"use strict";
/**
 * Largely taken from analytics-web-react
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var lodash_merge_1 = tslib_1.__importDefault(require("lodash.merge"));
var extractFromEventContext = function (propertyName, event) {
    return event.context
        .map(function (contextItem) { return contextItem[propertyName]; })
        .filter(Boolean);
};
exports.getActionSubject = function (event) {
    var overrides = extractFromEventContext('actionSubjectOverride', event);
    var closestContext = event.context.length > 0 ? event.context[event.context.length - 1] : {};
    var actionSubject = event.payload.actionSubject || closestContext.component;
    return overrides.length > 0 ? overrides[0] : actionSubject;
};
exports.getSources = function (event) {
    return extractFromEventContext('source', event);
};
exports.getComponents = function (event) {
    return extractFromEventContext('component', event);
};
exports.getExtraAttributes = function (event) {
    return extractFromEventContext('attributes', event).reduce(function (result, extraAttributes) { return lodash_merge_1.default(result, extraAttributes); }, {});
};
exports.getPackageInfo = function (event) {
    return event.context
        .map(function (contextItem) { return ({
        packageName: contextItem.packageName,
        packageVersion: contextItem.packageVersion,
    }); })
        .filter(function (p) { return p.packageName; });
};
exports.getPackageVersion = function (event) {
    return extractFromEventContext('packageVersion', event);
};
// This function scans the whole context and looks for context data that includes packageName at the root of the object.
// Every package should include this info once, just to differentiate between packages, but no between internal components of each package
// If no context data brings a packageName, the map function retuns an empty string that is replaced for "undefined"
function getPackageHierarchy(event) {
    var packages = exports.getPackageInfo(event) || [];
    return (packages
        .map(function (p) {
        return p.packageVersion
            ? p.packageName + "@" + p.packageVersion
            : p.packageName;
    })
        .join(',') || undefined);
}
exports.getPackageHierarchy = getPackageHierarchy;
//# sourceMappingURL=extract-data-from-event.js.map