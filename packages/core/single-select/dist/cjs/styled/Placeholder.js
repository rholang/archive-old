"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _placeholderStyles = _interopRequireDefault(require("./placeholderStyles"));

var Placeholder = _styledComponents.default.span.withConfig({
  displayName: "Placeholder",
  componentId: "sc-1btvls5-0"
})(["\n  ", ";\n"], _placeholderStyles.default);

Placeholder.displayName = 'SingleSelectPlaceholder';
var _default = Placeholder;
exports.default = _default;