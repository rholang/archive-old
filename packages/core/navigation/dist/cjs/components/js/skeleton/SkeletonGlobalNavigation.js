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

var _SkeletonGlobalNavigationInner = _interopRequireDefault(require("./styled/SkeletonGlobalNavigationInner"));

var _SkeletonNavigationContentOuter = _interopRequireDefault(require("./styled/SkeletonNavigationContentOuter"));

var SkeletonGlobalNavigation =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(SkeletonGlobalNavigation, _Component);

  function SkeletonGlobalNavigation() {
    (0, _classCallCheck2.default)(this, SkeletonGlobalNavigation);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SkeletonGlobalNavigation).apply(this, arguments));
  }

  (0, _createClass2.default)(SkeletonGlobalNavigation, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_util.WithRootTheme, {
        provided: this.props.theme,
        isCollapsed: this.props.isCollapsed
      }, _react.default.createElement(_SkeletonGlobalNavigationInner.default, null, _react.default.createElement(_SkeletonNavigationContentOuter.default, null, _react.default.createElement(_SkeletonGlobalTopItems.default, null), _react.default.createElement(_SkeletonGlobalBottomItems.default, null))));
    }
  }]);
  return SkeletonGlobalNavigation;
}(_react.Component);

exports.default = SkeletonGlobalNavigation;
(0, _defineProperty2.default)(SkeletonGlobalNavigation, "defaultProps", {
  isCollapsed: false
});