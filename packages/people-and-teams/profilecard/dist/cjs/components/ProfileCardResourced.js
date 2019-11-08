"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var ProfileCard_1 = tslib_1.__importDefault(require("./ProfileCard"));
var LoadingState_1 = tslib_1.__importDefault(require("./LoadingState"));
var ErrorMessage_1 = tslib_1.__importDefault(require("./ErrorMessage"));
var filterActions_1 = tslib_1.__importDefault(require("../internal/filterActions"));
var Card_1 = require("../styled/Card");
var analytics_1 = require("../internal/analytics");
var ProfileCardResourced = /** @class */ (function (_super) {
    tslib_1.__extends(ProfileCardResourced, _super);
    function ProfileCardResourced() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isMounted = false;
        _this.state = {
            visible: false,
            isLoading: undefined,
            hasError: false,
            error: null,
            data: null,
        };
        _this.callAnalytics = function (id, options) {
            if (options === void 0) { options = {}; }
            var analytics = _this.props.analytics;
            if (analytics) {
                analytics(id, options);
            }
        };
        _this.clientFetchProfile = function () {
            var _a = _this.props, cloudId = _a.cloudId, userId = _a.userId;
            var isLoading = _this.state.isLoading;
            if (isLoading === true) {
                // don't fetch data when fetching is in process
                return;
            }
            _this.setState({
                isLoading: true,
                hasError: false,
                data: null,
            }, function () {
                _this.props.resourceClient
                    .getProfile(cloudId, userId)
                    .then(function (res) { return _this.handleClientSuccess(res); }, function (err) { return _this.handleClientError(err); })
                    .catch(function (err) { return _this.handleClientError(err); });
            });
        };
        _this.filterActions = function () {
            return filterActions_1.default(_this.props.actions, _this.state.data);
        };
        return _this;
    }
    ProfileCardResourced.prototype.componentDidMount = function () {
        this._isMounted = true;
        this.clientFetchProfile();
    };
    ProfileCardResourced.prototype.componentDidUpdate = function (prevProps, prevState) {
        var _a = this.props, userId = _a.userId, cloudId = _a.cloudId;
        var hasError = this.state.hasError;
        if (userId !== prevProps.userId || cloudId !== prevProps.cloudId) {
            this.setState({
                isLoading: undefined,
            }, this.clientFetchProfile);
        }
        if (hasError !== prevState.hasError && hasError) {
            this.callAnalytics(analytics_1.AnalyticsName.PROFILE_CARD_RESOURCED_ERROR);
        }
    };
    ProfileCardResourced.prototype.componentWillUnmount = function () {
        this._isMounted = false;
    };
    ProfileCardResourced.prototype.handleClientSuccess = function (res) {
        if (!this._isMounted) {
            return;
        }
        this.setState({
            isLoading: false,
            hasError: false,
            data: res,
        });
    };
    ProfileCardResourced.prototype.handleClientError = function (err) {
        if (!this._isMounted) {
            return;
        }
        this.setState({
            isLoading: false,
            hasError: true,
            error: err,
        });
    };
    ProfileCardResourced.prototype.render = function () {
        var _a = this.state, isLoading = _a.isLoading, hasError = _a.hasError, error = _a.error, data = _a.data;
        var _b = this.props, analytics = _b.analytics, customElevation = _b.customElevation;
        var isFetchingOrNotStartToFetchYet = isLoading === true || isLoading === undefined;
        if (isFetchingOrNotStartToFetchYet) {
            return (React.createElement(Card_1.CardElevationWrapper, { customElevation: customElevation },
                React.createElement(LoadingState_1.default, null)));
        }
        else if (hasError) {
            return (React.createElement(Card_1.CardElevationWrapper, { customElevation: customElevation },
                React.createElement(ErrorMessage_1.default, { errorType: error, reload: this.clientFetchProfile })));
        }
        var newProps = tslib_1.__assign({ hasError: hasError, errorType: error, clientFetchProfile: this.clientFetchProfile, analytics: analytics }, data);
        return (React.createElement(Card_1.CardElevationWrapper, { customElevation: customElevation },
            React.createElement(ProfileCard_1.default, tslib_1.__assign({}, newProps, { actions: this.filterActions(), customElevation: "none" }))));
    };
    ProfileCardResourced.defaultProps = {
        actions: [],
        customElevation: 'e200',
    };
    return ProfileCardResourced;
}(React.PureComponent));
exports.default = ProfileCardResourced;
//# sourceMappingURL=ProfileCardResourced.js.map