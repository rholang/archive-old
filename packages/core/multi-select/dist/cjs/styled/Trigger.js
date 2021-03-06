"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = exports.TriggerDiv = exports.Expand = exports.Content = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _constants = require("@atlaskit/theme/constants");

var _colors = require("@atlaskit/theme/colors");

var gridSizeUnitless = (0, _constants.gridSize)();
var lineHeightDefault = gridSizeUnitless * 2 / (0, _constants.fontSize)();

var getPlaceholderStyle = function getPlaceholderStyle(style) {
  return (0, _styledComponents.css)(["\n  &::-webkit-input-placeholder {\n    /* WebKit, Blink, Edge */\n    ", ";\n  }\n  &::-moz-placeholder {\n    /* Mozilla Firefox 19+ */\n    ", " opacity: 1;\n  }\n  &::-ms-input-placeholder {\n    /* Microsoft Edge */\n    ", ";\n  }\n  &:-moz-placeholder {\n    /* Mozilla Firefox 4 to 18 */\n    ", " opacity: 1;\n  }\n  &:-ms-input-placeholder {\n    /* Internet Explorer 10-11 */\n    ", ";\n  }\n"], style, style, style, style, style);
};

var getPlaceholderColor = (0, _styledComponents.css)(["\n  color: ", ";\n"], _colors.placeholderText);

var Content = _styledComponents.default.div.withConfig({
  displayName: "Trigger__Content",
  componentId: "p117u5-0"
})(["\n  flex: 1 1 auto;\n  margin: 3px ", "px; /* magic number to make multi-select the same height as field-text. */\n  white-space: nowrap;\n  width: 100%;\n"], gridSizeUnitless);

exports.Content = Content;

var Expand = _styledComponents.default.div.withConfig({
  displayName: "Trigger__Expand",
  componentId: "p117u5-1"
})(["\n  align-items: center;\n  display: flex;\n  flex: 0 0 ", "px;\n  justify-content: center;\n  margin: 0 ", "px;\n"], gridSizeUnitless * 3, gridSizeUnitless);

exports.Expand = Expand;

var Input = _styledComponents.default.input.withConfig({
  displayName: "Trigger__Input",
  componentId: "p117u5-2"
})(["\n  display: inline-block;\n  flex: 1 0 10px;\n  margin: 0;\n  padding: 0;\n  outline: 0;\n  border: 0;\n  background: none;\n  align-self: center;\n  font-size: ", "px;\n  line-height: ", ";\n  color: ", ";\n\n  ", ";\n"], _constants.fontSize, lineHeightDefault, _colors.text, getPlaceholderStyle(getPlaceholderColor));

exports.Input = Input;

var TriggerDiv = _styledComponents.default.div.withConfig({
  displayName: "Trigger__TriggerDiv",
  componentId: "p117u5-3"
})(["\n  align-items: center;\n  display: flex;\n  width: 100%;\n  min-height: 37px; /* magic number to make multi-select the same height as field-text. */\n\n  ", ";\n"], function (_ref) {
  var isDisabled = _ref.isDisabled;
  return isDisabled ? (0, _styledComponents.css)(["\n          cursor: not-allowed;\n        "]) : '';
});

exports.TriggerDiv = TriggerDiv;