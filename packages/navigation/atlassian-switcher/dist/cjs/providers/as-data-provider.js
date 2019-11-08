"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var analytics_1 = require("../utils/analytics");
var error_to_reason_1 = require("../utils/error-to-reason");
var DATA_PROVIDER_SUBJECT = 'atlassianSwitcherDataProvider';
var Status;
(function (Status) {
    Status["LOADING"] = "loading";
    Status["COMPLETE"] = "complete";
    Status["ERROR"] = "error";
})(Status = exports.Status || (exports.Status = {}));
exports.isComplete = function (result) { return result.status === Status.COMPLETE; };
exports.isError = function (result) {
    return result.status === Status.ERROR;
};
exports.isLoading = function (result) { return result.status === Status.LOADING; };
exports.hasLoaded = function (result) {
    return result.status !== Status.LOADING;
};
function default_1(name, mapPropsToPromise, mapPropsToInitialValue) {
    var getInitialState = function (props) {
        if (mapPropsToInitialValue) {
            var initialValue = mapPropsToInitialValue(props);
            if (initialValue !== undefined) {
                return {
                    status: Status.COMPLETE,
                    data: initialValue,
                };
            }
        }
        return {
            status: Status.LOADING,
            data: null,
        };
    };
    var DataProvider = /** @class */ (function (_super) {
        tslib_1.__extends(DataProvider, _super);
        function DataProvider() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.acceptResults = true;
            _this.state = getInitialState(_this.props);
            _this.fireOperationalEvent = function (payload) {
                if (_this.props.createAnalyticsEvent) {
                    _this.props
                        .createAnalyticsEvent(tslib_1.__assign(tslib_1.__assign({ eventType: analytics_1.OPERATIONAL_EVENT_TYPE, actionSubject: DATA_PROVIDER_SUBJECT }, payload), { attributes: tslib_1.__assign(tslib_1.__assign({}, payload.attributes), { outdated: !_this.acceptResults }) }))
                        .fire(analytics_1.NAVIGATION_CHANNEL);
                }
            };
            return _this;
        }
        DataProvider.prototype.componentWillUnmount = function () {
            /**
             * Promise resolved after component is unmounted to be ignored
             */
            this.acceptResults = false;
        };
        DataProvider.prototype.componentDidMount = function () {
            var _this = this;
            mapPropsToPromise(this.props)
                .then(function (result) {
                _this.onResult(result);
            })
                .catch(function (error) {
                _this.onError(error);
            });
        };
        DataProvider.prototype.onResult = function (value) {
            if (this.acceptResults) {
                this.setState({
                    data: value,
                    status: Status.COMPLETE,
                });
            }
            this.fireOperationalEvent({
                action: 'receivedResult',
                actionSubjectId: name,
            });
        };
        DataProvider.prototype.onError = function (error) {
            /**
             * Do not transition from "complete" state to "error"
             */
            if (this.acceptResults && !exports.isComplete(this.state)) {
                this.setState({
                    error: error,
                    status: Status.ERROR,
                    data: null,
                });
            }
            this.fireOperationalEvent({
                action: 'failed',
                actionSubjectId: name,
                attributes: {
                    reason: error_to_reason_1.errorToReason(error),
                },
            });
        };
        DataProvider.prototype.render = function () {
            return this.props.children(this.state);
        };
        DataProvider.displayName = "DataProvider(" + name + ")";
        return DataProvider;
    }(React.Component));
    return analytics_1.withAnalyticsEvents()(DataProvider);
}
exports.default = default_1;
//# sourceMappingURL=as-data-provider.js.map