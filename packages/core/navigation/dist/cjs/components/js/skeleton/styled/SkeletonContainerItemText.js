"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _constants = require("@atlaskit/theme/constants");

var _math = require("@atlaskit/theme/math");

var SkeletonContainerItemText = _styledComponents.default.div.withConfig({
  displayName: "SkeletonContainerItemText",
  componentId: "sc-5ck6m2-0"
})(["\n  height: ", "px;\n  background-color: currentColor;\n  border-radius: ", "px;\n  opacity: 0.15;\n  margin-left: ", "px;\n  width: ", ";\n"], (0, _math.multiply)(_constants.gridSize, 2.5), (0, _math.divide)(_constants.gridSize, 2), (0, _constants.gridSize)() * 3, function (props) {
  return props.textWidth || "".concat((0, _constants.gridSize)() * 17, "px");
});

SkeletonContainerItemText.displayName = 'SkeletonContainerItemText';
var _default = SkeletonContainerItemText;
exports.default = _default;