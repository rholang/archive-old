/**
 * Largely taken from analytics-web-react
 */
import merge from 'lodash.merge';
var extractFromEventContext = function (propertyName, event) {
    return event.context
        .map(function (contextItem) { return contextItem[propertyName]; })
        .filter(Boolean);
};
export var getActionSubject = function (event) {
    var overrides = extractFromEventContext('actionSubjectOverride', event);
    var closestContext = event.context.length > 0 ? event.context[event.context.length - 1] : {};
    var actionSubject = event.payload.actionSubject || closestContext.component;
    return overrides.length > 0 ? overrides[0] : actionSubject;
};
export var getSources = function (event) {
    return extractFromEventContext('source', event);
};
export var getComponents = function (event) {
    return extractFromEventContext('component', event);
};
export var getExtraAttributes = function (event) {
    return extractFromEventContext('attributes', event).reduce(function (result, extraAttributes) { return merge(result, extraAttributes); }, {});
};
export var getPackageInfo = function (event) {
    return event.context
        .map(function (contextItem) { return ({
        packageName: contextItem.packageName,
        packageVersion: contextItem.packageVersion,
    }); })
        .filter(function (p) { return p.packageName; });
};
export var getPackageVersion = function (event) {
    return extractFromEventContext('packageVersion', event);
};
// This function scans the whole context and looks for context data that includes packageName at the root of the object.
// Every package should include this info once, just to differentiate between packages, but no between internal components of each package
// If no context data brings a packageName, the map function retuns an empty string that is replaced for "undefined"
export function getPackageHierarchy(event) {
    var packages = getPackageInfo(event) || [];
    return (packages
        .map(function (p) {
        return p.packageVersion
            ? p.packageName + "@" + p.packageVersion
            : p.packageName;
    })
        .join(',') || undefined);
}
//# sourceMappingURL=extract-data-from-event.js.map