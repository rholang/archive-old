"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _constants = require("@atlaskit/theme/constants");

var InitialLoading = _styledComponents.default.div.withConfig({
  displayName: "InitialLoading",
  componentId: "vq33zx-0"
})(["\n  padding: 6px ", "px;\n"], (0, _constants.gridSize)() * 3);

var _default = InitialLoading;
exports.default = _default;