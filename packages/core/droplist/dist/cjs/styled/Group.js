"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeadingText = exports.HeadingAfter = exports.Heading = exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _components = require("@atlaskit/theme/components");

var _constants = require("@atlaskit/theme/constants");

var _colors = require("@atlaskit/theme/colors");

var _math = require("@atlaskit/theme/math");

var _default = _styledComponents.default.div.withConfig({
  displayName: "Group",
  componentId: "sc-1q26u8b-0"
})(["\n  box-sizing: border-box;\n  display: block;\n  margin-top: ", "px;\n\n  &:first-child {\n    margin-top: 0;\n  }\n"], _constants.gridSize);

exports.default = _default;

var Heading = _styledComponents.default.div.withConfig({
  displayName: "Group__Heading",
  componentId: "sc-1q26u8b-1"
})(["\n  align-items: baseline;\n  color: ", ";\n  display: flex;\n  flex: 1 1 auto;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 1;\n  margin: 0;\n  padding: ", "px ", "px;\n"], (0, _components.themed)({
  light: _colors.N300,
  dark: _colors.DN300
}), _constants.gridSize, (0, _math.multiply)(_constants.gridSize, 1.5));

exports.Heading = Heading;

var HeadingAfter = _styledComponents.default.div.withConfig({
  displayName: "Group__HeadingAfter",
  componentId: "sc-1q26u8b-2"
})(["\n  flex: 0 0 auto;\n"]);

exports.HeadingAfter = HeadingAfter;

var HeadingText = _styledComponents.default.div.withConfig({
  displayName: "Group__HeadingText",
  componentId: "sc-1q26u8b-3"
})(["\n  flex: 1 1 auto;\n  font-size: 12px;\n  text-transform: uppercase;\n"]);

exports.HeadingText = HeadingText;