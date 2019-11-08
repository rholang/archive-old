"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.actionsMarginTop = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _sharedVariables = require("../../shared-variables");

var actionsMarginTop = _sharedVariables.gridSize * 2;
exports.actionsMarginTop = actionsMarginTop;

var GlobalPrimaryActionsItemsWrapper = _styledComponents.default.div.withConfig({
  displayName: "GlobalPrimaryActionsItemsWrapper",
  componentId: "syvucr-0"
})(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  margin-top: ", "px;\n"], actionsMarginTop);

GlobalPrimaryActionsItemsWrapper.displayName = 'GlobalPrimaryActionsItemsWrapper';
var _default = GlobalPrimaryActionsItemsWrapper;
exports.default = _default;