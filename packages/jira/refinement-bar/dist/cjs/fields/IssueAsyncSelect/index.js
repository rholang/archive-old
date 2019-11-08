"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Controller = _interopRequireDefault(require("./Controller"));

var _View = _interopRequireDefault(require("./View"));

var _default = {
  controller: _Controller.default,
  name: 'IssueAsyncSelect',
  view: _View.default
};
exports.default = _default;