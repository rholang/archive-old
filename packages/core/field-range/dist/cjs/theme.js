"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.track = exports.thumb = void 0;

var colors = _interopRequireWildcard(require("@atlaskit/theme/colors"));

var thumb = {
  default: {
    background: colors.N0,
    border: colors.N800
  },
  focus: {
    background: colors.N0,
    border: colors.B100
  }
};
exports.thumb = thumb;
var track = {
  default: {
    lower: colors.B400,
    upper: colors.N30
  },
  disabled: {
    lower: colors.N50,
    upper: colors.N30
  },
  hover: {
    lower: colors.B300,
    upper: colors.N40
  }
};
exports.track = track;