"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Trigger = exports.SpinnerContainer = exports.Content = exports.default = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _constants = require("@atlaskit/theme/constants");

var _colors = require("@atlaskit/theme/colors");

var _math = require("@atlaskit/theme/math");

/* When dropdown contains more than 9 elements (droplist items, droplist groups),
 * it should have scroll and cut off half of the 10th item to indicate that there are more
 * items then are seen. This was previously calculated by mapping over children, but with
 * the current composed API it is simpler to just assume 9 items. */
var getMaxHeight = function getMaxHeight(_ref) {
  var isTall = _ref.isTall,
      maxHeight = _ref.maxHeight;
  if (maxHeight) return "".concat(maxHeight, "px");
  var heightWithoutPadding = 17;
  var verticalPadding = (0, _constants.gridSize)();
  var height = heightWithoutPadding + verticalPadding * 2;
  var defaultMaxHeight = 9.5 * height + verticalPadding / 2;
  return isTall ? '90vh' : "".concat(defaultMaxHeight, "px");
};

var _default = _styledComponents.default.div.withConfig({
  displayName: "Droplist",
  componentId: "sc-1z05y4v-0"
})(["\n  display: inline-flex;\n\n  ", ";\n"], function (props) {
  return props.fit && "\n    display: block;\n    flex: 1 1 auto;\n  ";
});

exports.default = _default;
var backgroundColor = _colors.backgroundOnLayer;
var boxShadow = (0, _styledComponents.css)(["\n  box-shadow: 0 ", "px ", "px -", "px\n      ", ",\n    0 0 1px ", ";\n"], (0, _math.divide)(_constants.gridSize, 2), _constants.gridSize, (0, _math.divide)(_constants.gridSize, 4), _colors.N50A, _colors.N60A);

var Content = _styledComponents.default.div.withConfig({
  displayName: "Droplist__Content",
  componentId: "sc-1z05y4v-1"
})(["\n  background: ", ";\n  border-radius: ", "px;\n  ", ";\n  box-sizing: border-box;\n  overflow: auto;\n  padding: ", "px 0;\n  max-height: ", ";\n"], backgroundColor, _constants.borderRadius, boxShadow, (0, _math.divide)(_constants.gridSize, 2), getMaxHeight);

exports.Content = Content;

var SpinnerContainer = _styledComponents.default.div.withConfig({
  displayName: "Droplist__SpinnerContainer",
  componentId: "sc-1z05y4v-2"
})(["\n  display: flex;\n  justify-content: center;\n  min-width: ", "px;\n  padding: ", "px;\n"], (0, _math.multiply)(_constants.gridSize, 20), (0, _math.multiply)(_constants.gridSize, 2.5));

exports.SpinnerContainer = SpinnerContainer;

var Trigger = _styledComponents.default.div.withConfig({
  displayName: "Droplist__Trigger",
  componentId: "sc-1z05y4v-3"
})(["\n  display: inline-flex;\n  transition-duration: 0.2s;\n  transition: box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38);\n\n  ", ";\n"], function (props) {
  return props.fit && "\n    box-sizing: border-box;\n    display: block;\n  ";
});

exports.Trigger = Trigger;