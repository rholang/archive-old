"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.GoToItemBase = void 0;

var _core = require("@emotion/core");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _arrowRightCircle = _interopRequireDefault(require("@atlaskit/icon/glyph/arrow-right-circle"));

var _spinner = _interopRequireDefault(require("@atlaskit/spinner"));

var _viewController = require("../../../view-controller");

var _ConnectedItem = _interopRequireDefault(require("../ConnectedItem"));

var _primitives = require("../../presentational/ContentNavigation/primitives");

// $FlowFixMe useContext
var After = function After(_ref) {
  var afterGoTo = _ref.afterGoTo,
      spinnerDelay = _ref.spinnerDelay,
      incomingView = _ref.incomingView,
      isActive = _ref.isActive,
      isHover = _ref.isHover,
      isFocused = _ref.isFocused;

  if (incomingView && incomingView.id === afterGoTo) {
    return (0, _core.jsx)(_spinner.default, {
      delay: spinnerDelay,
      invertColor: true,
      size: "small"
    });
  }

  if (isActive || isHover || isFocused) {
    return (0, _core.jsx)(_arrowRightCircle.default, {
      primaryColor: "currentColor",
      secondaryColor: "inherit"
    });
  }

  return null;
};

var GoToItem = function GoToItem(gotoItemProps) {
  var scrollProviderRef = (0, _react.useContext)(_primitives.ScrollProviderRef);
  var spinnerDelay = gotoItemProps.spinnerDelay || 200;

  var handleClick = function handleClick(e) {
    var goTo = gotoItemProps.goTo,
        navigationViewController = gotoItemProps.navigationViewController;
    e.preventDefault();

    if (typeof goTo !== 'string') {
      return;
    } // Hijack focus only if the event is
    // from a keyboard.


    if (e.clientX === 0 && e.clientY === 0 && scrollProviderRef.current) {
      scrollProviderRef.current.focus();
    }

    navigationViewController.setView(goTo);
  };

  var afterProp = gotoItemProps.after,
      goTo = gotoItemProps.goTo,
      navigationViewController = gotoItemProps.navigationViewController,
      rest = (0, _objectWithoutProperties2.default)(gotoItemProps, ["after", "goTo", "navigationViewController"]);
  var after = typeof afterProp === 'undefined' ? After : afterProp;
  var propsForAfterComp = {
    afterGoTo: goTo || null,
    spinnerDelay: spinnerDelay,
    incomingView: navigationViewController.state.incomingView
  };
  var props = (0, _objectSpread2.default)({}, rest, {
    after: after
  });
  return (0, _core.jsx)(_ConnectedItem.default, (0, _extends2.default)({
    onClick: handleClick
  }, props, propsForAfterComp));
};

exports.GoToItemBase = GoToItem;

var _default = (0, _viewController.withNavigationViewController)(GoToItem);

exports.default = _default;