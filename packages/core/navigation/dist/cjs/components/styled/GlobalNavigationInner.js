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

var GlobalNavigationInner = _styledComponents.default.div.withConfig({
  displayName: "GlobalNavigationInner",
  componentId: "lcs82l-0"
})(["\n  align-items: center;\n  color: ", ";\n  background-color: ", ";\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  padding: ", "px 0 ", "px;\n  /* always keeping a fixed width so that the ContainerNavigation bleeds over the top of this */\n  width: ", "px;\n"], function (_ref) {
  var theme = _ref.theme;
  return (0, _util.getProvided)(theme).text;
}, function (_ref2) {
  var theme = _ref2.theme;
  return (0, _util.getProvided)(theme).background.primary;
}, getTopPadding, _sharedVariables.layout.padding.bottom, function (props) {
  return (0, _sharedVariables.globalOpenWidth)((0, _util.isElectronMac)(props.theme));
});

GlobalNavigationInner.displayName = 'GlobalNavigationInner';
var _default = GlobalNavigationInner;
exports.default = _default;