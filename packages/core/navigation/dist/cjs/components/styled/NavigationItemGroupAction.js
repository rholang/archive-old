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
  var data = (0, _taggedTemplateLiteral2.default)(["\n    margin-top: ", "px;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n    display: none;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var NavigationItemGroupAction = _styledComponents.default.div.withConfig({
  displayName: "NavigationItemGroupAction",
  componentId: "sc-1jftvzk-0"
})(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  margin-left: ", "px;\n  min-width: ", "px;\n\n  ", " ", ";\n"], _sharedVariables.gridSize / 2, _sharedVariables.gridSize * 3, (0, _util.whenCollapsed)(_templateObject()), (0, _util.whenNotInOverflowDropdown)(_templateObject2(), _sharedVariables.gridSize));

NavigationItemGroupAction.displayName = 'NavigationItemGroupAction';
var _default = NavigationItemGroupAction;
exports.default = _default;