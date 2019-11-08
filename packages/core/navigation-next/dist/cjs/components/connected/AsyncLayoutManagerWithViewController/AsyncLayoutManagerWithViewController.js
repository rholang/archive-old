"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _analyticsNamespacedContext = require("@atlaskit/analytics-namespaced-context");

var _uiController = require("../../../ui-controller");

var _viewController = require("../../../view-controller");

var _LayoutManager = _interopRequireDefault(require("../../presentational/LayoutManager"));

var _LayerInitialised = _interopRequireDefault(require("../../presentational/LayerInitialised"));

/* NOTE: experimental props use an underscore */

/* eslint-disable camelcase */
var AsyncLayoutManagerWithViewControllerBase =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(AsyncLayoutManagerWithViewControllerBase, _Component);

  function AsyncLayoutManagerWithViewControllerBase(props) {
    var _this;

    (0, _classCallCheck2.default)(this, AsyncLayoutManagerWithViewControllerBase);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(AsyncLayoutManagerWithViewControllerBase).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      hasInitialised: false,
      outgoingView: null
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onInitialised", function () {
      _this.setState({
        hasInitialised: true
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderSkeleton", function () {
      var ContainerSkeleton = _this.props.containerSkeleton;
      return (0, _core.jsx)(ContainerSkeleton, {
        type: _this.props.firstSkeletonToRender
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderContainerNavigation", function () {
      var _this$props = _this.props,
          firstSkeletonToRender = _this$props.firstSkeletonToRender,
          view = _this$props.view;
      var outgoingView = _this.state.outgoingView;

      if (view && view.type === 'container') {
        return _this.renderView(view);
      }

      if (outgoingView && outgoingView.type === 'container') {
        return _this.renderView(outgoingView);
      }

      if (!view && firstSkeletonToRender === 'container' && !_this.state.hasInitialised) {
        return _this.renderSkeleton();
      }

      return firstSkeletonToRender !== 'container' ? null : _this.renderSkeleton();
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderGlobalNavigation", function () {
      var _this$props2 = _this.props,
          GlobalNavigation = _this$props2.globalNavigation,
          view = _this$props2.view;
      var hasInitialised = _this.state.hasInitialised;
      /* We are embedding the LayerInitialised analytics component within global navigation so that
       * the event it fires can access the analytics context within LayerManager. The component
       * cannot be rendered directly within LayerManager since it needs access to view data which
       * only exists in LayoutManagerWithViewController. */

      return (0, _core.jsx)(_react.Fragment, null, (0, _core.jsx)(GlobalNavigation, null), (0, _core.jsx)(_LayerInitialised.default, {
        activeView: view,
        initialised: hasInitialised,
        onInitialised: _this.onInitialised
      }));
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderProductNavigation", function () {
      var view = _this.props.view;
      var outgoingView = _this.state.outgoingView;

      if (view && view.type === 'product') {
        return _this.renderView(view);
      } // If we're transitioning from a product view to a container view still
      // render the outgoing product view.


      if (view && view.type === 'container' && outgoingView && outgoingView.type === 'product') {
        return _this.renderView(outgoingView);
      }

      return _this.renderSkeleton();
    });
    _this.renderContainerNavigation.displayName = 'ContainerNavigationRenderer';
    _this.renderProductNavigation.displayName = 'ProductNavigationRenderer';
    return _this;
  }

  (0, _createClass2.default)(AsyncLayoutManagerWithViewControllerBase, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var view = this.props.view;
      var prevView = prevProps.view;

      if (!view || !prevView) {
        return;
      } // If we're moving from a product to a container view or vice versa we cache
      // the previous view so that we can still render it during the transition.


      if (view.type !== prevView.type) {
        // It's totally fine to setState in componentDidUpdate as long as it's
        // wrapped in a condition:
        // https://reactjs.org/docs/react-component.html#componentdidupdate
        // eslint-disable-next-line
        this.setState({
          outgoingView: prevView
        });
      }
    }
  }, {
    key: "renderView",
    value: function renderView(view) {
      var _this$props3 = this.props,
          customComponents = _this$props3.customComponents,
          ItemsRenderer = _this$props3.itemsRenderer;
      return (0, _core.jsx)(ItemsRenderer, {
        customComponents: customComponents,
        items: view.data
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          children = _this$props4.children,
          datasets = _this$props4.datasets,
          experimental_alternateFlyoutBehaviour = _this$props4.experimental_alternateFlyoutBehaviour,
          experimental_flyoutOnHover = _this$props4.experimental_flyoutOnHover,
          experimental_fullWidthFlyout = _this$props4.experimental_fullWidthFlyout,
          experimental_hideNavVisuallyOnCollapse = _this$props4.experimental_hideNavVisuallyOnCollapse,
          experimental_horizontalGlobalNav = _this$props4.experimental_horizontalGlobalNav,
          firstSkeletonToRender = _this$props4.firstSkeletonToRender,
          onExpandStart = _this$props4.onExpandStart,
          onExpandEnd = _this$props4.onExpandEnd,
          onCollapseStart = _this$props4.onCollapseStart,
          onCollapseEnd = _this$props4.onCollapseEnd,
          getRefs = _this$props4.getRefs,
          view = _this$props4.view,
          topOffset = _this$props4.topOffset,
          shouldHideGlobalNavShadow = _this$props4.shouldHideGlobalNavShadow,
          showContextualNavigation = _this$props4.showContextualNavigation;
      return (0, _core.jsx)(_analyticsNamespacedContext.NavigationAnalyticsContext, {
        data: {
          attributes: (0, _objectSpread2.default)({
            navigationLayer: view && view.type,
            view: view && view.id
          }, view && view.analyticsAttributes)
        }
      }, (0, _core.jsx)(_LayoutManager.default, {
        globalNavigation: this.renderGlobalNavigation,
        containerNavigation: view && view.type === 'container' || !view && firstSkeletonToRender === 'container' && !this.state.hasInitialised ? this.renderContainerNavigation : null,
        experimental_alternateFlyoutBehaviour: experimental_alternateFlyoutBehaviour,
        experimental_flyoutOnHover: experimental_flyoutOnHover,
        experimental_fullWidthFlyout: experimental_fullWidthFlyout,
        experimental_hideNavVisuallyOnCollapse: experimental_hideNavVisuallyOnCollapse,
        experimental_horizontalGlobalNav: experimental_horizontalGlobalNav,
        productNavigation: this.renderProductNavigation,
        onExpandStart: onExpandStart,
        onExpandEnd: onExpandEnd,
        onCollapseStart: onCollapseStart,
        onCollapseEnd: onCollapseEnd,
        getRefs: getRefs,
        topOffset: topOffset,
        shouldHideGlobalNavShadow: shouldHideGlobalNavShadow,
        showContextualNavigation: showContextualNavigation,
        datasets: datasets,
        view: view
      }, children));
    }
  }]);
  return AsyncLayoutManagerWithViewControllerBase;
}(_react.Component);

(0, _defineProperty2.default)(AsyncLayoutManagerWithViewControllerBase, "defaultProps", {
  experimental_alternateFlyoutBehaviour: false,
  experimental_flyoutOnHover: false,
  experimental_fullWidthFlyout: false,
  experimental_hideNavVisuallyOnCollapse: false,
  experimental_horizontalGlobalNav: false
});

var AsyncLayoutManagerWithView = function AsyncLayoutManagerWithView(props) {
  return (0, _core.jsx)(_viewController.ViewControllerSubscriber, null, function (_ref) {
    var activeView = _ref.state.activeView;
    return (0, _core.jsx)(AsyncLayoutManagerWithViewControllerBase, (0, _extends2.default)({
      view: activeView
    }, props));
  });
};

var _default = (0, _uiController.withNavigationUIController)(AsyncLayoutManagerWithView);

exports.default = _default;