"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createGlobalTheme = void 0;

var _chromatism = _interopRequireDefault(require("chromatism"));

var presets = _interopRequireWildcard(require("./presets"));

// 'chromatism' adds 1.9kb to the bundle.
// After the nwb merge it should be able to be tree shaken out for those who are not using it
var globalTheme = presets.global; // eslint-disable-next-line import/prefer-default-export

var createGlobalTheme = function createGlobalTheme(text, background) {
  var active = _chromatism.default.brightness(10, background).hex;

  var item = {
    default: {
      background: 'transparent'
    },
    hover: {
      background: _chromatism.default.brightness(-10, background).hex
    },
    active: {
      background: active
    },
    selected: {
      background: _chromatism.default.brightness(-20, background).hex,
      text: text
    },
    focus: {
      outline: text
    },
    dragging: {
      background: active
    }
  }; // Here we take the default global theme and selectively override some of the customisable values
  // with values based on the function input. We are currently not encouraging the overriding of
  // these default properties.

  var customisedGlobal = {
    background: {
      primary: background,
      secondary: background,
      tertiary: globalTheme.background.tertiary
    },
    text: text,
    subText: _chromatism.default.brightness(20, text).hex,
    keyline: globalTheme.keyline,
    item: item,
    dropdown: globalTheme.dropdown
  };
  return customisedGlobal;
};

exports.createGlobalTheme = createGlobalTheme;