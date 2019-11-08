"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _constants = require("@atlaskit/theme/constants");

var _math = require("@atlaskit/theme/math");

var SkeletonContainerHeaderText = _styledComponents.default.div.withConfig({
  displayName: "SkeletonContainerHeaderText",
  componentId: "s5b309-0"
})(["\n  height: ", "px;\n  background-color: currentColor;\n  border-radius: ", "px;\n  opacity: 0.3;\n  ", ";\n  width: ", "px;\n"], (0, _math.multiply)(_constants.gridSize, 2.5), (0, _math.divide)(_constants.gridSize, 2), function (props) {
  return !props.isAvatarHidden && "margin-left: ".concat((0, _constants.gridSize)() * 2, "px");
}, (0, _constants.gridSize)() * 18);

SkeletonContainerHeaderText.displayName = 'SkeletonContainerHeaderText';
var _default = SkeletonContainerHeaderText;
exports.default = _default;