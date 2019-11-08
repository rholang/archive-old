import { __assign } from "tslib";
import { version as packageVersion, name as packageName, } from '../version.json';
import { createAndFireEvent, } from '@atlaskit/analytics-next';
import { ANALYTICS_MEDIA_CHANNEL } from '../root/media-card-analytics-error-boundary';
export function getBaseAnalyticsContext() {
    return {
        packageVersion: packageVersion,
        packageName: packageName,
        componentName: 'mediaCard',
    };
}
export var getFileAttributes = function (metadata) { return ({
    fileSource: 'mediaCard',
    fileMediatype: metadata && metadata.mediaType,
    fileId: metadata && metadata.id,
    fileSize: metadata && metadata.size,
    fileStatus: metadata && metadata.processingStatus,
}); };
export function getUIAnalyticsContext(actionSubjectId, metadata) {
    var fileAttributes = getFileAttributes(metadata);
    var currentActionSujectId = metadata && metadata.id ? metadata.id : actionSubjectId;
    return {
        actionSubjectId: currentActionSujectId,
        attributes: __assign(__assign({ packageName: packageName }, getBaseAnalyticsContext()), { fileAttributes: __assign({}, fileAttributes) }),
    };
}
function attachPackageName(basePayload) {
    return __assign(__assign({}, basePayload), { attributes: __assign({ packageName: packageName }, (basePayload.attributes || {})) });
}
export function createAndFireCustomMediaEvent(basePayload, createAnalyticsEvent) {
    var payload = attachPackageName(basePayload);
    if (createAnalyticsEvent) {
        var event_1 = createAnalyticsEvent(payload);
        event_1.fire(ANALYTICS_MEDIA_CHANNEL);
    }
}
export var createAndFireMediaEvent = function (basePayload) {
    var payload = attachPackageName(basePayload);
    return createAndFireEvent(ANALYTICS_MEDIA_CHANNEL)(payload);
};
//# sourceMappingURL=analytics.js.map