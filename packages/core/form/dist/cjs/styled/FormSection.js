"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormSectionDescription = exports.FormSectionTitle = exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _constants = require("@atlaskit/theme/constants");

var _math = require("@atlaskit/theme/math");

var _typography = require("@atlaskit/theme/typography");

/**
 * Provide a styled container for form sections.
 */
var FormSectionWrapper = _styledComponents.default.div.withConfig({
  displayName: "FormSection__FormSectionWrapper",
  componentId: "hwqcq1-0"
})(["\n  margin-top: ", "px;\n"], (0, _math.multiply)(_constants.gridSize, 3));
/**
 * Provide a styled container for form section title
 */


var FormSectionTitle = _styledComponents.default.h2.withConfig({
  displayName: "FormSection__FormSectionTitle",
  componentId: "hwqcq1-1"
})(["\n  ", ";\n  line-height: ", "px;\n  margin-right: ", "px;\n  margin-top: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"], _typography.h600, (0, _math.multiply)(_constants.gridSize, 4), (0, _math.multiply)(_constants.gridSize, 4));
/**
 * Provide a styled container for form section content.
 */


exports.FormSectionTitle = FormSectionTitle;

var FormSectionDescription = _styledComponents.default.div.withConfig({
  displayName: "FormSection__FormSectionDescription",
  componentId: "hwqcq1-2"
})(["\n  margin-top: ", "px;\n"], _constants.gridSize);

exports.FormSectionDescription = FormSectionDescription;
var _default = FormSectionWrapper;
exports.default = _default;