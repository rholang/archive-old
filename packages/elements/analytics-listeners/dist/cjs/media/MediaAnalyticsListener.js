"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var analytics_next_1 = require("@atlaskit/analytics-next");
var analytics_gas_types_1 = require("@atlaskit/analytics-gas-types");
var analytics_web_client_wrapper_1 = require("../analytics-web-client-wrapper");
var types_1 = require("../types");
var mergeData_1 = require("./mergeData");
var extract_data_from_event_1 = require("../atlaskit/extract-data-from-event");
// This function will attach a packageHierarchy value inside of 'attributes' attribute payload.
// It won't attach it if getPackageHierarchy returns undefined (that's in the case when no context data provided a package name/version)
function attachPackageHierarchy(event, attributes) {
    var packageHierarchy = extract_data_from_event_1.getPackageHierarchy(event);
    return !attributes && !packageHierarchy
        ? {}
        : {
            attributes: tslib_1.__assign(tslib_1.__assign({}, attributes), (packageHierarchy ? { packageHierarchy: packageHierarchy } : {})),
        };
}
var MediaAnalyticsListener = /** @class */ (function (_super) {
    tslib_1.__extends(MediaAnalyticsListener, _super);
    function MediaAnalyticsListener() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listenerHandler = function (event) {
            var _a = _this.props, client = _a.client, logger = _a.logger;
            logger.debug('Received Media event', event);
            var mergedPayloadWithContext = mergeData_1.mergeEventData(event);
            if (mergedPayloadWithContext) {
                var payloadAttributes = attachPackageHierarchy(event, mergedPayloadWithContext.attributes);
                var payload = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({ source: analytics_gas_types_1.DEFAULT_SOURCE }, mergedPayloadWithContext), payloadAttributes), { tags: mergedPayloadWithContext.tags
                        ? Array.from(new Set(tslib_1.__spread(mergedPayloadWithContext.tags, ['media'])))
                        : ['media'] });
                analytics_web_client_wrapper_1.sendEvent(logger, client)(payload);
            }
        };
        return _this;
    }
    MediaAnalyticsListener.prototype.render = function () {
        return (React.createElement(analytics_next_1.AnalyticsListener, { onEvent: this.listenerHandler, channel: types_1.FabricChannel.media }, this.props.children));
    };
    return MediaAnalyticsListener;
}(React.Component));
exports.default = MediaAnalyticsListener;
//# sourceMappingURL=MediaAnalyticsListener.js.map