import { __assign, __extends } from "tslib";
import * as React from 'react';
import { Popper } from '@atlaskit/popper';
import Portal from '@atlaskit/portal';
import { layers } from '@atlaskit/theme';
// @ts-ignore
import NodeResolver from 'react-node-resolver';
import LoadingState from './LoadingState';
import Profilecard from './ProfileCard';
import withOuterListeners from './withOuterListeners';
import filterActions from '../internal/filterActions';
import { CardElevationWrapper, CardTriggerWrapper } from '../styled/Card';
var CardElevationWrapperWithOuter = withOuterListeners(CardElevationWrapper);
export var DELAY_MS_SHOW = 800;
export var DELAY_MS_HIDE = 200;
var ProfilecardTrigger = /** @class */ (function (_super) {
    __extends(ProfilecardTrigger, _super);
    function ProfilecardTrigger() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isMounted = false;
        _this.showDelay = _this.props.trigger === 'click' ? 0 : DELAY_MS_SHOW;
        _this.hideDelay = _this.props.trigger === 'click' ? 0 : DELAY_MS_HIDE;
        _this.showTimer = 0;
        _this.hideTimer = 0;
        _this.hideProfilecard = function () {
            clearTimeout(_this.showTimer);
            _this.hideTimer = window.setTimeout(function () {
                _this.setState({ visible: false });
            }, _this.hideDelay);
        };
        _this.showProfilecard = function () {
            clearTimeout(_this.hideTimer);
            _this.showTimer = window.setTimeout(function () {
                if (!_this.state.visible) {
                    _this.clientFetchProfile();
                    _this.setState({ visible: true });
                }
            }, _this.showDelay);
        };
        _this.containerListeners = _this.props.trigger === 'hover'
            ? {
                onMouseEnter: _this.showProfilecard,
                onMouseLeave: _this.hideProfilecard,
            }
            : {
                onClick: _this.showProfilecard,
            };
        _this.layerListeners = {
            handleClickOutside: _this.hideProfilecard,
            handleEscapeKeydown: _this.hideProfilecard,
        };
        _this.state = {
            visible: false,
            isLoading: undefined,
            hasError: false,
            error: null,
            data: null,
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
        _this.setRef = function (targetRef) {
            _this.targetRef = targetRef;
        };
        return _this;
    }
    ProfilecardTrigger.prototype.componentDidMount = function () {
        this._isMounted = true;
    };
    ProfilecardTrigger.prototype.componentDidUpdate = function (prevProps) {
        var _a = this.props, userId = _a.userId, cloudId = _a.cloudId;
        if (userId !== prevProps.userId || cloudId !== prevProps.cloudId) {
            this.setState({
                isLoading: undefined,
            }, this.clientFetchProfile);
        }
    };
    ProfilecardTrigger.prototype.componentWillUnmount = function () {
        this._isMounted = false;
        clearTimeout(this.showTimer);
        clearTimeout(this.hideTimer);
    };
    ProfilecardTrigger.prototype.handleClientSuccess = function (res) {
        if (!this._isMounted) {
            return;
        }
        this.setState({
            isLoading: false,
            hasError: false,
            data: res,
        });
    };
    ProfilecardTrigger.prototype.handleClientError = function (err) {
        if (!this._isMounted) {
            return;
        }
        this.setState({
            isLoading: false,
            hasError: true,
            error: err,
        });
    };
    ProfilecardTrigger.prototype.filterActions = function () {
        return filterActions(this.props.actions, this.state.data);
    };
    ProfilecardTrigger.prototype.renderProfileCard = function () {
        var newProps = __assign({ clientFetchProfile: this.clientFetchProfile, analytics: this.props.analytics }, this.state.data);
        return (React.createElement(Profilecard, __assign({}, newProps, { actions: this.filterActions(), customElevation: "none", hasError: this.state.hasError, errorType: this.state.error })));
    };
    ProfilecardTrigger.prototype.renderWithPopper = function (element) {
        var _this = this;
        return (React.createElement(Popper, { referenceElement: this.targetRef, placement: this.props.position }, function (_a) {
            var ref = _a.ref, style = _a.style;
            return (React.createElement(CardElevationWrapperWithOuter, __assign({ style: style, innerRef: ref }, _this.containerListeners, _this.layerListeners, { customElevation: _this.props.customElevation }), element));
        }));
    };
    ProfilecardTrigger.prototype.renderLoading = function () {
        var _a = this.state, isLoading = _a.isLoading, visible = _a.visible;
        var isFetchingOrNotStartToFetchYet = isLoading === true || isLoading === undefined;
        return visible && isFetchingOrNotStartToFetchYet && this.targetRef
            ? this.renderWithPopper(React.createElement(LoadingState, null))
            : null;
    };
    ProfilecardTrigger.prototype.renderProfileCardLoaded = function () {
        var _a = this.state, isLoading = _a.isLoading, visible = _a.visible;
        return visible && isLoading === false && this.targetRef
            ? this.renderWithPopper(this.renderProfileCard())
            : null;
    };
    ProfilecardTrigger.prototype.renderWithTrigger = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(CardTriggerWrapper, __assign({}, this.containerListeners),
                React.createElement(NodeResolver, { innerRef: this.setRef }, this.props.children)),
            React.createElement(Portal, { zIndex: layers.tooltip() },
                this.renderLoading(),
                this.renderProfileCardLoaded())));
    };
    ProfilecardTrigger.prototype.render = function () {
        if (this.props.children) {
            return this.renderWithTrigger();
        }
        else {
            throw new Error('Component "ProfileCardTrigger" must have "children" property');
        }
    };
    ProfilecardTrigger.defaultProps = {
        actions: [],
        trigger: 'hover',
        customElevation: 'e200',
    };
    return ProfilecardTrigger;
}(React.PureComponent));
export default ProfilecardTrigger;
//# sourceMappingURL=ProfileCardTrigger.js.map