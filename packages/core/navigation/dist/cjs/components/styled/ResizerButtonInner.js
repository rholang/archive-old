"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _sharedVariables = require("../../shared-variables");

var _mixins = require("../../utils/mixins");

var toggleButtonHeight = _sharedVariables.gridSize * 4.5;
var toggleArrowHeight = _sharedVariables.gridSize * 2;
var toggleArrowWidth = 2;
var toggleArrowTopVerticalOffset = (toggleButtonHeight - toggleArrowHeight) / 2;
var toggleArrowBottomVerticalOffset = toggleArrowTopVerticalOffset - toggleArrowWidth + toggleArrowHeight / 2;
var opacityTransition = "opacity ".concat(_sharedVariables.animationTimeUnitless + 100, "ms ease-in-out ").concat(_sharedVariables.animationTimeUnitless, "ms");
var transformTransition = "transform ".concat(_sharedVariables.animationTime, " ease-in-out");

var ResizerButtonInner = _styledComponents.default.button.withConfig({
  displayName: "ResizerButtonInner",
  componentId: "sc-3k1heu-0"
})(["\n  position: relative;\n  top: calc(50% - ", "px);\n  height: ", "px;\n  background: none;\n  border: none;\n  color: transparent;\n  width: ", "px;\n  left: -", "px;\n  cursor: pointer;\n\n  &:focus {\n    ", ";\n  }\n\n  &::before,\n  &::after {\n    content: '';\n    background-color: ", ";\n    width: ", "px;\n    border-radius: ", "px;\n    height: ", "px;\n    position: absolute;\n    left: 8px;\n    opacity: ", ";\n    transition: ", ", ", ";\n    transform: rotate(0deg);\n  }\n\n  &::before {\n    top: ", "px;\n    transform-origin: ", "px\n      ", "px;\n  }\n\n  &::after {\n    top: ", "px;\n    transform-origin: ", "px ", "px;\n  }\n\n  &:hover,\n  &:focus {\n    &::before,\n    &::after {\n      opacity: 1;\n    }\n    &::before {\n      transform: rotate(\n        ", "\n      );\n    }\n    &::after {\n      transform: rotate(\n        ", "\n      );\n    }\n  }\n"], toggleButtonHeight / 2, toggleButtonHeight, _sharedVariables.gridSize * 3, _sharedVariables.resizerVisibleWidth / 2, (0, _mixins.focusOutline)(_sharedVariables.unthemedColors.resizer), _sharedVariables.unthemedColors.resizer, toggleArrowWidth, toggleArrowHeight, toggleArrowHeight / 2, function (props) {
  return props.isVisible ? 1 : 0;
}, transformTransition, opacityTransition, toggleArrowTopVerticalOffset, toggleArrowWidth / 2, toggleArrowHeight / 2 - toggleArrowWidth / 2, toggleArrowBottomVerticalOffset, toggleArrowWidth / 2, toggleArrowWidth / 2, function (_ref) {
  var isPointingRight = _ref.isPointingRight;
  return isPointingRight ? '-40deg' : '40deg';
}, function (_ref2) {
  var isPointingRight = _ref2.isPointingRight;
  return isPointingRight ? '40deg' : '-40deg';
});

ResizerButtonInner.displayName = 'ResizerButtonInner';
var _default = ResizerButtonInner;
exports.default = _default;