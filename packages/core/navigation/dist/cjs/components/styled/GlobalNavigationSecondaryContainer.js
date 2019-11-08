"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _sharedVariables = require("../../shared-variables");

var GlobalNavigationSecondaryContainer = _styledComponents.default.div.withConfig({
  displayName: "GlobalNavigationSecondaryContainer",
  componentId: "e1tamf-0"
})(["\n  /* align-self: center is used to horizontally align the global secondary nav items\n     to the center of the container nav when the nav items are shown in a\n     collapsed container nav */\n  align-self: center;\n  /* required to keep the secondary actions at the bottom */\n  flex-grow: 0;\n\n  /* Required to fix dropdowns in Safari. Won't be needed once layering is changed */\n  width: ", "px;\n"], _sharedVariables.globalItemSizes.small);

GlobalNavigationSecondaryContainer.displayName = 'GlobalNavigationSecondaryContainer';
var _default = GlobalNavigationSecondaryContainer;
exports.default = _default;