"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("styled-components");

var _RadioBase = _interopRequireDefault(require("./RadioBase"));

var RadioWithTheme = (0, _styledComponents.withTheme)(_RadioBase.default);
var emptyTheme = {};

if (process.env.NODE_ENV !== 'production' && !process.env.CI) {
  // eslint-disable-next-line no-console
  console.warn('@atlaskit/field-radio-group has been deprecated. Please use the @atlaskit/radio package instead.');
}

function _default(props) {
  return _react.default.createElement(_styledComponents.ThemeProvider, {
    theme: emptyTheme
  }, _react.default.createElement(RadioWithTheme, props));
}