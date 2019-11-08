"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.RequiredIndicator = exports.Label = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _constants = require("@atlaskit/theme/constants");

var _typography = require("@atlaskit/theme/typography");

var _colors = require("@atlaskit/theme/colors");

var _math = require("@atlaskit/theme/math");

/**
 * Provide a styled container for field components
 */
var FieldWrapper = _styledComponents.default.div.withConfig({
  displayName: "Field__FieldWrapper",
  componentId: "vqybw1-0"
})(["\n  margin-top: ", "px;\n"], _constants.gridSize);
/**
 * Provide a styled Label for field components
 */


var Label = _styledComponents.default.label.withConfig({
  displayName: "Field__Label",
  componentId: "vqybw1-1"
})(["\n  ", " display: inline-block;\n  margin-bottom: ", "px;\n  margin-top: 0;\n"], (0, _typography.h200)(), (0, _math.multiply)(_constants.gridSize, 0.5));

exports.Label = Label;

var RequiredIndicator = _styledComponents.default.span.withConfig({
  displayName: "Field__RequiredIndicator",
  componentId: "vqybw1-2"
})(["\n  color: ", ";\n  padding-left: ", "px;\n"], _colors.R400, (0, _math.multiply)(_constants.gridSize, 0.25));

exports.RequiredIndicator = RequiredIndicator;
var _default = FieldWrapper;
exports.default = _default;