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

var _SkeletonContainerItem = _interopRequireDefault(require("./SkeletonContainerItem"));

var _SkeletonNavigationItems = _interopRequireDefault(require("./styled/SkeletonNavigationItems"));

var SkeletonContainerItems =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(SkeletonContainerItems, _Component);

  function SkeletonContainerItems() {
    (0, _classCallCheck2.default)(this, SkeletonContainerItems);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SkeletonContainerItems).apply(this, arguments));
  }

  (0, _createClass2.default)(SkeletonContainerItems, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isCollapsed = _this$props.isCollapsed,
          itemTextWidth = _this$props.itemTextWidth;
      return _react.default.createElement(_SkeletonNavigationItems.default, null, _react.default.createElement(_SkeletonContainerItem.default, {
        isCollapsed: isCollapsed,
        itemTextWidth: itemTextWidth
      }), _react.default.createElement(_SkeletonContainerItem.default, {
        isCollapsed: isCollapsed,
        itemTextWidth: itemTextWidth
      }), _react.default.createElement(_SkeletonContainerItem.default, {
        isCollapsed: isCollapsed,
        itemTextWidth: itemTextWidth
      }), _react.default.createElement(_SkeletonContainerItem.default, {
        isCollapsed: isCollapsed,
        itemTextWidth: itemTextWidth
      }), _react.default.createElement(_SkeletonContainerItem.default, {
        isCollapsed: isCollapsed,
        itemTextWidth: itemTextWidth
      }));
    }
  }]);
  return SkeletonContainerItems;
}(_react.Component);

exports.default = SkeletonContainerItems;
(0, _defineProperty2.default)(SkeletonContainerItems, "defaultProps", {
  isCollapsed: false
});