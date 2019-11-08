"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getAnimation = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _sharedVariables = require("../../shared-variables");

var _ScrollHintScrollContainer = _interopRequireDefault(require("./ScrollHintScrollContainer"));

var _util = require("../../theme/util");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n    padding-right: ", "px;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var animationTime = _sharedVariables.animationTimeUnitless / 1000;

var getAnimation = function getAnimation(_ref) {
  var transitionState = _ref.transitionState,
      traversalDirection = _ref.traversalDirection;
  return transitionState === 'entering' || transitionState === 'exiting' ? "animation: ".concat(animationTime, "s ").concat((0, _styledComponents.keyframes)(["\n      from { transform: translateX(", "%); }\n      to { transform: translateX(0); }\n    "], traversalDirection === 'down' ? 100 : -100), ";") : null;
}; // Use the same scrollbar styling as the main container navigation


exports.getAnimation = getAnimation;
var NestedNavigationPage = (0, _styledComponents.default)(_ScrollHintScrollContainer.default).withConfig({
  displayName: "NestedNavigationPage",
  componentId: "ruacvy-0"
})(["\n  ", " flex-shrink: 0;\n  /* we want each page to have internal scrolling */\n  overflow-y: auto;\n  /* The parent container nav scroll container already sets padding left/right.\n   * Set extra padding right to account for the negative margin-right that is set\n   * on NestedNavigationWrapper to pull the scrollbar over to the edge of the nav\n   */\n  padding-left: 0;\n  padding-right: ", "px;\n\n  ", ";\n"], getAnimation, _sharedVariables.scrollHintSpacing, (0, _util.whenCollapsed)(_templateObject(), _sharedVariables.gridSize));
NestedNavigationPage.displayName = 'NestedNavigationPage';
var _default = NestedNavigationPage;
exports.default = _default;