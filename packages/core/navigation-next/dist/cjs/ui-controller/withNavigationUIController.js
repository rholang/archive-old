"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _UIControllerSubscriber = _interopRequireDefault(require("./UIControllerSubscriber"));

var _default = function _default(WrappedComponent) {
  var withNavigationUIController = function withNavigationUIController(props) {
    return (0, _core.jsx)(_UIControllerSubscriber.default, null, function (navigationUIController) {
      return (0, _core.jsx)(WrappedComponent, (0, _extends2.default)({
        navigationUIController: navigationUIController
      }, props));
    });
  };

  withNavigationUIController.displayName = "WithNavigationUIController(".concat(WrappedComponent.displayName || WrappedComponent.name, ")");
  return withNavigationUIController;
};

exports.default = _default;