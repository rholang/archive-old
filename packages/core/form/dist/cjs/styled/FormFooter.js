"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormFooterWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _constants = require("@atlaskit/theme/constants");

var _math = require("@atlaskit/theme/math");

/**
 * Provide a styled container for form headers.
 */
var FormFooterWrapper = _styledComponents.default.footer.withConfig({
  displayName: "FormFooter__FormFooterWrapper",
  componentId: "jnns5q-0"
})(["\n  margin-top: ", "px;\n  display: flex;\n  justify-content: ", ";\n"], (0, _math.multiply)(_constants.gridSize, 3), function (props) {
  return props.align === 'start' ? 'flex-start' : 'flex-end';
});

exports.FormFooterWrapper = FormFooterWrapper;