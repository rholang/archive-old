"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = require("react");

var CohortTracker =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(CohortTracker, _Component);

  function CohortTracker() {
    (0, _classCallCheck2.default)(this, CohortTracker);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CohortTracker).apply(this, arguments));
  }

  (0, _createClass2.default)(CohortTracker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          exposureDetails = _this$props.exposureDetails,
          options = _this$props.options,
          onExposure = _this$props.onExposure;
      onExposure(exposureDetails, options);
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);
  return CohortTracker;
}(_react.Component);

exports.default = CohortTracker;
(0, _defineProperty2.default)(CohortTracker, "displayName", 'CohortTracker');