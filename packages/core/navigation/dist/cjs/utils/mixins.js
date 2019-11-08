"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.focusOutline = exports.truncate = void 0;

var _styledComponents = require("styled-components");

var truncate = function truncate() {
  var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '100%';
  return (0, _styledComponents.css)(["\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: ", ";\n"], width);
};

exports.truncate = truncate;

var focusOutline = function focusOutline(color) {
  return (0, _styledComponents.css)(["\n  outline: none;\n  box-shadow: 0 0 0 2px ", ";\n"], color || '');
};

exports.focusOutline = focusOutline;