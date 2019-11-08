"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _sharedVariables = require("../../shared-variables");

var DrawerBackIconInner = _styledComponents.default.div.withConfig({
  displayName: "DrawerBackIconInner",
  componentId: "sc-10wih1j-0"
})(["\n  align-items: center;\n  display: flex;\n  transform: ", ";\n  transition: transform 220ms;\n"], function (_ref) {
  var isVisible = _ref.isVisible;
  return isVisible ? 'translateX(0)' : "translateX(".concat(-_sharedVariables.gridSize * 2, "px)");
});

DrawerBackIconInner.displayName = 'DrawerBackIconInner';
var _default = DrawerBackIconInner;
exports.default = _default;