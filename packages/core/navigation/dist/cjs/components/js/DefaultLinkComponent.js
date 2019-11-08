"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var DefaultLinkComponent =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(DefaultLinkComponent, _PureComponent);

  function DefaultLinkComponent() {
    (0, _classCallCheck2.default)(this, DefaultLinkComponent);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DefaultLinkComponent).apply(this, arguments));
  }

  (0, _createClass2.default)(DefaultLinkComponent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          href = _this$props.href,
          onClick = _this$props.onClick,
          onMouseDown = _this$props.onMouseDown,
          onMouseEnter = _this$props.onMouseEnter,
          onMouseLeave = _this$props.onMouseLeave,
          tabIndex = _this$props.tabIndex,
          appearance = _this$props.appearance,
          isSelected = _this$props.isSelected,
          otherProps = (0, _objectWithoutProperties2.default)(_this$props, ["children", "className", "href", "onClick", "onMouseDown", "onMouseEnter", "onMouseLeave", "tabIndex", "appearance", "isSelected"]);
      return href ? _react.default.createElement(_reactRouterDom.Link, (0, _extends2.default)({
        className: className,
        to: href
      }, otherProps), children) : children;
    }
  }]);
  return DefaultLinkComponent;
}(_react.PureComponent);

exports.default = DefaultLinkComponent;