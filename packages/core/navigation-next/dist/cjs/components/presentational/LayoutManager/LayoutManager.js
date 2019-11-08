"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _analyticsNamespacedContext = require("@atlaskit/analytics-namespaced-context");

var _version = require("../../../version.json");

var _ResizeTransition = _interopRequireWildcard(require("../ResizeTransition"));

var _ResizeControl = _interopRequireDefault(require("./ResizeControl"));

var _primitives = require("./primitives");

var _primitives2 = require("../ContentNavigation/primitives");

var _navComponents = require("./nav-components");

var _constants = require("../../../common/constants");

var _RenderBlocker = _interopRequireDefault(require("../../common/RenderBlocker"));

var _LayoutEvent = require("./LayoutEvent");

var _styles = require("./styles");

function defaultTooltipContent(isCollapsed) {
  return isCollapsed ? {
    text: 'Expand',
    char: '['
  } : {
    text: 'Collapse',
    char: '['
  };
}
/* NOTE: experimental props use an underscore */


var LayoutManager =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(LayoutManager, _Component);

  function LayoutManager() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, LayoutManager);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(LayoutManager)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      flyoutIsOpen: false,
      itemIsDragging: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "productNavRef", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "pageRef", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "containerRef", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "flyoutMouseOverTimeout", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "nodeRefs", {
      expandCollapseAffordance: _react.default.createRef()
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getContainerRef", function (ref) {
      _this.containerRef = ref;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getNavRef", function (ref) {
      _this.productNavRef = ref;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getPageRef", function (ref) {
      _this.pageRef = ref;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "mouseOutFlyoutArea", function (_ref) {
      var currentTarget = _ref.currentTarget,
          relatedTarget = _ref.relatedTarget;
      if (currentTarget.contains(relatedTarget)) return;
      clearTimeout(_this.flyoutMouseOverTimeout);

      _this.setState({
        flyoutIsOpen: false
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "mouseOverFlyoutArea", function (_ref2) {
      var currentTarget = _ref2.currentTarget,
          target = _ref2.target;
      if (!currentTarget.contains(target)) return;
      var EXPERIMENTAL_ALTERNATE_FLYOUT_BEHAVIOUR = _this.props.experimental_alternateFlyoutBehaviour;
      var delay = EXPERIMENTAL_ALTERNATE_FLYOUT_BEHAVIOUR ? _constants.ALTERNATE_FLYOUT_DELAY : _constants.FLYOUT_DELAY;
      clearTimeout(_this.flyoutMouseOverTimeout);
      _this.flyoutMouseOverTimeout = setTimeout(function () {
        _this.setState({
          flyoutIsOpen: true
        });
      }, delay);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "closeFlyout", function (e) {
      e.stopPropagation();
      clearTimeout(_this.flyoutMouseOverTimeout);

      if (_this.state.flyoutIsOpen) {
        _this.setState({
          flyoutIsOpen: false
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "mouseLeave", function () {
      clearTimeout(_this.flyoutMouseOverTimeout);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onItemDragStart", function () {
      _this.setState({
        itemIsDragging: true
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onItemDragEnd", function () {
      _this.setState({
        itemIsDragging: false
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderNavigation", function () {
      var _this$props = _this.props,
          datasets = _this$props.datasets,
          navigationUIController = _this$props.navigationUIController,
          EXPERIMENTAL_ALTERNATE_FLYOUT_BEHAVIOUR = _this$props.experimental_alternateFlyoutBehaviour,
          EXPERIMENTAL_FLYOUT_ON_HOVER = _this$props.experimental_flyoutOnHover,
          EXPERIMENTAL_FULL_WIDTH_FLYOUT = _this$props.experimental_fullWidthFlyout,
          EXPERIMENTAL_HIDE_NAV_VISUALLY_ON_COLLAPSE = _this$props.experimental_hideNavVisuallyOnCollapse,
          EXPERIMENTAL_HORIZONTAL_GLOBAL_NAV = _this$props.experimental_horizontalGlobalNav,
          collapseToggleTooltipContent = _this$props.collapseToggleTooltipContent,
          topOffset = _this$props.topOffset,
          shouldHideGlobalNavShadow = _this$props.shouldHideGlobalNavShadow,
          showContextualNavigation = _this$props.showContextualNavigation,
          globalNavigation = _this$props.globalNavigation,
          containerNavigation = _this$props.containerNavigation,
          productNavigation = _this$props.productNavigation,
          view = _this$props.view;
      var _this$state = _this.state,
          flyoutIsOpen = _this$state.flyoutIsOpen,
          itemIsDragging = _this$state.itemIsDragging;
      var _navigationUIControll = navigationUIController.state,
          isCollapsed = _navigationUIControll.isCollapsed,
          isResizeDisabled = _navigationUIControll.isResizeDisabled,
          isResizing = _navigationUIControll.isResizing,
          productNavWidth = _navigationUIControll.productNavWidth;
      var flyoutWidth = EXPERIMENTAL_FULL_WIDTH_FLYOUT ? productNavWidth : _constants.CONTENT_NAV_WIDTH_FLYOUT;
      var dataset = datasets ? datasets.navigation : {};
      var GlobalNavigation = globalNavigation;
      var navContainerTopOffset = EXPERIMENTAL_HORIZONTAL_GLOBAL_NAV ? _constants.HORIZONTAL_GLOBAL_NAV_HEIGHT + topOffset : topOffset;
      var onMouseOut = isCollapsed && EXPERIMENTAL_FLYOUT_ON_HOVER && flyoutIsOpen ? _this.mouseOutFlyoutArea : null;
      var onMouseOver = isCollapsed && EXPERIMENTAL_FLYOUT_ON_HOVER && !flyoutIsOpen ? _this.mouseOverFlyoutArea : null;
      return (0, _core.jsx)(_LayoutEvent.LayoutEventListener, {
        onItemDragStart: _this.onItemDragStart,
        onItemDragEnd: _this.onItemDragEnd
      }, (0, _core.jsx)(_analyticsNamespacedContext.NavigationAnalyticsContext, {
        data: {
          attributes: {
            isExpanded: !isCollapsed,
            flyoutOnHoverEnabled: EXPERIMENTAL_FLYOUT_ON_HOVER,
            alternateFlyoutBehaviourEnabled: EXPERIMENTAL_ALTERNATE_FLYOUT_BEHAVIOUR,
            fullWidthFlyoutEnabled: EXPERIMENTAL_FULL_WIDTH_FLYOUT
          },
          componentName: 'navigation',
          packageName: _version.name,
          packageVersion: _version.version
        }
      }, (0, _core.jsx)(_react.Fragment, null, EXPERIMENTAL_HORIZONTAL_GLOBAL_NAV && (0, _core.jsx)(_primitives.HorizontalNavigationContainer, {
        topOffset: topOffset
      }, (0, _core.jsx)(GlobalNavigation, null)), (0, _core.jsx)(_primitives.NavigationContainer, (0, _extends2.default)({}, dataset, {
        topOffset: navContainerTopOffset,
        innerRef: _this.getContainerRef,
        onMouseOver: EXPERIMENTAL_ALTERNATE_FLYOUT_BEHAVIOUR ? onMouseOver : null,
        onMouseOut: onMouseOut,
        onMouseLeave: _this.mouseLeave
      }), (0, _core.jsx)(_primitives2.ContainerNavigationMask, {
        disableInteraction: itemIsDragging,
        onMouseOver: EXPERIMENTAL_ALTERNATE_FLYOUT_BEHAVIOUR ? null : onMouseOver
      }, (0, _core.jsx)(_RenderBlocker.default, {
        blockOnChange: true,
        itemIsDragging: itemIsDragging
      }, !EXPERIMENTAL_HORIZONTAL_GLOBAL_NAV && // Prevents GlobalNavigation from re-rendering on resize,
      // and flyout expand/collapse
      (0, _core.jsx)(_RenderBlocker.default, {
        blockOnChange: true,
        isResizing: isResizing,
        isCollapsed: isCollapsed,
        flyoutIsOpen: flyoutIsOpen
      }, (0, _core.jsx)(_navComponents.ComposedGlobalNavigation, {
        containerNavigation: containerNavigation,
        datasets: datasets,
        globalNavigation: globalNavigation,
        topOffset: topOffset,
        shouldHideGlobalNavShadow: shouldHideGlobalNavShadow,
        experimental_alternateFlyoutBehaviour: EXPERIMENTAL_ALTERNATE_FLYOUT_BEHAVIOUR,
        closeFlyout: _this.closeFlyout,
        view: view
      })), (0, _core.jsx)(_ResizeTransition.default, {
        from: [showContextualNavigation ? _constants.CONTENT_NAV_WIDTH_COLLAPSED : 0],
        in: showContextualNavigation ? !isCollapsed || flyoutIsOpen : false,
        properties: ['width'],
        to: [flyoutIsOpen ? flyoutWidth : productNavWidth],
        userIsDragging: isResizing // only apply listeners to the NAV resize transition
        ,
        productNavWidth: productNavWidth
      }, function (_ref3) {
        var transitionStyle = _ref3.transitionStyle,
            transitionState = _ref3.transitionState;
        return (0, _core.jsx)(_navComponents.ComposedContainerNavigation, {
          containerNavigation: containerNavigation,
          datasets: datasets,
          experimental_flyoutOnHover: EXPERIMENTAL_FLYOUT_ON_HOVER,
          experimental_hideNavVisuallyOnCollapse: !!EXPERIMENTAL_HIDE_NAV_VISUALLY_ON_COLLAPSE,
          expand: navigationUIController.expand,
          productNavigation: productNavigation,
          transitionState: transitionState,
          transitionStyle: transitionStyle,
          isCollapsed: isCollapsed,
          isResizing: isResizing,
          getNavRef: _this.getNavRef,
          view: view
        });
      }))), showContextualNavigation && (0, _core.jsx)(_ResizeControl.default, {
        collapseToggleTooltipContent: collapseToggleTooltipContent,
        expandCollapseAffordanceRef: _this.nodeRefs.expandCollapseAffordance // eslint-disable-next-line camelcase
        ,
        experimental_flyoutOnHover: EXPERIMENTAL_FLYOUT_ON_HOVER,
        isDisabled: isResizeDisabled,
        flyoutIsOpen: flyoutIsOpen,
        isGrabAreaDisabled: itemIsDragging,
        onMouseOverButtonBuffer: EXPERIMENTAL_ALTERNATE_FLYOUT_BEHAVIOUR ? _this.closeFlyout : null,
        mutationRefs: [{
          ref: _this.pageRef,
          property: 'padding-left'
        }, {
          ref: _this.productNavRef,
          property: 'width'
        }],
        navigation: navigationUIController
      })))));
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderPageContent", function () {
      var _this$props2 = _this.props,
          datasets = _this$props2.datasets,
          EXPERIMENTAL_HORIZONTAL_GLOBAL_NAV = _this$props2.experimental_horizontalGlobalNav,
          navigationUIController = _this$props2.navigationUIController,
          onExpandStart = _this$props2.onExpandStart,
          onExpandEnd = _this$props2.onExpandEnd,
          onCollapseStart = _this$props2.onCollapseStart,
          onCollapseEnd = _this$props2.onCollapseEnd,
          children = _this$props2.children,
          showContextualNavigation = _this$props2.showContextualNavigation;
      var flyoutIsOpen = _this.state.flyoutIsOpen;
      var _navigationUIControll2 = navigationUIController.state,
          isResizing = _navigationUIControll2.isResizing,
          isCollapsed = _navigationUIControll2.isCollapsed,
          productNavWidth = _navigationUIControll2.productNavWidth;
      var leftOffset = EXPERIMENTAL_HORIZONTAL_GLOBAL_NAV ? 0 : _constants.GLOBAL_NAV_WIDTH; // This offset should just be the global nav height, as the topOffset prop has already been applied
      // to layout manager content via a margin

      var topOffset = EXPERIMENTAL_HORIZONTAL_GLOBAL_NAV ? _constants.HORIZONTAL_GLOBAL_NAV_HEIGHT : 0;
      var collapsedSize = 0;
      var expandedSize = flyoutIsOpen ? _constants.CONTENT_NAV_WIDTH_FLYOUT : productNavWidth;
      var dataset = datasets ? datasets.content : {};
      return (0, _core.jsx)(_ResizeTransition.default, {
        from: [_constants.CONTENT_NAV_WIDTH_COLLAPSED],
        in: !isCollapsed,
        productNavWidth: productNavWidth,
        properties: ['paddingLeft'],
        to: [showContextualNavigation ? expandedSize : collapsedSize],
        userIsDragging: isResizing
        /* Attach expand/collapse callbacks to the page resize transition to ensure they are only
         * called when the nav is permanently expanded/collapsed, i.e. when page content position changes. */
        ,
        onExpandStart: onExpandStart,
        onExpandEnd: onExpandEnd,
        onCollapseStart: onCollapseStart,
        onCollapseEnd: onCollapseEnd
      }, function (_ref4) {
        var transitionStyle = _ref4.transitionStyle,
            transitionState = _ref4.transitionState;
        return (0, _core.jsx)("div", (0, _extends2.default)({
          css: (0, _styles.pageContainerCSS)({
            disableInteraction: isResizing || (0, _ResizeTransition.isTransitioning)(transitionState),
            leftOffset: leftOffset,
            topOffset: topOffset
          }),
          ref: _this.getPageRef,
          style: transitionStyle
        }, dataset), children);
      });
    });
    return _this;
  }

  (0, _createClass2.default)(LayoutManager, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.publishRefs();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.publishRefs();
    }
  }, {
    key: "publishRefs",
    value: function publishRefs() {
      var getRefs = this.props.getRefs;

      if (typeof getRefs === 'function') {
        getRefs(this.nodeRefs);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var topOffset = this.props.topOffset;
      return (0, _core.jsx)(_primitives.LayoutContainer, {
        topOffset: topOffset
      }, this.renderNavigation(), this.renderPageContent());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      // kill the flyout when the user commits to expanding navigation
      if (!props.navigationUIController.state.isCollapsed && state.flyoutIsOpen) {
        return {
          flyoutIsOpen: false
        };
      }

      return null;
    }
  }]);
  return LayoutManager;
}(_react.Component);

exports.default = LayoutManager;
(0, _defineProperty2.default)(LayoutManager, "defaultProps", {
  collapseToggleTooltipContent: defaultTooltipContent,
  datasets: {
    content: {
      'data-testid': 'Content'
    },
    contextualNavigation: {
      'data-testid': 'ContextualNavigation'
    },
    globalNavigation: {
      'data-testid': 'GlobalNavigation'
    },
    navigation: {
      'data-testid': 'Navigation'
    }
  },
  topOffset: 0,
  shouldHideGlobalNavShadow: false,
  // eslint-disable-next-line camelcase
  experimental_alternateFlyoutBehaviour: false,
  experimental_flyoutOnHover: false,
  experimental_fullWidthFlyout: false,
  experimental_hideNavVisuallyOnCollapse: false,
  experimental_horizontalGlobalNav: false,
  showContextualNavigation: true
});