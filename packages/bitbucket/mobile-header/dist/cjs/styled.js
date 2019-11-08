"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageHeading = exports.FakeBlanket = exports.MobilePageHeaderContent = exports.MobilePageHeader = exports.MobileNavSlider = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _theme = require("@atlaskit/theme");

var gridSize = (0, _theme.gridSize)(); // @atlaskit/navigation has a specific z-index, so we need to layer the header
// components relative to that.

var navLayer = _theme.layers.navigation();

var layers = {
  header: navLayer - 10,
  blanket: navLayer - 5,
  slider: navLayer + 5
};
var mobileHeaderHeight = 54;

var xPositioning = function xPositioning(_ref) {
  var side = _ref.side,
      isOpen = _ref.isOpen;
  return side === 'right' ? (0, _styledComponents.css)(["\n        right: 0;\n        transform: translateX(", ");\n      "], isOpen ? '0' : '100vw') : (0, _styledComponents.css)(["\n        left: 0;\n        transform: translateX(", ");\n      "], isOpen ? '0' : '-100vw');
};

var MobileNavSlider = _styledComponents.default.div.withConfig({
  displayName: "styled__MobileNavSlider",
  componentId: "sc-1rrdjhr-0"
})(["\n  height: ", ";\n  position: fixed;\n  top: ", "px;\n  transition: transform 0.2s ease-out;\n  z-index: ", ";\n  ", ";\n  width: 100%;\n"], function (props) {
  return "calc(100vh - ".concat(props.topOffset, "px)");
}, function (props) {
  return props.topOffset;
}, layers.slider, xPositioning); // make space so content below doesn't slip beneath the header
// since the content is `position: fixed`


exports.MobileNavSlider = MobileNavSlider;

var MobilePageHeader = _styledComponents.default.header.withConfig({
  displayName: "styled__MobilePageHeader",
  componentId: "sc-1rrdjhr-1"
})(["\n  height: ", "px;\n"], mobileHeaderHeight);

exports.MobilePageHeader = MobilePageHeader;

var MobilePageHeaderContent = _styledComponents.default.div.withConfig({
  displayName: "styled__MobilePageHeaderContent",
  componentId: "sc-1rrdjhr-2"
})(["\n  align-items: center;\n  background-color: ", ";\n  box-sizing: border-box;\n  display: flex;\n  height: ", "px;\n  padding: ", "px;\n  position: fixed;\n  top: ", "px;\n  width: 100%;\n  z-index: ", ";\n"], (0, _theme.themed)({
  light: _theme.colors.N20,
  dark: _theme.colors.DN10
}), mobileHeaderHeight, gridSize, function (props) {
  return props.topOffset;
}, layers.header);

exports.MobilePageHeaderContent = MobilePageHeaderContent;
var opacityIn = (0, _styledComponents.keyframes)(["\n  from { opacity: 0; }\n  to { opacity: 1; }\n"]);
var opacityOut = (0, _styledComponents.keyframes)(["\n  from { opacity: 1; }\n  to { opacity: 0; }\n"]); // @atlaskit/blanket has a z-index *higher* than @atlaskit/navigation,
// so we can't display the AK blanket underneath the navigation.

var FakeBlanket = _styledComponents.default.div.withConfig({
  displayName: "styled__FakeBlanket",
  componentId: "sc-1rrdjhr-3"
})(["\n  background: ", ";\n  bottom: 0;\n  left: 0;\n  position: fixed;\n  right: 0;\n  top: 0;\n  z-index: ", ";\n  animation: ", " 0.2s ease-out;\n"], _theme.colors.N100A, layers.blanket, function (p) {
  return p.isOpen ? opacityIn : opacityOut;
}); // use proper h1 and header styles but for mobile we don't want a top margin


exports.FakeBlanket = FakeBlanket;

var PageHeading = _styledComponents.default.h1.withConfig({
  displayName: "styled__PageHeading",
  componentId: "sc-1rrdjhr-4"
})(["\n  flex-grow: 1;\n  margin-left: ", "px;\n  ", ";\n  && {\n    margin-top: 0;\n  }\n"], gridSize, _theme.typography.h500);

exports.PageHeading = PageHeading;