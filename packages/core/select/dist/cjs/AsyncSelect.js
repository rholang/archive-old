"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _async = _interopRequireDefault(require("react-select/async"));

var _createSelect = _interopRequireDefault(require("./createSelect"));

var _default = (0, _createSelect.default)(_async.default);

exports.default = _default;