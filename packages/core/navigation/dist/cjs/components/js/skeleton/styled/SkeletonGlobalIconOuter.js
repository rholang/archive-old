"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _constants = require("@atlaskit/theme/constants");

var _math = require("@atlaskit/theme/math");

var SkeletonGlobalIconOuter = _styledComponents.default.div.withConfig({
  displayName: "SkeletonGlobalIconOuter",
  componentId: "sc-1kpch5t-0"
})(["\n  margin-bottom: ", "px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n"], (0, _math.divide)(_constants.gridSize, 2));

SkeletonGlobalIconOuter.displayName = 'SkeletonGlobalIconOuter';
var _default = SkeletonGlobalIconOuter;
exports.default = _default;