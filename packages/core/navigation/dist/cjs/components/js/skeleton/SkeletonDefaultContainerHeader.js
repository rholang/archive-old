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

var _avatar = require("@atlaskit/avatar");

var _ToggleWhenCollapsed = require("./ToggleWhenCollapsed");

var _SkeletonContainerHeaderText = _interopRequireDefault(require("./styled/SkeletonContainerHeaderText"));

var _SkeletonDefaultContainerHeaderInner = _interopRequireDefault(require("./styled/SkeletonDefaultContainerHeaderInner"));

var SkeletonDefaultContainerHeader =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(SkeletonDefaultContainerHeader, _Component);

  function SkeletonDefaultContainerHeader() {
    (0, _classCallCheck2.default)(this, SkeletonDefaultContainerHeader);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SkeletonDefaultContainerHeader).apply(this, arguments));
  }

  (0, _createClass2.default)(SkeletonDefaultContainerHeader, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_SkeletonDefaultContainerHeaderInner.default, {
        isAvatarHidden: this.props.isAvatarHidden
      }, !this.props.isAvatarHidden && _react.default.createElement(_avatar.Skeleton, {
        appearance: "square",
        size: "large",
        weight: "strong"
      }), _react.default.createElement(_ToggleWhenCollapsed.HiddenWhenCollapsed, {
        isCollapsed: this.props.isCollapsed
      }, _react.default.createElement(_SkeletonContainerHeaderText.default, {
        isAvatarHidden: this.props.isAvatarHidden
      })));
    }
  }]);
  return SkeletonDefaultContainerHeader;
}(_react.Component);

exports.default = SkeletonDefaultContainerHeader;
(0, _defineProperty2.default)(SkeletonDefaultContainerHeader, "defaultProps", {
  isCollapsed: false,
  isAvatarHidden: false
});