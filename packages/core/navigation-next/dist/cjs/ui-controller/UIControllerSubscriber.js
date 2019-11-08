"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _unstated = require("unstated");

var _UIController = _interopRequireDefault(require("./UIController"));

var to = [_UIController.default];

var UIControllerSubscriber = function UIControllerSubscriber(_ref) {
  var children = _ref.children;
  return (0, _core.jsx)(_unstated.Subscribe, {
    to: to
  }, children);
};

var _default = UIControllerSubscriber;
exports.default = _default;