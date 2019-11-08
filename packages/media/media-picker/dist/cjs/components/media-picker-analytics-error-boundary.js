"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var AnalyticsErrorBoundary_1 = tslib_1.__importDefault(require("@atlaskit/analytics-next/AnalyticsErrorBoundary"));
exports.ANALYTICS_MEDIA_CHANNEL = 'media';
var MediaPickerAnalyticsErrorBoundary = /** @class */ (function (_super) {
    tslib_1.__extends(MediaPickerAnalyticsErrorBoundary, _super);
    function MediaPickerAnalyticsErrorBoundary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediaPickerAnalyticsErrorBoundary.prototype.render = function () {
        var _a = this.props, _b = _a.data, data = _b === void 0 ? {} : _b, children = _a.children;
        return (react_1.default.createElement(AnalyticsErrorBoundary_1.default, { channel: exports.ANALYTICS_MEDIA_CHANNEL, data: data }, children));
    };
    MediaPickerAnalyticsErrorBoundary.displayName = 'MediaPickerAnalyticsErrorBoundary';
    return MediaPickerAnalyticsErrorBoundary;
}(react_1.default.Component));
exports.default = MediaPickerAnalyticsErrorBoundary;
//# sourceMappingURL=media-picker-analytics-error-boundary.js.map