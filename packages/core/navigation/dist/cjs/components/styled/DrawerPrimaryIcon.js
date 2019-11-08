"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _components = require("@atlaskit/theme/components");

var _colors = require("@atlaskit/theme/colors");

var _drawerStyleVariables = require("../../utils/drawer-style-variables");

var DrawerPrimaryIcon = _styledComponents.default.div.withConfig({
  displayName: "DrawerPrimaryIcon",
  componentId: "sc-1ds7gho-0"
})(["\n  align-items: center;\n  display: flex;\n  height: ", "px;\n  justify-content: center;\n  width: ", "px;\n  color: ", ";\n"], _drawerStyleVariables.drawerBackIconSize, _drawerStyleVariables.drawerBackIconSize, (0, _components.themed)({
  light: _colors.N500,
  dark: _colors.DN500
}));

DrawerPrimaryIcon.displayName = 'DrawerPrimaryIcon';
var _default = DrawerPrimaryIcon;
exports.default = _default;