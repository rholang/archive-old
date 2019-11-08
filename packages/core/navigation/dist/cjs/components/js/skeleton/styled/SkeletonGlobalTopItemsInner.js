"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _constants = require("@atlaskit/theme/constants");

var SkeletonGlobalTopItemsInner = _styledComponents.default.div.withConfig({
  displayName: "SkeletonGlobalTopItemsInner",
  componentId: "tl9k0o-0"
})(["\n  margin-bottom: ", "px;\n"], (0, _constants.gridSize)() * 3);

SkeletonGlobalTopItemsInner.displayName = 'SkeletonGlobalTopItemsInner';
var _default = SkeletonGlobalTopItemsInner;
exports.default = _default;