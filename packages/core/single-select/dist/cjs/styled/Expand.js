"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _constants = require("@atlaskit/theme/constants");

var _math = require("@atlaskit/theme/math");

var Expand = _styledComponents.default.div.withConfig({
  displayName: "Expand",
  componentId: "r9emlm-0"
})(["\n  align-items: center;\n  display: flex;\n  flex: 0 0 ", "px;\n  justify-content: center;\n  margin: 0 ", "px;\n"], (0, _math.multiply)(_constants.gridSize, 3), _constants.gridSize);

Expand.displayName = 'SingleSelectExpand';
var _default = Expand;
exports.default = _default;