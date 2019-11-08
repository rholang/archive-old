"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

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

var _matchEvent = _interopRequireDefault(require("./matchEvent"));

/* eslint-disable react/sort-comp */
var ContextTypes = {
  onAnalyticsEvent: _propTypes.default.func,
  getParentAnalyticsData: _propTypes.default.func
};

if (process.env.NODE_ENV !== 'production' && !process.env.CI) {
  // eslint-disable-next-line no-console
  console.warn('The @atlaskit/analytics package has been deprecated. Please use the @atlaskit/analytics-next package instead.');
}

var AnalyticsDecorator =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(AnalyticsDecorator, _Component);

  function AnalyticsDecorator() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, AnalyticsDecorator);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(AnalyticsDecorator)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getDecoratedAnalyticsData", function (name, srcData, isPrivate) {
      // Decorate the event data if this decorator matches the event name
      var _this$props = _this.props,
          data = _this$props.data,
          getData = _this$props.getData,
          match = _this$props.match,
          matchPrivate = _this$props.matchPrivate;
      var decoratedData = (0, _objectSpread2.default)({}, srcData);

      if (matchPrivate === isPrivate && (0, _matchEvent.default)(match, name)) {
        if ((0, _typeof2.default)(data) === 'object') {
          Object.assign(decoratedData, data);
        }

        if (typeof getData === 'function') {
          Object.assign(decoratedData, getData(name, decoratedData));
        }
      }

      return decoratedData;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onAnalyticsEvent", function (name, srcData, isPrivate) {
      // Check there is a listener to pass the event to, otherwise there's no need
      // to do any of this work
      var onAnalyticsEvent = _this.context.onAnalyticsEvent;
      if (typeof onAnalyticsEvent !== 'function') return;

      var decoratedData = _this.getDecoratedAnalyticsData(name, srcData, isPrivate); // Pass the decorated event data to the next listener up the hierarchy


      onAnalyticsEvent(name, decoratedData, isPrivate);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getParentAnalyticsData", function (name, isPrivate) {
      var parentData = _this.getDecoratedAnalyticsData(name, {}, isPrivate); // Get any analytics data from any decorators up the hierarchy


      var getParentAnalyticsData = _this.context.getParentAnalyticsData;

      if (typeof getParentAnalyticsData === 'function') {
        Object.assign(parentData, getParentAnalyticsData(name, isPrivate));
      }

      return parentData;
    });
    return _this;
  }

  (0, _createClass2.default)(AnalyticsDecorator, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        onAnalyticsEvent: this.onAnalyticsEvent,
        getParentAnalyticsData: this.getParentAnalyticsData
      };
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children; // eslint-disable-line react/prop-types

      return _react.default.Children.only(children);
    }
  }]);
  return AnalyticsDecorator;
}(_react.Component);

(0, _defineProperty2.default)(AnalyticsDecorator, "defaultProps", {
  match: '*',
  matchPrivate: false
});
(0, _defineProperty2.default)(AnalyticsDecorator, "contextTypes", ContextTypes);
(0, _defineProperty2.default)(AnalyticsDecorator, "childContextTypes", ContextTypes);
var _default = AnalyticsDecorator;
exports.default = _default;