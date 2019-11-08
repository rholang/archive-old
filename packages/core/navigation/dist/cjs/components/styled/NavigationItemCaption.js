"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _util = require("../../theme/util");

var _sharedVariables = require("../../shared-variables");

var NavigationItemCaption = _styledComponents.default.span.withConfig({
  displayName: "NavigationItemCaption",
  componentId: "pti3us-0"
})(["\n  color: ", ";\n  margin-left: ", "px;\n"], function (_ref) {
  var theme = _ref.theme;
  return (0, _util.getProvided)(theme).subText;
}, _sharedVariables.layout.padding.side);

NavigationItemCaption.displayName = 'NavigationItemCaption';
var _default = NavigationItemCaption;
exports.default = _default;