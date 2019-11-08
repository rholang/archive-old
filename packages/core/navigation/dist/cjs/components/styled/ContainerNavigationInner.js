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

var ContainerNavigationInner = _styledComponents.default.div.withConfig({
  displayName: "ContainerNavigationInner",
  componentId: "sc-1cibwmi-0"
})(["\n  background-color: ", ";\n  color: ", ";\n  display: flex;\n  flex-direction: column;\n  padding-top: ", "px;\n  /* fill the entire space of the flex container */\n  width: 100%;\n"], function (_ref) {
  var theme = _ref.theme;

  var _getProvided = (0, _util.getProvided)(theme),
      background = _getProvided.background;

  if (background.secondary) {
    return background.secondary;
  }

  return background.primary;
}, function (_ref2) {
  var theme = _ref2.theme;
  return (0, _util.getProvided)(theme).text;
}, getTopPadding);

ContainerNavigationInner.displayName = 'ContainerNavigationInner';
var _default = ContainerNavigationInner;
exports.default = _default;