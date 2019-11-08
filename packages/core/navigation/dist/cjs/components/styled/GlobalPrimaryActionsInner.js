"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _sharedVariables = require("../../shared-variables");

var GlobalPrimaryActionsInner = _styledComponents.default.div.withConfig({
  displayName: "GlobalPrimaryActionsInner",
  componentId: "sc-1tc3ewe-0"
})(["\n  box-sizing: border-box;\n  padding: ", "px 0 ", "px 0;\n"], _sharedVariables.gridSize, _sharedVariables.globalPrimaryActions.margin.bottom);

GlobalPrimaryActionsInner.displayName = 'GlobalPrimaryActionsInner';
var _default = GlobalPrimaryActionsInner;
exports.default = _default;