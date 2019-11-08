"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _constants = require("@atlaskit/theme/constants");

var _math = require("@atlaskit/theme/math");

var Trigger = _styledComponents.default.div.withConfig({
  displayName: "Trigger",
  componentId: "sc-10ra0wx-0"
})(["\n  align-items: center;\n  display: flex;\n  min-height: ", "px;\n  outline: none;\n  width: 100%;\n"], (0, _math.multiply)(_constants.gridSize, 4.5));

Trigger.displayName = 'SingleSelectTrigger';
var _default = Trigger;
exports.default = _default;