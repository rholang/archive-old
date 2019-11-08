"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ClearIndicator", {
  enumerable: true,
  get: function get() {
    return _indicators.ClearIndicator;
  }
});
Object.defineProperty(exports, "DropdownIndicator", {
  enumerable: true,
  get: function get() {
    return _indicators.DropdownIndicator;
  }
});
Object.defineProperty(exports, "LoadingIndicator", {
  enumerable: true,
  get: function get() {
    return _indicators.LoadingIndicator;
  }
});
exports.IndicatorSeparator = exports.MultiValueRemove = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _reactSelect = require("react-select");

var _selectClear = _interopRequireDefault(require("@atlaskit/icon/glyph/select-clear"));

var _indicators = require("./indicators");

var MultiValueRemove = function MultiValueRemove(props) {
  return (0, _core.jsx)(_reactSelect.components.MultiValueRemove, props, (0, _core.jsx)(_selectClear.default, {
    size: "small",
    primaryColor: "transparent",
    secondaryColor: "inherit"
  }));
};

exports.MultiValueRemove = MultiValueRemove;
var IndicatorSeparator = null;
exports.IndicatorSeparator = IndicatorSeparator;