"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _sharedVariables = require("../../shared-variables");

var _util = require("../../theme/util");

var getWidth = function getWidth(_ref) {
  var theme = _ref.theme;
  return (0, _util.isElectronMac)(theme) ? _sharedVariables.layout.width.closed.electron : _sharedVariables.layout.width.closed.default;
};

var baseTopPadding = _sharedVariables.layout.padding.top + _sharedVariables.gridSize;

var getTopPadding = function getTopPadding(props) {
  return baseTopPadding + ((0, _util.isElectronMac)(props.theme) ? _util.electronMacTopPadding : 0);
};

var DrawerSide = _styledComponents.default.div.withConfig({
  displayName: "DrawerSide",
  componentId: "y7lfkt-0"
})(["\n  align-items: center;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 auto;\n  padding: ", "px 0 ", "px 0;\n  position: relative;\n  width: ", "px;\n"], getTopPadding, baseTopPadding, getWidth);

DrawerSide.displayName = 'DrawerSide';
var _default = DrawerSide;
exports.default = _default;