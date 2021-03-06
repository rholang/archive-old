"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectWrapper = exports.Input = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _constants = require("@atlaskit/theme/constants");

var _colors = require("@atlaskit/theme/colors");

var lineHeightDefault = (0, _constants.gridSize)() * 2 / (0, _constants.fontSize)();

var getPlaceholderStyle = function getPlaceholderStyle(style) {
  return (0, _styledComponents.css)(["\n  &::-webkit-input-placeholder {\n    /* WebKit, Blink, Edge */\n    ", ";\n  }\n  &::-moz-placeholder {\n    /* Mozilla Firefox 19+ */\n    ", " opacity: 1;\n  }\n  &::-ms-input-placeholder {\n    /* Microsoft Edge */\n    ", ";\n  }\n  &:-moz-placeholder {\n    /* Mozilla Firefox 4 to 18 */\n    ", " opacity: 1;\n  }\n  &:-ms-input-placeholder {\n    /* Internet Explorer 10-11 */\n    ", ";\n  }\n"], style, style, style, style, style);
};

var getPlaceholderColor = (0, _styledComponents.css)(["\n  color: ", ";\n"], _colors.placeholderText);

var Input = _styledComponents.default.input.withConfig({
  displayName: "Stateless__Input",
  componentId: "wsqt66-0"
})(["\n  display: inline-block;\n  flex: 1 0 10px;\n  margin: 0;\n  padding: 0;\n  outline: 0;\n  border: 0;\n  background: none;\n  align-self: center;\n  font-size: ", "px;\n  line-height: ", ";\n\n  ", ";\n"], _constants.fontSize, lineHeightDefault, getPlaceholderStyle(getPlaceholderColor));

exports.Input = Input;

var SelectWrapper = _styledComponents.default.div.withConfig({
  displayName: "Stateless__SelectWrapper",
  componentId: "wsqt66-1"
})(["\n  display: inline-block;\n\n  ", ";\n"], function (_ref) {
  var shouldFitContainer = _ref.shouldFitContainer;
  return shouldFitContainer ? (0, _styledComponents.css)(["\n          display: block;\n        "]) : (0, _styledComponents.css)(["\n          display: inline-block;\n        "]);
});

exports.SelectWrapper = SelectWrapper;