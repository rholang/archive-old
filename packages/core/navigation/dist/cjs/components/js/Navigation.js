"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.NavigationWithoutAnalytics = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

require("@atlaskit/polyfills/object-assign");

var _react = _interopRequireWildcard(require("react"));

var _components = require("@atlaskit/theme/components");

var _analyticsNext = require("@atlaskit/analytics-next");

var _version = require("../../version.json");

var _analytics = require("../../utils/analytics");

var _GlobalNavigation = _interopRequireDefault(require("./GlobalNavigation"));

var _ContainerNavigation = _interopRequireDefault(require("./ContainerNavigation"));

var _NavigationFixedContainer = _interopRequireDefault(require("../styled/NavigationFixedContainer"));

var _NavigationGlobalNavigationWrapper = _interopRequireDefault(require("../styled/NavigationGlobalNavigationWrapper"));

var _NavigationContainerNavigationWrapper = _interopRequireDefault(require("../styled/NavigationContainerNavigationWrapper"));

var _Resizer = _interopRequireDefault(require("./Resizer"));

var _Spacer = _interopRequireDefault(require("./Spacer"));

var _sharedVariables = require("../../shared-variables");

var _util = require("../../theme/util");

var _withElectronTheme = _interopRequireDefault(require("../../theme/with-electron-theme"));

var warnIfCollapsedPropsAreInvalid = function warnIfCollapsedPropsAreInvalid(_ref) {
  var isCollapsible = _ref.isCollapsible,
      isOpen = _ref.isOpen;

  if (!isCollapsible && !isOpen) {
    // eslint-disable-next-line no-console
    console.warn("\n        Navigation is being told it cannot collapse and that it is not open.\n        When Navigation cannot collapse it must always be open.\n        Ignoring isOpen={true}\n      ");
  }
};

var defaultWidth = (0, _sharedVariables.globalOpenWidth)() + _sharedVariables.containerOpenWidth;

if (process.env.NODE_ENV !== 'production' && !process.env.CI) {
  // eslint-disable-next-line no-console
  console.warn('@atlaskit/navigation has been deprecated. Please use the @atlaskit/navigation-next package instead.');
}

var Navigation =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Navigation, _PureComponent);

  function Navigation(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, Navigation);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Navigation).call(this, props, context));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "spacerRef", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getSnappedWidth", function (width) {
      // |------------------------------|
      //      |           |             |
      //    closed    breakpoint       open
      //          * snap closed
      //                       * snap open
      //                                    * maintain expanded width
      var isElectronMac = _this.props.isElectronMac;
      var resizeClosedBreakpointResult = (0, _sharedVariables.resizeClosedBreakpoint)(isElectronMac); // Snap closed if width ever goes below the resizeClosedBreakpoint

      if (width < resizeClosedBreakpointResult) {
        return (0, _sharedVariables.globalOpenWidth)(isElectronMac);
      } // Snap open if in between the closed breakpoint and the standard width


      if (width > resizeClosedBreakpointResult && width < (0, _sharedVariables.standardOpenWidth)(isElectronMac)) {
        return (0, _sharedVariables.standardOpenWidth)(isElectronMac);
      } // At this point the width > standard width.
      // We allow you to have your own wider width.


      return width;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onResize", function (resizeDelta) {
      _this.setState({
        isResizing: true,
        resizeDelta: resizeDelta
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onPropsResize", function (resizeState, trigger) {
      var _this$props = _this.props,
          createAnalyticsEvent = _this$props.createAnalyticsEvent,
          isOpen = _this$props.isOpen;

      if (trigger && resizeState.isOpen !== isOpen) {
        (0, _analytics.navigationExpandedCollapsed)(createAnalyticsEvent, {
          isCollapsed: !resizeState.isOpen,
          trigger: trigger
        });
      }

      _this.props.onResize(resizeState);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onResizeEnd", function (resizeDelta) {
      var width = _this.getRenderedWidth();

      var snappedWidth = _this.getSnappedWidth(width);

      var resizeState = {
        isOpen: snappedWidth >= (0, _sharedVariables.standardOpenWidth)(_this.props.isElectronMac),
        width: snappedWidth
      };

      _this.setState({
        resizeDelta: 0,
        isResizing: false
      }, function callOnResizeAfterSetState() {
        var resizerClicked = resizeDelta === 0;
        this.onPropsResize(resizeState, resizerClicked ? undefined : 'resizerDrag');
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getRenderedWidth", function () {
      var _this$props2 = _this.props,
          isOpen = _this$props2.isOpen,
          width = _this$props2.width,
          isCollapsible = _this$props2.isCollapsible,
          isElectronMac = _this$props2.isElectronMac;
      var baselineWidth = isOpen ? width : (0, _sharedVariables.containerClosedWidth)(isElectronMac);
      var minWidth = isCollapsible ? (0, _sharedVariables.containerClosedWidth)(isElectronMac) : (0, _sharedVariables.standardOpenWidth)(isElectronMac);
      return Math.max(minWidth, baselineWidth + _this.state.resizeDelta);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "triggerResizeButtonHandler", function (resizeState, resizerClick) {
      if (resizeState) {
        var trigger = resizerClick ? 'resizerClick' : 'chevron';

        _this.onPropsResize(resizeState, trigger);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "registerSpacerRef", function (spacerRef) {
      _this.spacerRef = spacerRef;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onSpacerTransitionEnd", function (e) {
      if (!_this.spacerRef || e.target !== _this.spacerRef) {
        return;
      }

      _this.props.onToggleEnd();
    });
    var containerTheme = props.containerTheme,
        globalTheme = props.globalTheme; // $FlowFixMe  - theme is not found in props

    var _getTheme = (0, _components.getTheme)(props),
        mode = _getTheme.mode;

    _this.state = {
      containerTheme: (0, _util.defaultContainerTheme)(containerTheme, mode),
      globalTheme: (0, _util.defaultGlobalTheme)(globalTheme, mode),
      resizeDelta: 0,
      isResizing: false,
      isTogglingIsOpen: false
    };
    warnIfCollapsedPropsAreInvalid(props);
    return _this;
  }

  (0, _createClass2.default)(Navigation, [{
    key: "componentDidMount",
    // It is possible that Navigation.width will not be supplied by the product, which means the
    // default width will be used, which assumes a non-Electron environment. We update the width
    // for this specific case in componentDidMount.
    value: function componentDidMount() {
      if (this.props.isElectronMac && this.props.isOpen && this.props.width === defaultWidth) {
        this.onPropsResize({
          isOpen: true,
          width: (0, _sharedVariables.globalOpenWidth)(true) + _sharedVariables.containerOpenWidth
        });
      }
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var containerTheme = nextProps.containerTheme,
          globalTheme = nextProps.globalTheme; // TODO work out why nextProps.theme.__ATLASKIT_THEME__.mode always returns the mode
      // that was applied at time of first page load.
      // $FlowFixMe - theme is not found in props

      var _getTheme2 = (0, _components.getTheme)(nextProps),
          mode = _getTheme2.mode;

      var isTogglingIsOpen = this.props.isOpen !== nextProps.isOpen;

      if (isTogglingIsOpen) {
        this.props.onToggleStart();
      }

      this.setState({
        containerTheme: (0, _util.defaultContainerTheme)(containerTheme, mode),
        globalTheme: (0, _util.defaultGlobalTheme)(globalTheme, mode),
        isTogglingIsOpen: isTogglingIsOpen
      });
      warnIfCollapsedPropsAreInvalid(nextProps);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          children = _this$props3.children,
          containerHeaderComponent = _this$props3.containerHeaderComponent,
          containerScrollRef = _this$props3.containerScrollRef,
          drawers = _this$props3.drawers,
          globalCreateIcon = _this$props3.globalCreateIcon,
          globalPrimaryActions = _this$props3.globalPrimaryActions,
          globalPrimaryIcon = _this$props3.globalPrimaryIcon,
          globalPrimaryIconAppearance = _this$props3.globalPrimaryIconAppearance,
          globalPrimaryItemHref = _this$props3.globalPrimaryItemHref,
          globalSearchIcon = _this$props3.globalSearchIcon,
          globalSecondaryActions = _this$props3.globalSecondaryActions,
          hasScrollHintTop = _this$props3.hasScrollHintTop,
          isCollapsible = _this$props3.isCollapsible,
          isElectronMac = _this$props3.isElectronMac,
          isOpen = _this$props3.isOpen,
          isResizeable = _this$props3.isResizeable,
          linkComponent = _this$props3.linkComponent,
          onCreateDrawerOpen = _this$props3.onCreateDrawerOpen,
          onResizeStart = _this$props3.onResizeStart,
          onSearchDrawerOpen = _this$props3.onSearchDrawerOpen,
          topOffset = _this$props3.topOffset,
          resizerButtonLabel = _this$props3.resizerButtonLabel;
      var _this$state = this.state,
          containerTheme = _this$state.containerTheme,
          globalTheme = _this$state.globalTheme,
          isTogglingIsOpen = _this$state.isTogglingIsOpen,
          isResizing = _this$state.isResizing; // if collapsed then:
      // 1. isOpen is ignored
      // 2. You cannot resize to a size smaller than the default open size

      var renderedWidth = this.getRenderedWidth();
      var globalOpenWidthResult = (0, _sharedVariables.globalOpenWidth)(isElectronMac);
      var containerClosedWidthResult = (0, _sharedVariables.containerClosedWidth)(isElectronMac);
      var isGlobalNavPartiallyCollapsed = isResizing && renderedWidth < globalOpenWidthResult + containerClosedWidthResult; // Cover over the global navigation when it is partially collapsed

      var containerOffsetX = isGlobalNavPartiallyCollapsed ? renderedWidth - (globalOpenWidthResult + containerClosedWidthResult) : 0; // always show global navigation if it is not collapsible

      var showGlobalNavigation = !isCollapsible || isOpen || isResizing;
      var containerWidth = showGlobalNavigation ? Math.max(renderedWidth - globalOpenWidthResult, containerClosedWidthResult) : containerClosedWidthResult;
      var isContainerCollapsed = !showGlobalNavigation || containerWidth === containerClosedWidthResult;
      var shouldAnimateContainer = isTogglingIsOpen && !isResizing; // When the navigation is not collapsible, and the width is expanded.
      // Users should be able to click the collapse button to go back to the original width

      var canCollapse = isCollapsible || containerWidth > _sharedVariables.containerOpenWidth;
      var globalNavigation = showGlobalNavigation ? _react.default.createElement(_NavigationGlobalNavigationWrapper.default, null, _react.default.createElement(_GlobalNavigation.default, {
        theme: globalTheme,
        primaryActions: globalPrimaryActions,
        createIcon: globalCreateIcon,
        linkComponent: linkComponent,
        onCreateActivate: onCreateDrawerOpen,
        onSearchActivate: onSearchDrawerOpen,
        primaryIcon: globalPrimaryIcon,
        primaryIconAppearance: globalPrimaryIconAppearance,
        primaryItemHref: globalPrimaryItemHref,
        searchIcon: globalSearchIcon,
        secondaryActions: globalSecondaryActions
      })) : null;
      var resizer = isResizeable ? _react.default.createElement(_Resizer.default, {
        navigationWidth: renderedWidth,
        onResize: this.onResize,
        onResizeButton: this.triggerResizeButtonHandler,
        onResizeStart: onResizeStart,
        onResizeEnd: this.onResizeEnd,
        resizerButtonLabel: resizerButtonLabel,
        showResizeButton: canCollapse
      }) : null;
      return _react.default.createElement(_withElectronTheme.default, {
        isElectronMac: isElectronMac
      }, _react.default.createElement("div", null, _react.default.createElement(_Spacer.default, {
        innerRef: this.registerSpacerRef,
        onTransitionEnd: this.onSpacerTransitionEnd,
        shouldAnimate: shouldAnimateContainer,
        width: renderedWidth
      }, _react.default.createElement(_NavigationFixedContainer.default, {
        topOffset: topOffset
      }, globalNavigation, _react.default.createElement(_NavigationContainerNavigationWrapper.default, {
        horizontalOffset: containerOffsetX
      }, _react.default.createElement(_ContainerNavigation.default, {
        scrollRef: containerScrollRef,
        theme: containerTheme,
        showGlobalActions: !showGlobalNavigation,
        globalCreateIcon: globalCreateIcon,
        globalPrimaryActions: globalPrimaryActions,
        globalPrimaryIcon: globalPrimaryIcon,
        globalPrimaryItemHref: globalPrimaryItemHref,
        globalSearchIcon: globalSearchIcon,
        globalSecondaryActions: globalSecondaryActions,
        hasScrollHintTop: hasScrollHintTop,
        headerComponent: containerHeaderComponent,
        linkComponent: linkComponent,
        onGlobalCreateActivate: onCreateDrawerOpen,
        onGlobalSearchActivate: onSearchDrawerOpen,
        isCollapsed: isContainerCollapsed
      }, children)), resizer)), drawers));
    }
  }]);
  return Navigation;
}(_react.PureComponent);

exports.NavigationWithoutAnalytics = Navigation;
(0, _defineProperty2.default)(Navigation, "defaultProps", {
  drawers: [],
  globalPrimaryIconAppearance: 'round',
  globalSecondaryActions: [],
  isCollapsible: true,
  isOpen: true,
  isResizeable: true,
  isElectronMac: false,
  onCreateDrawerOpen: function onCreateDrawerOpen() {},
  onResize: function onResize() {},
  onResizeStart: function onResizeStart() {},
  onSearchDrawerOpen: function onSearchDrawerOpen() {},
  onToggleEnd: function onToggleEnd() {},
  onToggleStart: function onToggleStart() {},
  topOffset: 0,
  width: defaultWidth
});
var createAndFireEventOnAtlaskit = (0, _analyticsNext.createAndFireEvent)('atlaskit');

var _default = (0, _analyticsNext.withAnalyticsContext)({
  componentName: 'navigationSidebar',
  packageName: _version.name,
  packageVersion: _version.version
})((0, _analyticsNext.withAnalyticsEvents)({
  onResize: createAndFireEventOnAtlaskit({
    action: 'resized',
    actionSubject: 'navigationSidebar',
    attributes: {
      componentName: 'navigation',
      packageName: _version.name,
      packageVersion: _version.version
    }
  }),
  onResizeStart: createAndFireEventOnAtlaskit({
    action: 'resizeStarted',
    actionSubject: 'navigationSidebar',
    attributes: {
      componentName: 'navigation',
      packageName: _version.name,
      packageVersion: _version.version
    }
  })
})(Navigation));

exports.default = _default;