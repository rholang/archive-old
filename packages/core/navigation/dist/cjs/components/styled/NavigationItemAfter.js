"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _util = require("../../theme/util");

var getDisplay = function getDisplay(_ref) {
  var theme = _ref.theme,
      isDropdownTrigger = _ref.isDropdownTrigger;

  if (isDropdownTrigger && (0, _util.isCollapsed)(theme)) {
    return 'none';
  }

  return 'block';
};

var NavigationItemAfter = _styledComponents.default.div.withConfig({
  displayName: "NavigationItemAfter",
  componentId: "sc-1fp8eq4-0"
})(["\n  display: ", ";\n  min-width: ", ";\n"], getDisplay, function (_ref2) {
  var shouldTakeSpace = _ref2.shouldTakeSpace;
  return shouldTakeSpace ? '24px' : 0;
});

NavigationItemAfter.displayName = 'NavigationItemAfter';
var _default = NavigationItemAfter;
exports.default = _default;