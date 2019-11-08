"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("styled-components");

var _Navigation = _interopRequireDefault(require("./Navigation"));

var NavigationWithTheme = (0, _styledComponents.withTheme)(_Navigation.default);
var emptyTheme = {};

function _default(props) {
  return _react.default.createElement(_styledComponents.ThemeProvider, {
    theme: emptyTheme
  }, _react.default.createElement(NavigationWithTheme, props));
}