"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _constants = require("@atlaskit/theme/constants");

var SkeletonContainerItemWrapper = _styledComponents.default.div.withConfig({
  displayName: "SkeletonContainerItemWrapper",
  componentId: "nffzbz-0"
})(["\n  box-sizing: border-box; /* to make width: 100%; work properly when padding or border is specified - so that item width is not bigger than container width */\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding-left: ", "px;\n  margin-top: ", "px;\n  margin-bottom: ", "px;\n"], (0, _constants.gridSize)() * 2, (0, _constants.gridSize)(), (0, _constants.gridSize)());

SkeletonContainerItemWrapper.displayName = 'SkeletonContainerItemWrapper';
var _default = SkeletonContainerItemWrapper;
exports.default = _default;