"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _NavigationItemAfter = _interopRequireDefault(require("./NavigationItemAfter"));

var _util = require("../../theme/util");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n    display: none;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var NavigationDropItemAfter = (0, _styledComponents.default)(_NavigationItemAfter.default).withConfig({
  displayName: "NavigationDropItemAfter",
  componentId: "eg2rd-0"
})(["\n  ", ";\n"], (0, _util.whenCollapsed)(_templateObject()));
NavigationDropItemAfter.displayName = 'NavigationDropItemAfter';
var _default = NavigationDropItemAfter;
exports.default = _default;