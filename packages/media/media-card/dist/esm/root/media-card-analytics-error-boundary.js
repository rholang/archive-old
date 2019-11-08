import { __extends } from "tslib";
import React from 'react';
import AnalyticsErrorBoundary from '@atlaskit/analytics-next/AnalyticsErrorBoundary';
export var ANALYTICS_MEDIA_CHANNEL = 'media';
var MediaCardAnalyticsErrorBoundary = /** @class */ (function (_super) {
    __extends(MediaCardAnalyticsErrorBoundary, _super);
    function MediaCardAnalyticsErrorBoundary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediaCardAnalyticsErrorBoundary.prototype.render = function () {
        var _a = this.props, _b = _a.data, data = _b === void 0 ? {} : _b, children = _a.children;
        return (React.createElement(AnalyticsErrorBoundary, { channel: ANALYTICS_MEDIA_CHANNEL, data: data }, children));
    };
    MediaCardAnalyticsErrorBoundary.displayName = 'MediaCardAnalyticsErrorBoundary';
    return MediaCardAnalyticsErrorBoundary;
}(React.Component));
export default MediaCardAnalyticsErrorBoundary;
//# sourceMappingURL=media-card-analytics-error-boundary.js.map