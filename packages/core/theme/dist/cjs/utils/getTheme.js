"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getTheme;

var _constants = require("../constants");

function getTheme(props) {
  if (props && props.theme && props.theme.__ATLASKIT_THEME__) {
    // $FlowFixMe - cannot narrow type between input types
    return props.theme.__ATLASKIT_THEME__;
  }

  if (props && props.theme && props.theme.mode) {
    // $FlowFixMe - cannot narrow type between input types
    return props.theme;
  }

  return {
    mode: _constants.DEFAULT_THEME_MODE
  };
}