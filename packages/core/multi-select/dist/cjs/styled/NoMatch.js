"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _constants = require("@atlaskit/theme/constants");

var NoMatches = _styledComponents.default.div.withConfig({
  displayName: "NoMatch__NoMatches",
  componentId: "sc-1au7ofu-0"
})(["\n  padding: 6px ", "px;\n"], (0, _constants.gridSize)() * 3);

var _default = NoMatches;
exports.default = _default;