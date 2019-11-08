"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _drawerStyleVariables = require("../../utils/drawer-style-variables");

var _util = require("../../theme/util");

var DrawerBackIconOuter = _styledComponents.default.div.withConfig({
  displayName: "DrawerBackIconOuter",
  componentId: "sc-129mai6-0"
})(["\n  background-color: ", ";\n  border-radius: 50%;\n  color: ", ";\n  cursor: pointer;\n  display: flex;\n  height: ", "px;\n  justify-content: center;\n  width: ", "px;\n\n  &:active {\n    background-color: ", ";\n  }\n"], function (_ref) {
  var theme = _ref.theme;
  return (0, _util.getProvided)(theme).item.default.background;
}, function (_ref2) {
  var theme = _ref2.theme;
  return (0, _util.getProvided)(theme).text;
}, _drawerStyleVariables.drawerBackIconSize, _drawerStyleVariables.drawerBackIconSize, function (_ref3) {
  var theme = _ref3.theme;
  return (0, _util.getProvided)(theme).item.active.background;
});

DrawerBackIconOuter.displayName = 'DrawerBackIconOuter';
var _default = DrawerBackIconOuter;
exports.default = _default;