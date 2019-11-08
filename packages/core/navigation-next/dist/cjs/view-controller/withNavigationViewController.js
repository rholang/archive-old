"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _ViewControllerSubscriber = _interopRequireDefault(require("./ViewControllerSubscriber"));

var _default = function _default(WrappedComponent) {
  var WithNavigationViewController = function WithNavigationViewController(props) {
    return (0, _core.jsx)(_ViewControllerSubscriber.default, null, function (navigationViewController) {
      return (0, _core.jsx)(WrappedComponent, (0, _extends2.default)({
        navigationViewController: navigationViewController
      }, props));
    });
  };

  WithNavigationViewController.displayName = "WithNavigationViewController(".concat(WrappedComponent.displayName || WrappedComponent.name, ")");
  return WithNavigationViewController;
};

exports.default = _default;