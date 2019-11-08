"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _sharedVariables = require("../../shared-variables");

var DrawerContent = _styledComponents.default.div.withConfig({
  displayName: "DrawerContent",
  componentId: "sc-1rgvzcl-0"
})(["\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  padding: 0 ", "px;\n  width: 100%;\n  overflow-y: auto;\n"], _sharedVariables.layout.padding.side);

DrawerContent.displayName = 'DrawerContent';
var _default = DrawerContent;
exports.default = _default;