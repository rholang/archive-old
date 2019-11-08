"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _sharedVariables = require("../../shared-variables");

var OverflowDropdownButtonWrapper = _styledComponents.default.div.withConfig({
  displayName: "OverflowDropdownButtonWrapper",
  componentId: "rkt9ls-0"
})(["\n  width: ", "px;\n  text-align: center;\n"], _sharedVariables.gridSize * 6);

OverflowDropdownButtonWrapper.displayName = 'OverflowDropdownButtonWrapper';
var _default = OverflowDropdownButtonWrapper;
exports.default = _default;