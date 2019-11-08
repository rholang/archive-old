"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _util = require("../../theme/util");

var _mixins = require("../../utils/mixins");

var _sharedVariables = require("../../shared-variables");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n    display: none;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var groupTitleFontSize = 11;

var NavigationItemGroupTitle = _styledComponents.default.div.withConfig({
  displayName: "NavigationItemGroupTitle",
  componentId: "etcd05-0"
})(["\n  font-size: ", "px;\n  line-height: ", ";\n  font-weight: 600;\n  ", " ", ";\n"], groupTitleFontSize, _sharedVariables.gridSize * 2 / groupTitleFontSize, (0, _mixins.truncate)(), (0, _util.whenCollapsedAndNotInOverflowDropdown)(_templateObject()));

NavigationItemGroupTitle.displayName = 'NavigationItemGroupTitle';
var _default = NavigationItemGroupTitle;
exports.default = _default;