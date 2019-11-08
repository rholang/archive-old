"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _sharedVariables = require("../../shared-variables");

var _util = require("../../theme/util");

var dividerLineHeight = 2;
var dividerTotalHeight = _sharedVariables.gridSize * 5;

var NavigationItemGroupSeparator = _styledComponents.default.div.withConfig({
  displayName: "NavigationItemGroupSeparator",
  componentId: "ne4oy6-0"
})(["\n  margin-top: ", "px;\n  margin-bottom: ", "px;\n  margin-left: -", "px;\n  height: ", "px;\n  background: ", ";\n  border-radius: 1px;\n"], (dividerTotalHeight - dividerLineHeight) / 2, (dividerTotalHeight - dividerLineHeight) / 2, _sharedVariables.gridSize, dividerLineHeight, function (_ref) {
  var theme = _ref.theme;
  return (0, _util.getProvided)(theme).keyline;
});

NavigationItemGroupSeparator.displayName = 'NavigationItemGroupSeparator';
var _default = NavigationItemGroupSeparator;
exports.default = _default;