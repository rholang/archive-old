"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _sharedVariables = require("../../shared-variables");

var DrawerTriggerInner = _styledComponents.default.div.withConfig({
  displayName: "DrawerTriggerInner",
  componentId: "sc-91qirr-0"
})(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n  background: none;\n  border: none;\n  border-radius: 50%;\n  padding: 0;\n  width: ", "px;\n  height: ", "px;\n  outline: none;\n"], _sharedVariables.gridSize * 5, _sharedVariables.gridSize * 5);

DrawerTriggerInner.displayName = 'DrawerTriggerInner';
var _default = DrawerTriggerInner;
exports.default = _default;