"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _sharedVariables = require("../../../../shared-variables");

var SkeletonNavigationOuter = _styledComponents.default.div.withConfig({
  displayName: "SkeletonNavigationOuter",
  componentId: "yx1q7o-0"
})(["\n  width: ", "px;\n  height: 100vh;\n"], function (_ref) {
  var isCollapsed = _ref.isCollapsed;
  return isCollapsed ? (0, _sharedVariables.containerClosedWidth)() : _sharedVariables.standardOpenWidth;
});

SkeletonNavigationOuter.displayName = 'SkeletonNavigationOuter';
var _default = SkeletonNavigationOuter;
exports.default = _default;