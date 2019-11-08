import { __assign, __extends, __makeTemplateObject } from "tslib";
import * as React from 'react';
import { injectIntl } from 'react-intl';
import styled from 'styled-components';
import { gridSize } from '@atlaskit/theme';
import Button from '@atlaskit/button';
import { ErrorBoundaryWrapper } from '../primitives/wrapper';
import FormattedMessage from '../primitives/formatted-message';
import { NAVIGATION_CHANNEL, OPERATIONAL_EVENT_TYPE, UI_EVENT_TYPE, withAnalyticsEvents, } from '../utils/analytics';
import { errorToReason } from '../utils/error-to-reason';
import { FETCH_ERROR_NAME } from '../utils/fetch';
var TRIGGER_SUBJECT = 'errorBoundary';
var ACTION_SUBJECT = 'rendered';
// This image is also used as the generic error message in Notifications
// https://bitbucket.org/atlassian/pf-home-ui/src/61c5702523da06c9440b865939b2457322efa9f9/src/components/GenericError/error.png?at=master
var NOT_FOUND_IMAGE = 'https://home-static.us-east-1.prod.public.atl-paas.net/d138e521b9ef92669ae8d5c34874d91c.png';
var NotFoundImage = styled.img(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: ", "px;\n"], ["\n  height: ", "px;\n"])), gridSize() * 20);
var ErrorBoundary = /** @class */ (function (_super) {
    __extends(ErrorBoundary, _super);
    function ErrorBoundary() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        _this.fireOperationalEvent = function (payload) {
            if (_this.props.createAnalyticsEvent) {
                _this.props
                    .createAnalyticsEvent(__assign({ eventType: OPERATIONAL_EVENT_TYPE, actionSubject: TRIGGER_SUBJECT }, payload))
                    .fire(NAVIGATION_CHANNEL);
            }
        };
        return _this;
    }
    ErrorBoundary.prototype.componentDidCatch = function (error) {
        var _this = this;
        var reason = errorToReason(error);
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
            eventType: UI_EVENT_TYPE,
            actionSubjectId: 'login',
        })
            .fire(NAVIGATION_CHANNEL);
        window.location.reload();
    };
    ErrorBoundary.prototype.renderErrorBody = function (reason, messages) {
        if (reason.name === FETCH_ERROR_NAME) {
            return reason.status === 401 ? (
            // Not authorised http error
            React.createElement(React.Fragment, null,
                React.createElement(FormattedMessage, __assign({}, messages.errorTextLoggedOut)),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(Button, { onClick: this.handleLogin },
                    React.createElement(FormattedMessage, __assign({}, messages.login))))) : (
            // All other http errors
            React.createElement(FormattedMessage, __assign({}, messages.errorTextNetwork)));
        }
        // Default error message
        return React.createElement(FormattedMessage, __assign({}, messages.errorText));
    };
    ErrorBoundary.prototype.render = function () {
        var _a = this.props, messages = _a.messages, intl = _a.intl;
        var _b = this.state, hasError = _b.hasError, reason = _b.reason;
        if (hasError) {
            return (React.createElement(ErrorBoundaryWrapper, null,
                React.createElement(NotFoundImage, { src: NOT_FOUND_IMAGE, alt: intl.formatMessage(messages.errorImageAltText) }),
                React.createElement("h3", null,
                    React.createElement(FormattedMessage, __assign({}, messages.errorHeading))),
                React.createElement("p", null, this.renderErrorBody(reason, messages))));
        }
        return this.props.children;
    };
    return ErrorBoundary;
}(React.Component));
export default withAnalyticsEvents()(injectIntl(ErrorBoundary));
var templateObject_1;
//# sourceMappingURL=error-boundary.js.map