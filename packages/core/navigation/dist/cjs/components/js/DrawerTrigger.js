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

var _GlobalItem = _interopRequireDefault(require("./GlobalItem"));

var _DrawerTriggerInner = _interopRequireDefault(require("../styled/DrawerTriggerInner"));

var DrawerTrigger =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(DrawerTrigger, _PureComponent);

  function DrawerTrigger() {
    (0, _classCallCheck2.default)(this, DrawerTrigger);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DrawerTrigger).apply(this, arguments));
  }

  (0, _createClass2.default)(DrawerTrigger, [{
    key: "render",
    value: function render() {
      if (this.props.children == null) return null;
      return _react.default.createElement(_DrawerTriggerInner.default, null, _react.default.createElement(_GlobalItem.default, {
        role: "button",
        "aria-haspopup": "true",
        onClick: this.props.onActivate,
        onMouseDown: function onMouseDown(e) {
          return e.preventDefault();
        },
        size: "medium"
      }, this.props.children));
    }
  }]);
  return DrawerTrigger;
}(_react.PureComponent);

exports.default = DrawerTrigger;
(0, _defineProperty2.default)(DrawerTrigger, "defaultProps", {
  onActivate: function onActivate() {}
});