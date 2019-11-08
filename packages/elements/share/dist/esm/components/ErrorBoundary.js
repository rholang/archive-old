import { __extends } from "tslib";
import * as React from 'react';
import { withAnalyticsEvents, } from '@atlaskit/analytics-next';
import { CHANNEL_ID, errorEncountered } from './analytics';
var ErrorBoundary = /** @class */ (function (_super) {
    __extends(ErrorBoundary, _super);
    function ErrorBoundary() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    ErrorBoundary.prototype.componentDidCatch = function (error) {
        var createAnalyticsEvent = this.props.createAnalyticsEvent;
        if (createAnalyticsEvent) {
            createAnalyticsEvent(errorEncountered(undefined, {
                message: error.message,
                errorClass: error.name,
            })).fire(CHANNEL_ID);
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
export default withAnalyticsEvents()(ErrorBoundary);
//# sourceMappingURL=ErrorBoundary.js.map