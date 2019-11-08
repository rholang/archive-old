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

var _ResizerButtonInner = _interopRequireDefault(require("../styled/ResizerButtonInner"));

var ResizerButton =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(ResizerButton, _PureComponent);

  function ResizerButton() {
    (0, _classCallCheck2.default)(this, ResizerButton);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ResizerButton).apply(this, arguments));
  }

  (0, _createClass2.default)(ResizerButton, [{
    key: "render",
    // Note: we always render the ResizerButtonInner here (instead of returning null immediately
    // when isVisible = false) because we want the user to be able to tab to the button always.
    value: function render() {
      return _react.default.createElement(_ResizerButtonInner.default, {
        "aria-label": this.props.resizerButtonLabel,
        "aria-expanded": !this.props.isPointingRight,
        isPointingRight: this.props.isPointingRight,
        onClick: this.props.onClick,
        isVisible: this.props.isVisible,
        onMouseDown: function onMouseDown(e) {
          return e.preventDefault();
        }
      });
    }
  }]);
  return ResizerButton;
}(_react.PureComponent);

exports.default = ResizerButton;
(0, _defineProperty2.default)(ResizerButton, "defaultProps", {
  isPointingRight: false,
  isVisible: false,
  resizerButtonLabel: 'Expand or collapse the navigation [ (left bracket)'
});