"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Comment = exports.Scale = exports.ScoreContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _constants = require("@atlaskit/theme/constants");

var _colors = require("@atlaskit/theme/colors");

var ScoreContainer = _styledComponents.default.section.withConfig({
  displayName: "feedback__ScoreContainer",
  componentId: "yyw2a6-0"
})(["\n  display: flex;\n  align-items: center;\n"]);

exports.ScoreContainer = ScoreContainer;

var Scale = _styledComponents.default.span.withConfig({
  displayName: "feedback__Scale",
  componentId: "yyw2a6-1"
})(["\n  padding: 0 ", "px;\n  font-size: 12px;\n  color: ", ";\n"], (0, _constants.gridSize)(), _colors.subtleText);

exports.Scale = Scale;

var Comment = _styledComponents.default.div.withConfig({
  displayName: "feedback__Comment",
  componentId: "yyw2a6-2"
})(["\n  margin-bottom: ", "px;\n"], (0, _constants.gridSize)());

exports.Comment = Comment;