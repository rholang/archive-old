"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _util = require("../../theme/util");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n    opacity: 0;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var NavigationItemTextAfter = _styledComponents.default.div.withConfig({
  displayName: "NavigationItemTextAfter",
  componentId: "huo6tb-0"
})(["\n  position: relative;\n  z-index: 1;\n\n  ", ";\n"], (0, _util.whenCollapsed)(_templateObject()));

NavigationItemTextAfter.displayName = 'NavigationItemTextAfter';
var _default = NavigationItemTextAfter;
exports.default = _default;