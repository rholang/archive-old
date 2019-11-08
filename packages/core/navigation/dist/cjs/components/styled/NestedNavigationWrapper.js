"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _TransitionGroup = _interopRequireDefault(require("react-transition-group/TransitionGroup"));

var _sharedVariables = require("../../shared-variables");

var _util = require("../../theme/util");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n    margin-right: -", "px;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var NestedNavigation = function NestedNavigation(_ref) {
  var traversalDirection = _ref.traversalDirection,
      children = _ref.children,
      props = (0, _objectWithoutProperties2.default)(_ref, ["traversalDirection", "children"]);
  return (// Don't pass the traversalDirection prop to the TransitionGroup
    // eslint-disable-next-line no-unused-vars
    _react.default.createElement(_TransitionGroup.default, props, children)
  );
};

var NestedNavigationWrapper = (0, _styledComponents.default)(NestedNavigation).withConfig({
  displayName: "NestedNavigationWrapper",
  componentId: "sc-1vkt6vd-0"
})(["\n  display: flex;\n  flex-direction: ", ";\n  /* take up the full height - desirable when using drag-and-drop in nested nav */\n  flex-grow: 1;\n  flex-wrap: nowrap;\n  /* Set height so NestedNavigationPages height 100% matches this height */\n  height: 100%;\n  /* pull scrollbar to the edge of the container nav */\n  margin-right: -", "px;\n  max-height: 100%;\n  /* make sure the wrapper doesn't scroll - each page should be an independent scroll container */\n  overflow: hidden;\n\n  ", ";\n"], function (_ref2) {
  var traversalDirection = _ref2.traversalDirection;
  return traversalDirection === 'up' ? 'row' : 'row-reverse';
}, _sharedVariables.scrollHintSpacing, (0, _util.whenCollapsed)(_templateObject(), _sharedVariables.gridSize));
NestedNavigationWrapper.displayName = 'NestedNavigationWrapper';
var _default = NestedNavigationWrapper;
exports.default = _default;