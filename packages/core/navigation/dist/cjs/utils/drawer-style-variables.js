"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.widths = exports.drawerBackIconSize = exports.widthTransition = exports.animationTiming = exports.animationSpeed = exports.boxShadowSpread = void 0;

var _sharedVariables = require("../shared-variables");

var fullWidth = '100vw';
var narrowWidth = 45 * _sharedVariables.gridSize;
var mediumWidth = 60 * _sharedVariables.gridSize;
var wideWidth = 75 * _sharedVariables.gridSize;
var boxShadowSpread = _sharedVariables.gridSize * 4;
exports.boxShadowSpread = boxShadowSpread;
var animationSpeed = '220ms';
exports.animationSpeed = animationSpeed;
var animationTiming = 'cubic-bezier(0.15, 1, 0.3, 1)';
exports.animationTiming = animationTiming;
var widthTransition = "width ".concat(animationSpeed, " ").concat(animationTiming);
exports.widthTransition = widthTransition;
var drawerBackIconSize = _sharedVariables.gridSize * 5;
exports.drawerBackIconSize = drawerBackIconSize;
var widths = {
  narrow: {
    width: "".concat(narrowWidth, "px"),
    offScreenTranslateX: "".concat(-narrowWidth - boxShadowSpread, "px")
  },
  medium: {
    width: "".concat(mediumWidth, "px"),
    offScreenTranslateX: "".concat(-mediumWidth - boxShadowSpread, "px")
  },
  wide: {
    width: "".concat(wideWidth, "px"),
    offScreenTranslateX: "".concat(-wideWidth - boxShadowSpread, "px")
  },
  full: {
    width: fullWidth,
    offScreenTranslateX: "calc(-".concat(fullWidth, " - ").concat(boxShadowSpread, "px)")
  }
};
exports.widths = widths;