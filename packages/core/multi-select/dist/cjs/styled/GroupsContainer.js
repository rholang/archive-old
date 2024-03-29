"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _constants = require("@atlaskit/theme/constants");

// we apply overflow and maxheight to the GroupWrapper if we are displaying a footer so that the
// footer is 'sticky' to the bottom (always visible)
var GroupsContainer = _styledComponents.default.div.withConfig({
  displayName: "GroupsContainer",
  componentId: "sc-1dbou9n-0"
})(["\n  overflow: ", ";\n  max-height: ", ";\n"], function (_ref) {
  var hasFooter = _ref.hasFooter;
  return hasFooter ? 'auto' : 'visible';
}, function (_ref2) {
  var hasFooter = _ref2.hasFooter;
  return hasFooter ? "".concat((0, _constants.gridSize)() * 4 * 9.5, "px") : 'none';
});

var _default = GroupsContainer;
exports.default = _default;