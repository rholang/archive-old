"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _constants = require("@atlaskit/theme/constants");

var _math = require("@atlaskit/theme/math");

var SkeletonGlobalPrimaryIconOuter = _styledComponents.default.div.withConfig({
  displayName: "SkeletonGlobalPrimaryIconOuter",
  componentId: "p7w614-0"
})(["\n  margin-bottom: ", "px;\n"], (0, _math.multiply)(_constants.gridSize, 1.5));

SkeletonGlobalPrimaryIconOuter.displayName = 'SkeletonGlobalPrimaryIconOuter';
var _default = SkeletonGlobalPrimaryIconOuter;
exports.default = _default;