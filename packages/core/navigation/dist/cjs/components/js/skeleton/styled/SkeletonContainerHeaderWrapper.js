"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _constants = require("@atlaskit/theme/constants");

var SkeletonContainerHeaderWrapper = _styledComponents.default.div.withConfig({
  displayName: "SkeletonContainerHeaderWrapper",
  componentId: "aocgly-0"
})(["\n  margin-bottom: ", "px;\n"], (0, _constants.gridSize)() * 2);

SkeletonContainerHeaderWrapper.displayName = 'SkeletonContainerHeaderWrapper';
var _default = SkeletonContainerHeaderWrapper;
exports.default = _default;