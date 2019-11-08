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

/* eslint-disable react/sort-comp */
var ContextTypes = {
  onAnalyticsEvent: _propTypes.default.func
};

if (process.env.NODE_ENV !== 'production' && !process.env.CI) {
  // eslint-disable-next-line no-console
  console.warn('The @atlaskit/analytics package has been deprecated. Please use the @atlaskit/analytics-next package instead.');
}

var AnalyticsDelegate =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(AnalyticsDelegate, _Component);

  function AnalyticsDelegate() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, AnalyticsDelegate);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(AnalyticsDelegate)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onAnalyticsEvent", function (name, data, isPrivate) {
      var delegateAnalyticsEvent = _this.props.delegateAnalyticsEvent; // send a clean data object so it can't be mutated between listeners

      var eventData = (0, _objectSpread2.default)({}, data);

      if (delegateAnalyticsEvent) {
        delegateAnalyticsEvent(name, eventData, isPrivate);
      } // Pass the event up the hierarchy


      var onAnalyticsEvent = _this.context.onAnalyticsEvent;

      if (typeof onAnalyticsEvent === 'function') {
        onAnalyticsEvent(name, data, isPrivate);
      }
    });
    return _this;
  }

  (0, _createClass2.default)(AnalyticsDelegate, [{
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
  return AnalyticsDelegate;
}(_react.Component);

(0, _defineProperty2.default)(AnalyticsDelegate, "contextTypes", ContextTypes);
(0, _defineProperty2.default)(AnalyticsDelegate, "childContextTypes", ContextTypes);
var _default = AnalyticsDelegate;
exports.default = _default;