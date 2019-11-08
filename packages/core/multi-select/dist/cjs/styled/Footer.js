"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _constants = require("@atlaskit/theme/constants");

var _colors = require("@atlaskit/theme/colors");

var FooterDiv = _styledComponents.default.div.withConfig({
  displayName: "Footer__FooterDiv",
  componentId: "sc-1xuos4y-0"
})(["\n  padding: ", "px 0 ", "px 0;\n  border-top: ", ";\n"], (0, _constants.gridSize)(), (0, _constants.gridSize)() / 2, function (_ref) {
  var shouldHideSeparator = _ref.shouldHideSeparator;
  return shouldHideSeparator ? '0' : "2px solid ".concat(_colors.N40A);
});

var _default = FooterDiv;
exports.default = _default;