"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AutocompleteWrapper = exports.AutocompleteInput = exports.default = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _constants = require("@atlaskit/theme/constants");

var _colors = require("@atlaskit/theme/colors");

var _math = require("@atlaskit/theme/math");

var _placeholderStyles = _interopRequireDefault(require("./placeholderStyles"));

/* Placeholder has been temporarily inlined until we have a helper library for such things */
var getPlaceholderStyle = function getPlaceholderStyle(style) {
  return (0, _styledComponents.css)(["\n  &::-webkit-input-placeholder {\n    /* WebKit, Blink, Edge */\n    ", ";\n  }\n  &::-moz-placeholder {\n    /* Mozilla Firefox 19+ */\n    ", " opacity: 1;\n  }\n  &::-ms-input-placeholder {\n    /* Microsoft Edge */\n    ", ";\n  }\n  &:-moz-placeholder {\n    /* Mozilla Firefox 4 to 18 */\n    ", " opacity: 1;\n  }\n  &:-ms-input-placeholder {\n    /* Internet Explorer 10-11 */\n    ", ";\n  }\n"], style, style, style, style, style);
};

var AutocompleteWrapper = _styledComponents.default.div.withConfig({
  displayName: "Autocomplete__AutocompleteWrapper",
  componentId: "i8d2m3-0"
})(["\n  flex: 1 1 auto;\n  white-space: nowrap;\n  padding: 0 ", "px;\n"], _constants.gridSize);

exports.AutocompleteWrapper = AutocompleteWrapper;
AutocompleteWrapper.displayName = 'SingleSelectAutocompleteWrapper';

var AutocompleteInput = _styledComponents.default.input.withConfig({
  displayName: "Autocomplete__AutocompleteInput",
  componentId: "i8d2m3-1"
})(["\n  background: none;\n  border: 0;\n  color: ", ";\n  font-size: 14px;\n  margin: 0;\n  min-height: ", "px;\n  outline: 0;\n  padding: 0;\n  width: 100%;\n\n  ", ";\n"], _colors.heading, (0, _math.multiply)(_constants.gridSize, 4.5), getPlaceholderStyle(_placeholderStyles.default));

exports.AutocompleteInput = AutocompleteInput;
AutocompleteInput.displayName = 'SingleSelectAutocompleteInput';
var _default = AutocompleteInput;
exports.default = _default;