"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _constants = require("@atlaskit/theme/constants");

var _math = require("@atlaskit/theme/math");

var SkeletonDefaultContainerHeaderInner = _styledComponents.default.div.withConfig({
  displayName: "SkeletonDefaultContainerHeaderInner",
  componentId: "v596gu-0"
})(["\n  display: flex;\n  align-items: center;\n  margin: ", "px\n    ", "px 0 ", "px;\n"], function (props) {
  return props.isAvatarHidden ? (0, _constants.gridSize)() * 2 : (0, _math.divide)(_constants.gridSize, 2);
}, (0, _constants.gridSize)(), (0, _constants.gridSize)());

SkeletonDefaultContainerHeaderInner.displayName = 'SkeletonDefaultContainerHeaderInner';
var _default = SkeletonDefaultContainerHeaderInner;
exports.default = _default;