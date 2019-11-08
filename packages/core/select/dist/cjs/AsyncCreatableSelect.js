"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _asyncCreatable = _interopRequireDefault(require("react-select/async-creatable"));

var _createSelect = _interopRequireDefault(require("./createSelect"));

var _default = (0, _createSelect.default)(_asyncCreatable.default);

exports.default = _default;