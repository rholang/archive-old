"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var version_json_1 = require("../version.json");
var analytics_next_1 = require("@atlaskit/analytics-next");
var media_card_analytics_error_boundary_1 = require("../root/media-card-analytics-error-boundary");
function getBaseAnalyticsContext() {
    return {
        packageVersion: version_json_1.version,
        packageName: version_json_1.name,
        componentName: 'mediaCard',
    };
}
exports.getBaseAnalyticsContext = getBaseAnalyticsContext;
exports.getFileAttributes = function (metadata) { return ({
    fileSource: 'mediaCard',
    fileMediatype: metadata && metadata.mediaType,
    fileId: metadata && metadata.id,
    fileSize: metadata && metadata.size,
    fileStatus: metadata && metadata.processingStatus,
}); };
function getUIAnalyticsContext(actionSubjectId, metadata) {
    var fileAttributes = exports.getFileAttributes(metadata);
    var currentActionSujectId = metadata && metadata.id ? metadata.id : actionSubjectId;
    return {
        actionSubjectId: currentActionSujectId,
        attributes: tslib_1.__assign(tslib_1.__assign({ packageName: version_json_1.name }, getBaseAnalyticsContext()), { fileAttributes: tslib_1.__assign({}, fileAttributes) }),
    };
}
exports.getUIAnalyticsContext = getUIAnalyticsContext;
function attachPackageName(basePayload) {
    return tslib_1.__assign(tslib_1.__assign({}, basePayload), { attributes: tslib_1.__assign({ packageName: version_json_1.name }, (basePayload.attributes || {})) });
}
function createAndFireCustomMediaEvent(basePayload, createAnalyticsEvent) {
    var payload = attachPackageName(basePayload);
    if (createAnalyticsEvent) {
        var event_1 = createAnalyticsEvent(payload);
        event_1.fire(media_card_analytics_error_boundary_1.ANALYTICS_MEDIA_CHANNEL);
    }
}
exports.createAndFireCustomMediaEvent = createAndFireCustomMediaEvent;
exports.createAndFireMediaEvent = function (basePayload) {
    var payload = attachPackageName(basePayload);
    return analytics_next_1.createAndFireEvent(media_card_analytics_error_boundary_1.ANALYTICS_MEDIA_CHANNEL)(payload);
};
//# sourceMappingURL=analytics.js.map