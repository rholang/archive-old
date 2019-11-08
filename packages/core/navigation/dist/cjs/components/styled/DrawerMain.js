"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _sharedVariables = require("../../shared-variables");

var _util = require("../../theme/util");

var getTopPadding = function getTopPadding(props) {
  return _sharedVariables.layout.padding.top + ((0, _util.isElectronMac)(props.theme) ? _util.electronMacTopPadding : 0);
};

var DrawerMain = _styledComponents.default.div.withConfig({
  displayName: "DrawerMain",
  componentId: "sc-1lj0ru9-0"
})(["\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  padding: ", "px 0 0;\n  overflow-y: auto;\n  width: 100%;\n"], getTopPadding);

DrawerMain.displayName = 'DrawerMain';
var _default = DrawerMain;
exports.default = _default;