"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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
  onAnalyticsEvent: _propTypes.default.func
};

if (process.env.NODE_ENV !== 'production' && !process.env.CI) {
  // eslint-disable-next-line no-console
  console.warn('The @atlaskit/analytics package has been deprecated. Please use the @atlaskit/analytics-next package instead.');
}

var AnalyticsListener =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(AnalyticsListener, _Component);

  function AnalyticsListener() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, AnalyticsListener);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(AnalyticsListener)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onAnalyticsEvent", function (name, data, isPrivate) {
      // Call this component's onEvent method if it's a match
      var _this$props = _this.props,
          onEvent = _this$props.onEvent,
          match = _this$props.match,
          matchPrivate = _this$props.matchPrivate;

      if (matchPrivate === isPrivate && (0, _matchEvent.default)(match, name) && typeof onEvent === 'function') {
        // send a clean data object so it can't be mutated between listeners
        var _eventData = (0, _objectSpread2.default)({}, data);

        onEvent(name, _eventData);
      } // Pass the event up the hierarchy


      var onAnalyticsEvent = _this.context.onAnalyticsEvent;

      if (typeof onAnalyticsEvent === 'function') {
        onAnalyticsEvent(name, data, isPrivate);
      }
    });
    return _this;
  }

  (0, _createClass2.default)(AnalyticsListener, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        onAnalyticsEvent: this.onAnalyticsEvent
      };
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children; // eslint-disable-line react/prop-types

      return _react.default.Children.only(children);
    }
  }]);
  return AnalyticsListener;
}(_react.Component);

(0, _defineProperty2.default)(AnalyticsListener, "defaultProps", {
  match: '*',
  matchPrivate: false
});
(0, _defineProperty2.default)(AnalyticsListener, "contextTypes", ContextTypes);
(0, _defineProperty2.default)(AnalyticsListener, "childContextTypes", ContextTypes);
var _default = AnalyticsListener;
exports.default = _default;