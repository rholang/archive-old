"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assistive = exports.layers = exports.noFocusRing = exports.focusRing = exports.codeFontFamily = exports.fontFamily = exports.fontSizeSmall = exports.fontSize = exports.gridSize = exports.borderRadius = exports.THEME_MODES = exports.DEFAULT_THEME_MODE = exports.CHANNEL = exports.FLATTENED = void 0;

var _styledComponents = require("styled-components");

var _colors = require("./colors");

var FLATTENED = '__FLATTENED__';
exports.FLATTENED = FLATTENED;
var CHANNEL = '__ATLASKIT_THEME__';
exports.CHANNEL = CHANNEL;
var DEFAULT_THEME_MODE = 'light';
exports.DEFAULT_THEME_MODE = DEFAULT_THEME_MODE;
var THEME_MODES = ['light', 'dark'];
/*
  These theme values are expressed as functions so that if we decide to make
  them dependent on props in the future, it wouldn't require a significant
  refactor everywhere they are being used.
*/

exports.THEME_MODES = THEME_MODES;

var borderRadius = function borderRadius() {
  return 3;
};

exports.borderRadius = borderRadius;

var gridSize = function gridSize() {
  return 8;
};

exports.gridSize = gridSize;

var fontSize = function fontSize() {
  return 14;
};

exports.fontSize = fontSize;

var fontSizeSmall = function fontSizeSmall() {
  return 11;
};

exports.fontSizeSmall = fontSizeSmall;

var fontFamily = function fontFamily() {
  return "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif";
};

exports.fontFamily = fontFamily;

var codeFontFamily = function codeFontFamily() {
  return "'SFMono-Medium', 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', 'Ubuntu Mono', Menlo, Consolas, Courier, monospace";
};

exports.codeFontFamily = codeFontFamily;

var focusRing = function focusRing() {
  var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _colors.B100;
  var outlineWidth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : gridSize() / 4;
  return "\n  &:focus {\n    outline: none;\n    box-shadow: 0px 0px 0px ".concat(outlineWidth, "px ").concat(color, ";\n  }\n");
};

exports.focusRing = focusRing;

var noFocusRing = function noFocusRing() {
  return "\n  box-shadow: none;\n";
};

exports.noFocusRing = noFocusRing;
var layers = {
  card: function card() {
    return 100;
  },
  dialog: function dialog() {
    return 300;
  },
  navigation: function navigation() {
    return 200;
  },
  layer: function layer() {
    return 400;
  },
  blanket: function blanket() {
    return 500;
  },
  modal: function modal() {
    return 510;
  },
  flag: function flag() {
    return 600;
  },
  spotlight: function spotlight() {
    return 700;
  },
  tooltip: function tooltip() {
    return 800;
  }
};
exports.layers = layers;

var assistive = function assistive() {
  return (0, _styledComponents.css)(["\n  border: 0 !important;\n  clip: rect(1px, 1px, 1px, 1px) !important;\n  height: 1px !important;\n  overflow: hidden !important;\n  padding: 0 !important;\n  position: absolute !important;\n  width: 1px !important;\n  white-space: nowrap !important;\n"]);
};

exports.assistive = assistive;