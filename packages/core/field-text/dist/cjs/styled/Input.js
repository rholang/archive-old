"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _components = require("@atlaskit/theme/components");

var _constants = require("@atlaskit/theme/constants");

var _colors = require("@atlaskit/theme/colors");

var getPlaceholderColor = function getPlaceholderColor(_ref) {
  var disabled = _ref.disabled;

  if (disabled) {
    return (0, _components.themed)({
      light: _colors.N70,
      dark: _colors.DN90
    });
  }

  return (0, _components.themed)({
    light: _colors.N100,
    dark: _colors.DN90
  });
}; // can't group these placeholder styles into one block because browsers drop
// entire style blocks when any single selector fails to parse


var getPlaceholderStyle = function getPlaceholderStyle() {
  return (0, _styledComponents.css)(["\n  &::-webkit-input-placeholder {\n    /* WebKit, Blink, Edge */\n    color: ", ";\n  }\n  &::-moz-placeholder {\n    /* Mozilla Firefox 19+ */\n    color: ", ";\n    opacity: 1;\n  }\n  &::-ms-input-placeholder {\n    /* Microsoft Edge */\n    color: ", ";\n  }\n  &:-ms-input-placeholder {\n    /* Internet Explorer 10-11 */\n    color: ", ";\n  }\n"], getPlaceholderColor, getPlaceholderColor, getPlaceholderColor, getPlaceholderColor);
}; // Safari puts on some difficult to remove styles, mainly for disabled inputs
// but we want full control so need to override them in all cases


var overrideSafariDisabledStyles = "\n  -webkit-text-fill-color: unset;\n  -webkit-opacity: 1;\n";

var InputElement = _styledComponents.default.input.withConfig({
  displayName: "Input__InputElement",
  componentId: "sc-1o6bj35-0"
})(["\n  background: transparent;\n  border: 0;\n  box-sizing: border-box;\n  color: inherit;\n  cursor: inherit;\n  font-family: ", ";\n  font-size: ", "px;\n  min-width: 0;\n  outline: none;\n  width: 100%;\n\n  [disabled] {\n    ", ";\n  }\n\n  &::-ms-clear {\n    display: none;\n  }\n\n  &:invalid {\n    box-shadow: none;\n  }\n  ", ";\n"], function (p) {
  return p.isMonospaced ? (0, _constants.codeFontFamily)() : 'inherit';
}, _constants.fontSize, overrideSafariDisabledStyles, getPlaceholderStyle);

var _default = InputElement;
exports.default = _default;