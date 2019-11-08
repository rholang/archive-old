"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _sharedVariables = require("../../../../shared-variables");

var _util = require("../../../../theme/util");

var SkeletonGlobalNavigationInner = _styledComponents.default.div.withConfig({
  displayName: "SkeletonGlobalNavigationInner",
  componentId: "sc-13fziax-0"
})(["\n  height: 100%;\n  width: ", "px;\n  color: ", ";\n  background-color: ", ";\n"], (0, _sharedVariables.containerClosedWidth)(), function (_ref) {
  var theme = _ref.theme;
  return (0, _util.getProvided)(theme).text;
}, function (_ref2) {
  var theme = _ref2.theme;
  return (0, _util.getProvided)(theme).background.primary;
});

SkeletonGlobalNavigationInner.displayName = 'SkeletonGlobalNavigationInner';
var _default = SkeletonGlobalNavigationInner;
exports.default = _default;