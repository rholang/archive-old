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
  var data = (0, _taggedTemplateLiteral2.default)(["\n    &:before,\n    &:after {\n      background: ", ";\n      display: block;\n      flex: 0;\n      height: ", "px;\n      left: ", "px;\n      position: absolute;\n      z-index: 1;\n\n      // Because we are using a custom scrollbar for WebKit in ScrollHintScrollContainer, the\n      // right margin needs to be calculated based on whether that feature is in use.\n      right: ", "px;\n    }\n\n    &:before {\n      top: 0;\n      content: ", ";\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var doubleIfNotWebkit = function doubleIfNotWebkit(width) {
  return width * (typeof window !== 'undefined' && window.navigator && window.navigator.userAgent.indexOf('AppleWebKit') >= 0 ? 1 : 2);
};

var ContainerNavigationChildrenWrapper = _styledComponents.default.div.withConfig({
  displayName: "ScrollHintWrapper__ContainerNavigationChildrenWrapper",
  componentId: "sc-1iamvtm-0"
})(["\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 100%;\n  overflow: hidden;\n  /* Position relative is required so products can position fixed items at top or bottom\n   * of the container scrollable area. */\n  position: relative;\n\n  ", ";\n"], (0, _util.whenNotCollapsed)(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return (0, _util.getProvided)(theme).keyline;
}, _sharedVariables.scrollHintHeight, _sharedVariables.scrollHintSpacing, _sharedVariables.scrollHintSpacing + doubleIfNotWebkit(_sharedVariables.scrollBarSize), function (_ref2) {
  var hasScrollHintTop = _ref2.hasScrollHintTop;
  return hasScrollHintTop ? "''" : 'none';
}));

ContainerNavigationChildrenWrapper.displayName = 'ContainerNavigationChildrenWrapper';
var _default = ContainerNavigationChildrenWrapper;
exports.default = _default;