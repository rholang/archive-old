"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _sharedVariables = require("../../shared-variables");

var _util = require("../../theme/util");

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n    margin-left: -", "px;\n    margin-right: -", "px;\n    margin-top: ", "px;\n    margin-bottom: ", "px;\n    border-top: 1px solid ", ";\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n    margin-left: -", "px;\n    margin-top: ", "px;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var NavigationItemGroupHeader = _styledComponents.default.div.withConfig({
  displayName: "NavigationItemGroupHeader",
  componentId: "sc-1n5ggwv-0"
})(["\n  display: flex;\n  ", " ", ";\n"], (0, _util.whenNotInOverflowDropdown)(_templateObject(), _sharedVariables.gridSize, _sharedVariables.gridSize * 1.5), (0, _util.whenCollapsedAndNotInOverflowDropdown)(_templateObject2(), _sharedVariables.gridSize, _sharedVariables.gridSize, _sharedVariables.gridSize, _sharedVariables.gridSize, function (_ref) {
  var theme = _ref.theme;
  return (0, _util.getProvided)(theme).keyline;
}));

NavigationItemGroupHeader.displayName = 'NavigationItemGroupHeader';
var _default = NavigationItemGroupHeader;
exports.default = _default;