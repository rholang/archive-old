"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _constants = require("@atlaskit/theme/constants");

var _math = require("@atlaskit/theme/math");

var NothingWasFoundElement = _styledComponents.default.div.withConfig({
  displayName: "NothingWasFound__NothingWasFoundElement",
  componentId: "sc-9uovt8-0"
})(["\n  padding: 6px ", "px;\n"], (0, _math.multiply)(_constants.gridSize, 3));

NothingWasFoundElement.displayName = 'NothingWasFoundElement';
var _default = NothingWasFoundElement;
exports.default = _default;