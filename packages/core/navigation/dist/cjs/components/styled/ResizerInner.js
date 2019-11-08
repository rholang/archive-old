"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _sharedVariables = require("../../shared-variables");

var ResizerInner = _styledComponents.default.div.withConfig({
  displayName: "ResizerInner",
  componentId: "sc-1hg4s68-0"
})(["\n  cursor: ew-resize;\n  height: 100%;\n\n  /* position: absolute so that it will not effect the width of the navigation */\n  position: absolute;\n\n  right: -", "px;\n  width: ", "px;\n\n  &::before {\n    content: '';\n    height: 100%;\n    left: -", "px;\n    position: absolute;\n    transition: background-color ", "ms ease-in-out\n      ", "ms;\n    width: ", "px;\n  }\n  &:hover::before {\n    background: ", ";\n  }\n"], _sharedVariables.resizerClickableWidth, _sharedVariables.resizerClickableWidth, _sharedVariables.resizerVisibleWidth / 2, _sharedVariables.animationTimeUnitless + 100, _sharedVariables.animationTimeUnitless, _sharedVariables.resizerVisibleWidth, _sharedVariables.unthemedColors.resizer);

ResizerInner.displayName = 'ResizerInner';
var _default = ResizerInner;
exports.default = _default;