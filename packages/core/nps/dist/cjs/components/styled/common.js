"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonWrapper = exports.Description = exports.Title = exports.Header = exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _constants = require("@atlaskit/theme/constants");

var _colors = require("@atlaskit/theme/colors");

var Wrapper = _styledComponents.default.div.withConfig({
  displayName: "common__Wrapper",
  componentId: "usjzau-0"
})(["\n  margin-top: 16px;\n"]);

exports.Wrapper = Wrapper;

var Header = _styledComponents.default.header.withConfig({
  displayName: "common__Header",
  componentId: "usjzau-1"
})(["\n  display: flex;\n  justify-content: space-between;\n"]);

exports.Header = Header;

var Title = _styledComponents.default.span.withConfig({
  displayName: "common__Title",
  componentId: "usjzau-2"
})(["\n  font-size: 24px;\n  font-weight: 500;\n  color: ", ";\n"], _colors.heading);

exports.Title = Title;

var Description = _styledComponents.default.div.withConfig({
  displayName: "common__Description",
  componentId: "usjzau-3"
})(["\n  font-size: ", "px;\n  color: ", ";\n"], _constants.fontSize, _colors.text);

exports.Description = Description;

var ButtonWrapper = _styledComponents.default.div.withConfig({
  displayName: "common__ButtonWrapper",
  componentId: "usjzau-4"
})(["\n  display: flex;\n  justify-content: flex-end;\n"]);

exports.ButtonWrapper = ButtonWrapper;