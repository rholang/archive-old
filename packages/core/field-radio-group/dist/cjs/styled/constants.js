"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.innerHeight = exports.innerWidth = exports.iconHorizontalPadding = exports.maxIconWidth = exports.width = exports.height = exports.fullWidth = exports.fullHeight = exports.borderWidthFocus = exports.borderWidth = void 0;

var _constants = require("@atlaskit/theme/constants");

// Border
var borderWidth = 1; // 1

exports.borderWidth = borderWidth;
var borderWidthFocus = 2; // 2
// Full size

exports.borderWidthFocus = borderWidthFocus;
var fullHeight = (0, _constants.gridSize)() * 1.5; // 12

exports.fullHeight = fullHeight;
var fullWidth = (0, _constants.gridSize)() * 1.5; // 12
// Minus border width

exports.fullWidth = fullWidth;
var height = fullHeight - 2 * borderWidth; // 10

exports.height = height;
var width = fullWidth - 2 * borderWidth; // 10
// Horizontal padding around icon

exports.width = width;
var maxIconWidth = fullWidth + borderWidthFocus * 2; // 16

exports.maxIconWidth = maxIconWidth;
var iconHorizontalPadding = (3 * width - maxIconWidth) / 2; // 7
// Size of inner selection circle

exports.iconHorizontalPadding = iconHorizontalPadding;
var innerWidth = (0, _constants.gridSize)() / 2; // 4

exports.innerWidth = innerWidth;
var innerHeight = (0, _constants.gridSize)() / 2; // 4

exports.innerHeight = innerHeight;