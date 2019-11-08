"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _react = _interopRequireWildcard(require("react"));

var _constants = require("@atlaskit/theme/constants");

var _SkeletonItem = _interopRequireDefault(require("../SkeletonItem"));

var _theme = require("../../../theme");

var gridSize = (0, _constants.gridSize)();

var modifyStyles = function modifyStyles(defaultStyles) {
  return (0, _objectSpread2.default)({}, defaultStyles, {
    wrapper: (0, _objectSpread2.default)({}, defaultStyles.wrapper, {
      height: "".concat(gridSize * 4.75, "px"),
      paddingLeft: gridSize / 2,
      paddingRight: gridSize / 2
    }),
    before: (0, _objectSpread2.default)({}, defaultStyles.before, {
      height: gridSize * 3,
      marginRight: 0,
      width: gridSize * 3
    })
  });
};

var GlobalNavigationSkeletonItem =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(GlobalNavigationSkeletonItem, _PureComponent);

  function GlobalNavigationSkeletonItem() {
    (0, _classCallCheck2.default)(this, GlobalNavigationSkeletonItem);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(GlobalNavigationSkeletonItem).apply(this, arguments));
  }

  (0, _createClass2.default)(GlobalNavigationSkeletonItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          styleReducer = _this$props.styles,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["styles"]); // We modify the SkeletonItem styles ourselves, then allow the consumer to
      // modify these if they want to.

      var patchedStyles = function patchedStyles(defaultStyles) {
        return styleReducer(modifyStyles(defaultStyles));
      };

      return (0, _core.jsx)(_SkeletonItem.default, (0, _extends2.default)({}, props, {
        styles: patchedStyles
      }));
    }
  }]);
  return GlobalNavigationSkeletonItem;
}(_react.PureComponent);

exports.default = GlobalNavigationSkeletonItem;
(0, _defineProperty2.default)(GlobalNavigationSkeletonItem, "defaultProps", {
  hasBefore: true,
  styles: _theme.styleReducerNoOp
});