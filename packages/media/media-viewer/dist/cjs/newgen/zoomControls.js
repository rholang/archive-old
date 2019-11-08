"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var media_ui_1 = require("@atlaskit/media-ui");
var zoom_out_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/media-services/zoom-out"));
var zoom_in_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/media-services/zoom-in"));
var styled_1 = require("./styled");
var analytics_next_1 = require("@atlaskit/analytics-next");
var analytics_1 = require("./analytics");
var zoom_1 = require("./analytics/zoom");
var react_intl_1 = require("react-intl");
var media_ui_2 = require("@atlaskit/media-ui");
var ZoomControlsBase = /** @class */ (function (_super) {
    tslib_1.__extends(ZoomControlsBase, _super);
    function ZoomControlsBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.zoomIn = function () {
            var _a = _this.props, onChange = _a.onChange, zoomLevel = _a.zoomLevel;
            if (zoomLevel.canZoomIn) {
                var zoom = zoomLevel.zoomIn();
                _this.fireAnalytics(zoom_1.createZoomEvent('zoomIn', zoom.value));
                onChange(zoom);
            }
        };
        _this.zoomOut = function () {
            var _a = _this.props, onChange = _a.onChange, zoomLevel = _a.zoomLevel;
            if (zoomLevel.canZoomOut) {
                var zoom = zoomLevel.zoomOut();
                _this.fireAnalytics(zoom_1.createZoomEvent('zoomOut', zoom.value));
                onChange(zoom);
            }
        };
        _this.fireAnalytics = function (payload) {
            var createAnalyticsEvent = _this.props.createAnalyticsEvent;
            if (createAnalyticsEvent) {
                var ev = createAnalyticsEvent(payload);
                ev.fire(analytics_1.channel);
            }
        };
        return _this;
    }
    ZoomControlsBase.prototype.render = function () {
        var _a = this.props, zoomLevel = _a.zoomLevel, formatMessage = _a.intl.formatMessage;
        return (React.createElement(styled_1.ZoomWrapper, { className: media_ui_1.hideControlsClassName },
            React.createElement(styled_1.ZoomControlsWrapper, null,
                React.createElement(media_ui_1.MediaButton, { appearance: 'toolbar', isDisabled: !zoomLevel.canZoomOut, onClick: this.zoomOut, iconBefore: React.createElement(zoom_out_1.default, { label: formatMessage(media_ui_2.messages.zoom_out) }) }),
                React.createElement(media_ui_1.MediaButton, { appearance: 'toolbar', isDisabled: !zoomLevel.canZoomIn, onClick: this.zoomIn, iconBefore: React.createElement(zoom_in_1.default, { label: formatMessage(media_ui_2.messages.zoom_in) }) })),
            React.createElement(styled_1.ZoomLevelIndicator, null, zoomLevel.asPercentage)));
    };
    return ZoomControlsBase;
}(react_1.Component));
exports.ZoomControlsBase = ZoomControlsBase;
exports.ZoomControls = analytics_next_1.withAnalyticsEvents({})(react_intl_1.injectIntl(ZoomControlsBase));
//# sourceMappingURL=zoomControls.js.map