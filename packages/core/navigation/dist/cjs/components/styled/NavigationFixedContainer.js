"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _sharedVariables = require("../../shared-variables");

var NavigationFixedContainer = _styledComponents.default.div.withConfig({
  displayName: "NavigationFixedContainer",
  componentId: "sc-1qndu58-0"
})(["\n  height: ", ";\n  /* This transition height is borrowed from banner specifically to make the\n  shortening occur in line with banner's lengthening. */\n  transition: height 0.25s ease-in-out;\n  display: flex;\n  flex-direction: row;\n  position: fixed;\n  left: 0;\n  /* force this to have the width of the Spacer above */\n  width: inherit;\n  z-index: ", ";\n"], function (_ref) {
  var topOffset = _ref.topOffset;
  return topOffset ? "calc(100vh - ".concat(topOffset, "px)") : '100vh';
}, _sharedVariables.zIndex.base);

NavigationFixedContainer.displayName = 'NavigationFixedContainer';
var _default = NavigationFixedContainer;
exports.default = _default;