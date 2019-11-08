"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

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

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _sharedVariables = require("./shared-variables");

var OverflowHeightReportEnabler =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(OverflowHeightReportEnabler, _Component);

  function OverflowHeightReportEnabler() {
    (0, _classCallCheck2.default)(this, OverflowHeightReportEnabler);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(OverflowHeightReportEnabler).apply(this, arguments));
  }

  (0, _createClass2.default)(OverflowHeightReportEnabler, [{
    key: "getChildContext",
    value: function getChildContext() {
      return (0, _defineProperty3.default)({}, _sharedVariables.shouldReportItemHeight, true);
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, this.props.children);
    }
  }]);
  return OverflowHeightReportEnabler;
}(_react.Component);

exports.default = OverflowHeightReportEnabler;
(0, _defineProperty3.default)(OverflowHeightReportEnabler, "childContextTypes", (0, _defineProperty3.default)({}, _sharedVariables.shouldReportItemHeight, _propTypes.default.bool));