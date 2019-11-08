"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ScreenTrackerBase = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = require("react");

var _analyticsNext = require("@atlaskit/analytics-next");

var _constants = require("../../constants");

/** Fires a screen event when the screen becomes visible */
var ScreenTrackerBase =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(ScreenTrackerBase, _Component);

  function ScreenTrackerBase() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, ScreenTrackerBase);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ScreenTrackerBase)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "fireScreenEvent", function () {
      var _this$props = _this.props,
          name = _this$props.name,
          createAnalyticsEvent = _this$props.createAnalyticsEvent;
      createAnalyticsEvent({
        eventType: 'screen',
        name: name
      }).fire(_constants.NAVIGATION_CHANNEL);
    });
    return _this;
  }

  (0, _createClass2.default)(ScreenTrackerBase, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.isVisible) {
        this.fireScreenEvent();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!prevProps.isVisible && this.props.isVisible) {
        this.fireScreenEvent();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);
  return ScreenTrackerBase;
}(_react.Component);

exports.ScreenTrackerBase = ScreenTrackerBase;

var _default = (0, _analyticsNext.withAnalyticsEvents)()(ScreenTrackerBase);

exports.default = _default;