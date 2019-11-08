"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _sharedVariables = require("../../shared-variables");

var size = _sharedVariables.gridSize * 5;
var borderRadius = 4;

var ContainerTitleIcon = _styledComponents.default.div.withConfig({
  displayName: "ContainerTitleIcon",
  componentId: "sc-1d3yje9-0"
})(["\n  align-items: center;\n  display: flex;\n  height: ", "px;\n  justify-content: center;\n  width: ", "px;\n\n  /* We need to ensure that any image passed in as a child (<img/>, <svg/>\n  etc.) receives the correct width, height and border radius. We don't\n  currently assume that the image passed in is the correct dimensions, or has\n  width / height 100% */\n  & > img {\n    border-radius: ", "px;\n    height: ", "px;\n    width: ", "px;\n  }\n"], size, size, borderRadius, size, size);

ContainerTitleIcon.displayName = 'ContainerTitleIcon';
var _default = ContainerTitleIcon;
exports.default = _default;