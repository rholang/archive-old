"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _constants = require("@atlaskit/theme/constants");

var ElemBefore = _styledComponents.default.div.withConfig({
  displayName: "ElemBefore",
  componentId: "abhs7b-0"
})(["\n  display: flex;\n  padding-right: ", "px;\n"], _constants.gridSize);

ElemBefore.displayName = 'TriggerElemBefore';
var _default = ElemBefore;
exports.default = _default;