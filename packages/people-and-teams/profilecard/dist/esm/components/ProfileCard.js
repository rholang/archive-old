import { __assign, __extends, __read, __spread } from "tslib";
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { colors } from '@atlaskit/theme';
import Avatar from '@atlaskit/avatar';
import Button from '@atlaskit/button';
import Lozenge from '@atlaskit/lozenge';
import Spinner from '@atlaskit/spinner';
import IconLabel from './IconLabel';
import ErrorMessage from './ErrorMessage';
import relativeDate from '../internal/relative-date';
import messages from '../messages';
import { ActionButtonGroup, ActionsFlexSpacer, AppTitleLabel, CardContainer, CardContent, DisabledInfo, DetailsGroup, FullNameLabel, JobTitleLabel, ProfileImage, CardElevationWrapper, LozengeWrapper, SpinnerContainer, } from '../styled/Card';
import { AnalyticsName } from '../internal/analytics';
var Profilecard = /** @class */ (function (_super) {
    __extends(Profilecard, _super);
    function Profilecard(props) {
        var _this = _super.call(this, props) || this;
        _this.durationSince = function (from) {
            var fromParsed = from || 0;
            return fromParsed > 0 ? Date.now() - fromParsed : null;
        };
        _this.callClientFetchProfile = function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (_this.props.clientFetchProfile) {
                (_a = _this.props).clientFetchProfile.apply(_a, __spread(args));
            }
        };
        _this.callAnalytics = function (id, options) {
            if (_this.props.analytics) {
                _this.props.analytics(id, options);
            }
        };
        _this.timeOpen = null;
        _this.clientFetchProfile = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            _this.callAnalytics(AnalyticsName.PROFILE_CARD_RELOAD, {});
            _this.callClientFetchProfile.apply(_this, __spread(args));
        };
        return _this;
    }
    Profilecard.prototype.componentDidMount = function () {
        this.timeOpen = Date.now();
        this.callAnalytics(AnalyticsName.PROFILE_CARD_VIEW, {});
    };
    Profilecard.prototype.renderErrorMessage = function () {
        return (React.createElement(ErrorMessage, { reload: this.props.clientFetchProfile && this.clientFetchProfile, errorType: this.props.errorType }));
    };
    Profilecard.prototype.renderActionsButtons = function () {
        var _this = this;
        if (this.props.actions && this.props.actions.length === 0) {
            return null;
        }
        return (React.createElement(ActionButtonGroup, null, this.props.actions &&
            this.props.actions.map(function (action, idx) { return (React.createElement(Button, { appearance: idx === 0 ? 'default' : 'subtle', key: action.label, onClick: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    _this.callAnalytics(AnalyticsName.PROFILE_CARD_CLICK, {
                        id: action.id || null,
                        duration: _this.durationSince(_this.timeOpen),
                    });
                    if (action.callback) {
                        action.callback.apply(action, __spread(args));
                    }
                } }, action.label)); })));
    };
    Profilecard.prototype.renderCardDetailsDefault = function () {
        var _a = this.props, meta = _a.meta, location = _a.location, email = _a.email, timestring = _a.timestring, companyName = _a.companyName;
        return (React.createElement(DetailsGroup, null,
            this.renderFullNameAndPublicName(meta),
            meta && React.createElement(JobTitleLabel, null, meta),
            React.createElement(IconLabel, { icon: "email" }, email),
            React.createElement(IconLabel, { icon: "time" }, timestring),
            React.createElement(IconLabel, { icon: "companyName" }, companyName),
            React.createElement(IconLabel, { icon: "location" }, location)));
    };
    Profilecard.prototype.renderCardDetailsForDisabledAccount = function () {
        var _a = this.props, status = _a.status, companyName = _a.companyName, hasDisabledAccountLozenge = _a.hasDisabledAccountLozenge;
        return (React.createElement(DetailsGroup, null,
            React.createElement(FullNameLabel, { noMeta: true, isDisabledAccount: true }, this.getDisabledAccountName()),
            hasDisabledAccountLozenge && (React.createElement(LozengeWrapper, null,
                React.createElement(Lozenge, { appearance: "default", isBold: true },
                    status === 'inactive' && (React.createElement(FormattedMessage, __assign({}, messages.inactiveAccountMsg))),
                    status === 'closed' && (React.createElement(FormattedMessage, __assign({}, messages.closedAccountMsg)))))),
            React.createElement(DisabledInfo, null, this.getDisabledAccountDesc()),
            status === 'inactive' && (React.createElement(IconLabel, { icon: "companyName" }, companyName))));
    };
    Profilecard.prototype.getDisabledAccountName = function () {
        var _a = this.props, nickname = _a.nickname, fullName = _a.fullName, status = _a.status;
        if (status === 'inactive') {
            return fullName || nickname;
        }
        else if (status === 'closed') {
            return (nickname || (React.createElement(FormattedMessage, __assign({}, messages.disabledAccountDefaultName))));
        }
        return null;
    };
    Profilecard.prototype.getDisabledAccountDesc = function () {
        var _a = this.props, _b = _a.status, status = _b === void 0 ? 'closed' : _b, statusModifiedDate = _a.statusModifiedDate, disabledAccountMessage = _a.disabledAccountMessage;
        var date = statusModifiedDate
            ? new Date(statusModifiedDate * 1000)
            : null;
        var relativeDateKey = relativeDate(date);
        // consumer does not want to use built-in message
        if (disabledAccountMessage) {
            return disabledAccountMessage;
        }
        var secondSentence = null;
        if (relativeDateKey) {
            secondSentence = (React.createElement(FormattedMessage
            // @ts-ignore
            , __assign({}, messages[status + "AccountDescMsgHasDate" + relativeDateKey])));
        }
        else {
            secondSentence = (
            // @ts-ignore
            React.createElement(FormattedMessage, __assign({}, messages[status + "AccountDescMsgNoDate"])));
        }
        return (React.createElement("p", null,
            React.createElement(FormattedMessage, __assign({}, messages.generalDescMsgForDisabledUser)),
            ' ',
            secondSentence));
    };
    Profilecard.prototype.renderFullNameAndPublicName = function (meta) {
        var _a = this.props, nickname = _a.nickname, fullName = _a.fullName;
        if (!fullName && !nickname) {
            return null;
        }
        var displayName = fullName === nickname
            ? fullName
            : "" + fullName + (nickname ? " (" + nickname + ") " : '');
        return React.createElement(FullNameLabel, { noMeta: !meta }, displayName);
    };
    Profilecard.prototype.renderCardDetailsApp = function () {
        return (React.createElement(DetailsGroup, null,
            this.renderFullNameAndPublicName(),
            React.createElement(AppTitleLabel, null, "App")));
    };
    Profilecard.prototype.renderCardDetails = function () {
        var _a = this.props, isBot = _a.isBot, status = _a.status;
        if (isBot) {
            return this.renderCardDetailsApp();
        }
        if (status === 'inactive' || status === 'closed') {
            return this.renderCardDetailsForDisabledAccount();
        }
        return this.renderCardDetailsDefault();
    };
    Profilecard.prototype.render = function () {
        var _a = this.props, fullName = _a.fullName, status = _a.status, customElevation = _a.customElevation;
        var cardContent = null;
        // @FIXME do closed users have empty fullName field?
        var canRender = fullName || status === 'closed';
        if (this.props.hasError) {
            this.callAnalytics(AnalyticsName.PROFILE_CARD_ERROR, {});
            cardContent = this.renderErrorMessage();
        }
        else if (this.props.isLoading) {
            cardContent = (React.createElement(SpinnerContainer, null,
                React.createElement(Spinner, null)));
        }
        else if (canRender) {
            var isDisabledUser = status === 'inactive' || status === 'closed';
            var actions = this.renderActionsButtons();
            this.callAnalytics(AnalyticsName.PROFILE_CARD_LOADED, {
                duration: this.durationSince(this.timeOpen),
            });
            cardContent = (React.createElement(CardContainer, { isDisabledUser: isDisabledUser },
                React.createElement(ProfileImage, null,
                    React.createElement(Avatar, { size: "xlarge", src: this.props.status !== 'closed'
                            ? this.props.avatarUrl
                            : undefined, borderColor: colors.N0 })),
                React.createElement(CardContent, null,
                    this.renderCardDetails(),
                    actions ? (React.createElement(React.Fragment, null,
                        React.createElement(ActionsFlexSpacer, null),
                        actions)) : null)));
        }
        return (React.createElement(CardElevationWrapper, { customElevation: customElevation }, cardContent));
    };
    Profilecard.defaultProps = {
        isLoading: false,
        hasError: false,
        errorType: null,
        status: 'active',
        isBot: false,
        isNotMentionable: false,
        actions: [],
        hasDisabledAccountLozenge: true,
        customElevation: 'e200',
        analytics: function () { return null; },
        clientFetchProfile: function () { return null; },
    };
    return Profilecard;
}(React.PureComponent));
export default Profilecard;
//# sourceMappingURL=ProfileCard.js.map