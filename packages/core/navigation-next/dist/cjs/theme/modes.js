"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.settings = exports.dark = exports.light = void 0;

var _colors = require("@atlaskit/theme/colors");

var _modeGenerator = _interopRequireDefault(require("./modeGenerator"));

var light = (0, _modeGenerator.default)({
  product: {
    text: _colors.N0,
    background: _colors.B500
  }
});
exports.light = light;
var dark = (0, _modeGenerator.default)({
  product: {
    text: _colors.DN500,
    background: _colors.DN10
  }
});
exports.dark = dark;
var settings = (0, _modeGenerator.default)({
  product: {
    text: _colors.N0,
    background: _colors.N800
  }
});
exports.settings = settings;