"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _constants = require("@atlaskit/theme/constants");

var Content = _styledComponents.default.div.withConfig({
  displayName: "Content",
  componentId: "sc-1devyv7-0"
})(["\n  align-items: center;\n  display: flex;\n  flex: 1 1 auto;\n  margin: ", "px 6px;\n  white-space: nowrap;\n"], _constants.gridSize);

Content.displayName = 'SingleSelectContent';
var _default = Content;
exports.default = _default;