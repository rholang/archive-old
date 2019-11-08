"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _styled = require("../styled");

var _withColumnWidth = _interopRequireDefault(require("./withColumnWidth"));

var Cell =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Cell, _Component);

  function Cell() {
    (0, _classCallCheck2.default)(this, Cell);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Cell).apply(this, arguments));
  }

  (0, _createClass2.default)(Cell, [{
    key: "render",
    value: function render() {
      var props = this.props;
      return _react.default.createElement(_styled.Cell, (0, _extends2.default)({
        role: "gridcell"
      }, props), _react.default.createElement(_styled.OverflowContainer, {
        singleLine: props.singleLine
      }, props.children));
    }
  }]);
  return Cell;
}(_react.Component);

var _default = (0, _withColumnWidth.default)(Cell);

exports.default = _default;