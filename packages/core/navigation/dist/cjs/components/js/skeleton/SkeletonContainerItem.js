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

var _icon = require("@atlaskit/icon");

var _ToggleWhenCollapsed = require("./ToggleWhenCollapsed");

var _SkeletonContainerItemWrapper = _interopRequireDefault(require("./styled/SkeletonContainerItemWrapper"));

var _SkeletonContainerItemText = _interopRequireDefault(require("./styled/SkeletonContainerItemText"));

var _SkeletonIconWrapper = _interopRequireDefault(require("./styled/SkeletonIconWrapper"));

var SkeletonContainerItem =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(SkeletonContainerItem, _Component);

  function SkeletonContainerItem() {
    (0, _classCallCheck2.default)(this, SkeletonContainerItem);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SkeletonContainerItem).apply(this, arguments));
  }

  (0, _createClass2.default)(SkeletonContainerItem, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_SkeletonContainerItemWrapper.default, null, _react.default.createElement(_SkeletonIconWrapper.default, null, _react.default.createElement(_icon.Skeleton, null)), _react.default.createElement(_ToggleWhenCollapsed.HiddenWhenCollapsed, {
        isCollapsed: this.props.isCollapsed
      }, _react.default.createElement(_SkeletonContainerItemText.default, {
        textWidth: this.props.itemTextWidth
      })));
    }
  }]);
  return SkeletonContainerItem;
}(_react.Component);

exports.default = SkeletonContainerItem;
(0, _defineProperty2.default)(SkeletonContainerItem, "defaultProps", {
  isCollapsed: false
});