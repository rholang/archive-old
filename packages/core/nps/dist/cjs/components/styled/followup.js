"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RoleQuestion = exports.Contact = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _constants = require("@atlaskit/theme/constants");

var _colors = require("@atlaskit/theme/colors");

var Contact = _styledComponents.default.div.withConfig({
  displayName: "followup__Contact",
  componentId: "sc-2c5dok-0"
})(["\n  margin-top: ", "px;\n"], (0, _constants.gridSize)() * 2);

exports.Contact = Contact;

var RoleQuestion = _styledComponents.default.div.withConfig({
  displayName: "followup__RoleQuestion",
  componentId: "sc-2c5dok-1"
})(["\n  font-size: ", "px;\n  color: ", ";\n"], _constants.fontSize, _colors.text);

exports.RoleQuestion = RoleQuestion;