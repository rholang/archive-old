"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var SkeletonNavigationInner = _styledComponents.default.div.withConfig({
  displayName: "SkeletonNavigationInner",
  componentId: "sc-132ovka-0"
})(["\n  display: flex;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n"]);

SkeletonNavigationInner.displayName = 'SkeletonNavigationInner';
var _default = SkeletonNavigationInner;
exports.default = _default;