"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormHeaderContent = exports.FormHeaderDescription = exports.FormHeaderTitle = exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _constants = require("@atlaskit/theme/constants");

var _math = require("@atlaskit/theme/math");

var _typography = require("@atlaskit/theme/typography");

/**
 * Provide a styled container for form headers.
 */
var FormHeaderWrapper = _styledComponents.default.div.withConfig({
  displayName: "FormHeader__FormHeaderWrapper",
  componentId: "sc-10ulekx-0"
})([""]);
/**
 * Provide a styled container for form header title.
 */


var FormHeaderTitle = _styledComponents.default.h1.withConfig({
  displayName: "FormHeader__FormHeaderTitle",
  componentId: "sc-10ulekx-1"
})(["\n  ", ";\n  line-height: ", "px;\n  margin-right: ", "px;\n  margin-top: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"], _typography.h700, (0, _math.multiply)(_constants.gridSize, 4), (0, _math.multiply)(_constants.gridSize, 4));
/**
 * Provide a styled container for form header title.
 */


exports.FormHeaderTitle = FormHeaderTitle;

var FormHeaderDescription = _styledComponents.default.div.withConfig({
  displayName: "FormHeader__FormHeaderDescription",
  componentId: "sc-10ulekx-2"
})(["\n  margin-top: ", "px;\n"], _constants.gridSize);
/**
 * Provide a styled container for form header content.
 */


exports.FormHeaderDescription = FormHeaderDescription;

var FormHeaderContent = _styledComponents.default.div.withConfig({
  displayName: "FormHeader__FormHeaderContent",
  componentId: "sc-10ulekx-3"
})(["\n  min-width: 100%;\n  margin-top: ", "px;\n"], _constants.gridSize);

exports.FormHeaderContent = FormHeaderContent;
var _default = FormHeaderWrapper;
exports.default = _default;