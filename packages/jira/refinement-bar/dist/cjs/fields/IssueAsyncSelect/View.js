"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _View = _interopRequireDefault(require("../AsyncSelect/View"));

var _View2 = require("../IssueSelect/View");

// do NOT assign directly; a new component must be created to avoid inheritence
var IssueAsyncSelectView = function IssueAsyncSelectView(props) {
  return _react.default.createElement(_View.default, props);
};

IssueAsyncSelectView.defaultProps = {
  formatOptionLabel: _View2.formatOptionLabel
};
var _default = IssueAsyncSelectView;
exports.default = _default;