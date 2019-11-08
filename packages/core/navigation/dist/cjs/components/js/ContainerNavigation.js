"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _util = require("../../theme/util");

var _ContainerHeader = _interopRequireDefault(require("./ContainerHeader"));

var _ContainerNavigationChildren = _interopRequireDefault(require("./ContainerNavigationChildren"));

var _DefaultLinkComponent = _interopRequireDefault(require("./DefaultLinkComponent"));

var _GlobalPrimaryActions = _interopRequireDefault(require("./GlobalPrimaryActions"));

var _GlobalSecondaryActions = _interopRequireDefault(require("./GlobalSecondaryActions"));

var _Reveal = _interopRequireDefault(require("./Reveal"));

var _ContainerNavigationInner = _interopRequireDefault(require("../styled/ContainerNavigationInner"));

var _GlobalNavigationSecondaryContainer = _interopRequireDefault(require("../styled/GlobalNavigationSecondaryContainer"));

var _sharedVariables = require("../../shared-variables");

var _presets = require("../../theme/presets");

var ContainerNavigation =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(ContainerNavigation, _Component);

  function ContainerNavigation(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, ContainerNavigation);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ContainerNavigation).call(this, props, context));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "props", void 0);
    _this.state = {
      isInitiallyRendered: false
    };
    return _this;
  }

  (0, _createClass2.default)(ContainerNavigation, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps() {
      // After any update we are going to start animating.
      // Not doing this in componentDidMount to prevent an
      // unneeded second render on mount.
      if (!this.state.isInitiallyRendered) {
        this.setState({
          isInitiallyRendered: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          scrollRef = _this$props.scrollRef,
          showGlobalActions = _this$props.showGlobalActions,
          globalPrimaryActions = _this$props.globalPrimaryActions,
          globalSecondaryActions = _this$props.globalSecondaryActions,
          children = _this$props.children,
          globalCreateIcon = _this$props.globalCreateIcon,
          globalPrimaryIcon = _this$props.globalPrimaryIcon,
          globalPrimaryItemHref = _this$props.globalPrimaryItemHref,
          globalSearchIcon = _this$props.globalSearchIcon,
          hasScrollHintTop = _this$props.hasScrollHintTop,
          headerComponent = _this$props.headerComponent,
          linkComponent = _this$props.linkComponent,
          onGlobalCreateActivate = _this$props.onGlobalCreateActivate,
          onGlobalSearchActivate = _this$props.onGlobalSearchActivate,
          isCollapsed = _this$props.isCollapsed,
          theme = _this$props.theme; // Only animating the revealing of GlobalPrimaryActions and GlobalSecondaryActions
      // after the first render. Before that it is rendered without animation.

      var isInitiallyRendered = this.state.isInitiallyRendered;
      return _react.default.createElement(_util.WithRootTheme, {
        provided: theme,
        isCollapsed: isCollapsed
      }, _react.default.createElement(_ContainerNavigationInner.default, null, _react.default.createElement(_Reveal.default, {
        shouldAnimate: isInitiallyRendered,
        isOpen: showGlobalActions,
        openHeight: _sharedVariables.globalPrimaryActions.height(globalPrimaryActions ? _react.default.Children.count(globalPrimaryActions) : 2).outer
      }, _react.default.createElement(_GlobalPrimaryActions.default, {
        actions: globalPrimaryActions,
        createIcon: globalCreateIcon,
        linkComponent: linkComponent,
        onCreateActivate: onGlobalCreateActivate,
        onSearchActivate: onGlobalSearchActivate,
        primaryIcon: globalPrimaryIcon,
        primaryItemHref: globalPrimaryItemHref,
        searchIcon: globalSearchIcon
      })), _react.default.createElement(_ContainerHeader.default, null, headerComponent ? headerComponent({
        isCollapsed: isCollapsed
      }) : undefined), _react.default.createElement(_ContainerNavigationChildren.default, {
        hasScrollHintTop: hasScrollHintTop,
        scrollRef: scrollRef
      }, children), _react.default.createElement(_GlobalNavigationSecondaryContainer.default, null, _react.default.createElement(_Reveal.default, {
        shouldAnimate: isInitiallyRendered,
        isOpen: showGlobalActions,
        openHeight: _sharedVariables.globalSecondaryActions.height(_react.default.Children.count(globalSecondaryActions)).outer
      }, showGlobalActions && globalSecondaryActions.length ? _react.default.createElement(_GlobalSecondaryActions.default, {
        actions: globalSecondaryActions
      }) : null))));
    }
  }]);
  return ContainerNavigation;
}(_react.Component);

exports.default = ContainerNavigation;
(0, _defineProperty2.default)(ContainerNavigation, "defaultProps", {
  showGlobalActions: false,
  globalSecondaryActions: [],
  isCollapsed: false,
  linkComponent: _DefaultLinkComponent.default,
  theme: _presets.container
});