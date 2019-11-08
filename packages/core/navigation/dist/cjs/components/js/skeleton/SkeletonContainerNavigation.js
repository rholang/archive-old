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

var _util = require("../../../theme/util");

var _SkeletonGlobalTopItems = _interopRequireDefault(require("./SkeletonGlobalTopItems"));

var _SkeletonGlobalBottomItems = _interopRequireDefault(require("./SkeletonGlobalBottomItems"));

var _SkeletonContainerItems = _interopRequireDefault(require("./SkeletonContainerItems"));

var _ToggleWhenCollapsed = require("./ToggleWhenCollapsed");

var _SkeletonContainerNavigationInner = _interopRequireDefault(require("./styled/SkeletonContainerNavigationInner"));

var _SkeletonNavigationContentOuter = _interopRequireDefault(require("./styled/SkeletonNavigationContentOuter"));

var _SkeletonContainerHeaderWrapper = _interopRequireDefault(require("./styled/SkeletonContainerHeaderWrapper"));

var SkeletonContainerNavigation =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(SkeletonContainerNavigation, _Component);

  function SkeletonContainerNavigation() {
    (0, _classCallCheck2.default)(this, SkeletonContainerNavigation);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SkeletonContainerNavigation).apply(this, arguments));
  }

  (0, _createClass2.default)(SkeletonContainerNavigation, [{
    key: "render",
    value: function render() {
      var ContainerHeaderComponent = this.props.containerHeaderComponent;
      var _this$props = this.props,
          theme = _this$props.theme,
          isCollapsed = _this$props.isCollapsed;
      return _react.default.createElement(_util.WithRootTheme, {
        provided: theme,
        isCollapsed: isCollapsed
      }, _react.default.createElement(_SkeletonContainerNavigationInner.default, {
        isCollapsed: isCollapsed
      }, _react.default.createElement(_SkeletonNavigationContentOuter.default, null, _react.default.createElement("div", null, _react.default.createElement(_ToggleWhenCollapsed.ShownWhenCollapsed, {
        isCollapsed: isCollapsed
      }, _react.default.createElement(_SkeletonGlobalTopItems.default, null)), _react.default.createElement(_SkeletonContainerHeaderWrapper.default, null, _react.default.createElement(ContainerHeaderComponent, {
        isCollapsed: isCollapsed
      })), _react.default.createElement(_SkeletonContainerItems.default, {
        isCollapsed: isCollapsed
      })), _react.default.createElement(_ToggleWhenCollapsed.ShownWhenCollapsed, {
        isCollapsed: isCollapsed
      }, _react.default.createElement(_SkeletonGlobalBottomItems.default, null)))));
    }
  }]);
  return SkeletonContainerNavigation;
}(_react.Component);

exports.default = SkeletonContainerNavigation;
(0, _defineProperty2.default)(SkeletonContainerNavigation, "defaultProps", {
  isCollapsed: false
});