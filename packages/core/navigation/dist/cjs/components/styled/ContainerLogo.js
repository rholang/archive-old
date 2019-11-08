"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _sharedVariables = require("../../shared-variables");

var ContainerLogo = _styledComponents.default.div.withConfig({
  displayName: "ContainerLogo",
  componentId: "tqeq8j-0"
})(["\n  height: ", "px;\n  padding: ", "px ", "px;\n"], _sharedVariables.gridSize * 4, _sharedVariables.gridSize * 1.5, _sharedVariables.gridSize / 2);

ContainerLogo.displayName = 'ContainerLogo';
var _default = ContainerLogo;
exports.default = _default;