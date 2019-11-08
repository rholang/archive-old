"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var NavigationOuter = _styledComponents.default.div.withConfig({
  displayName: "NavigationOuter",
  componentId: "j4nif-0"
})(["\n  display: flex;\n  flex-direction: row;\n  z-index: 2;\n  flex: 1 0 auto;\n"]);

NavigationOuter.displayName = 'NavigationOuter';
var _default = NavigationOuter;
exports.default = _default;