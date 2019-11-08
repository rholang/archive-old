"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _unstated = require("unstated");

var _ViewController = _interopRequireDefault(require("./ViewController"));

var to = [_ViewController.default];

var ViewControllerSubscriber = function ViewControllerSubscriber(props) {
  return (0, _core.jsx)(_unstated.Subscribe, (0, _extends2.default)({
    to: to
  }, props));
};

var _default = ViewControllerSubscriber;
exports.default = _default;