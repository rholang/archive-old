"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _sharedVariables = require("../../shared-variables");

var transition = "height ".concat(_sharedVariables.animationTime, ", opacity ").concat(_sharedVariables.animationTime);

var RevealInner = _styledComponents.default.div.withConfig({
  displayName: "RevealInner",
  componentId: "sc-16hc41s-0"
})(["\n  flex-shrink: 0;\n  height: ", "px;\n  opacity: ", ";\n  transition: ", ";\n"], function (props) {
  return props.isOpen ? props.openHeight : 0;
}, function (props) {
  return props.isOpen ? 1 : 0;
}, function (props) {
  return props.shouldAnimate ? transition : 'none';
});

RevealInner.displayName = 'RevealInner';
RevealInner.propTypes = {
  isOpen: _propTypes.default.bool.isRequired,
  openHeight: _propTypes.default.number.isRequired
};
var _default = RevealInner;
exports.default = _default;