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

var _DrawerBackIconInner = _interopRequireDefault(require("../styled/DrawerBackIconInner"));

var _DrawerBackIconOuter = _interopRequireDefault(require("../styled/DrawerBackIconOuter"));

var DrawerBackIcon =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(DrawerBackIcon, _PureComponent);

  function DrawerBackIcon() {
    (0, _classCallCheck2.default)(this, DrawerBackIcon);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DrawerBackIcon).apply(this, arguments));
  }

  (0, _createClass2.default)(DrawerBackIcon, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          isVisible = _this$props.isVisible;
      return _react.default.createElement(_DrawerBackIconOuter.default, null, _react.default.createElement(_DrawerBackIconInner.default, {
        isVisible: isVisible
      }, children));
    }
  }]);
  return DrawerBackIcon;
}(_react.PureComponent);

exports.default = DrawerBackIcon;
(0, _defineProperty2.default)(DrawerBackIcon, "defaultProps", {
  isVisible: false
});