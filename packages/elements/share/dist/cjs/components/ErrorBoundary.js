"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var analytics_next_1 = require("@atlaskit/analytics-next");
var analytics_1 = require("./analytics");
var ErrorBoundary = /** @class */ (function (_super) {
    tslib_1.__extends(ErrorBoundary, _super);
    function ErrorBoundary() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    ErrorBoundary.prototype.componentDidCatch = function (error) {
        var createAnalyticsEvent = this.props.createAnalyticsEvent;
        if (createAnalyticsEvent) {
            createAnalyticsEvent(analytics_1.errorEncountered(undefined, {
                message: error.message,
                errorClass: error.name,
            })).fire(analytics_1.CHANNEL_ID);
        }
        this.setState({
            hasError: true,
        });
    };
    ErrorBoundary.prototype.render = function () {
        var hasError = this.state.hasError;
        if (hasError) {
            // Silently fail.
            return null;
        }
        return this.props.children;
    };
    return ErrorBoundary;
}(React.Component));
exports.default = analytics_next_1.withAnalyticsEvents()(ErrorBoundary);
//# sourceMappingURL=ErrorBoundary.js.map