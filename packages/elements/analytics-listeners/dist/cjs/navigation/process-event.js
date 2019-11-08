"use strict";
/**
 * Inspired by analytics-web-react
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var lodash_last_1 = tslib_1.__importDefault(require("lodash.last"));
var lodash_merge_1 = tslib_1.__importDefault(require("lodash.merge"));
var analytics_gas_types_1 = require("@atlaskit/analytics-gas-types");
var extract_data_from_event_1 = require("./extract-data-from-event");
var version_json_1 = require("../version.json");
var NAVIGATION_TAG = 'navigation';
/**
 * This util exists to convert the analytics-next event format into the analytics platform format.
 *
 * Analytics-next event format:
 * event {
 *      payload: {
 *          ...attributesFromLowestPointInTheTree
 *      },
 *      context: [{
 *          ...attributesFromHighestPointInTheTree
 *      }, {
 *          ...attributesFromSecondHighestPointInTheTree
 *      }]
 * }
 *
 * Analytics platform event format:
 *  event {
 *      type: @atlaskit/analytics-gas-types.EventType
 *      payload {
 *          ...mandatoryAttributesBasedOnEventType
 *          attributes: {
 *              ...arbitraryAttributes
 *          }
 *      }
 *  }
 */
exports.default = (function (event, logger) {
    var sources = extract_data_from_event_1.getSources(event);
    var source = lodash_last_1.default(sources) || analytics_gas_types_1.DEFAULT_SOURCE;
    var extraAttributes = extract_data_from_event_1.getExtraAttributes(event);
    var components = extract_data_from_event_1.getComponents(event);
    var packages = extract_data_from_event_1.getPackageInfo(event);
    var _a = lodash_last_1.default(extract_data_from_event_1.getPackageInfo(event)) || {}, packageName = _a.packageName, packageVersion = _a.packageVersion;
    var packageHierarchy = packages.map(function (p) {
        return p.packageVersion ? p.packageName + "@" + p.packageVersion : p.packageName;
    });
    var _b = event.payload, _c = _b.eventType, eventType = _c === void 0 ? analytics_gas_types_1.UI_EVENT_TYPE : _c, action = _b.action, actionSubject = _b.actionSubject, actionSubjectId = _b.actionSubjectId, payloadAttributes = _b.attributes, name = _b.name;
    var attributes = tslib_1.__assign(tslib_1.__assign({ listenerVersion: version_json_1.version, sourceHierarchy: sources.join('.') || undefined, componentHierarchy: components.join('.') || undefined, packageHierarchy: packageHierarchy.join(',') || undefined }, { packageName: packageName, packageVersion: packageVersion }), lodash_merge_1.default(extraAttributes, payloadAttributes));
    // Ensure navigation tag is not duplicated by using Set
    var tags = new Set(event.payload.tags || []);
    tags.add(NAVIGATION_TAG);
    if (event.payload) {
        switch (eventType) {
            case analytics_gas_types_1.UI_EVENT_TYPE:
            case analytics_gas_types_1.OPERATIONAL_EVENT_TYPE:
                return {
                    eventType: eventType,
                    source: source,
                    actionSubject: actionSubject,
                    action: action,
                    actionSubjectId: actionSubjectId,
                    attributes: attributes,
                    tags: Array.from(tags),
                };
            case analytics_gas_types_1.SCREEN_EVENT_TYPE:
                return {
                    eventType: eventType,
                    name: name,
                    attributes: attributes,
                    tags: Array.from(tags),
                };
            case analytics_gas_types_1.TRACK_EVENT_TYPE:
                logger.error('Track events are currently not supported for navigation events');
                break;
            default:
                logger.error('Invalid event type', eventType);
                break;
        }
    }
    return null;
});
//# sourceMappingURL=process-event.js.map