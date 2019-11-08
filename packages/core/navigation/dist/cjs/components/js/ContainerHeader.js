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

var _ContainerHeaderWrapper = _interopRequireDefault(require("../styled/ContainerHeaderWrapper"));

var _sharedVariables = require("../../shared-variables");

var ContainerHeader =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(ContainerHeader, _PureComponent);

  function ContainerHeader() {
    (0, _classCallCheck2.default)(this, ContainerHeader);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ContainerHeader).apply(this, arguments));
  }

  (0, _createClass2.default)(ContainerHeader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          iconOffset = _this$props.iconOffset,
          isFullWidth = _this$props.isFullWidth,
          isInDrawer = _this$props.isInDrawer;
      return _react.default.createElement(_ContainerHeaderWrapper.default, {
        isInDrawer: isInDrawer,
        iconOffset: iconOffset,
        isFullWidth: isFullWidth
      }, this.props.children);
    }
  }]);
  return ContainerHeader;
}(_react.PureComponent);

exports.default = ContainerHeader;
(0, _defineProperty2.default)(ContainerHeader, "defaultProps", {
  iconOffset: _sharedVariables.globalItemSizes.medium,
  isInDrawer: false
});