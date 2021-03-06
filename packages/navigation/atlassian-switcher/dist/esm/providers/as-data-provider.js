import { __assign, __extends } from "tslib";
import * as React from 'react';
import { NAVIGATION_CHANNEL, OPERATIONAL_EVENT_TYPE, withAnalyticsEvents, } from '../utils/analytics';
import { errorToReason } from '../utils/error-to-reason';
var DATA_PROVIDER_SUBJECT = 'atlassianSwitcherDataProvider';
export var Status;
(function (Status) {
    Status["LOADING"] = "loading";
    Status["COMPLETE"] = "complete";
    Status["ERROR"] = "error";
})(Status || (Status = {}));
export var isComplete = function (result) { return result.status === Status.COMPLETE; };
export var isError = function (result) {
    return result.status === Status.ERROR;
};
export var isLoading = function (result) { return result.status === Status.LOADING; };
export var hasLoaded = function (result) {
    return result.status !== Status.LOADING;
};
export default function (name, mapPropsToPromise, mapPropsToInitialValue) {
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
        __extends(DataProvider, _super);
        function DataProvider() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.acceptResults = true;
            _this.state = getInitialState(_this.props);
            _this.fireOperationalEvent = function (payload) {
                if (_this.props.createAnalyticsEvent) {
                    _this.props
                        .createAnalyticsEvent(__assign(__assign({ eventType: OPERATIONAL_EVENT_TYPE, actionSubject: DATA_PROVIDER_SUBJECT }, payload), { attributes: __assign(__assign({}, payload.attributes), { outdated: !_this.acceptResults }) }))
                        .fire(NAVIGATION_CHANNEL);
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
            if (this.acceptResults && !isComplete(this.state)) {
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
                    reason: errorToReason(error),
                },
            });
        };
        DataProvider.prototype.render = function () {
            return this.props.children(this.state);
        };
        DataProvider.displayName = "DataProvider(" + name + ")";
        return DataProvider;
    }(React.Component));
    return withAnalyticsEvents()(DataProvider);
}
//# sourceMappingURL=as-data-provider.js.map