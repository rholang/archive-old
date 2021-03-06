import { __assign, __extends } from "tslib";
import * as React from 'react';
import ProfileCard from './ProfileCard';
import LoadingState from './LoadingState';
import ErrorMessage from './ErrorMessage';
import filterActions from '../internal/filterActions';
import { CardElevationWrapper } from '../styled/Card';
import { AnalyticsName } from '../internal/analytics';
var ProfileCardResourced = /** @class */ (function (_super) {
    __extends(ProfileCardResourced, _super);
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
            return filterActions(_this.props.actions, _this.state.data);
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
            this.callAnalytics(AnalyticsName.PROFILE_CARD_RESOURCED_ERROR);
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
            return (React.createElement(CardElevationWrapper, { customElevation: customElevation },
                React.createElement(LoadingState, null)));
        }
        else if (hasError) {
            return (React.createElement(CardElevationWrapper, { customElevation: customElevation },
                React.createElement(ErrorMessage, { errorType: error, reload: this.clientFetchProfile })));
        }
        var newProps = __assign({ hasError: hasError, errorType: error, clientFetchProfile: this.clientFetchProfile, analytics: analytics }, data);
        return (React.createElement(CardElevationWrapper, { customElevation: customElevation },
            React.createElement(ProfileCard, __assign({}, newProps, { actions: this.filterActions(), customElevation: "none" }))));
    };
    ProfileCardResourced.defaultProps = {
        actions: [],
        customElevation: 'e200',
    };
    return ProfileCardResourced;
}(React.PureComponent));
export default ProfileCardResourced;
//# sourceMappingURL=ProfileCardResourced.js.map