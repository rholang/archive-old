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

var _SkeletonNavigationOuter = _interopRequireDefault(require("./styled/SkeletonNavigationOuter"));

var _SkeletonNavigationInner = _interopRequireDefault(require("./styled/SkeletonNavigationInner"));

var _SkeletonGlobalNavigation = _interopRequireDefault(require("./SkeletonGlobalNavigation"));

var _SkeletonContainerNavigation = _interopRequireDefault(require("./SkeletonContainerNavigation"));

var _SkeletonDefaultContainerHeader = _interopRequireDefault(require("./SkeletonDefaultContainerHeader"));

var _ToggleWhenCollapsed = require("./ToggleWhenCollapsed");

var _util = require("../../../theme/util");

var SkeletonNavigation =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(SkeletonNavigation, _Component);

  function SkeletonNavigation() {
    (0, _classCallCheck2.default)(this, SkeletonNavigation);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SkeletonNavigation).apply(this, arguments));
  }

  (0, _createClass2.default)(SkeletonNavigation, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isCollapsed = _this$props.isCollapsed,
          globalTheme = _this$props.globalTheme,
          containerTheme = _this$props.containerTheme,
          containerHeaderComponent = _this$props.containerHeaderComponent;
      return _react.default.createElement(_SkeletonNavigationOuter.default, {
        isCollapsed: isCollapsed
      }, _react.default.createElement(_SkeletonNavigationInner.default, null, _react.default.createElement(_ToggleWhenCollapsed.HiddenWhenCollapsed, {
        isCollapsed: isCollapsed
      }, _react.default.createElement(_SkeletonGlobalNavigation.default, {
        theme: (0, _util.defaultGlobalTheme)(globalTheme)
      })), _react.default.createElement(_SkeletonContainerNavigation.default, {
        theme: (0, _util.defaultContainerTheme)(containerTheme),
        isCollapsed: isCollapsed,
        containerHeaderComponent: containerHeaderComponent
      })));
    }
  }]);
  return SkeletonNavigation;
}(_react.Component);

exports.default = SkeletonNavigation;
(0, _defineProperty2.default)(SkeletonNavigation, "defaultProps", {
  isCollapsed: false,
  containerHeaderComponent: _SkeletonDefaultContainerHeader.default
});