"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_intl_1 = require("react-intl");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var theme_1 = require("@atlaskit/theme");
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var wrapper_1 = require("../primitives/wrapper");
var formatted_message_1 = tslib_1.__importDefault(require("../primitives/formatted-message"));
var analytics_1 = require("../utils/analytics");
var error_to_reason_1 = require("../utils/error-to-reason");
var fetch_1 = require("../utils/fetch");
var TRIGGER_SUBJECT = 'errorBoundary';
var ACTION_SUBJECT = 'rendered';
// This image is also used as the generic error message in Notifications
// https://bitbucket.org/atlassian/pf-home-ui/src/61c5702523da06c9440b865939b2457322efa9f9/src/components/GenericError/error.png?at=master
var NOT_FOUND_IMAGE = 'https://home-static.us-east-1.prod.public.atl-paas.net/d138e521b9ef92669ae8d5c34874d91c.png';
var NotFoundImage = styled_components_1.default.img(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  height: ", "px;\n"], ["\n  height: ", "px;\n"])), theme_1.gridSize() * 20);
var ErrorBoundary = /** @class */ (function (_super) {
    tslib_1.__extends(ErrorBoundary, _super);
    function ErrorBoundary() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        _this.fireOperationalEvent = function (payload) {
            if (_this.props.createAnalyticsEvent) {
                _this.props
                    .createAnalyticsEvent(tslib_1.__assign({ eventType: analytics_1.OPERATIONAL_EVENT_TYPE, actionSubject: TRIGGER_SUBJECT }, payload))
                    .fire(analytics_1.NAVIGATION_CHANNEL);
            }
        };
        return _this;
    }
    ErrorBoundary.prototype.componentDidCatch = function (error) {
        var _this = this;
        var reason = error_to_reason_1.errorToReason(error);
        this.setState({
            hasError: true,
            reason: reason,
        }, function () {
            _this.fireOperationalEvent({
                action: ACTION_SUBJECT,
                reason: reason,
            });
        });
    };
    ErrorBoundary.prototype.handleLogin = function (_, analyticsEvent) {
        analyticsEvent
            .update({
            eventType: analytics_1.UI_EVENT_TYPE,
            actionSubjectId: 'login',
        })
            .fire(analytics_1.NAVIGATION_CHANNEL);
        window.location.reload();
    };
    ErrorBoundary.prototype.renderErrorBody = function (reason, messages) {
        if (reason.name === fetch_1.FETCH_ERROR_NAME) {
            return reason.status === 401 ? (
            // Not authorised http error
            React.createElement(React.Fragment, null,
                React.createElement(formatted_message_1.default, tslib_1.__assign({}, messages.errorTextLoggedOut)),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(button_1.default, { onClick: this.handleLogin },
                    React.createElement(formatted_message_1.default, tslib_1.__assign({}, messages.login))))) : (
            // All other http errors
            React.createElement(formatted_message_1.default, tslib_1.__assign({}, messages.errorTextNetwork)));
        }
        // Default error message
        return React.createElement(formatted_message_1.default, tslib_1.__assign({}, messages.errorText));
    };
    ErrorBoundary.prototype.render = function () {
        var _a = this.props, messages = _a.messages, intl = _a.intl;
        var _b = this.state, hasError = _b.hasError, reason = _b.reason;
        if (hasError) {
            return (React.createElement(wrapper_1.ErrorBoundaryWrapper, null,
                React.createElement(NotFoundImage, { src: NOT_FOUND_IMAGE, alt: intl.formatMessage(messages.errorImageAltText) }),
                React.createElement("h3", null,
                    React.createElement(formatted_message_1.default, tslib_1.__assign({}, messages.errorHeading))),
                React.createElement("p", null, this.renderErrorBody(reason, messages))));
        }
        return this.props.children;
    };
    return ErrorBoundary;
}(React.Component));
exports.default = analytics_1.withAnalyticsEvents()(react_intl_1.injectIntl(ErrorBoundary));
var templateObject_1;
//# sourceMappingURL=error-boundary.js.map