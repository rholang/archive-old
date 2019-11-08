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

var _react = _interopRequireWildcard(require("react"));

var _InitialLoading = _interopRequireDefault(require("../styled/InitialLoading"));

var InitialLoading =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(InitialLoading, _PureComponent);

  function InitialLoading() {
    (0, _classCallCheck2.default)(this, InitialLoading);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(InitialLoading).apply(this, arguments));
  }

  (0, _createClass2.default)(InitialLoading, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_InitialLoading.default, {
        "aria-live": "polite",
        role: "status"
      }, this.props.children);
    }
  }]);
  return InitialLoading;
}(_react.PureComponent);

exports.default = InitialLoading;