"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

if (process.env.NODE_ENV !== 'production' && !process.env.CI) {
  // eslint-disable-next-line no-console
  console.warn('The @atlaskit/analytics package has been deprecated. Please use the @atlaskit/analytics-next package instead.');
}
/*
The withAnalytics HOC wraps a component and provides the `fireAnalyticsEvent`
and `firePrivateAnalyticsEvent` methods to it as props. It contains the logic
for how to fire events, including handling the analyticsId and analyticsData
props. The `map` argument may be an object or a function that returns an object.
The properties of the `map` object/result can be strings (the name of the event
that will be fired) or functions (which are responsible for firing the event).
You can specify a default `analyticsId` and `analyticsData` with the `defaultProps`
param. Please be aware that specifying a default `analyticsId` will cause public
events to always fire for your component unless it has been set to a falsy by
the component consumer.
*/


var withAnalytics = function withAnalytics(WrappedComponent) {
  var _class, _temp;

  var map = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var defaultProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var withDelegation = arguments.length > 3 ? arguments[3] : undefined;
  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2.default)(WithAnalytics, _Component);

    function WithAnalytics() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, WithAnalytics);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(WithAnalytics)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "props", void 0);
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "evaluatedMap", {});
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "delegateAnalyticsEvent", function (analyticsId, data, isPrivate) {
        var onAnalyticsEvent = _this.context.onAnalyticsEvent;
        if (!onAnalyticsEvent) return;
        onAnalyticsEvent(analyticsId, data, isPrivate);
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "fireAnalyticsEvent", function (name, data) {
        var _this$props = _this.props,
            analyticsData = _this$props.analyticsData,
            analyticsId = _this$props.analyticsId;
        var onAnalyticsEvent = _this.context.onAnalyticsEvent;
        if (!analyticsId || !onAnalyticsEvent) return;
        var eventData = (0, _objectSpread2.default)({}, analyticsData, data);
        onAnalyticsEvent("".concat(analyticsId, ".").concat(name), eventData, false);
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "privateAnalyticsEvent", function (name, data) {
        var onAnalyticsEvent = _this.context.onAnalyticsEvent;
        if (!onAnalyticsEvent) return;
        onAnalyticsEvent("".concat(name), data, true);
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getParentAnalyticsData", function (name) {
        var getParentAnalyticsData = _this.context.getParentAnalyticsData;
        var parentData = {};

        if (typeof getParentAnalyticsData === 'function' && _this.props.analyticsId) {
          var analyticsId = _this.props.analyticsId;
          parentData = getParentAnalyticsData("".concat(analyticsId, ".").concat(name), false);
        }

        return parentData;
      });
      return _this;
    }

    (0, _createClass2.default)(WithAnalytics, [{
      key: "UNSAFE_componentWillMount",
      value: function UNSAFE_componentWillMount() {
        this.evaluatedMap = typeof map === 'function' ? map(this.fireAnalyticsEvent) : map;
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        /* eslint-disable no-unused-vars */
        var _this$props2 = this.props,
            analyticsId = _this$props2.analyticsId,
            analyticsData = _this$props2.analyticsData,
            componentProps = (0, _objectWithoutProperties2.default)(_this$props2, ["analyticsId", "analyticsData"]);
        /* eslint-enable no-unused-vars */

        Object.keys(this.evaluatedMap).forEach(function (prop) {
          var handler = _this2.evaluatedMap[prop]; // may be eventName or a function

          var originalProp = componentProps[prop];

          componentProps[prop] = function () {
            if (typeof handler === 'function') {
              handler.apply(void 0, arguments);
            } else {
              _this2.fireAnalyticsEvent(handler);
            }

            if (typeof originalProp === 'function') originalProp.apply(void 0, arguments);
          };
        });
        return _react.default.createElement(WrappedComponent, (0, _extends2.default)({
          fireAnalyticsEvent: this.fireAnalyticsEvent,
          firePrivateAnalyticsEvent: this.privateAnalyticsEvent,
          getParentAnalyticsData: this.getParentAnalyticsData,
          delegateAnalyticsEvent: withDelegation ? this.delegateAnalyticsEvent : undefined,
          analyticsId: analyticsId,
          ref: this.props.innerRef
        }, componentProps));
      }
    }]);
    return WithAnalytics;
  }(_react.Component), (0, _defineProperty2.default)(_class, "displayName", "WithAnalytics(".concat(WrappedComponent.displayName || WrappedComponent.name, ")")), (0, _defineProperty2.default)(_class, "contextTypes", {
    onAnalyticsEvent: _propTypes.default.func,
    getParentAnalyticsData: _propTypes.default.func
  }), (0, _defineProperty2.default)(_class, "defaultProps", {
    analyticsId: defaultProps.analyticsId,
    analyticsData: defaultProps.analyticsData
  }), _temp;
};

var _default = withAnalytics;
exports.default = _default;