"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _GlobalNavigationSkeletonItem = _interopRequireDefault(require("./GlobalNavigationSkeletonItem"));

var _primitives = require("./primitives");

var GlobalNavigationSkeleton = function GlobalNavigationSkeleton(props) {
  var dataset = props.dataset,
      theme = props.theme,
      rest = (0, _objectWithoutProperties2.default)(props, ["dataset", "theme"]);
  var wrapperStyles = theme.mode.globalNav();
  return (0, _core.jsx)(_primitives.Container, (0, _extends2.default)({
    styles: wrapperStyles
  }, dataset, rest), (0, _core.jsx)(_primitives.PrimaryItemsList, null, (0, _core.jsx)(_primitives.FirstPrimaryItemWrapper, null, (0, _core.jsx)(_GlobalNavigationSkeletonItem.default, null)), (0, _core.jsx)(_GlobalNavigationSkeletonItem.default, null), (0, _core.jsx)(_GlobalNavigationSkeletonItem.default, null), (0, _core.jsx)(_GlobalNavigationSkeletonItem.default, null)), (0, _core.jsx)(_primitives.SecondaryItemsList, null, (0, _core.jsx)(_GlobalNavigationSkeletonItem.default, null), (0, _core.jsx)(_GlobalNavigationSkeletonItem.default, null), (0, _core.jsx)(_GlobalNavigationSkeletonItem.default, null), (0, _core.jsx)(_GlobalNavigationSkeletonItem.default, null)));
};

GlobalNavigationSkeleton.defaultProps = {
  dataset: {
    'data-testid': 'GlobalNavigationSkeleton'
  }
};
var _default = GlobalNavigationSkeleton;
exports.default = _default;