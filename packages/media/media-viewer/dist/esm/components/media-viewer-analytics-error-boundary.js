import { __extends } from "tslib";
import React from 'react';
import AnalyticsErrorBoundary from '@atlaskit/analytics-next/AnalyticsErrorBoundary';
export var ANALYTICS_MEDIA_CHANNEL = 'media';
var MediaViewerAnalyticsErrorBoundary = /** @class */ (function (_super) {
    __extends(MediaViewerAnalyticsErrorBoundary, _super);
    function MediaViewerAnalyticsErrorBoundary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediaViewerAnalyticsErrorBoundary.prototype.render = function () {
        var _a = this.props, _b = _a.data, data = _b === void 0 ? {} : _b, children = _a.children;
        return (React.createElement(AnalyticsErrorBoundary, { channel: ANALYTICS_MEDIA_CHANNEL, data: data }, children));
    };
    MediaViewerAnalyticsErrorBoundary.displayName = 'MediaViewerAnalyticsErrorBoundary';
    return MediaViewerAnalyticsErrorBoundary;
}(React.Component));
export default MediaViewerAnalyticsErrorBoundary;
//# sourceMappingURL=media-viewer-analytics-error-boundary.js.map