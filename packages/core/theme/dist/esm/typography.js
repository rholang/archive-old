import { css } from 'styled-components';
import * as colors from './colors';
import { gridSize, fontSize } from './constants';

var baseHeading = function baseHeading(size, lineHeight) {
  return "\n  font-size: ".concat(size / fontSize(), "em;\n  font-style: inherit;\n  line-height: ").concat(lineHeight / size, ";\n");
};

export var headingSizes = {
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
export var h900 = function h900() {
  return css(["\n  ", " color: ", ";\n  font-weight: 500;\n  letter-spacing: -0.01em;\n  margin-top: ", "px;\n"], baseHeading(headingSizes.h900.size, headingSizes.h900.lineHeight), colors.heading, gridSize() * 6.5);
};
export var h800 = function h800() {
  return css(["\n  ", " color: ", ";\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  margin-top: ", "px;\n"], baseHeading(headingSizes.h800.size, headingSizes.h800.lineHeight), colors.heading, gridSize() * 5);
};
export var h700 = function h700() {
  return css(["\n  ", " color: ", ";\n  font-weight: 500;\n  letter-spacing: -0.01em;\n  margin-top: ", "px;\n"], baseHeading(headingSizes.h700.size, headingSizes.h700.lineHeight), colors.heading, gridSize() * 5);
};
export var h600 = function h600() {
  return css(["\n  ", " color: ", ";\n  font-weight: 500;\n  letter-spacing: -0.008em;\n  margin-top: ", "px;\n"], baseHeading(headingSizes.h600.size, headingSizes.h600.lineHeight), colors.heading, gridSize() * 3.5);
};
export var h500 = function h500() {
  return css(["\n  ", " color: ", ";\n  font-weight: 600;\n  letter-spacing: -0.006em;\n  margin-top: ", "px;\n"], baseHeading(headingSizes.h500.size, headingSizes.h500.lineHeight), colors.heading, gridSize() * 3);
};
export var h400 = function h400() {
  return css(["\n  ", " color: ", ";\n  font-weight: 600;\n  letter-spacing: -0.003em;\n  margin-top: ", "px;\n"], baseHeading(headingSizes.h400.size, headingSizes.h400.lineHeight), colors.heading, gridSize() * 2);
};
export var h300 = function h300() {
  return css(["\n  ", " color: ", ";\n  font-weight: 600;\n  margin-top: ", "px;\n  text-transform: uppercase;\n"], baseHeading(headingSizes.h300.size, headingSizes.h300.lineHeight), colors.heading, gridSize() * 2.5);
};
export var h200 = function h200() {
  return css(["\n  ", " color: ", ";\n  font-weight: 600;\n  margin-top: ", "px;\n"], baseHeading(headingSizes.h200.size, headingSizes.h200.lineHeight), colors.subtleHeading, gridSize() * 2);
};
export var h100 = function h100() {
  return css(["\n  ", " color: ", ";\n  font-weight: 700;\n  margin-top: ", "px;\n"], baseHeading(headingSizes.h100.size, headingSizes.h100.lineHeight), colors.subtleHeading, gridSize() * 2);
};