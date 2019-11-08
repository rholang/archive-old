import { __extends } from "tslib";
import React from 'react';
import AnalyticsErrorBoundary from '@atlaskit/analytics-next/AnalyticsErrorBoundary';
export var ANALYTICS_MEDIA_CHANNEL = 'media';
var MediaPickerAnalyticsErrorBoundary = /** @class */ (function (_super) {
    __extends(MediaPickerAnalyticsErrorBoundary, _super);
    function MediaPickerAnalyticsErrorBoundary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediaPickerAnalyticsErrorBoundary.prototype.render = function () {
        var _a = this.props, _b = _a.data, data = _b === void 0 ? {} : _b, children = _a.children;
        return (React.createElement(AnalyticsErrorBoundary, { channel: ANALYTICS_MEDIA_CHANNEL, data: data }, children));
    };
    MediaPickerAnalyticsErrorBoundary.displayName = 'MediaPickerAnalyticsErrorBoundary';
    return MediaPickerAnalyticsErrorBoundary;
}(React.Component));
export default MediaPickerAnalyticsErrorBoundary;
//# sourceMappingURL=media-picker-analytics-error-boundary.js.map