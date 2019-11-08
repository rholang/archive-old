"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _drawerStyleVariables = require("../../utils/drawer-style-variables");

var _util = require("../../theme/util");

var _sharedVariables = require("../../shared-variables");

var entryAnimation = function entryAnimation(offscreenX) {
  return (0, _styledComponents.keyframes)(["\n  from { transform: translateX(", "); }\n  to { transform: translateX(0); }\n"], offscreenX);
};

var exitAnimation = function exitAnimation(offscreenX) {
  return (0, _styledComponents.keyframes)(["\n  from { transform: translateX(0); }\n  to { transform: translateX(", "); }\n"], offscreenX);
};

var getAnimation = function getAnimation(_ref) {
  var isOpen = _ref.isOpen,
      isAnimating = _ref.isAnimating,
      width = _ref.width;
  var offscreenX = _drawerStyleVariables.widths[width].offScreenTranslateX;
  var animation = isOpen ? entryAnimation(offscreenX) : exitAnimation(offscreenX);

  if (isAnimating) {
    return "\n      animation: ".concat(animation, " ").concat(_drawerStyleVariables.animationSpeed, " ").concat(_drawerStyleVariables.animationTiming, " forwards;\n    ");
  }

  return "\n    animation: none;\n    left: ".concat(isOpen ? 0 : offscreenX, ";\n  ");
};

var DrawerInner = _styledComponents.default.div.withConfig({
  displayName: "DrawerInner",
  componentId: "azrblo-0"
})(["\n  background-color: ", ";\n  color: ", ";\n  display: flex;\n  height: 100%;\n  overflow: hidden;\n  position: fixed;\n  left: 0;\n  top: 0;\n  transition: ", ";\n  width: ", ";\n  z-index: ", ";\n  ", ";\n"], function (_ref2) {
  var theme = _ref2.theme;
  return (0, _util.getProvided)(theme).background.tertiary;
}, function (_ref3) {
  var theme = _ref3.theme;
  return (0, _util.getProvided)(theme).text;
}, _drawerStyleVariables.widthTransition, function (_ref4) {
  var width = _ref4.width;
  return _drawerStyleVariables.widths[width].width;
}, _sharedVariables.zIndex.drawer, getAnimation);

DrawerInner.displayName = 'DrawerInner';
var _default = DrawerInner;
exports.default = _default;