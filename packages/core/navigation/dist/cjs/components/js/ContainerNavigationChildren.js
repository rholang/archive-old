"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ScrollHintWrapper = _interopRequireDefault(require("../styled/ScrollHintWrapper"));

var _ScrollHintScrollContainer = _interopRequireDefault(require("../styled/ScrollHintScrollContainer"));

var ContainerNavigationChildren = function ContainerNavigationChildren(_ref) {
  var children = _ref.children,
      hasScrollHintTop = _ref.hasScrollHintTop,
      scrollRef = _ref.scrollRef;
  return _react.default.createElement(_ScrollHintWrapper.default, {
    hasScrollHintTop: hasScrollHintTop
  }, _react.default.createElement(_ScrollHintScrollContainer.default, {
    innerRef: scrollRef
  }, children));
};

ContainerNavigationChildren.displayName = 'ContainerNavigationChildren';
var _default = ContainerNavigationChildren;
exports.default = _default;