import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React, { Component, Fragment } from 'react';
import { NavigationAnalyticsContext } from '@atlaskit/analytics-namespaced-context';
import { name as packageName, version as packageVersion } from '../../../version.json';
import ResizeTransition, { isTransitioning } from '../ResizeTransition';
import ResizeControl from './ResizeControl';
import { HorizontalNavigationContainer, LayoutContainer, NavigationContainer } from './primitives';
import { ContainerNavigationMask } from '../ContentNavigation/primitives';
import { ComposedGlobalNavigation, ComposedContainerNavigation } from './nav-components';
import { ALTERNATE_FLYOUT_DELAY, CONTENT_NAV_WIDTH_COLLAPSED, CONTENT_NAV_WIDTH_FLYOUT, FLYOUT_DELAY, GLOBAL_NAV_WIDTH, HORIZONTAL_GLOBAL_NAV_HEIGHT } from '../../../common/constants';
import RenderBlocker from '../../common/RenderBlocker';
import { LayoutEventListener } from './LayoutEvent';
import { pageContainerCSS } from './styles';

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
  _inherits(LayoutManager, _Component);

  function LayoutManager() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, LayoutManager);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LayoutManager)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      flyoutIsOpen: false,
      itemIsDragging: false
    });

    _defineProperty(_assertThisInitialized(_this), "productNavRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "pageRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "containerRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "flyoutMouseOverTimeout", void 0);

    _defineProperty(_assertThisInitialized(_this), "nodeRefs", {
      expandCollapseAffordance: React.createRef()
    });

    _defineProperty(_assertThisInitialized(_this), "getContainerRef", function (ref) {
      _this.containerRef = ref;
    });

    _defineProperty(_assertThisInitialized(_this), "getNavRef", function (ref) {
      _this.productNavRef = ref;
    });

    _defineProperty(_assertThisInitialized(_this), "getPageRef", function (ref) {
      _this.pageRef = ref;
    });

    _defineProperty(_assertThisInitialized(_this), "mouseOutFlyoutArea", function (_ref) {
      var currentTarget = _ref.currentTarget,
          relatedTarget = _ref.relatedTarget;
      if (currentTarget.contains(relatedTarget)) return;
      clearTimeout(_this.flyoutMouseOverTimeout);

      _this.setState({
        flyoutIsOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "mouseOverFlyoutArea", function (_ref2) {
      var currentTarget = _ref2.currentTarget,
          target = _ref2.target;
      if (!currentTarget.contains(target)) return;
      var EXPERIMENTAL_ALTERNATE_FLYOUT_BEHAVIOUR = _this.props.experimental_alternateFlyoutBehaviour;
      var delay = EXPERIMENTAL_ALTERNATE_FLYOUT_BEHAVIOUR ? ALTERNATE_FLYOUT_DELAY : FLYOUT_DELAY;
      clearTimeout(_this.flyoutMouseOverTimeout);
      _this.flyoutMouseOverTimeout = setTimeout(function () {
        _this.setState({
          flyoutIsOpen: true
        });
      }, delay);
    });

    _defineProperty(_assertThisInitialized(_this), "closeFlyout", function (e) {
      e.stopPropagation();
      clearTimeout(_this.flyoutMouseOverTimeout);

      if (_this.state.flyoutIsOpen) {
        _this.setState({
          flyoutIsOpen: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "mouseLeave", function () {
      clearTimeout(_this.flyoutMouseOverTimeout);
    });

    _defineProperty(_assertThisInitialized(_this), "onItemDragStart", function () {
      _this.setState({
        itemIsDragging: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onItemDragEnd", function () {
      _this.setState({
        itemIsDragging: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderNavigation", function () {
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
      var flyoutWidth = EXPERIMENTAL_FULL_WIDTH_FLYOUT ? productNavWidth : CONTENT_NAV_WIDTH_FLYOUT;
      var dataset = datasets ? datasets.navigation : {};
      var GlobalNavigation = globalNavigation;
      var navContainerTopOffset = EXPERIMENTAL_HORIZONTAL_GLOBAL_NAV ? HORIZONTAL_GLOBAL_NAV_HEIGHT + topOffset : topOffset;
      var onMouseOut = isCollapsed && EXPERIMENTAL_FLYOUT_ON_HOVER && flyoutIsOpen ? _this.mouseOutFlyoutArea : null;
      var onMouseOver = isCollapsed && EXPERIMENTAL_FLYOUT_ON_HOVER && !flyoutIsOpen ? _this.mouseOverFlyoutArea : null;
      return ___EmotionJSX(LayoutEventListener, {
        onItemDragStart: _this.onItemDragStart,
        onItemDragEnd: _this.onItemDragEnd
      }, ___EmotionJSX(NavigationAnalyticsContext, {
        data: {
          attributes: {
            isExpanded: !isCollapsed,
            flyoutOnHoverEnabled: EXPERIMENTAL_FLYOUT_ON_HOVER,
            alternateFlyoutBehaviourEnabled: EXPERIMENTAL_ALTERNATE_FLYOUT_BEHAVIOUR,
            fullWidthFlyoutEnabled: EXPERIMENTAL_FULL_WIDTH_FLYOUT
          },
          componentName: 'navigation',
          packageName: packageName,
          packageVersion: packageVersion
        }
      }, ___EmotionJSX(Fragment, null, EXPERIMENTAL_HORIZONTAL_GLOBAL_NAV && ___EmotionJSX(HorizontalNavigationContainer, {
        topOffset: topOffset
      }, ___EmotionJSX(GlobalNavigation, null)), ___EmotionJSX(NavigationContainer, _extends({}, dataset, {
        topOffset: navContainerTopOffset,
        innerRef: _this.getContainerRef,
        onMouseOver: EXPERIMENTAL_ALTERNATE_FLYOUT_BEHAVIOUR ? onMouseOver : null,
        onMouseOut: onMouseOut,
        onMouseLeave: _this.mouseLeave
      }), ___EmotionJSX(ContainerNavigationMask, {
        disableInteraction: itemIsDragging,
        onMouseOver: EXPERIMENTAL_ALTERNATE_FLYOUT_BEHAVIOUR ? null : onMouseOver
      }, ___EmotionJSX(RenderBlocker, {
        blockOnChange: true,
        itemIsDragging: itemIsDragging
      }, !EXPERIMENTAL_HORIZONTAL_GLOBAL_NAV && // Prevents GlobalNavigation from re-rendering on resize,
      // and flyout expand/collapse
      ___EmotionJSX(RenderBlocker, {
        blockOnChange: true,
        isResizing: isResizing,
        isCollapsed: isCollapsed,
        flyoutIsOpen: flyoutIsOpen
      }, ___EmotionJSX(ComposedGlobalNavigation, {
        containerNavigation: containerNavigation,
        datasets: datasets,
        globalNavigation: globalNavigation,
        topOffset: topOffset,
        shouldHideGlobalNavShadow: shouldHideGlobalNavShadow,
        experimental_alternateFlyoutBehaviour: EXPERIMENTAL_ALTERNATE_FLYOUT_BEHAVIOUR,
        closeFlyout: _this.closeFlyout,
        view: view
      })), ___EmotionJSX(ResizeTransition, {
        from: [showContextualNavigation ? CONTENT_NAV_WIDTH_COLLAPSED : 0],
        in: showContextualNavigation ? !isCollapsed || flyoutIsOpen : false,
        properties: ['width'],
        to: [flyoutIsOpen ? flyoutWidth : productNavWidth],
        userIsDragging: isResizing // only apply listeners to the NAV resize transition
        ,
        productNavWidth: productNavWidth
      }, function (_ref3) {
        var transitionStyle = _ref3.transitionStyle,
            transitionState = _ref3.transitionState;
        return ___EmotionJSX(ComposedContainerNavigation, {
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
      }))), showContextualNavigation && ___EmotionJSX(ResizeControl, {
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

    _defineProperty(_assertThisInitialized(_this), "renderPageContent", function () {
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
      var leftOffset = EXPERIMENTAL_HORIZONTAL_GLOBAL_NAV ? 0 : GLOBAL_NAV_WIDTH; // This offset should just be the global nav height, as the topOffset prop has already been applied
      // to layout manager content via a margin

      var topOffset = EXPERIMENTAL_HORIZONTAL_GLOBAL_NAV ? HORIZONTAL_GLOBAL_NAV_HEIGHT : 0;
      var collapsedSize = 0;
      var expandedSize = flyoutIsOpen ? CONTENT_NAV_WIDTH_FLYOUT : productNavWidth;
      var dataset = datasets ? datasets.content : {};
      return ___EmotionJSX(ResizeTransition, {
        from: [CONTENT_NAV_WIDTH_COLLAPSED],
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
        return ___EmotionJSX("div", _extends({
          css: pageContainerCSS({
            disableInteraction: isResizing || isTransitioning(transitionState),
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

  _createClass(LayoutManager, [{
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
      return ___EmotionJSX(LayoutContainer, {
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
}(Component);

_defineProperty(LayoutManager, "defaultProps", {
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

export { LayoutManager as default };