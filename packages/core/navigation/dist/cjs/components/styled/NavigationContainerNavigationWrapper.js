"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _sharedVariables = require("../../shared-variables");

var _util = require("../../theme/util");

var getTransform = function getTransform(_ref) {
  var horizontalOffset = _ref.horizontalOffset;

  if (!horizontalOffset || horizontalOffset === 0) {
    return '';
  }

  return "transform: translateX(".concat(horizontalOffset, "px);");
};

var NavigationContainerNavigationWrapper = _styledComponents.default.div.withConfig({
  displayName: "NavigationContainerNavigationWrapper",
  componentId: "sc-17groxj-0"
})(["\n  flex-grow: 1;\n  flex-shrink: 1;\n  /* allowing the container to collapse down to its min width */\n  min-width: ", "px;\n  ", " display: flex;\n"], function (props) {
  return (0, _sharedVariables.containerClosedWidth)((0, _util.isElectronMac)(props.theme));
}, getTransform);

NavigationContainerNavigationWrapper.displayName = 'NavigationContainerNavigationWrapper';
var _default = NavigationContainerNavigationWrapper;
exports.default = _default;