"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_intl_1 = require("react-intl");
var theme_1 = require("@atlaskit/theme");
var avatar_1 = tslib_1.__importDefault(require("@atlaskit/avatar"));
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var lozenge_1 = tslib_1.__importDefault(require("@atlaskit/lozenge"));
var spinner_1 = tslib_1.__importDefault(require("@atlaskit/spinner"));
var IconLabel_1 = tslib_1.__importDefault(require("./IconLabel"));
var ErrorMessage_1 = tslib_1.__importDefault(require("./ErrorMessage"));
var relative_date_1 = tslib_1.__importDefault(require("../internal/relative-date"));
var messages_1 = tslib_1.__importDefault(require("../messages"));
var Card_1 = require("../styled/Card");
var analytics_1 = require("../internal/analytics");
var Profilecard = /** @class */ (function (_super) {
    tslib_1.__extends(Profilecard, _super);
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
                (_a = _this.props).clientFetchProfile.apply(_a, tslib_1.__spread(args));
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
            _this.callAnalytics(analytics_1.AnalyticsName.PROFILE_CARD_RELOAD, {});
            _this.callClientFetchProfile.apply(_this, tslib_1.__spread(args));
        };
        return _this;
    }
    Profilecard.prototype.componentDidMount = function () {
        this.timeOpen = Date.now();
        this.callAnalytics(analytics_1.AnalyticsName.PROFILE_CARD_VIEW, {});
    };
    Profilecard.prototype.renderErrorMessage = function () {
        return (React.createElement(ErrorMessage_1.default, { reload: this.props.clientFetchProfile && this.clientFetchProfile, errorType: this.props.errorType }));
    };
    Profilecard.prototype.renderActionsButtons = function () {
        var _this = this;
        if (this.props.actions && this.props.actions.length === 0) {
            return null;
        }
        return (React.createElement(Card_1.ActionButtonGroup, null, this.props.actions &&
            this.props.actions.map(function (action, idx) { return (React.createElement(button_1.default, { appearance: idx === 0 ? 'default' : 'subtle', key: action.label, onClick: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    _this.callAnalytics(analytics_1.AnalyticsName.PROFILE_CARD_CLICK, {
                        id: action.id || null,
                        duration: _this.durationSince(_this.timeOpen),
                    });
                    if (action.callback) {
                        action.callback.apply(action, tslib_1.__spread(args));
                    }
                } }, action.label)); })));
    };
    Profilecard.prototype.renderCardDetailsDefault = function () {
        var _a = this.props, meta = _a.meta, location = _a.location, email = _a.email, timestring = _a.timestring, companyName = _a.companyName;
        return (React.createElement(Card_1.DetailsGroup, null,
            this.renderFullNameAndPublicName(meta),
            meta && React.createElement(Card_1.JobTitleLabel, null, meta),
            React.createElement(IconLabel_1.default, { icon: "email" }, email),
            React.createElement(IconLabel_1.default, { icon: "time" }, timestring),
            React.createElement(IconLabel_1.default, { icon: "companyName" }, companyName),
            React.createElement(IconLabel_1.default, { icon: "location" }, location)));
    };
    Profilecard.prototype.renderCardDetailsForDisabledAccount = function () {
        var _a = this.props, status = _a.status, companyName = _a.companyName, hasDisabledAccountLozenge = _a.hasDisabledAccountLozenge;
        return (React.createElement(Card_1.DetailsGroup, null,
            React.createElement(Card_1.FullNameLabel, { noMeta: true, isDisabledAccount: true }, this.getDisabledAccountName()),
            hasDisabledAccountLozenge && (React.createElement(Card_1.LozengeWrapper, null,
                React.createElement(lozenge_1.default, { appearance: "default", isBold: true },
                    status === 'inactive' && (React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, messages_1.default.inactiveAccountMsg))),
                    status === 'closed' && (React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, messages_1.default.closedAccountMsg)))))),
            React.createElement(Card_1.DisabledInfo, null, this.getDisabledAccountDesc()),
            status === 'inactive' && (React.createElement(IconLabel_1.default, { icon: "companyName" }, companyName))));
    };
    Profilecard.prototype.getDisabledAccountName = function () {
        var _a = this.props, nickname = _a.nickname, fullName = _a.fullName, status = _a.status;
        if (status === 'inactive') {
            return fullName || nickname;
        }
        else if (status === 'closed') {
            return (nickname || (React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, messages_1.default.disabledAccountDefaultName))));
        }
        return null;
    };
    Profilecard.prototype.getDisabledAccountDesc = function () {
        var _a = this.props, _b = _a.status, status = _b === void 0 ? 'closed' : _b, statusModifiedDate = _a.statusModifiedDate, disabledAccountMessage = _a.disabledAccountMessage;
        var date = statusModifiedDate
            ? new Date(statusModifiedDate * 1000)
            : null;
        var relativeDateKey = relative_date_1.default(date);
        // consumer does not want to use built-in message
        if (disabledAccountMessage) {
            return disabledAccountMessage;
        }
        var secondSentence = null;
        if (relativeDateKey) {
            secondSentence = (React.createElement(react_intl_1.FormattedMessage
            // @ts-ignore
            , tslib_1.__assign({}, messages_1.default[status + "AccountDescMsgHasDate" + relativeDateKey])));
        }
        else {
            secondSentence = (
            // @ts-ignore
            React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, messages_1.default[status + "AccountDescMsgNoDate"])));
        }
        return (React.createElement("p", null,
            React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, messages_1.default.generalDescMsgForDisabledUser)),
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
        return React.createElement(Card_1.FullNameLabel, { noMeta: !meta }, displayName);
    };
    Profilecard.prototype.renderCardDetailsApp = function () {
        return (React.createElement(Card_1.DetailsGroup, null,
            this.renderFullNameAndPublicName(),
            React.createElement(Card_1.AppTitleLabel, null, "App")));
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
            this.callAnalytics(analytics_1.AnalyticsName.PROFILE_CARD_ERROR, {});
            cardContent = this.renderErrorMessage();
        }
        else if (this.props.isLoading) {
            cardContent = (React.createElement(Card_1.SpinnerContainer, null,
                React.createElement(spinner_1.default, null)));
        }
        else if (canRender) {
            var isDisabledUser = status === 'inactive' || status === 'closed';
            var actions = this.renderActionsButtons();
            this.callAnalytics(analytics_1.AnalyticsName.PROFILE_CARD_LOADED, {
                duration: this.durationSince(this.timeOpen),
            });
            cardContent = (React.createElement(Card_1.CardContainer, { isDisabledUser: isDisabledUser },
                React.createElement(Card_1.ProfileImage, null,
                    React.createElement(avatar_1.default, { size: "xlarge", src: this.props.status !== 'closed'
                            ? this.props.avatarUrl
                            : undefined, borderColor: theme_1.colors.N0 })),
                React.createElement(Card_1.CardContent, null,
                    this.renderCardDetails(),
                    actions ? (React.createElement(React.Fragment, null,
                        React.createElement(Card_1.ActionsFlexSpacer, null),
                        actions)) : null)));
        }
        return (React.createElement(Card_1.CardElevationWrapper, { customElevation: customElevation }, cardContent));
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
exports.default = Profilecard;
//# sourceMappingURL=ProfileCard.js.map