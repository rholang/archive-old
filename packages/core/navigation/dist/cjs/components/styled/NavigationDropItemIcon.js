"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _NavigationItemIcon = _interopRequireDefault(require("./NavigationItemIcon"));

var _util = require("../../theme/util");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n    display: none;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var NavigationDropItemIcon = (0, _styledComponents.default)(_NavigationItemIcon.default).withConfig({
  displayName: "NavigationDropItemIcon",
  componentId: "sc-12a6lf3-0"
})(["\n  padding-right: 0;\n\n  ", ";\n"], (0, _util.whenCollapsed)(_templateObject()));
NavigationDropItemIcon.displayName = 'NavigationDropItemIcon';
var _default = NavigationDropItemIcon;
exports.default = _default;