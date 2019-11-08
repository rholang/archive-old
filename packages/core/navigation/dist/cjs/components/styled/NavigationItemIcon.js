"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _sharedVariables = require("../../shared-variables");

var _util = require("../../theme/util");

var getDisplay = function getDisplay(_ref) {
  var theme = _ref.theme,
      isDropdownTrigger = _ref.isDropdownTrigger;

  if (isDropdownTrigger && (0, _util.isCollapsed)(theme)) {
    return 'none';
  }

  return 'flex';
};

var iconSize = _sharedVariables.gridSize * 3;

var NavigationItemIcon = _styledComponents.default.div.withConfig({
  displayName: "NavigationItemIcon",
  componentId: "sc-1mxkiut-0"
})(["\n  align-items: center;\n  justify-content: center;\n  display: ", ";\n  flex-shrink: 0;\n  transition: padding 200ms;\n\n  > * {\n    flex: 1 0 auto;\n  }\n\n  /* We need to ensure that any image passed in as a child (<img/>, <svg/>\n    etc.) receives the correct width, height and border radius. We don't\n    currently assume that the image passed in is the correct dimensions, or has\n    width / height 100% */\n  > img {\n    height: ", "px;\n    width: ", "px;\n  }\n"], getDisplay, iconSize, iconSize);

NavigationItemIcon.displayName = 'NavigationItemIcon';
var _default = NavigationItemIcon;
exports.default = _default;