"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _sharedVariables = require("../../shared-variables");

var SpacerInner = _styledComponents.default.div.withConfig({
  displayName: "SpacerInner",
  componentId: "sc-1x4fjuo-0"
})(["\n  transition: ", ";\n"], function (_ref) {
  var shouldAnimate = _ref.shouldAnimate;
  return shouldAnimate ? "width ".concat(_sharedVariables.resizeAnimationTime) : 'none';
});

SpacerInner.displayName = 'SpacerInner';
var _default = SpacerInner;
exports.default = _default;