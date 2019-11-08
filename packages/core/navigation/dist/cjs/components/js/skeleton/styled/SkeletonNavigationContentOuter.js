"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _constants = require("@atlaskit/theme/constants");

var SkeletonNavigationContentOuter = _styledComponents.default.div.withConfig({
  displayName: "SkeletonNavigationContentOuter",
  componentId: "sc-196d4kq-0"
})(["\n  height: 100%;\n  padding-top: ", "px;\n  padding-bottom: ", "px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n"], (0, _constants.gridSize)() * 3, (0, _constants.gridSize)() * 2);

SkeletonNavigationContentOuter.displayName = 'SkeletonNavigationContentOuter';
var _default = SkeletonNavigationContentOuter;
exports.default = _default;