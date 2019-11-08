"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var SkeletonNavigationItems = _styledComponents.default.div.withConfig({
  displayName: "SkeletonNavigationItems",
  componentId: "sc-8scrka-0"
})(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);

SkeletonNavigationItems.displayName = 'SkeletonNavigationItems';
var _default = SkeletonNavigationItems;
exports.default = _default;