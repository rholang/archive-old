import { __assign, __extends, __read, __spread } from "tslib";
import * as React from 'react';
import { AnalyticsListener, } from '@atlaskit/analytics-next';
import { DEFAULT_SOURCE } from '@atlaskit/analytics-gas-types';
import { sendEvent } from '../analytics-web-client-wrapper';
import { FabricChannel } from '../types';
import { mergeEventData } from './mergeData';
import { getPackageHierarchy } from '../atlaskit/extract-data-from-event';
// This function will attach a packageHierarchy value inside of 'attributes' attribute payload.
// It won't attach it if getPackageHierarchy returns undefined (that's in the case when no context data provided a package name/version)
function attachPackageHierarchy(event, attributes) {
    var packageHierarchy = getPackageHierarchy(event);
    return !attributes && !packageHierarchy
        ? {}
        : {
            attributes: __assign(__assign({}, attributes), (packageHierarchy ? { packageHierarchy: packageHierarchy } : {})),
        };
}
var MediaAnalyticsListener = /** @class */ (function (_super) {
    __extends(MediaAnalyticsListener, _super);
    function MediaAnalyticsListener() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listenerHandler = function (event) {
            var _a = _this.props, client = _a.client, logger = _a.logger;
            logger.debug('Received Media event', event);
            var mergedPayloadWithContext = mergeEventData(event);
            if (mergedPayloadWithContext) {
                var payloadAttributes = attachPackageHierarchy(event, mergedPayloadWithContext.attributes);
                var payload = __assign(__assign(__assign({ source: DEFAULT_SOURCE }, mergedPayloadWithContext), payloadAttributes), { tags: mergedPayloadWithContext.tags
                        ? Array.from(new Set(__spread(mergedPayloadWithContext.tags, ['media'])))
                        : ['media'] });
                sendEvent(logger, client)(payload);
            }
        };
        return _this;
    }
    MediaAnalyticsListener.prototype.render = function () {
        return (React.createElement(AnalyticsListener, { onEvent: this.listenerHandler, channel: FabricChannel.media }, this.props.children));
    };
    return MediaAnalyticsListener;
}(React.Component));
export default MediaAnalyticsListener;
//# sourceMappingURL=MediaAnalyticsListener.js.map