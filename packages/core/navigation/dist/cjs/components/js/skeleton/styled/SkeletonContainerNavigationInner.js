"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _sharedVariables = require("../../../../shared-variables");

var _util = require("../../../../theme/util");

var SkeletonContainerNavigationInner = _styledComponents.default.div.withConfig({
  displayName: "SkeletonContainerNavigationInner",
  componentId: "sc-1qt5vek-0"
})(["\n  height: 100%;\n  width: ", "px;\n  color: ", ";\n  background-color: ", ";\n"], function (_ref) {
  var isCollapsed = _ref.isCollapsed;
  return isCollapsed ? (0, _sharedVariables.containerClosedWidth)() : _sharedVariables.containerOpenWidth;
}, function (_ref2) {
  var theme = _ref2.theme;
  return (0, _util.getProvided)(theme).text;
}, function (_ref3) {
  var theme = _ref3.theme;

  var _getProvided = (0, _util.getProvided)(theme),
      background = _getProvided.background;

  return background.secondary || background.primary;
});

SkeletonContainerNavigationInner.displayName = 'SkeletonContainerNavigationInner';
var _default = SkeletonContainerNavigationInner;
exports.default = _default;