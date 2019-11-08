"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _sharedVariables = require("../../shared-variables");

var _util = require("../../theme/util");

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n    overflow-y: auto;\n\n    &:before,\n\n\n\n\n    /* The following styles are to style scrollbars when there is long/wide content */\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    &::-webkit-scrollbar {\n      height: ", "px;\n      width: ", "px;\n    }\n    &::-webkit-scrollbar-corner {\n      display: none;\n    }\n    &::-webkit-scrollbar-thumb {\n      background-color: rgba(0, 0, 0, 0);\n    }\n    &:hover::-webkit-scrollbar-thumb {\n      background-color: ", ";\n      border-radius: ", "px;\n    }\n    &::-webkit-scrollbar-thumb:hover {\n      background-color: ", ";\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n    overflow-x: hidden;\n    padding: 0 ", "px;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var bottomPadding = _sharedVariables.gridSize;

var ScrollHintScrollContainer = _styledComponents.default.div.withConfig({
  displayName: "ScrollHintScrollContainer",
  componentId: "sc-1q3nox-0"
})(["\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  /* Flex-basis must be set to auto and width set to 100% instead to prevent box-sizing issues\n   * in IE11.\n   * See https://github.com/philipwalton/flexbugs#7-flex-basis-doesnt-account-for-box-sizingborder-box\n   */\n  flex: 1 1 auto;\n  width: 100%;\n  height: 100%;\n  justify-content: flex-start;\n  transition: padding ", ";\n  padding: 0 ", "px ", "px ", "px;\n\n  ", " ", ";\n"], _sharedVariables.drawerContainerHeaderAnimationSpeed, _sharedVariables.scrollHintSpacing, bottomPadding, _sharedVariables.scrollHintSpacing, (0, _util.whenCollapsed)(_templateObject(), _sharedVariables.gridSize), (0, _util.whenNotCollapsed)(_templateObject2(), _sharedVariables.scrollBarSize, _sharedVariables.scrollBarSize, function (_ref) {
  var theme = _ref.theme;
  return (0, _util.getProvidedScrollbar)(theme).default.background;
}, _sharedVariables.scrollBarSize, function (_ref2) {
  var theme = _ref2.theme;
  return (0, _util.getProvidedScrollbar)(theme).hover.background;
}));

ScrollHintScrollContainer.displayName = 'ScrollHintScrollContainer';
var _default = ScrollHintScrollContainer;
exports.default = _default;