"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _util = require("../../theme/util");

var getTopOffset = function getTopOffset(_ref) {
  var iconOffset = _ref.iconOffset,
      theme = _ref.theme;
  return (0, _util.isElectronMac)(theme) ? _util.electronMacTopPadding + iconOffset : iconOffset;
};

var DrawerBackIconWrapper = _styledComponents.default.div.withConfig({
  displayName: "DrawerBackIconWrapper",
  componentId: "eyhbn7-0"
})(["\n  /** This needs to be display flex to fix an IE11 bug with position: absolute and a display: flex parent */\n  display: flex;\n  justify-content: center;\n  left: 0;\n  position: absolute;\n  width: 100%;\n  top: ", "px;\n"], getTopOffset);

DrawerBackIconWrapper.displayName = 'DrawerBackIconWrapper';
var _default = DrawerBackIconWrapper;
exports.default = _default;