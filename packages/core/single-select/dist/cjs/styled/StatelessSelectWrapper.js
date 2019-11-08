"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var StatelessSelectWrapper = _styledComponents.default.div.withConfig({
  displayName: "StatelessSelectWrapper",
  componentId: "weqp4m-0"
})(["\n  display: ", ";\n"], function (props) {
  return props.shouldFitContainer ? 'block' : 'inline-block';
});

StatelessSelectWrapper.displayName = 'SingleSelectStatelessSelectWrapper';
var _default = StatelessSelectWrapper;
exports.default = _default;