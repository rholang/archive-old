"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _util = require("../../theme/util");

var _sharedVariables = require("../../shared-variables");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n    flex-shrink: 1;\n    margin: 0;\n    opacity: 0;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var NavigationItemAction = _styledComponents.default.div.withConfig({
  displayName: "NavigationItemAction",
  componentId: "hri3df-0"
})(["\n  align-items: center;\n  display: flex;\n  flex-shrink: 0;\n  justify-content: center;\n  margin-left: ", "px;\n\n  ", ";\n"], _sharedVariables.gridSize / 2, (0, _util.whenCollapsed)(_templateObject()));

NavigationItemAction.displayName = 'NavigationItemAction';
var _default = NavigationItemAction;
exports.default = _default;