"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingIndicator = exports.DropdownIndicator = exports.ClearIndicator = void 0;

var _core = require("@emotion/core");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _reactSelect = require("react-select");

var _spinner = _interopRequireDefault(require("@atlaskit/spinner"));

var _selectClear = _interopRequireDefault(require("@atlaskit/icon/glyph/select-clear"));

var _chevronDown = _interopRequireDefault(require("@atlaskit/icon/glyph/hipchat/chevron-down"));

/** @jsx jsx */
// indicators
var ClearIndicator = function ClearIndicator(props) {
  return (0, _core.jsx)(_reactSelect.components.ClearIndicator, props, (0, _core.jsx)(_selectClear.default, {
    size: "small",
    primaryColor: "inherit"
  }));
};

exports.ClearIndicator = ClearIndicator;

var DropdownIndicator = function DropdownIndicator(props) {
  return (0, _core.jsx)(_reactSelect.components.DropdownIndicator, props, (0, _core.jsx)(_chevronDown.default, null));
};

exports.DropdownIndicator = DropdownIndicator;

var LoadingIndicator = function LoadingIndicator(props) {
  return (0, _core.jsx)("div", (0, _extends2.default)({
    css: props.getStyles('loadingIndicator', props)
  }, props.innerProps), (0, _core.jsx)(_spinner.default, {
    size: "small"
  }));
};

exports.LoadingIndicator = LoadingIndicator;