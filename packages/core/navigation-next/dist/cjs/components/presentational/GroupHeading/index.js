"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _theme = require("../../../theme");

var GroupHeadingPrimitive = function GroupHeadingPrimitive(_ref) {
  var After = _ref.after,
      children = _ref.children,
      theme = _ref.theme;
  var mode = theme.mode,
      context = theme.context;
  var styles = mode.heading()[context];
  return (0, _core.jsx)("div", {
    css: styles.headingBase
  }, (0, _core.jsx)("div", {
    css: styles.textWrapper
  }, children), !!After && (0, _core.jsx)("div", {
    css: styles.afterWrapper
  }, (0, _core.jsx)(After, null)));
};

var GroupHeadingPrimitiveWithTheme = (0, _theme.withContentTheme)(GroupHeadingPrimitive); // TODO: This component is only defined to pass correct props to our prop docs
// as we require classes for them. Remove once we fix this on the prop doc level.

var GroupHeading =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(GroupHeading, _Component);

  function GroupHeading() {
    (0, _classCallCheck2.default)(this, GroupHeading);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(GroupHeading).apply(this, arguments));
  }

  (0, _createClass2.default)(GroupHeading, [{
    key: "render",
    value: function render() {
      return (0, _core.jsx)(GroupHeadingPrimitiveWithTheme, this.props);
    }
  }]);
  return GroupHeading;
}(_react.Component);

exports.default = GroupHeading;