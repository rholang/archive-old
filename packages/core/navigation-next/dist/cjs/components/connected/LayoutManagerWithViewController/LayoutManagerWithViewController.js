"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _renderer = _interopRequireDefault(require("../../../renderer"));

var _SkeletonContainerView = _interopRequireDefault(require("../../presentational/SkeletonContainerView"));

var _AsyncLayoutManagerWithViewController = _interopRequireDefault(require("../AsyncLayoutManagerWithViewController"));

/* NOTE: experimental props use an underscore */

/* eslint-disable camelcase */
var LayoutManagerWithViewController = function LayoutManagerWithViewController(_ref) {
  var children = _ref.children,
      firstSkeletonToRender = _ref.firstSkeletonToRender,
      customComponents = _ref.customComponents,
      experimental_alternateFlyoutBehaviour = _ref.experimental_alternateFlyoutBehaviour,
      experimental_flyoutOnHover = _ref.experimental_flyoutOnHover,
      experimental_fullWidthFlyout = _ref.experimental_fullWidthFlyout,
      experimental_hideNavVisuallyOnCollapse = _ref.experimental_hideNavVisuallyOnCollapse,
      experimental_horizontalGlobalNav = _ref.experimental_horizontalGlobalNav,
      globalNavigation = _ref.globalNavigation,
      onExpandStart = _ref.onExpandStart,
      onExpandEnd = _ref.onExpandEnd,
      onCollapseStart = _ref.onCollapseStart,
      onCollapseEnd = _ref.onCollapseEnd,
      getRefs = _ref.getRefs,
      topOffset = _ref.topOffset,
      shouldHideGlobalNavShadow = _ref.shouldHideGlobalNavShadow,
      showContextualNavigation = _ref.showContextualNavigation;
  return (0, _core.jsx)(_AsyncLayoutManagerWithViewController.default, {
    onExpandStart: onExpandStart,
    onExpandEnd: onExpandEnd,
    onCollapseStart: onCollapseStart,
    onCollapseEnd: onCollapseEnd,
    getRefs: getRefs,
    customComponents: customComponents,
    experimental_flyoutOnHover: !!experimental_flyoutOnHover,
    experimental_alternateFlyoutBehaviour: !!experimental_alternateFlyoutBehaviour,
    experimental_hideNavVisuallyOnCollapse: !!experimental_hideNavVisuallyOnCollapse,
    experimental_fullWidthFlyout: !!experimental_fullWidthFlyout,
    experimental_horizontalGlobalNav: !!experimental_horizontalGlobalNav,
    globalNavigation: globalNavigation,
    containerSkeleton: function containerSkeleton() {
      return firstSkeletonToRender ? (0, _core.jsx)(_SkeletonContainerView.default, {
        type: firstSkeletonToRender
      }) : null;
    },
    itemsRenderer: _renderer.default,
    firstSkeletonToRender: firstSkeletonToRender,
    topOffset: topOffset,
    shouldHideGlobalNavShadow: shouldHideGlobalNavShadow,
    showContextualNavigation: showContextualNavigation
  }, children);
};

var _default = LayoutManagerWithViewController;
exports.default = _default;