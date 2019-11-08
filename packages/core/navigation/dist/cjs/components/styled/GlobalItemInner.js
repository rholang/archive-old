"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.globalItemStyles = exports.default = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _sharedVariables = require("../../shared-variables");

var _mixins = require("../../utils/mixins");

var _util = require("../../theme/util");

var getOutline = function getOutline(props) {
  var provided = (0, _util.getProvided)(props.theme);
  return (0, _mixins.focusOutline)(provided.item.focus.outline);
};

var globalItemStyles = (0, _styledComponents.css)(["\n  color: ", ";\n  background-color: ", ";\n  /* fill controls the secondary color used by some icons like the help icon */\n  fill: ", ";\n  align-items: center;\n  border: none;\n  border-radius: ", ";\n  cursor: pointer;\n  display: flex;\n  line-height: 1;\n  width: ", "px;\n  height: ", "px;\n  justify-content: center;\n  margin-top: ", "px;\n  padding: 0;\n  outline: none;\n  text-align: center;\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  &:focus {\n    background-color: ", ";\n    ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n  }\n"], function (_ref) {
  var theme = _ref.theme;
  return (0, _util.getProvided)(theme).text;
}, function (_ref2) {
  var isSelected = _ref2.isSelected,
      theme = _ref2.theme;
  return isSelected ? (0, _util.getProvided)(theme).item.selected.background : (0, _util.getProvided)(theme).item.default.background;
}, function (_ref3) {
  var theme = _ref3.theme;
  return (0, _util.getProvided)(theme).background.primary;
}, function (_ref4) {
  var appearance = _ref4.appearance;
  return appearance === 'square' ? '5px' : '50%';
}, function (_ref5) {
  var size = _ref5.size;
  return _sharedVariables.globalItemSizes[size];
}, function (_ref6) {
  var size = _ref6.size;
  return _sharedVariables.globalItemSizes[size];
}, function (_ref7) {
  var size = _ref7.size;
  return size === 'small' ? _sharedVariables.gridSize : 0;
}, function (_ref8) {
  var theme = _ref8.theme;
  return (0, _util.getProvided)(theme).item.hover.background;
}, function (_ref9) {
  var theme = _ref9.theme;
  return (0, _util.getProvided)(theme).item.focus.background;
}, getOutline, function (_ref10) {
  var theme = _ref10.theme;
  return (0, _util.getProvided)(theme).item.active.background;
});
exports.globalItemStyles = globalItemStyles;

var GlobalItemInner = _styledComponents.default.button.withConfig({
  displayName: "GlobalItemInner",
  componentId: "sc-1yl867v-0"
})(["\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  ", ";\n"], globalItemStyles);

GlobalItemInner.displayName = 'GlobalItemInner';
var _default = GlobalItemInner;
exports.default = _default;