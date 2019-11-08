"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _react = _interopRequireDefault(require("react"));

var _theme = require("../../../theme");

var _GlobalNavigationSkeleton = _interopRequireDefault(require("./GlobalNavigationSkeleton"));

var GlobalNavigationSkeletonWithGlobalTheme = (0, _theme.withGlobalTheme)(_GlobalNavigationSkeleton.default);

var GlobalNavigationSkeleton = function GlobalNavigationSkeleton(props) {
  return (0, _core.jsx)(_theme.ThemeProvider, {
    theme: function theme(ancestorTheme) {
      return (0, _objectSpread2.default)({
        mode: _theme.light
      }, ancestorTheme, {
        context: 'product'
      });
    }
  }, (0, _core.jsx)(GlobalNavigationSkeletonWithGlobalTheme, props));
};

var _default = GlobalNavigationSkeleton;
exports.default = _default;