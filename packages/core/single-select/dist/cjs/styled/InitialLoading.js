"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _constants = require("@atlaskit/theme/constants");

var _math = require("@atlaskit/theme/math");

var InitialLoadingElement = _styledComponents.default.div.withConfig({
  displayName: "InitialLoading__InitialLoadingElement",
  componentId: "sc-4mw38u-0"
})(["\n  padding: 6px ", "px;\n"], (0, _math.multiply)(_constants.gridSize, 3));

InitialLoadingElement.displayName = 'InitialLoadingElement';
var _default = InitialLoadingElement;
exports.default = _default;