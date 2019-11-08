"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var BackButtonIconWrapper = _styledComponents.default.span.withConfig({
  displayName: "BackButtonIconWrapper",
  componentId: "qyullv-0"
})(["\n  display: inline-block;\n  /* We want the icon (the only directly child) inside this wrapper to be vertically middle align. */\n  & > * {\n    vertical-align: middle;\n  }\n"]);

BackButtonIconWrapper.displayName = 'BackButtonIconWrapper';
var _default = BackButtonIconWrapper;
exports.default = _default;