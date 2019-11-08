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

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _SpacerInner = _interopRequireDefault(require("../styled/SpacerInner"));

var Spacer =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Spacer, _PureComponent);

  function Spacer() {
    (0, _classCallCheck2.default)(this, Spacer);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Spacer).apply(this, arguments));
  }

  (0, _createClass2.default)(Spacer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          innerRef = _this$props.innerRef,
          onTransitionEnd = _this$props.onTransitionEnd,
          shouldAnimate = _this$props.shouldAnimate,
          width = _this$props.width;
      return _react.default.createElement(_SpacerInner.default, {
        innerRef: innerRef,
        onTransitionEnd: onTransitionEnd,
        shouldAnimate: shouldAnimate,
        style: {
          width: width
        }
      }, children);
    }
  }]);
  return Spacer;
}(_react.PureComponent);

exports.default = Spacer;
(0, _defineProperty2.default)(Spacer, "defaultProps", {
  shouldAnimate: false,
  width: 0
});