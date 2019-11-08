"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.h100 = exports.h200 = exports.h300 = exports.h400 = exports.h500 = exports.h600 = exports.h700 = exports.h800 = exports.h900 = exports.headingSizes = void 0;

var _styledComponents = require("styled-components");

var colors = _interopRequireWildcard(require("./colors"));

var _constants = require("./constants");

var baseHeading = function baseHeading(size, lineHeight) {
  return "\n  font-size: ".concat(size / (0, _constants.fontSize)(), "em;\n  font-style: inherit;\n  line-height: ").concat(lineHeight / size, ";\n");
};

var headingSizes = {
  h900: {
    size: 35,
    lineHeight: 40
  },
  h800: {
    size: 29,
    lineHeight: 32
  },
  h700: {
    size: 24,
    lineHeight: 28
  },
  h600: {
    size: 17,
    lineHeight: 24
  },
  h500: {
    size: 16,
    lineHeight: 20
  },
  h400: {
    size: 14,
    lineHeight: 16
  },
  h300: {
    size: 12,
    lineHeight: 16
  },
  h200: {
    size: 12,
    lineHeight: 16
  },
  h100: {
    size: 11,
    lineHeight: 16
  }
};
exports.headingSizes = headingSizes;

var h900 = function h900() {
  return (0, _styledComponents.css)(["\n  ", " color: ", ";\n  font-weight: 500;\n  letter-spacing: -0.01em;\n  margin-top: ", "px;\n"], baseHeading(headingSizes.h900.size, headingSizes.h900.lineHeight), colors.heading, (0, _constants.gridSize)() * 6.5);
};

exports.h900 = h900;

var h800 = function h800() {
  return (0, _styledComponents.css)(["\n  ", " color: ", ";\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  margin-top: ", "px;\n"], baseHeading(headingSizes.h800.size, headingSizes.h800.lineHeight), colors.heading, (0, _constants.gridSize)() * 5);
};

exports.h800 = h800;

var h700 = function h700() {
  return (0, _styledComponents.css)(["\n  ", " color: ", ";\n  font-weight: 500;\n  letter-spacing: -0.01em;\n  margin-top: ", "px;\n"], baseHeading(headingSizes.h700.size, headingSizes.h700.lineHeight), colors.heading, (0, _constants.gridSize)() * 5);
};

exports.h700 = h700;

var h600 = function h600() {
  return (0, _styledComponents.css)(["\n  ", " color: ", ";\n  font-weight: 500;\n  letter-spacing: -0.008em;\n  margin-top: ", "px;\n"], baseHeading(headingSizes.h600.size, headingSizes.h600.lineHeight), colors.heading, (0, _constants.gridSize)() * 3.5);
};

exports.h600 = h600;

var h500 = function h500() {
  return (0, _styledComponents.css)(["\n  ", " color: ", ";\n  font-weight: 600;\n  letter-spacing: -0.006em;\n  margin-top: ", "px;\n"], baseHeading(headingSizes.h500.size, headingSizes.h500.lineHeight), colors.heading, (0, _constants.gridSize)() * 3);
};

exports.h500 = h500;

var h400 = function h400() {
  return (0, _styledComponents.css)(["\n  ", " color: ", ";\n  font-weight: 600;\n  letter-spacing: -0.003em;\n  margin-top: ", "px;\n"], baseHeading(headingSizes.h400.size, headingSizes.h400.lineHeight), colors.heading, (0, _constants.gridSize)() * 2);
};

exports.h400 = h400;

var h300 = function h300() {
  return (0, _styledComponents.css)(["\n  ", " color: ", ";\n  font-weight: 600;\n  margin-top: ", "px;\n  text-transform: uppercase;\n"], baseHeading(headingSizes.h300.size, headingSizes.h300.lineHeight), colors.heading, (0, _constants.gridSize)() * 2.5);
};

exports.h300 = h300;

var h200 = function h200() {
  return (0, _styledComponents.css)(["\n  ", " color: ", ";\n  font-weight: 600;\n  margin-top: ", "px;\n"], baseHeading(headingSizes.h200.size, headingSizes.h200.lineHeight), colors.subtleHeading, (0, _constants.gridSize)() * 2);
};

exports.h200 = h200;

var h100 = function h100() {
  return (0, _styledComponents.css)(["\n  ", " color: ", ";\n  font-weight: 700;\n  margin-top: ", "px;\n"], baseHeading(headingSizes.h100.size, headingSizes.h100.lineHeight), colors.subtleHeading, (0, _constants.gridSize)() * 2);
};

exports.h100 = h100;